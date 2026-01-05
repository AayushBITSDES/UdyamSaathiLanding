// MSME Sahayak - Main JavaScript File
// Handles all interactive functionality across the website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeHeroEffects();
    initializeProblemChart();
    initializeScrollAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Hero section effects
function initializeHeroEffects() {
    // Typewriter effect for homepage title
    const typedTitle = document.getElementById('typed-title');
    if (typedTitle && typeof Typed !== 'undefined') {
        const textToType = typedTitle.getAttribute('data-text') || 'Udyam Saathi';

        new Typed('#typed-title', {
            strings: [textToType],
            typeSpeed: 30,
            startDelay: 500,
            showCursor: false,
            onComplete: function() {
                // Animate other hero elements after title is typed
                anime({
                    targets: '.hero-fade-in',
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 650,
                    easing: 'easeOutQuart',
                    delay: anime.stagger(160)
                });
            }
        });
    }
}

// Problem gap visualization chart
function initializeProblemChart() {
    const chartContainer = document.getElementById('gap-chart');
    if (chartContainer && typeof echarts !== 'undefined') {
        const chart = echarts.init(chartContainer);
        
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                textStyle: {
                    fontSize: 14
                }
            },
            legend: {
                data: ['Total Schemes Available', 'Schemes Actually Accessed'],
                textStyle: {
                    fontSize: 14,
                    color: '#2D3748'
                },
                top: 10
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Central Govt', 'State Govt', 'PSU Banks', 'NBFCs', 'NGOs'],
                axisLabel: {
                    fontSize: 12,
                    color: '#6B7280'
                },
                axisLine: {
                    lineStyle: {
                        color: '#E5E7EB'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: 'Number of Schemes',
                nameTextStyle: {
                    color: '#6B7280',
                    fontSize: 12
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#6B7280'
                },
                axisLine: {
                    lineStyle: {
                        color: '#E5E7EB'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#F3F4F6'
                    }
                }
            },
            series: [
                {
                    name: 'Total Schemes Available',
                    type: 'bar',
                    data: [22, 150, 45, 30, 25],
                    itemStyle: {
                        color: '#7A9B76'
                    },
                    barWidth: '40%'
                },
                {
                    name: 'Schemes Actually Accessed',
                    type: 'bar',
                    data: [8, 35, 15, 8, 12],
                    itemStyle: {
                        color: '#D4A574'
                    },
                    barWidth: '40%'
                }
            ],
            animationDuration: 1500,
            animationEasing: 'cubicOut',
            animationDelay: function (idx) {
                return idx * 200;
            }
        };
        
        chart.setOption(option);
        
        // Make chart responsive
        window.addEventListener('resize', function() {
            chart.resize();
        });
        
        // Animate chart on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    chart.setOption(option, true);
                }
            });
        });
        
        observer.observe(chartContainer);
    }
}



// Scroll animations
function initializeScrollAnimations() {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.barrier-card, .team-card, .contact-info-card, .tech-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutQuart',
                    delay: Math.random() * 200
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
    
    // Feature cards stagger animation
    const featureCards = document.querySelectorAll('.hero-bg .bg-white');
    if (featureCards.length > 0) {
        const featureObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: featureCards,
                        opacity: [0, 1],
                        translateY: [40, 0],
                        duration: 800,
                        easing: 'easeOutQuart',
                        delay: anime.stagger(200)
                    });
                }
            });
        }, {
            threshold: 0.1
        });
        
        featureCards.forEach(card => {
            card.style.opacity = '0';
        });
        
        if (featureCards.length > 0) {
            featureObserver.observe(featureCards[0].parentElement);
        }
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states for better UX
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate page entrance
    anime({
        targets: 'nav',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 600,
        easing: 'easeOutQuart'
    });
    
    anime({
        targets: 'main, section',
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart',
        delay: anime.stagger(100)
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}