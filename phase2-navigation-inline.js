// Phase 2: Inline Navigation - Guaranteed to Execute
console.log('🚀 Phase 2: Inline Navigation Starting...');

// Wait for DOM to be ready
function initNavigation() {
    console.log('🧭 Initializing inline navigation...');
    
    const navItems = document.querySelectorAll('.nav-item');
    console.log(`Found ${navItems.length} navigation items`);
    
    if (navItems.length === 0) {
        console.log('❌ No navigation items found, retrying in 500ms...');
        setTimeout(initNavigation, 500);
        return;
    }
    
    // Add click handlers to each navigation item
    navItems.forEach((item, index) => {
        console.log(`Setting up navigation item ${index + 1}: ${item.textContent}`);
        
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const navText = this.textContent.toLowerCase().trim();
            console.log(`🎯 Navigation clicked: "${navText}"`);
            
            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            const mobileNav = document.getElementById('patientNav');
            const mobileToggle = document.getElementById('mobileNavToggle');
            if (mobileNav && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                if (mobileToggle) mobileToggle.textContent = '☰';
            }
            
            // Handle navigation
            let scrollPosition = 0;
            
            if (navText.includes('about')) {
                // Scroll to bottom for About
                scrollPosition = document.body.scrollHeight - window.innerHeight;
                console.log('📍 About: Scrolling to bottom');
            } else if (navText.includes('myhealthcanvas')) {
                // Scroll to patient section
                const patientElement = document.querySelector('[class*="patient"]') || 
                                     Array.from(document.querySelectorAll('*')).find(el => 
                                         el.textContent.toLowerCase().includes('patient'));
                if (patientElement) {
                    scrollPosition = patientElement.offsetTop - 105;
                    console.log('📍 MyHealthCanvas: Found patient element');
                } else {
                    scrollPosition = 0;
                    console.log('📍 MyHealthCanvas: Scrolling to top');
                }
            } else if (navText.includes('consulting')) {
                // Scroll to healthcare institutions
                const consultingElement = Array.from(document.querySelectorAll('*')).find(el => 
                    el.textContent.toLowerCase().includes('healthcare institutions'));
                if (consultingElement) {
                    scrollPosition = consultingElement.offsetTop - 105;
                    console.log('📍 Consulting: Found healthcare institutions');
                } else {
                    scrollPosition = 200;
                    console.log('📍 Consulting: Scrolling to partnership area');
                }
            } else if (navText.includes('humanoid')) {
                // Scroll to robotics manufacturers
                const roboticsElement = Array.from(document.querySelectorAll('*')).find(el => 
                    el.textContent.toLowerCase().includes('robotics manufacturers'));
                if (roboticsElement) {
                    scrollPosition = roboticsElement.offsetTop - 105;
                    console.log('📍 Humanoid Healthcare: Found robotics manufacturers');
                } else {
                    scrollPosition = 200;
                    console.log('📍 Humanoid Healthcare: Scrolling to partnership area');
                }
            }
            
            // Perform the scroll
            scrollPosition = Math.max(0, scrollPosition);
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
            
            console.log(`✅ Scrolled to position: ${scrollPosition}`);
        });
    });
    
    // Setup mobile menu toggle
    const mobileToggle = document.getElementById('mobileNavToggle');
    const patientNav = document.getElementById('patientNav');
    
    if (mobileToggle && patientNav) {
        mobileToggle.addEventListener('click', function() {
            patientNav.classList.toggle('active');
            this.textContent = patientNav.classList.contains('active') ? '✕' : '☰';
            console.log('📱 Mobile menu toggled');
        });
        console.log('✅ Mobile menu setup complete');
    }
    
    console.log('✅ Inline navigation setup complete!');
}

// Initialize immediately and with delays
initNavigation();
setTimeout(initNavigation, 100);
setTimeout(initNavigation, 500);
setTimeout(initNavigation, 1000);

console.log('🎯 Phase 2: Inline Navigation Script Loaded');

