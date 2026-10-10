import { silverFernMesh } from './silver-fern';

export interface FernFrame {
  canvas?: OffscreenCanvas;
  width: number;
  height: number;
  pointerX: number;
  pointerY: number;
}

const scope = globalThis as unknown as {
  onmessage: (event: MessageEvent<FernFrame>) => void;
  postMessage: (value: { rendered: boolean; frame?: number }) => void;
};

function renderer(canvas: OffscreenCanvas) {
  const gl = canvas.getContext('webgl', { alpha: true, antialias: true, preserveDrawingBuffer: true, powerPreference: 'low-power' });
  if (!gl) return null;
  canvas.addEventListener('webglcontextlost', () => scope.postMessage({ rendered: false }));
  const shader = (type: number, source: string) => {
    const result = gl.createShader(type);
    if (!result) return null;
    gl.shaderSource(result, source); gl.compileShader(result);
    if (!gl.getShaderParameter(result, gl.COMPILE_STATUS)) { gl.deleteShader(result); return null; }
    return result;
  };
  const vertex = shader(gl.VERTEX_SHADER, `
    attribute vec3 position; attribute vec3 normal; attribute float tone;
    uniform vec3 rotation; uniform vec2 view; varying vec3 n; varying float shade;
    void main(){
      vec3 c=cos(rotation),s=sin(rotation);
      mat3 x=mat3(1.,0.,0.,0.,c.x,s.x,0.,-s.x,c.x);
      mat3 y=mat3(c.y,0.,-s.y,0.,1.,0.,s.y,0.,c.y);
      mat3 z=mat3(c.z,s.z,0.,-s.z,c.z,0.,0.,0.,1.);
      mat3 r=z*y*x; vec3 p=r*position;
      n=r*normal; shade=tone;
      gl_Position=vec4(p.x/view.x,p.y/view.y,-p.z/5.,1.);
    }`);
  const fragment = shader(gl.FRAGMENT_SHADER, `
    precision mediump float; varying vec3 n; varying float shade;
    void main(){
      vec3 norm=normalize(n); if(!gl_FrontFacing) norm=-norm;
      vec3 light=normalize(vec3(-.6,.8,1.6));
      float diffuse=.3+.7*max(dot(norm,light),0.);
      float highlight=pow(max(dot(norm,normalize(light+vec3(0.,0.,1.))),0.),32.);
      vec3 silver=vec3(.62,.68,.64)*diffuse*shade+vec3(.15,.17,.16)*highlight;
      gl_FragColor=vec4(silver,1.);
    }`);
  if (!vertex || !fragment) return null;
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program); gl.enable(gl.DEPTH_TEST);
  const mesh = silverFernMesh();
  const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, mesh, gl.STATIC_DRAW);
  for (const [name, size, offset] of [['position', 3, 0], ['normal', 3, 12], ['tone', 1, 24]] as const) {
    const location = gl.getAttribLocation(program, name);
    gl.enableVertexAttribArray(location); gl.vertexAttribPointer(location, size, gl.FLOAT, false, 28, offset);
  }
  const rotation = gl.getUniformLocation(program, 'rotation');
  const view = gl.getUniformLocation(program, 'view');

  gl.deleteShader(vertex); gl.deleteShader(fragment);
  const count = mesh.length / 7;
  let frame = 0;
  return (update: FernFrame) => {
    if (gl.isContextLost()) { scope.postMessage({ rendered: false }); return; }
    if (canvas.width !== update.width || canvas.height !== update.height) {
      canvas.width = update.width; canvas.height = update.height;
    }
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.uniform2f(view, 1.68 * update.width / update.height, 1.68);
    gl.uniform3f(rotation, .3 + update.pointerY * .1, -.3 + update.pointerX * .16, -.3);
    gl.drawArrays(gl.TRIANGLES, 0, count);
    scope.postMessage({ rendered: true, frame: ++frame });
  };
}

let draw: ReturnType<typeof renderer> = null;
scope.onmessage = ({ data }) => {
  if (data.canvas) draw = renderer(data.canvas);
  if (draw) draw(data);
  else scope.postMessage({ rendered: false });
};
