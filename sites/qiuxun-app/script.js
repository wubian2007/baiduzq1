// 轮播图功能
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.dot');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startAutoPlay();
        this.updateCarousel();
    }

    setupEventListeners() {
        // 点击圆点切换
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

        // 触摸事件
        let startX = 0;
        let endX = 0;
        const carouselWrapper = document.querySelector('.carousel-wrapper');

        carouselWrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carouselWrapper.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });

        // 鼠标事件（用于桌面端）
        carouselWrapper.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            e.preventDefault();
        });

        carouselWrapper.addEventListener('mouseup', (e) => {
            endX = e.clientX;
            this.handleSwipe(startX, endX);
        });
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    updateCarousel() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            
            if (index === this.currentIndex) {
                slide.classList.add('active');
            } else if (index === (this.currentIndex - 1 + this.slides.length) % this.slides.length) {
                slide.classList.add('prev');
            } else if (index === (this.currentIndex + 1) % this.slides.length) {
                slide.classList.add('next');
            }
        });

        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 3000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// 弹窗管理
class ModalManager {
    constructor() {
        this.modalOverlay = document.getElementById('modalOverlay');
        this.qrModalOverlay = document.getElementById('qrModalOverlay');
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // 点击遮罩层关闭弹窗
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.closeModal();
            }
        });

        this.qrModalOverlay.addEventListener('click', (e) => {
            if (e.target === this.qrModalOverlay) {
                this.closeQrModal();
            }
        });

        // ESC键关闭弹窗
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
                this.closeQrModal();
            }
        });
    }

    showModal() {
        this.modalOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modalOverlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    showQrModal() {
        this.qrModalOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeQrModal() {
        this.qrModalOverlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// 下载功能
class DownloadManager {
    constructor() {
        this.modalManager = new ModalManager();
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // 头部下载按钮
        const headerDownloadBtn = document.querySelector('.download-btn-header');
        if (headerDownloadBtn) {
            headerDownloadBtn.addEventListener('click', () => {
                this.showDownloadDialog();
            });
        }
    }

    showDownloadDialog() {
        // 检测设备类型
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // 移动端显示二维码
            this.modalManager.showQrModal();
        } else {
            // 桌面端显示下载对话框
            this.modalManager.showModal();
        }
    }

    downloadApp() {
        // 模拟下载过程
        const downloadBtn = document.querySelector('.modal-download-btn');
        const originalText = downloadBtn.textContent;
        
        downloadBtn.textContent = '下载中...';
        downloadBtn.disabled = true;
        
        // 模拟下载延迟
        setTimeout(() => {
            downloadBtn.textContent = '下载完成';
            
            setTimeout(() => {
                downloadBtn.textContent = originalText;
                downloadBtn.disabled = false;
                this.modalManager.closeModal();
                
                // 显示下载成功提示
                this.showDownloadSuccess();
            }, 1000);
        }, 2000);
    }

    showDownloadSuccess() {
        // 创建成功提示
        const toast = document.createElement('div');
        toast.className = 'download-toast';
        toast.textContent = '下载成功！';
        toast.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #4CAF50;
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 14px;
            z-index: 3000;
            animation: toastFadeIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'toastFadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化轮播图
    const carousel = new Carousel();
    
    // 初始化下载管理器
    const downloadManager = new DownloadManager();
    
    // 添加页面加载动画
    const sections = document.querySelectorAll('.app-header, .app-icon-section, .screenshots-section, .download-section, .bottom-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // 添加滚动效果
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.app-icon-section');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
});

// 全局函数（用于HTML中的onclick事件）
function showDownloadDialog() {
    const downloadManager = new DownloadManager();
    downloadManager.showDownloadDialog();
}

function closeModal() {
    const modalManager = new ModalManager();
    modalManager.closeModal();
}

function closeQrModal() {
    const modalManager = new ModalManager();
    modalManager.closeQrModal();
}

function downloadApp() {
    const downloadManager = new DownloadManager();
    downloadManager.downloadApp();
}

// 添加CSS动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes toastFadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes toastFadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    .download-toast {
        box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
    }
`;
document.head.appendChild(style);
