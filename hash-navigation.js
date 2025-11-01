// 🎯 BULLETPROOF HASH NAVIGATION - Perfect for Google Ads SiteLinks & SEO
// This script adds proper anchor IDs to existing sections for hash navigation

(function() {
    'use strict';
    
    console.log('🎯 Hash Navigation: Initializing...');
    
    // Configuration for section mapping
    const SECTION_MAPPING = {
        'myhealthcanvas': {
            keywords: ['MyHealthStory', 'PDF form', 'patient communication', 'health summary'],
            fallbackSelector: 'section:first-of-type, .section:first-of-type, [class*="section"]:first-of-type'
        },
        'consulting': {
            keywords: ['Healthcare Institutions', 'consulting', 'strategy', 'service design'],
            fallbackSelector: '[class*="partnership"], [class*="services"], [class*="consulting"]'
        },
        'humanoid-healthcare': {
            keywords: ['Robotics Manufacturers', 'humanoid', 'robotics', 'innovation'],
            fallbackSelector: '[class*="partnership"], [class*="innovation"], [class*="robotics"]'
        },
        'about': {
            keywords: ['About', 'testimonials', 'experience', 'Andy Squire'],
            fallbackSelector: '[class*="about"], [class*="testimonial"], [class*="experience"]'
        }
    };
    
    // Function to find section by keywords
    function findSectionByKeywords(keywords) {
        const allElements = document.querySelectorAll('*');
        
        for (let element of allElements) {
            const text = element.textContent || '';
            const hasKeyword = keywords.some(keyword => 
                text.toLowerCase().includes(keyword.toLowerCase())
            );
            
            if (hasKeyword) {
                // Find the closest section-like container
                let container = element;
                while (container && container !== document.body) {
                    if (container.tagName === 'SECTION' || 
                        container.className.includes('section') ||
                        container.className.includes('container') ||
                        container.className.includes('max-w-')) {
                        return container;
                    }
                    container = container.parentElement;
                }
                return element;
            }
        }
        return null;
    }
    
    // Function to add anchor IDs to sections
    function addAnchorIds() {
        console.log('🎯 Hash Navigation: Adding anchor IDs...');
        
        Object.entries(SECTION_MAPPING).forEach(([anchorId, config]) => {
            // Skip if anchor already exists
            if (document.getElementById(anchorId)) {
                console.log(`✅ Anchor #${anchorId} already exists`);
                return;
            }
            
            // Try to find section by keywords
            let targetSection = findSectionByKeywords(config.keywords);
            
            // Fallback to selector
            if (!targetSection && config.fallbackSelector) {
                targetSection = document.querySelector(config.fallbackSelector);
            }
            
            // Create anchor if section found
            if (targetSection) {
                targetSection.id = anchorId;
                console.log(`✅ Added anchor #${anchorId} to:`, targetSection);
                
                // Add smooth scroll behavior
                targetSection.style.scrollMarginTop = '100px'; // Account for fixed header
            } else {
                console.warn(`⚠️ Could not find section for #${anchorId}`);
            }
        });
        
        // Add smooth scrolling to all hash links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL hash
                    history.pushState(null, null, `#${targetId}`);
                    
                    // Update active navigation state
                    updateActiveNavigation(targetId);
                    
                    console.log(`🎯 Navigated to #${targetId}`);
                }
            });
        });
        
        console.log('🎯 Hash Navigation: Setup complete!');
    }
    
    // Function to update active navigation state
    function updateActiveNavigation(activeId) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to current nav item
        const activeLink = document.querySelector(`a[href="#${activeId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Function to handle initial page load with hash
    function handleInitialHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            setTimeout(() => {
                const targetElement = document.getElementById(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    updateActiveNavigation(hash);
                    console.log(`🎯 Initial navigation to #${hash}`);
                }
            }, 500); // Delay to ensure content is loaded
        }
    }
    
    // Initialize when DOM is ready
    function initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initialize);
            return;
        }
        
        // Wait for React content to load
        const checkForContent = () => {
            const rootElement = document.getElementById('root');
            if (rootElement && rootElement.children.length > 0) {
                addAnchorIds();
                handleInitialHash();
            } else {
                setTimeout(checkForContent, 100);
            }
        };
        
        checkForContent();
    }
    
    // Handle browser back/forward navigation
    window.addEventListener('popstate', function() {
        handleInitialHash();
    });
    
    // Start initialization
    initialize();
    
    // Also try after a delay to catch late-loading content
    setTimeout(() => {
        addAnchorIds();
        handleInitialHash();
    }, 2000);
    
    console.log('🎯 Hash Navigation: Script loaded and ready!');
})();

