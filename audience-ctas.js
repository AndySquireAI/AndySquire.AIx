// Audience-Specific CTAs Implementation
// Re-implementing the successful design from the first Quick Wins

document.addEventListener('DOMContentLoaded', function() {
    // Wait for the page to fully load before adding CTAs
    setTimeout(addAudienceCTAs, 1000);
});

function addAudienceCTAs() {
    // Find the existing collaboration section to replace
    const existingCollaboration = findExistingCollaborationSection();
    
    if (existingCollaboration) {
        const ctaSection = createAudienceCTASection();
        existingCollaboration.replaceWith(ctaSection);
        
        // Add smooth scroll functionality
        addSmoothScrolling();
        
        console.log('✅ Audience-specific CTAs replaced existing collaboration section');
    } else {
        // Fallback: add at the end
        const targetSection = findInsertionPoint();
        if (targetSection) {
            const ctaSection = createAudienceCTASection();
            targetSection.insertAdjacentElement('beforebegin', ctaSection);
            
            // Add smooth scroll functionality
            addSmoothScrolling();
            
            console.log('✅ Audience-specific CTAs added at end of page');
        } else {
            console.log('⚠️ Could not find suitable insertion point for CTAs');
        }
    }
}

function findExistingCollaborationSection() {
    // Look for the existing "Areas of Collaboration" section
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (const heading of headings) {
        if (heading.textContent.includes('Areas of Collaboration')) {
            // Find the parent section that contains all the collaboration items
            let parent = heading.parentElement;
            while (parent && parent !== document.body) {
                const text = parent.textContent;
                if (text.includes('Robotics Manufacturers') && 
                    text.includes('Healthcare Institutions') && 
                    text.includes('Investors & Partners') && 
                    text.includes('Cancer Advocacy')) {
                    return parent;
                }
                parent = parent.parentElement;
            }
        }
    }
    
    // Alternative: look for elements containing all collaboration areas
    const allElements = document.querySelectorAll('*');
    for (const element of allElements) {
        const text = element.textContent;
        if (text && 
            text.includes('Robotics Manufacturers') && 
            text.includes('Healthcare Institutions') && 
            text.includes('Investors & Partners') && 
            text.includes('Cancer Advocacy') &&
            !text.includes('Partner with the Future')) { // Don't match our own section
            return element;
        }
    }
    
    return null;
}

function findInsertionPoint() {
    // Look for the contact section or collaboration areas
    const selectors = [
        'h3:contains("Let\'s Collaborate")',
        'h3:contains("Areas of Collaboration")',
        'section:last-of-type',
        'div:contains("Areas of Collaboration")',
        'div:contains("Get in Touch")'
    ];
    
    // Try to find by text content
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (const heading of headings) {
        if (heading.textContent.includes('Collaborate') || 
            heading.textContent.includes('Areas of Collaboration') ||
            heading.textContent.includes('Get in Touch')) {
            return heading.closest('section') || heading.parentElement;
        }
    }
    
    // Look for elements containing collaboration text
    const allElements = document.querySelectorAll('*');
    for (const element of allElements) {
        if (element.textContent && 
            (element.textContent.includes('Areas of Collaboration') ||
             element.textContent.includes('Robotics Manufacturers') ||
             element.textContent.includes('Healthcare Institutions'))) {
            return element.closest('section') || element;
        }
    }
    
    // Fallback: insert before the footer or last section
    const footer = document.querySelector('footer') || 
                  document.querySelector('[class*="footer"]') ||
                  document.querySelector('body > *:last-child');
    
    return footer || document.body.lastElementChild;
}

function createAudienceCTASection() {
    const section = document.createElement('section');
    section.className = 'audience-ctas-section';
    section.innerHTML = `
        <div class="audience-ctas-container">
            <div class="section-header">
                <h2 class="section-title">Partner with the Future of Healthcare</h2>
                <p class="section-subtitle">Join us in revolutionizing patient care through AI-enabled humanoid healthcare solutions</p>
            </div>
            
            <div class="ctas-grid">
                <div class="cta-card robotics-card">
                    <div class="card-icon">🤖</div>
                    <h3>Robotics Manufacturers</h3>
                    <p>Collaborate on integrating AI healthcare capabilities into humanoid platforms for home rehabilitation solutions.</p>
                    <ul class="benefits-list">
                        <li>Strategic partnership opportunities</li>
                        <li>Healthcare market expansion</li>
                        <li>Patient-centered innovation</li>
                    </ul>
                    <button class="cta-button" onclick="contactRobotics()">Explore Partnership</button>
                </div>
                
                <div class="cta-card healthcare-card">
                    <div class="card-icon">🏥</div>
                    <h3>Healthcare Institutions</h3>
                    <p>Transform patient care with AI-enabled home rehabilitation and improved patient communication tools.</p>
                    <ul class="benefits-list">
                        <li>Enhanced patient outcomes</li>
                        <li>Reduced readmission rates</li>
                        <li>Streamlined care coordination</li>
                    </ul>
                    <button class="cta-button" onclick="contactHealthcare()">Schedule Consultation</button>
                </div>
                
                <div class="cta-card investors-card">
                    <div class="card-icon">💰</div>
                    <h3>Investors & Partners</h3>
                    <p>Invest in the $1 trillion AI humanoid healthcare market with proven patient-first innovation approach.</p>
                    <ul class="benefits-list">
                        <li>Massive market opportunity</li>
                        <li>Experienced leadership team</li>
                        <li>Patient-validated solutions</li>
                    </ul>
                    <button class="cta-button" onclick="contactInvestors()">View Investment Deck</button>
                </div>
                
                <div class="cta-card patients-card">
                    <div class="card-icon">❤️</div>
                    <h3>Patients & Advocates</h3>
                    <p>Empower your healthcare journey with MyHealthStory and join our patient-first community.</p>
                    <ul class="benefits-list">
                        <li>Better communication with doctors</li>
                        <li>Organized health information</li>
                        <li>Support cancer research</li>
                    </ul>
                    <button class="cta-button" onclick="contactPatients()">Connect with Andy</button>
                </div>
            </div>
        </div>
    `;
    
    return section;
}

function addSmoothScrolling() {
    // Add smooth scrolling to all CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// CTA Button Actions
function contactRobotics() {
    const subject = encodeURIComponent('Partnership Inquiry - Robotics Manufacturing');
    const body = encodeURIComponent(`Hello Andy,

I'm interested in exploring partnership opportunities between our robotics manufacturing company and Humanoid Healthcare.

We'd like to discuss:
- Integrating AI healthcare capabilities into our platforms
- Strategic collaboration opportunities
- Market expansion in healthcare robotics

Please let me know your availability for an initial discussion.

Best regards`);
    
    window.open(`mailto:andy@patientcentriccare.ai?subject=${subject}&body=${body}`, '_blank');
}

function contactHealthcare() {
    const subject = encodeURIComponent('Consultation Request - Healthcare Institution');
    const body = encodeURIComponent(`Hello Andy,

I represent a healthcare institution interested in learning more about your AI-enabled home rehabilitation solutions and patient communication tools.

We'd like to schedule a consultation to discuss:
- Implementation possibilities at our facility
- Patient outcome improvements
- Integration with existing systems

Please let me know your availability.

Best regards`);
    
    window.open(`mailto:andy@patientcentriccare.ai?subject=${subject}&body=${body}`, '_blank');
}

function contactInvestors() {
    const subject = encodeURIComponent('Investment Inquiry - Humanoid Healthcare');
    const body = encodeURIComponent(`Hello Andy,

I'm interested in learning more about investment opportunities with Humanoid Healthcare.

Could you please share:
- Investment deck and market analysis
- Current funding round details
- Partnership opportunities

I look forward to discussing this exciting opportunity.

Best regards`);
    
    window.open(`mailto:andy@patientcentriccare.ai?subject=${subject}&body=${body}`, '_blank');
}

function contactPatients() {
    const subject = encodeURIComponent('Connection Request - Patient/Survivor/Caregiver/Advocate');
    const body = encodeURIComponent(`Dear Andy,

As a fellow Patient/Survivor and/or Caregiver/Advocate, I wanted to connect to discuss how your #PatientFirstAI approach and MyHealthStory initiative could help improve healthcare experiences.

I'm particularly interested in:
- Learning more about MyHealthStory and how it can improve patient-doctor communication
- Understanding how your cancer survivor experience translates into better healthcare solutions
- Exploring ways to support the patient advocacy movement
- Discussing opportunities to collaborate on patient-centered healthcare innovation

Thank you for letting me know your availability for a conversation.

Best regards`);
    
    window.open(`mailto:andy@patientcentriccare.ai?subject=${subject}&body=${body}`, '_blank');
}

