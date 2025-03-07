document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.network-animation-container');
    
    // 创建模式信息面板
    const modeInfoPanel = document.createElement('div');
    modeInfoPanel.className = 'mode-info-panel';
    modeInfoPanel.style.cssText = `
        position: fixed;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 20px;
        border-radius: 10px;
        font-family: 'LaTeX', Arial, sans-serif;
        max-width: 300px;
        opacity: 0;
        transition: opacity 0.5s ease;
        z-index: 1000;
    `;
    document.body.appendChild(modeInfoPanel);

    // 定义每个模式的数学表达式和名称
    const modeInfo = {
        solarSystem: {
            name: "Solar System",
            formula: "r(θ) = r₀ + k·θ\nx = r·cos(θ)\ny = r·sin(θ)"
        },
        wave: {
            name: "Wave",
            formula: "y = A·sin(ωt + φ)\nz = A·cos(ωt + φ)"
        },
        fibonacci: {
            name: "Fibonacci Spiral",
            formula: "r = a·eᵇᶿ\nFₙ = Fₙ₋₁ + Fₙ₋₂"
        },
        neuralNetwork: {
            name: "Neural Network",
            formula: "y = σ(Σ wᵢxᵢ + b)\nz = f(x) = 1/(1+e⁻ˣ)"
        }
    };

    // 更新模式信息面板
    function updateModeInfo(mode) {
        const info = modeInfo[mode];
        modeInfoPanel.innerHTML = `
            <h3 style="margin: 0 0 10px 0; font-size: 16px;">${info.name}</h3>
            <pre style="margin: 0; font-family: 'LaTeX', monospace; font-size: 14px;">${info.formula}</pre>
        `;
        modeInfoPanel.style.opacity = '0';
        setTimeout(() => {
            modeInfoPanel.style.opacity = '1';
        }, 100);
    }

    // 修改generateRandomTargets函数
    function generateRandomTargets() {
        particleTargets.length = 0;
        const modes = [
            { func: generateSolarSystemTargets, name: 'solarSystem' },
            { func: generateWaveTargets, name: 'wave' },
            { func: generateFibonacciTargets, name: 'fibonacci' },
            { func: generateNeuralNetworkTargets, name: 'neuralNetwork' }
        ];
        const selectedMode = Math.floor(Math.random() * modes.length);
        const mode = modes[selectedMode];
        mode.func();
        updateModeInfo(mode.name);
    }

    // Three.js 场景初始化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
    });
    renderer.setClearColor(0x000000, 0);
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    container.style.left = '20%';
    container.style.width = '80%';
    
    camera.position.z = 50;
    
    // 创建星云粒子系统
    const particlesCount = 3000;
    const particles = new THREE.Group();
    
    // 创建球形几何体作为粒子
    const sphereGeometry = new THREE.SphereGeometry(0.2, 8, 8);
    
    // 添加半透明背景
    const bgGeometry = new THREE.PlaneGeometry(300, 300);
    const bgMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.0
    });
    const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
    bgMesh.position.z = -10;
    scene.add(bgMesh);
    
    // 生成斐波那契数列用于分布
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    const fibNumbers = [];
    for (let i = 0; i < 20; i++) {
        fibNumbers.push(fibonacci(i));
    }
    
    // 存储粒子的目标位置
    const particleTargets = [];
    
    // 生成太阳系模式的目标位置
    function generateSolarSystemTargets() {
        const centerParticles = Math.floor(particlesCount * 0.3); // 30%的粒子在中心
        
        for(let i = 0; i < particlesCount; i++) {
            if (i < centerParticles) {
                // 中心密集区域的粒子
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 10;
                particleTargets.push({
                    x: Math.cos(angle) * radius,
                    y: Math.sin(angle) * radius,
                    z: (Math.random() - 0.5) * 5
                });
            } else {
                // 外围旋转的粒子
                const orbitRadius = 20 + Math.random() * 40;
                const angle = (i / particlesCount) * Math.PI * 2;
                const heightVariation = Math.sin(angle * 3) * 5;
                particleTargets.push({
                    x: Math.cos(angle) * orbitRadius,
                    y: Math.sin(angle) * orbitRadius,
                    z: heightVariation
                });
            }
        }
    }

    // 生成波浪扩散模式的目标位置
    function generateWaveTargets() {
        for(let i = 0; i < particlesCount; i++) {
            const angle = (i / particlesCount) * Math.PI * 2;
            const radius = 20 + Math.random() * 30;
            const waveHeight = Math.sin(angle * 4) * 15;
            particleTargets.push({
                x: Math.cos(angle) * radius,
                y: waveHeight,
                z: Math.sin(angle) * radius
            });
        }
    }

    // 生成斐波那契螺旋模式的目标位置
    function generateFibonacciTargets() {
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        for(let i = 0; i < particlesCount; i++) {
            const angle = i * goldenRatio * Math.PI * 2;
            const radius = Math.sqrt(i) * 2;
            particleTargets.push({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                z: (i / particlesCount) * 30 - 15
            });
        }
    }

    // 生成神经网络模式的目标位置
    function generateNeuralNetworkTargets() {
        const layers = 5;
        const particlesPerLayer = Math.floor(particlesCount / layers);
        
        for(let i = 0; i < particlesCount; i++) {
            const layer = Math.floor(i / particlesPerLayer);
            const angleInLayer = (i % particlesPerLayer) / particlesPerLayer * Math.PI * 2;
            const radius = 15 + Math.random() * 10;
            
            particleTargets.push({
                x: Math.cos(angleInLayer) * radius,
                y: (layer - layers/2) * 10,
                z: Math.sin(angleInLayer) * radius
            });
        }
    }

    // 生成随机目标位置
    function generateRandomTargets() {
        particleTargets.length = 0;
        const modes = [
            generateSolarSystemTargets,
            generateWaveTargets,
            generateFibonacciTargets,
            generateNeuralNetworkTargets
        ];
        const modeNames = ['太阳系模式', '波浪模式', '斐波那契螺旋模式', '神经网络模式'];
        const selectedMode = Math.floor(Math.random() * modes.length);
        console.log(`[${new Date().toLocaleTimeString()}] 切换到新模式: ${modeNames[selectedMode]}`);
        modes[selectedMode]();
    }
    
    // 创建星云粒子
    for(let i = 0; i < particlesCount; i++) {
        const fibIndex = i % fibNumbers.length;
        const fibRatio = fibNumbers[fibIndex] / fibNumbers[fibNumbers.length - 1];
        
        // 创建渐变色材质
        const hue = Math.random() * 0.1 + 0.6; // 偏蓝紫色
        const saturation = 0.5 + Math.random() * 0.3;
        const lightness = 0.4 + Math.random() * 0.3;
        const color = new THREE.Color().setHSL(hue, saturation, lightness);
        
        const material = new THREE.MeshPhongMaterial({
            color: color,
            transparent: true,
            opacity: 0.6 + Math.random() * 0.4,
            shininess: 30
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, material);
        
        // 使用螺旋分布设置位置
        const angle = i * 0.1;
        const radius = (20 + Math.random() * 30) * fibRatio;
        sphere.position.x = Math.cos(angle) * radius;
        sphere.position.y = Math.sin(angle) * radius;
        sphere.position.z = (Math.random() - 0.5) * 20;
        
        // 设置初始大小
        const scale = 0.2 + fibRatio * 0.8;
        sphere.scale.set(scale, scale, scale);
        
        particles.add(sphere);
    }
    
    // 初始化目标位置
    generateRandomTargets();
    
    // 添加环境光和点光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x6666ff, 1.5);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);
    
    scene.add(particles);
    
    // 鼠标交互
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    let animationFrameId;
    let time = 0;
    let lastRandomizeTime = 0;
    
    // 动画循环
    function animate() {
        time += 0.01;
        
        // 每10秒随机变换一次位置
        if (time - lastRandomizeTime >= 10) {
            generateRandomTargets();
            lastRandomizeTime = time;
        }
        
        // 整体旋转
        particles.rotation.y += 0.0005;
        
        // 根据鼠标位置微调旋转
        particles.rotation.x += mouseY * 0.0002;
        particles.rotation.z += mouseX * 0.0002;
        
        // 更新每个粒子
        particles.children.forEach((particle, index) => {
            const fibIndex = index % fibNumbers.length;
            const fibRatio = fibNumbers[fibIndex] / fibNumbers[fibNumbers.length - 1];
            
            const target = particleTargets[index];
            
            // 确保target存在再更新位置
            if (target) {
                // 平滑过渡到目标位置
                particle.position.x += (target.x - particle.position.x) * 0.01;
                particle.position.y += (target.y - particle.position.y) * 0.01;
                particle.position.z += (target.z - particle.position.z) * 0.01;
            }
            
            // 粒子大小呼吸效果
            const scale = (0.2 + fibRatio * 0.8) * (1 + Math.sin(time * 2 + index) * 0.1);
            particle.scale.set(scale, scale, scale);
            
            // 颜色和透明度变化
            const hue = (0.6 + Math.sin(time + index * 0.1) * 0.1) % 1;
            const opacity = 0.6 + Math.sin(time * 2 + index) * 0.2;
            particle.material.color.setHSL(hue, 0.5, 0.5);
            particle.material.opacity = Math.max(0.2, Math.min(0.8, opacity));
        });
        
        // 创建特殊大型粒子（只创建一次）
        let specialParticle = null;
        if (!particles.children.find(p => p.isSpecialParticle)) {
            specialParticle = new THREE.Mesh(
                new THREE.SphereGeometry(0.5, 32, 32),
                new THREE.MeshPhongMaterial({
                    color: new THREE.Color(0x0000ff),
                    transparent: true,
                    opacity: 0.8,
                    shininess: 50
                })
            );
            specialParticle.isSpecialParticle = true;
            specialParticle.position.set(0, 0, 0);
            particles.add(specialParticle);
        } else {
            specialParticle = particles.children.find(p => p.isSpecialParticle);
        }
    
        // 特殊粒子的运动模式
        const specialParticleModes = [
        // 螺旋上升模式
        () => {
        const t = time * 2;
        return {
        x: Math.cos(t) * 15,
        y: Math.sin(t) * 15,
        z: Math.sin(t * 0.5) * 5
        };
        },
        // 随机游走模式
        () => {
        const t = time * 2;
        return {
        x: Math.sin(t * 0.7) * Math.cos(t * 0.5) * 20,
        y: Math.cos(t * 0.3) * Math.sin(t * 0.8) * 20,
        z: Math.sin(t * 0.6) * 7.5
        };
        },
        // 弹跳模式
        () => {
        const t = time * 2;
        return {
        x: Math.cos(t * 0.5) * 15,
        y: Math.abs(Math.sin(t)) * 20,
        z: Math.sin(t * 0.5) * 7.5
        };
        },
        // 追逐模式
        () => {
        const nearestParticle = particles.children
        .filter(p => p !== specialParticle)
        .reduce((nearest, current) => {
        const distCurrent = current.position.distanceTo(specialParticle.position);
        const distNearest = nearest.position.distanceTo(specialParticle.position);
        return distCurrent < distNearest ? current : nearest;
        });
        
        return {
        x: nearestParticle.position.x + Math.sin(time * 2) * 5,
        y: nearestParticle.position.y + Math.cos(time * 2) * 5,
        z: nearestParticle.position.z + Math.sin(time * 3) * 2.5
        };
        }
        ];
    
        let currentSpecialMode = 0;
        let lastSpecialModeChangeTime = 0;
        
        // 更新特殊粒子
        if (time - lastSpecialModeChangeTime >= 10) {
        currentSpecialMode = (currentSpecialMode + 1) % specialParticleModes.length;
        lastSpecialModeChangeTime = time;
        console.log(`[${new Date().toLocaleTimeString()}] 特殊粒子切换到新模式: ${currentSpecialMode + 1}`);
        }
    
        const specialTarget = specialParticleModes[currentSpecialMode]();
        // 特殊粒子的颜色变化
        specialParticle.material.color.setHSL(0.6, 0.8, 0.5);
        specialParticle.material.opacity = 0.8;
        
        // 更新特殊粒子位置，使用与普通粒子相同的速度系数0.005
        specialParticle.position.x += (specialTarget.x - specialParticle.position.x) * 0.001;
        specialParticle.position.y += (specialTarget.y - specialParticle.position.y) * 0.001;
        specialParticle.position.z += (specialTarget.z - specialParticle.position.z) * 0.001;
    
        // 特殊粒子的呼吸效果
        const specialScale = 1 * (1 + Math.sin(time * 3) * 0.05);
        specialParticle.scale.set(specialScale, specialScale, specialScale);
    
        // 保持特殊粒子为蓝色
        specialParticle.material.color.setHex(0x000000);
        specialParticle.material.opacity = 0.5;
        
        // 特殊粒子的颜色变化
        const specialHue = (0.3 + Math.sin(time * 0.5) * 0.1) % 1;
        specialParticle.material.color.setHSL(specialHue, 0.8, 0.5);
        specialParticle.material.opacity = 0.6 + Math.sin(time * 2) * 0.2;
        
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // 窗口大小调整处理
    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    
    // 启动动画
    animate();
    
    // 清理函数
    return () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        window.removeEventListener('resize', onWindowResize);
        renderer.dispose();
        scene.traverse(object => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) object.material.dispose();
        });
    };
});