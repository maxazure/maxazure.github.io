// 当页面滚动时处理导航栏变化
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    
    // 导航栏样式变化
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // 返回顶部按钮显示/隐藏
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// 处理移动端菜单
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // 导航菜单项点击后关闭移动菜单
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // 技能进度条动画
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress');
    
    // 初始化进度条为0
    progressBars.forEach(bar => {
        bar.style.width = '0';
    });
    
    // 监听进入视图事件
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 当技能部分可见时触发进度条动画
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('style').split(':')[1].trim();
                    bar.style.width = width;
                });
                // 只触发一次
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(skillsSection);
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});