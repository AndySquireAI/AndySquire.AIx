// Phase 2: Simplified Navigation System
(function() {
    'use strict';
    
    console.log('🚀 Phase 2: Simple Navigation Loading...');
    
    function initializeNavigation() {
        console.log('🧭 Initializing simple navigation...');
        
        // Setup mobile hamburger menu
        setupMobileMenu();
        
        // Setup navigation clicks
        setupNavigationClicks();
        
        console.log('✅ Simple navigation initialized');
    }
    
    function setupMobileMenu() {
        const mobileToggle = document.getElementById('mobileNavToggle');
        const patientNav = document.getElementById('patientNav');
        
        if (mobileToggle && patientNav) {
            mobileToggle.addEventListener('click', function() {
                patientNav.classList.toggle('active');
                
                // Update toggle icon
                if (patientNav.classList.contains('active')) {
                    mobileToggle.textContent = '✕';
                } else {
                    mobileToggle.textContent = '☰';
                }
                
                console.log('📱 Mobile menu toggled:', patientNav.classList.contains('active'));
            });
            
            console.log('✅ Mobile menu setup complete');
        } else {
            console.log('❌ Mobile menu elements not found');
        }
    }
    
    function setupNavigationClicks() {
        const navItems = document.querySelectorAll('.nav-item');
        console.log(`🔍 Found ${navItems.length} navigation items`);
        
        navItems.forEach((item, index) => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                console.log(`🧭 Navigation clicked: ${item.textContent}`);
                
                // Update active state
                updateActiveState(item);
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Handle navigation based on text content
                const navText = item.textContent.toLowerCase().trim();
                handleNavigationByText(navText);
            });
            
            console.log(`✅ Navigation item ${index + 1} setup: ${item.textContent}`);
        });
    }
    
    function updateActiveState(clickedItem) {
        // Remove active class from all nav items
        const allNavItems = document.querySelectorAll('.nav-item');
        allNavItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked item
        clickedItem.classList.add('active');
        
        console.log(`✅ Active state updated: ${clickedItem.textContent}`);
    }
    
    function closeMobileMenu() {
        const mobileNav = document.getElementById('patientNav');
        const mobileToggle = document.getElementById('mobileNavToggle');
        
        if (mobileNav && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            if (mobileToggle) {
                mobileToggle.textContent = '☰';
            }
            console.log('📱 Mobile menu closed');
        }
    }
    
    function handleNavigationByText(navText) {
        let targetElement = null;
        let scrollPosition = 0;
        
        console.log(`🎯 Handling navigation for: "${navText}"`);
        
        switch(navText) {
            case 'myhealthcanvas':
                // Look for patient/advocate content
                targetElement = findElementByText(['patient', 'advocate', 'myhealthstory']) ||
                               document.querySelector('[class*="patient"]');
                break;
                
            case 'consulting':
                // Look for healthcare institutions or consultation content
                targetElement = findElementByText(['healthcare institutions', 'consultation', 'schedule']) ||
                               document.querySelector('h2');
                break;
                
            case 'humanoid healthcare':
                // Look for robotics manufacturers content
                targetElement = findElementByText(['robotics manufacturers', 'robotics', 'humanoid']) ||
                               document.querySelector('h2');
                break;
                
            case 'about':
                // Look for about section or testimonials
                targetElement = findElementByText(['about', 'experience', 'vision', 'founder']) ||
                               document.querySelector('[class*="testimonial"]') ||
                               findElementByText(['andy squire']);
                
                // If still not found, scroll to bottom
                if (!targetElement) {
                    scrollPosition = document.body.scrollHeight - window.innerHeight;
                    console.log('📍 About: Scrolling to bottom of page');
                }
                break;
                
            default:
                console.log(`❌ Unknown navigation: ${navText}`);
                return;
        }
        
        // Perform the scroll
        if (targetElement) {
            const headerHeight = 105; // Account for fixed header
            scrollPosition = targetElement.offsetTop - headerHeight;
            console.log(`📍 Found target element: ${targetElement.tagName}`);
        }
        
        // Ensure we don't scroll above the page
        scrollPosition = Math.max(0, scrollPosition);
        
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
        
        console.log(`✅ Scrolled to position: ${scrollPosition}`);
    }
    
    function findElementByText(keywords) {
        const allElements = document.querySelectorAll('h1, h2, h3, h4, p, div, section, [class*="section"], [class*="partner"], [class*="about"], [class*="testimonial"]');
        
        for (let element of allElements) {
            const text = element.textContent.toLowerCase();
            
            for (let keyword of keywords) {
                if (text.includes(keyword.toLowerCase())) {
                    console.log(`🔍 Found element with keyword "${keyword}": ${element.tagName}`);
                    return element;
                }
            }
        }
        
        console.log(`❌ No element found for keywords: ${keywords.join(', ')}`);
        return null;
    }
    
    // Initialize when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeNavigation);
        } else {
            initializeNavigation();
        }
        
        // Also try after delays to ensure all content is loaded
        setTimeout(initializeNavigation, 500);
        setTimeout(initializeNavigation, 1500);
    }
    
    // Start initialization
    init();
    
    console.log('🎯 Phase 2: Simple Navigation Script Loaded');
    
})();

