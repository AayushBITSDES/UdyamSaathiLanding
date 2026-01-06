// MSME Sahayak - Main JavaScript File
// Handles all interactive functionality across the website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeHeroEffects();
    initializeProblemChart();
    initializeCreditGapChart();
    initializeAwarenessWaffle();
    initializeDigitalImpact();
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

// Credit Gap Visualization (₹30 Lakh Crore Gap)
function initializeCreditGapChart() {
    const chartContainer = document.getElementById('credit-gap-chart');
    if (chartContainer && typeof echarts !== 'undefined') {
        const chart = echarts.init(chartContainer);

        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params) {
                    if (params[0].name === 'Credit Gap') {
                        return '<strong style="color: #E63946;">The Gap</strong><br/>' +
                               'This represents 50 million businesses<br/>' +
                               'like yours waiting for capital.<br/>' +
                               '<strong>₹30 Lakh Crore</strong>';
                    }
                    return params[0].marker + ' ' + params[0].name + '<br/>' +
                           '<strong>₹' + params[0].value + ' Lakh Crore</strong>';
                },
                textStyle: {
                    fontSize: 14
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                name: 'Amount (₹ Lakh Crore)',
                nameLocation: 'middle',
                nameGap: 30,
                nameTextStyle: {
                    fontSize: 13,
                    color: '#6B7280',
                    fontWeight: 500
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#6B7280',
                    formatter: '₹{value}'
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
                },
                max: 64
            },
            yAxis: {
                type: 'category',
                data: ['Current Access', 'Credit Gap', 'Total Need'],
                axisLabel: {
                    fontSize: 13,
                    color: '#2D3748',
                    fontWeight: 500
                },
                axisLine: {
                    lineStyle: {
                        color: '#E5E7EB'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            series: [
                {
                    name: 'MSME Credit',
                    type: 'bar',
                    data: [
                        {
                            value: 34,
                            itemStyle: {
                                color: '#7A9B76' // Secondary green - Current Access
                            }
                        },
                        {
                            value: 30,
                            itemStyle: {
                                color: '#E63946', // Red - The Gap (with pulse animation)
                                shadowBlur: 10,
                                shadowColor: 'rgba(230, 57, 70, 0.5)'
                            }
                        },
                        {
                            value: 64,
                            itemStyle: {
                                color: '#0F4C5C' // Primary teal - Total Need
                            }
                        }
                    ],
                    barWidth: '50%',
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '₹{c} L Cr',
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#2D3748'
                    }
                }
            ],
            animationDuration: 1500,
            animationEasing: 'cubicOut',
            animationDelay: function (idx) {
                return idx * 300;
            }
        };

        chart.setOption(option);

        // Make chart responsive
        window.addEventListener('resize', function() {
            chart.resize();
        });

        // Animate chart on scroll into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    chart.setOption(option, true);

                    // Add pulsing animation to the gap bar after initial render
                    setTimeout(() => {
                        pulseGapBar(chart);
                    }, 1500);
                }
            });
        }, {
            threshold: 0.3
        });

        observer.observe(chartContainer);
    }
}

// Pulsing animation for the credit gap bar
function pulseGapBar(chart) {
    let isPulsing = true;

    setInterval(() => {
        if (isPulsing) {
            chart.setOption({
                series: [{
                    data: [
                        {
                            value: 34,
                            itemStyle: { color: '#7A9B76' }
                        },
                        {
                            value: 30,
                            itemStyle: {
                                color: '#E63946',
                                shadowBlur: 20,
                                shadowColor: 'rgba(230, 57, 70, 0.8)'
                            }
                        },
                        {
                            value: 64,
                            itemStyle: { color: '#0F4C5C' }
                        }
                    ]
                }]
            });
        } else {
            chart.setOption({
                series: [{
                    data: [
                        {
                            value: 34,
                            itemStyle: { color: '#7A9B76' }
                        },
                        {
                            value: 30,
                            itemStyle: {
                                color: '#E63946',
                                shadowBlur: 10,
                                shadowColor: 'rgba(230, 57, 70, 0.5)'
                            }
                        },
                        {
                            value: 64,
                            itemStyle: { color: '#0F4C5C' }
                        }
                    ]
                }]
            });
        }
        isPulsing = !isPulsing;
    }, 1500);
}

// Awareness Void Waffle Chart (90% unaware vs 10% aware)
function initializeAwarenessWaffle() {
    const waffleContainer = document.getElementById('awareness-waffle');
    if (waffleContainer) {
        // Create 10x10 grid (100 squares)
        const gridSize = 10;
        const totalSquares = 100;
        const awareCount = 10; // 10% aware
        const unawareCount = 90; // 90% unaware

        // Create grid container
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-10 gap-2 max-w-lg mx-auto';
        grid.style.cssText = 'grid-template-columns: repeat(10, minmax(0, 1fr));';

        // Factory icon SVG template
        const factoryIcon = (fillColor, opacity = 1) => `
            <svg viewBox="0 0 24 24" fill="${fillColor}" opacity="${opacity}" class="w-6 h-6 md:w-8 md:h-8">
                <path d="M10 2L4 6v14h16V6l-6-4H10zm-4 6h2v2H6V8zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h4v2h-4V8zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2zm6-8h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
            </svg>
        `;

        // Generate all 100 squares
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.className = 'waffle-square flex items-center justify-center p-1 rounded transition-all duration-300';
            square.style.opacity = '0';

            // First 10 squares are "aware" (green), rest are "unaware" (grey)
            if (i < awareCount) {
                square.style.backgroundColor = '#7A9B76'; // Secondary green
                square.innerHTML = factoryIcon('#FFFFFF', 0.9);
                square.setAttribute('aria-label', 'Aware MSME');
            } else {
                square.style.backgroundColor = '#E5E7EB'; // Light grey
                square.innerHTML = factoryIcon('#9CA3AF', 0.6);
                square.setAttribute('aria-label', 'Unaware MSME');
            }

            grid.appendChild(square);
        }

        waffleContainer.appendChild(grid);

        // Animate squares on scroll into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const squares = grid.querySelectorAll('.waffle-square');

                    // Staggered fade-in animation
                    anime({
                        targets: squares,
                        opacity: [0, 1],
                        scale: [0.5, 1],
                        duration: 800,
                        easing: 'easeOutElastic(1, .8)',
                        delay: anime.stagger(15, {start: 300})
                    });
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(waffleContainer);
    }
}

// Digital Impact Visualization (Progress Bars)
function initializeDigitalImpact() {
    const impactItems = document.querySelectorAll('.digital-impact-item');

    if (impactItems.length > 0) {
        // Animate progress bars on scroll into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = Array.from(impactItems);

                    items.forEach((item, index) => {
                        const percentage = parseInt(item.getAttribute('data-percentage'));
                        const bar = item.querySelector('.impact-bar');
                        const numberDisplay = item.querySelector('.impact-number');

                        // Delay each bar slightly for staggered effect
                        setTimeout(() => {
                            // Animate the progress bar width
                            bar.style.width = percentage + '%';

                            // Animate the number counting up
                            animateNumber(numberDisplay, 0, percentage, 1200);
                        }, index * 200);
                    });
                }
            });
        }, {
            threshold: 0.3
        });

        // Observe the first impact item (will trigger animation for all)
        if (impactItems[0]) {
            observer.observe(impactItems[0].parentElement);
        }
    }
}

// Helper function to animate numbers counting up
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(start + (end - start) * easeProgress);
        element.textContent = current + '%';

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end + '%';
        }
    }

    requestAnimationFrame(update);
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