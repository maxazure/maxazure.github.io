type Point = [number, number, number];

// A sculptural frond: curved rachis, tapered lobed pinnae and shallow folds.
export function silverFernMesh() {
  const vertices: number[] = [];
  const add = (a: Point, b: Point, c: Point, tone: number) => {
    const u = b.map((n, i) => n - a[i]);
    const v = c.map((n, i) => n - a[i]);
    const normal = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const length = Math.hypot(...normal) || 1;
    for (const p of [a, b, c]) vertices.push(...p, ...normal.map(n => n / length), tone);
  };
  const stem = (points: Point[], radius: number, tone: number) => {
    for (let i = 1; i < points.length; i++) {
      for (let j = 0; j < 6; j++) {
        const ring = (index: number, angle: number): Point => {
          const p = points[index];
          const r = radius * (1 - index / points.length * .7);
          return [p[0] + Math.cos(angle) * r, p[1], p[2] + Math.sin(angle) * r];
        };
        const a = j * Math.PI / 3, b = (j + 1) * Math.PI / 3;
        add(ring(i - 1, a), ring(i, a), ring(i, b), tone);
        add(ring(i - 1, a), ring(i, b), ring(i - 1, b), tone);
      }
    }
  };
  const rachis = (t: number): Point => [-.24 + .1 * t + .38 * t * t, -1.5 + 2.95 * t, .14 * Math.sin(t * Math.PI)];
  stem(Array.from({ length: 45 }, (_, i) => rachis(i / 44)), .014, .55);
  for (let row = 0; row < 19; row++) {
    const t = .13 + row / 19 * .85;
    const origin = rachis(t);
    const length = .96 * Math.pow(1 - t, .74);
    for (const side of [-1, 1]) {
      const branch = (s: number): Point => [origin[0] + side * length * s, origin[1] + length * (.55 * s + .25 * s * s), origin[2] - .055 * Math.sin(s * Math.PI) + side * .035];
      stem(Array.from({ length: 16 }, (_, i) => branch(i / 15)), .0055, .65);
      const count = Math.max(6, Math.round(length * 20));
      const blade = (u: number, across: number): Point => {
        const p = branch(u);
        const dx = side, dy = .55 + .5 * u, norm = Math.hypot(dx, dy);
        const lobe = .5 + .5 * Math.pow(Math.sin(u * Math.PI * count + (across < 0 ? .8 : 0)), 2);
        const width = length * .105 * Math.pow(Math.sin(u * Math.PI), .6) * lobe;
        return [p[0] - dy / norm * width * across, p[1] + dx / norm * width * across, p[2] + .01 * Math.sin(u * Math.PI) * (1 - Math.abs(across))];
      };
      for (let k = 0; k < 100; k++) {
        const a = k / 100, b = (k + 1) / 100;
        for (const half of [-1, 1]) {
          add(blade(a, 0), blade(b, 0), blade(b, half), .88);
          add(blade(a, 0), blade(b, half), blade(a, half), .88);
        }
      }
    }
  }
  return new Float32Array(vertices);
}
