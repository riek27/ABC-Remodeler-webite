// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSliders();
    initPortfolioFilter();
    initProjectModal();
    initStatsCounter();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            });
        });
    }
}

// Initialize Sliders
function initSliders() {
    // Portfolio Slider
    const portfolioSliders = document.querySelectorAll('.portfolio-slider, .testimonial-slider');
    
    portfolioSliders.forEach(slider => {
        const track = slider.querySelector('.slider-track');
        const slides = slider.querySelectorAll('.slide, .testimonial-slide');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        
        if (!track || slides.length === 0) return;
        
        let currentIndex = 0;
        const slideCount = slides.length;
        
        // Set initial position
        updateSliderPosition();
        
        // Previous button click
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
                updateSliderPosition();
            });
        }
        
        // Next button click
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
                updateSliderPosition();
            });
        }
        
        // Auto slide (for portfolio slider only)
        if (slider.classList.contains('portfolio-slider')) {
            setInterval(function() {
                currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
                updateSliderPosition();
            }, 5000);
        }
        
        function updateSliderPosition() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });
}

// Portfolio Filter
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0 || galleryItems.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Project Modal
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const viewProjectButtons = document.querySelectorAll('.view-project');
    const closeModal = document.querySelector('.close-modal');
    
    if (!modal) return;
    
    // Project data (in a real application, this would come from a database)
    const projects = {
        1: {
            title: 'Contemporary Kitchen',
            description: 'Complete kitchen transformation with custom cabinetry and premium finishes. This project involved reconfiguring the layout to improve workflow and adding modern appliances.',
            image: 'images/portfolio-1.jpg',
            details: [
                'Custom shaker-style cabinetry',
                'Quartz countertops with waterfall edge',
                'Professional-grade appliances',
                'Under-cabinet lighting system',
                'Hardwood flooring throughout'
            ]
        },
        2: {
            title: 'Luxury Master Bathroom',
            description: 'Spa-inspired bathroom with custom tile work and freestanding tub. We created a serene retreat with attention to every detail.',
            image: 'images/portfolio-2.jpg',
            details: [
                'Custom marble tilework',
                'Freestanding soaking tub',
                'Walk-in shower with multiple showerheads',
                'Heated flooring',
                'Custom vanity with dual sinks'
            ]
        },
        3: {
            title: 'Open Concept Living',
            description: 'Complete living space renovation with custom built-ins and fireplace. We opened up the space to create a more functional and inviting area.',
            image: 'images/portfolio-3.jpg',
            details: [
                'Removal of non-load bearing walls',
                'Custom built-in entertainment center',
                'Gas fireplace with stone surround',
                'Recessed lighting throughout',
                'Hardwood flooring refinishing'
            ]
        },
        4: {
            title: 'Outdoor Oasis',
            description: 'Custom patio and outdoor kitchen with integrated landscaping. We transformed an underutilized backyard into an entertainment space.',
            image: 'images/portfolio-4.jpg',
            details: [
                'Custom stone patio',
                'Outdoor kitchen with grill and refrigerator',
                'Pergola with lighting',
                'Built-in seating areas',
                'Landscaping with irrigation system'
            ]
        },
        5: {
            title: 'Executive Home Office',
            description: 'Custom built-in office with premium finishes and natural lighting. We created a productive and inspiring workspace.',
            image: 'images/portfolio-5.jpg',
            details: [
                'Custom built-in desk and shelving',
                'Soundproofing for privacy',
                'Recessed and task lighting',
                'Hardwood flooring',
                'Built-in charging stations'
            ]
        },
        6: {
            title: 'Farmhouse Kitchen',
            description: 'Rustic yet modern kitchen with custom island and shaker-style cabinetry. We blended traditional elements with contemporary convenience.',
            image: 'images/portfolio-6.jpg',
            details: [
                'Custom shaker-style cabinetry',
                'Butcher block countertops',
                'Farmhouse sink',
                'Open shelving display',
                'Vintage-style hardware'
            ]
        },
        7: {
            title: 'Guest Bathroom',
            description: 'Complete guest bathroom remodel with modern fixtures and storage solutions. We maximized space in this compact bathroom.',
            image: 'images/portfolio-7.jpg',
            details: [
                'Space-saving vanity',
                'Walk-in shower with glass door',
                'Subway tile with dark grout',
                'Heated towel rack',
                'Recessed medicine cabinet'
            ]
        },
        8: {
            title: 'Sunroom Addition',
            description: 'Bright and airy sunroom addition with panoramic windows and custom flooring. We created a seamless transition from indoor to outdoor living.',
            image: 'images/portfolio-8.jpg',
            details: [
                'Floor-to-ceiling windows',
                'Insulated glass for energy efficiency',
                'Radiant floor heating',
                'Custom tile flooring',
                'Integrated blinds system'
            ]
        }
    };
    
    // Open modal when view project button is clicked
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-id');
            const project = projects[projectId];
            
            if (project) {
                document.getElementById('modalImg').src = project.image;
                document.getElementById('modalImg').alt = project.title;
                document.getElementById('modalTitle').textContent = project.title;
                document.getElementById('modalDescription').textContent = project.description;
                
                // Clear and populate details list
                const detailsList = document.getElementById('modalDetails');
                detailsList.innerHTML = '';
                
                project.details.forEach(detail => {
                    const li = document.createElement('li');
                    li.textContent = detail;
                    detailsList.appendChild(li);
                });
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal when X is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Stats Counter Animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length === 0) return;
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Animate counter
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + (element.getAttribute('data-count') === '98' ? '%' : '+');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.getAttribute('data-count') === '98' ? '%' : '+');
            }
        }, 16);
    }
    
    // Check on scroll
    let animated = false;
    
    function checkStats() {
        if (!animated && isInViewport(statNumbers[0])) {
            statNumbers.forEach(stat => {
                animateCounter(stat);
            });
            animated = true;
        }
    }
    
    // Initial check
    checkStats();
    
    // Check on scroll
    window.addEventListener('scroll', checkStats);
}

// Form Validation (for contact form if added later)
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
        
        // Email validation
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('error');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
