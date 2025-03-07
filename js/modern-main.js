// 等待页面完全加载
document.addEventListener('DOMContentLoaded', function() {
  "use strict";
  
  // DOM元素
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const backToTop = document.querySelector('.back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const skillBars = document.querySelectorAll('.progress-bar');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // 初始化动画
  initializeAnimations();
  
  // 添加事件监听器
  setupEventListeners();
  
  // 处理技能进度条动画
  animateSkillBars();
  
  /**
   * 初始化动画
   */
  function initializeAnimations() {
    // 添加初始动画类
    document.querySelector('.hero-content').classList.add('fade-in');
    
    // 初始显示第一个Tab
    if (tabBtns.length > 0 && tabContents.length > 0) {
      tabBtns[0].classList.add('active');
      tabContents[0].classList.add('active');
    }
    
    // 初始激活第一个过滤按钮
    if (filterBtns.length > 0) {
      filterBtns[0].classList.add('active');
    }
  }
  
  /**
   * 设置事件监听器
   */
  function setupEventListeners() {
    // 滚动事件
    window.addEventListener('scroll', function() {
      toggleHeaderOnScroll();
      toggleBackToTopBtn();
      highlightActiveNavLink();
    });
    
    // 移动菜单按钮点击事件
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        toggleMobileMenu();
      });
    }
    
    // 导航链接点击事件
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        if (mobileMenuBtn && window.getComputedStyle(mobileMenuBtn).display !== 'none') {
          closeMobileMenu();
        }
      });
    });
    
    // 返回顶部按钮点击事件
    if (backToTop) {
      backToTop.addEventListener('click', function() {
        scrollToTop();
      });
    }
    
    // 选项卡点击事件
    tabBtns.forEach((btn, index) => {
      btn.addEventListener('click', function() {
        switchTab(index);
      });
    });
    
    // 过滤按钮点击事件
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterPortfolioItems(this.getAttribute('data-filter'));
      });
    });
  }
  
  /**
   * 滚动时切换头部样式
   */
  function toggleHeaderOnScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  /**
   * 切换移动端菜单
   */
  function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }
  
  /**
   * 关闭移动端菜单
   */
  function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
  
  /**
   * 切换返回顶部按钮显示状态
   */
  function toggleBackToTopBtn() {
    if (window.scrollY > 500) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  }
  
  /**
   * 高亮显示当前活动的导航链接
   */
  function highlightActiveNavLink() {
    let scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  /**
   * 滚动到顶部
   */
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  /**
   * 切换选项卡
   */
  function switchTab(index) {
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    tabBtns[index].classList.add('active');
    tabContents[index].classList.add('active');
  }
  
  /**
   * 过滤作品集项目
   */
  function filterPortfolioItems(filter) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      }
    });
    
    portfolioItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      
      if (filter === 'all' || itemCategory === filter) {
        item.style.display = 'block';
        
        // 添加渐入动画
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        
        // 等待动画完成后隐藏
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  }
  
  /**
   * 动画显示技能进度条
   */
  function animateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          
          progressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage;
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  }
});

// 当页面加载时延迟1秒显示淡入动画
window.addEventListener('load', function() {
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 1000);
});