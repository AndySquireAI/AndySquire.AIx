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
                const href = this.getAttribute('href');
                
                // Only handle anchor links
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    
                    const targetId = href.substring(1);
                    let targetElement = document.getElementById(targetId);
                    
                    // If target doesn't exist, try to find it by content or create anchor
                    if (!targetElement) {
                        targetElement = findOrCreateAnchor(targetId);
                    }
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        console.log(`📍 Scrolled to: ${targetId}`);
                    }
                }
            });
        });
        
        console.log('✅ Smooth scrolling initialized');
    }
    
    function findOrCreateAnchor(targetId) {
        let targetElement = null;
        
        // Map navigation targets to content sections
        const sectionMappings = {
            'patient-tools': ['myhealthstory', 'patient', 'advocate', 'canvas'],
            'consulting': ['consultation', 'consulting', 'partnership'],
            'humanoid-healthcare': ['humanoid', 'healthcare', 'robot', 'ai'],
            'about': ['about', 'andy', 'squire', 'founder']
        };
        
        const searchTerms = sectionMappings[targetId] || [targetId];
        
        // Search for existing sections by text content
        const allSections = document.querySelectorAll('section, div, h1, h2, h3');
        
        for (let section of allSections) {
            const text = section.textContent.toLowerCase();
            
            for (let term of searchTerms) {
                if (text.includes(term.toLowerCase())) {
                    // Add ID to found section
                    section.id = targetId;
                    targetElement = section;
                    console.log(`📍 Found and anchored section: ${targetId}`);
                    break;
                }
            }
            
            if (targetElement) break;
        }
        
        // If still not found, create a placeholder anchor
        if (!targetElement) {
            targetElement = document.createElement('div');
            targetElement.id = targetId;
            targetElement.style.height = '1px';
            targetElement.style.visibility = 'hidden';
            
            // Insert at appropriate location based on target
            const insertLocation = getInsertLocation(targetId);
            if (insertLocation) {
                insertLocation.parentNode.insertBefore(targetElement, insertLocation);
                console.log(`📍 Created placeholder anchor: ${targetId}`);
            }
        }
        
        return targetElement;
    }
    
    function getInsertLocation(targetId) {
        // Define where to insert anchors based on the patient-centric structure
        const insertMappings = {
            'patient-tools': document.body.firstElementChild,
            'consulting': document.querySelector('[class*="partner"]') || document.body.children[1],
            'humanoid-healthcare': document.querySelector('[class*="humanoid"]') || document.body.children[2],
            'about': document.querySelector('[class*="about"]') || document.body.lastElementChild
        };
        
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

