// Phase 2: Patient-Centric Header & Navigation JavaScript
// Implementing the new PATIENT-CENTRIC CARE navigation structure

(function() {
    'use strict';
    
    console.log('🧭 Phase 2: Header & Navigation JavaScript Loading...');
    
    // Wait for DOM to be ready
    function initializePhase2() {
        console.log('🧭 Initializing Phase 2: Patient-Centric Header & Navigation');
        
        // Create the new patient-centric header
        createPatientCentricHeader();
        
        // Initialize mobile navigation
        initializeMobileNav();
        
        // Add smooth scrolling to navigation links
        initializeSmoothScrolling();
        
        console.log('✅ Phase 2: Header & Navigation Initialized Successfully');
    }
    
    function createPatientCentricHeader() {
        // Create header HTML structure
        const headerHTML = `
            <header class="patient-centric-header">
                <div class="header-container">
                    <a href="#" class="patient-centric-logo">
                        PATIENT-CENTRIC CARE
                        <div class="patient-centric-tagline">AndySquire.AI</div>
                    </a>
                    
                    <nav class="patient-nav" id="patientNav">
                        <a href="#patient-tools" class="nav-item priority">MyHealthCanvas</a>
                        <a href="#consulting" class="nav-item">Consulting</a>
                        <a href="#humanoid-healthcare" class="nav-item">Humanoid Healthcare</a>
                        <a href="#about" class="nav-item">About</a>
                    </nav>
                    
                    <button class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle navigation">
                        ☰
                    </button>
                </div>
            </header>
        `;
        
        // Insert header at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
        
        console.log('✅ Patient-centric header created');
    }
    
    function initializeMobileNav() {
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
            });
            
            // Close mobile nav when clicking nav items
            const navItems = patientNav.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    patientNav.classList.remove('active');
                    mobileToggle.textContent = '☰';
                });
            });
            
            console.log('✅ Mobile navigation initialized');
        }
    }
    
    function initializeSmoothScrolling() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active state
                updateActiveNavItem(this);
                
                // Get target from data-target attribute or href
                const targetId = this.getAttribute('data-target') || 
                                (this.getAttribute('href') && this.getAttribute('href').substring(1));
                
                console.log(`🧭 Navigation clicked: ${targetId}`);
                
                // Handle navigation
                handleNavigation(targetId);
            });
        });
        
        console.log('✅ Smooth scrolling initialized');
    }
    
    function updateActiveNavItem(clickedItem) {
        // Remove active class from all nav items
        const allNavItems = document.querySelectorAll('.nav-item');
        allNavItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked item
        clickedItem.classList.add('active');
        
        console.log(`✅ Active nav item updated: ${clickedItem.textContent}`);
    }
    
    function handleNavigation(targetId) {
        let targetElement = null;
        
        // Direct mapping to existing content sections
        switch(targetId) {
            case 'patient-tools':
                // Look for patient/advocate content first
                targetElement = findSectionByKeywords(['patient', 'advocate']) ||
                               document.querySelector('[class*="patient"]') ||
                               document.body.firstElementChild;
                break;
                
            case 'consulting':
                // Look for partnership/consulting content
                targetElement = findSectionByKeywords(['partnership', 'healthcare institutions', 'schedule consultation']) ||
                               document.querySelector('h2') || // First major heading
                               document.body.children[1];
                break;
                
            case 'humanoid-healthcare':
                // Look for robotics/humanoid content
                targetElement = findSectionByKeywords(['robotics manufacturers', 'humanoid', 'ai healthcare']) ||
                               document.querySelector('h2') || // First major heading
                               document.body.children[1];
                break;
                
            case 'about':
                // Look for about section
                targetElement = findSectionByKeywords(['about andy squire', 'founder', 'exploring new frontiers']) ||
                               document.querySelector('h2:contains("About")') ||
                               [...document.querySelectorAll('h1, h2, h3')].find(h => h.textContent.toLowerCase().includes('about')) ||
                               document.body.lastElementChild;
                break;
                
            default:
                console.log(`❌ Unknown navigation target: ${targetId}`);
                return;
        }
        
        if (targetElement) {
            // Smooth scroll to target
            const headerHeight = 105; // Account for fixed header
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
            
            console.log(`✅ Scrolled to: ${targetId} -> ${targetElement.tagName} "${targetElement.textContent.substring(0, 50)}..."`);
        } else {
            console.log(`❌ Target element not found for: ${targetId}`);
        }
    }
    
    function findSectionByKeywords(keywords) {
        const allElements = document.querySelectorAll('section, div, h1, h2, h3, h4, p, [class*="section"], [class*="partner"]');
        
        for (let element of allElements) {
            const text = element.textContent.toLowerCase();
            const className = element.className.toLowerCase();
            
            for (let keyword of keywords) {
                if (text.includes(keyword.toLowerCase()) || className.includes(keyword.toLowerCase())) {
                    return element;
                }
            }
        }
        
        return null;
    }
    
    function findOrCreateAnchor(targetId) {
        let targetElement = null;
        
        // Map navigation targets to content sections with better matching
        const sectionMappings = {
            'patient-tools': {
                keywords: ['myhealthstory', 'patient', 'advocate', 'canvas', 'form'],
                fallback: 'top'
            },
            'consulting': {
                keywords: ['consultation', 'consulting', 'partnership', 'schedule', 'institutions'],
                fallback: 'partnership'
            },
            'humanoid-healthcare': {
                keywords: ['humanoid', 'healthcare', 'robot', 'ai', 'manufacturer', 'robotics'],
                fallback: 'partnership'
            },
            'about': {
                keywords: ['about', 'andy', 'squire', 'founder', 'experience', 'vision'],
                fallback: 'bottom'
            }
        };
        
        const mapping = sectionMappings[targetId];
        if (!mapping) return null;
        
        // Search for existing sections by text content and class names
        const allSections = document.querySelectorAll('section, div[class*="section"], h1, h2, h3, [class*="partner"], [class*="about"]');
        
        for (let section of allSections) {
            const text = section.textContent.toLowerCase();
            const className = section.className.toLowerCase();
            
            for (let keyword of mapping.keywords) {
                if (text.includes(keyword) || className.includes(keyword)) {
                    // Add ID to found section
                    section.id = targetId;
                    targetElement = section;
                    console.log(`📍 Found and anchored section: ${targetId} -> ${section.tagName}`);
                    break;
                }
            }
            
            if (targetElement) break;
        }
        
        // If still not found, create anchor at strategic locations
        if (!targetElement) {
            targetElement = document.createElement('div');
            targetElement.id = targetId;
            targetElement.style.height = '1px';
            targetElement.style.visibility = 'hidden';
            
            const insertLocation = getInsertLocation(targetId, mapping.fallback);
            if (insertLocation) {
                insertLocation.parentNode.insertBefore(targetElement, insertLocation);
                console.log(`📍 Created anchor: ${targetId} at ${mapping.fallback}`);
            }
        }
        
        return targetElement;
    }
    
    function getInsertLocation(targetId, fallback) {
        // Define where to insert anchors based on the patient-centric structure
        const insertMappings = {
            'patient-tools': document.body.firstElementChild,
            'consulting': document.querySelector('[class*="partner"]') || document.body.children[1],
            'humanoid-healthcare': document.querySelector('[class*="partner"]') || document.body.children[1],
            'about': document.querySelector('[class*="about"]') || document.body.lastElementChild
        };
        
        // Fallback strategies
        if (fallback === 'top') {
            return document.body.firstElementChild;
        } else if (fallback === 'bottom') {
            return document.body.lastElementChild;
        } else if (fallback === 'partnership') {
            return document.querySelector('[class*="partner"]') || document.body.children[1];
        }
        
        return insertMappings[targetId] || document.body.firstElementChild;
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePhase2);
    } else {
        // DOM is already ready
        setTimeout(initializePhase2, 100);
    }
    
    // Also try after a delay to ensure React content is loaded
    setTimeout(initializePhase2, 1000);
    setTimeout(initializePhase2, 2000);
    
})();

