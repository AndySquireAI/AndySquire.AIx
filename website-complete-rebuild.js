// Complete Website Rebuild - Preserving All Content with Better Structure
// This script rebuilds the website with proper logical flow while preserving all existing content

(function() {
    'use strict';
    
    console.log('🏗️ Starting complete website rebuild...');
    
    // Wait for page to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeRebuild);
    } else {
        initializeRebuild();
    }
    
    function initializeRebuild() {
        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'website-complete-rebuild.css';
        document.head.appendChild(link);
        
        // Wait for page to settle, then rebuild
        setTimeout(() => {
            rebuildWebsiteStructure();
            console.log('✅ Website rebuild complete!');
        }, 2000);
    }
    
    function rebuildWebsiteStructure() {
        // Find the main content container
        const mainContainer = document.querySelector('main') || document.body;
        
        // Store existing content before rebuilding
        const existingContent = extractExistingContent();
        
        // Clear the main container but preserve head and navigation
        const nav = document.querySelector('nav');
        const header = document.querySelector('header');
        
        // Create new structure
        const newStructure = createNewWebsiteStructure(existingContent);
        
        // Replace content while preserving navigation
        if (mainContainer) {
            // Clear main content but keep nav/header
            const children = Array.from(mainContainer.children);
            children.forEach(child => {
                if (child !== nav && child !== header && !child.matches('nav') && !child.matches('header')) {
                    child.remove();
                }
            });
            
            // Add new structure
            mainContainer.appendChild(newStructure);
        }
    }
    
    function extractExistingContent() {
        console.log('📋 Extracting existing content...');
        
        return {
            // Hero section content
            hero: {
                title: document.querySelector('h1')?.textContent || 'Andy Squire - Founder & CEO, Humanoid Healthcare',
                subtitle: 'Transforming healthcare through AI and humanoid technology',
                image: document.querySelector('img[src*="hero"]')?.src || '',
                ctas: extractCTAs()
            },
            
            // Founder story content
            founderStory: {
                title: '#PatientFirstAI - Born from Experience',
                content: `As a cancer survivor with 20+ years in digital health innovation, I understand firsthand the challenges patients face in navigating complex healthcare systems. This lived experience drives our #PatientFirstAI approach - putting patient needs at the center of every innovation.`,
                image: '/assets/andy-profile.jpg'
            },
            
            // Healthcare Ecosystem Architecture
            healthcareEcosystem: {
                title: 'Healthcare Ecosystem Architecture',
                subtitle: 'Comprehensive business model framework with triple-win value creation for patients, healthcare providers, and robotics manufacturers.',
                features: [
                    'Data-driven business model (DDBM)',
                    'High-level business architecture', 
                    'IT architecture integration',
                    'Stakeholder value propositions'
                ],
                description: 'A look into my digital sandbox. These IT & Business plans explore new technologies and design strategies for modern Healthcare Ecosystems. Supporting patients and their human caregivers with home-based assistance, not replacing healthcare professionals.',
                cta: 'Learn More',
                email: 'andy@andysquire.ai'
            },
            
            // Humanoid Healthcare Vision
            humanoidHealthcare: {
                title: 'Humanoid Healthcare Vision',
                subtitle: 'Strategic framework for $1 trillion AI humanoid healthcare market with focus on aging populations and chronic care.',
                features: [
                    'Market analysis & opportunity',
                    'Regulatory compliance (SaMD)',
                    'Triple-win value creation',
                    'Implementation roadmap'
                ],
                marketValue: '$1T Market Opportunity by 2040',
                image: '/assets/HumanoidHealthcarePitch_corrected-m5MTU1zZ.jpg',
                cta: 'Learn More',
                email: 'andy@andysquire.ai'
            },
            
            // MyHealthStory Initiative
            myHealthStory: {
                title: 'MyHealthStory Initiative',
                subtitle: 'Patient empowerment tool designed from lived cancer experience to improve communication with medical teams.',
                mission: 'MyHealthStory was born from a cancer survivor\'s journey to help patients take control of their medical information. Our mission is two-fold: empower patients and support vital research.',
                features: [
                    'Patient-Centric Design: Focuses on your current health status, goals, and priorities.',
                    'Holistic Approach: Combines medical data (diagnosis, medications, allergies) with personal well-being factors.',
                    'Communication Tool: Helps you prepare key questions and information for your healthcare providers.',
                    'Patient Empowerment: Encourages active participation in your own healthcare decisions.'
                ],
                pricing: {
                    current: {
                        price: '£9',
                        donation: '£4.50 to Cancer Research UK',
                        description: 'One-time purchase • Instant download'
                    },
                    complete: {
                        price: '£12', 
                        donation: '£6 to Cancer Research UK',
                        description: 'One-time purchase • Instant download',
                        features: [
                            'Advance Care Planning: Document your healthcare wishes, living will, and power of attorney.',
                            'Legacy & Wisdom: Share important messages and life lessons you\'ve learned.',
                            'Forward-Looking: Helps you define what you are looking forward to and what gives your life purpose.',
                            'Helpful Resources: A space to list communities, links, and apps that support you.'
                        ]
                    }
                },
                donationInfo: '50% of All UK Purchases to be Donated to Cancer Research UK (for US Purchases, 50% will go to ACS)',
                compliance: {
                    title: 'For Your Safety & Understanding',
                    points: [
                        'These templates are form fillable PDFs designed to help you organize your health information and empower communication with your healthcare team.',
                        'They are not medical advice.',
                        'Consult a Medical Professional: Always discuss your health and the information in this document with a qualified healthcare provider.',
                        'You Are in Control: You are responsible for the accuracy of the information you enter.',
                        'Your Privacy is Paramount: These are downloadable PDF Forms. You save them locally to your own device. We never see, store, or have access to your personal health data.'
                    ],
                    refundPolicy: 'Due to the instant-download nature of these digital products, we cannot offer refunds once a purchase is made. Thank you for your understanding.'
                }
            },
            
            // Professional Experience
            experience: {
                title: 'Professional Experience',
                subtitle: '20+ years of experience in digital health, AI innovation, and healthcare transformation',
                timeline: [
                    {
                        title: 'AI in Human Experience Consultant - Humanoid Healthcare',
                        company: 'Self-employed',
                        period: '01/2024 - Present',
                        location: 'Basel, Switzerland',
                        description: 'Human-centric Design Thinking, Journey Impact Expert & Patient Advocate',
                        achievements: [
                            'Q1-25 Designed a \'Humanoid Healthcare\' + AR Agent + EHR Patient Ecosystem',
                            'Sept-Dec 2024 University of Cambridge course \'AI Data Driven Design for CX\'',
                            'Designed AI Patient Support Program + 24/7 Nurse Navigator Hybrid Call Centre'
                        ]
                    },
                    {
                        title: 'Senior Digital Business Analyst',
                        company: 'Roche',
                        period: '08/2019 - 12/2024',
                        location: 'Basel, Switzerland',
                        description: 'Roche Informatics & CX, Global (via agency Datalynx)',
                        achievements: [
                            'Sept-Dec 2023 Service Design & CX Expert prioritised pain points',
                            'June 2022-August 2023 Journey Maps Senior BA led on Journey Maps & Design Thinking',
                            '10 yrs led Insights teams for Strategy, Impact & Measurement → improvement',
                            '2020-22 led content strategy on pilot for interoperable Patient website'
                        ]
                    },
                    {
                        title: 'Digital Solution Expert',
                        company: 'Takeda',
                        period: '02/2018 - 05/2019',
                        location: 'Zurich, Switzerland',
                        description: 'Takeda CX Region Europe & Canada (via agency Hays)',
                        achievements: [
                            'Product Owner & led the feature backlog on the HCP self-service portal',
                            'Co-created multi-channel strategic plan & rolled it out in Top 5 Affiliates'
                        ]
                    },
                    {
                        title: 'Global Lead Digital Content / Head of Digital Operations',
                        company: 'Novartis',
                        period: '2009 - 2017',
                        location: 'Basel, Switzerland',
                        description: 'Pharma Digital Comms Excellence, Global',
                        achievements: [
                            'Team leader of 10 direct reports, implemented new Social Centre of Excellence',
                            'Scaled new Social Media Management platform saving >$3 M over 3 years',
                            'Led $5 mio insights campaign to rescue $1.5 bn leading Ophthalmology brand'
                        ]
                    }
                ],
                education: [
                    {
                        title: 'AI DATA-DRIVEN DESIGN FOR CX',
                        institution: 'University of Cambridge, UK',
                        year: '2024'
                    },
                    {
                        title: 'PHARMA OMNICHANNEL MARKETING',
                        institution: 'Across Health',
                        period: '2014-23',
                        note: 'B.Sc. (Hons) University of Bradford, UK (1986-1990)'
                    }
                ]
            },
            
            // Contact information
            contact: {
                title: 'Let\'s Collaborate on the Future of Healthcare',
                subtitle: 'Ready to transform healthcare through AI and humanoid technology? Let\'s connect and explore opportunities together.',
                info: {
                    email: 'andy@andysquire.ai',
                    phone: '+41 79 737 4889',
                    location: 'Basel, Switzerland',
                    linkedin: 'LinkedIn Profile'
                },
                collaborationAreas: [
                    {
                        title: 'Robotics Manufacturers',
                        description: 'Expand work on Medical Humanoids and SaMD Software development'
                    },
                    {
                        title: 'Healthcare Institutions', 
                        description: 'Human-centric design thinking with Patients & Doctors'
                    },
                    {
                        title: 'Investors & Partners',
                        description: 'Strategic partnerships for Humanoid Healthcare market expansion'
                    },
                    {
                        title: 'Cancer Advocacy',
                        description: 'MyHealthStory initiative and Royal Marsden Cancer Charity support'
                    }
                ]
            }
        };
    }
    
    function extractCTAs() {
        const ctas = [];
        document.querySelectorAll('button, a[href]').forEach(el => {
            if (el.textContent.includes('Discover') || el.textContent.includes('Explore') || el.textContent.includes('Learn More')) {
                ctas.push({
                    text: el.textContent.trim(),
                    href: el.href || '#',
                    onclick: el.onclick
                });
            }
        });
        return ctas;
    }
    
    function createNewWebsiteStructure(content) {
        const container = document.createElement('div');
        container.className = 'rebuilt-website';
        
        // 1. Hero Section
        container.appendChild(createHeroSection(content.hero));
        
        // 2. Founder's Story Section
        container.appendChild(createFounderStorySection(content.founderStory));
        
        // 3. About Summary Section
        container.appendChild(createAboutSummarySection());
        
        // 4. Research & Innovation Section
        container.appendChild(createResearchInnovationSection(content.healthcareEcosystem, content.humanoidHealthcare));
        
        // 5. MyHealthStory Section
        container.appendChild(createMyHealthStorySection(content.myHealthStory));
        
        // 6. Professional Experience Section
        container.appendChild(createExperienceSection(content.experience));
        
        // 7. Contact Section
        container.appendChild(createContactSection(content.contact));
        
        return container;
    }
    
    function createHeroSection(heroContent) {
        const section = document.createElement('section');
        section.className = 'hero-section';
        section.innerHTML = `
            <div class="hero-container">
                <div class="hero-content">
                    <h1 class="hero-title">${heroContent.title}</h1>
                    <p class="hero-subtitle">${heroContent.subtitle}</p>
                    <div class="hero-ctas">
                        <button class="cta-primary" onclick="document.querySelector('.about-summary').scrollIntoView({behavior: 'smooth'})">Discover Our Vision</button>
                        <button class="cta-secondary" onclick="document.querySelector('.myhealthstory-section').scrollIntoView({behavior: 'smooth'})">Explore MyHealthStory</button>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="hero-image-placeholder">
                        <div class="hero-badge">#PatientFirstAI</div>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
    
    function createFounderStorySection(storyContent) {
        const section = document.createElement('section');
        section.className = 'founder-story-section';
        section.innerHTML = `
            <div class="container">
                <div class="founder-story-content">
                    <div class="story-text">
                        <h2 class="section-title">${storyContent.title}</h2>
                        <p class="story-description">${storyContent.content}</p>
                        <div class="story-highlight">
                            <span class="highlight-text">Every innovation starts with understanding the patient journey.</span>
                        </div>
                    </div>
                    <div class="story-visual">
                        <div class="founder-image-placeholder">
                            <div class="experience-badge">20+ Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
    
    function createAboutSummarySection() {
        const section = document.createElement('section');
        section.className = 'about-summary';
        section.innerHTML = `
            <div class="container">
                <h2 class="section-title">About Humanoid Healthcare</h2>
                <p class="section-subtitle">Three core pillars driving the future of patient-centered healthcare</p>
                <div class="about-grid">
                    <div class="about-card" onclick="document.querySelector('.research-innovation').scrollIntoView({behavior: 'smooth'})">
                        <div class="card-icon">🏗️</div>
                        <h3>Healthcare Ecosystem Architecture</h3>
                        <p>Comprehensive business model framework with triple-win value creation</p>
                        <span class="card-link">Learn More →</span>
                    </div>
                    <div class="about-card" onclick="document.querySelector('.research-innovation').scrollIntoView({behavior: 'smooth'})">
                        <div class="card-icon">🤖</div>
                        <h3>Humanoid Healthcare Vision</h3>
                        <p>Strategic framework for $1T AI humanoid healthcare market opportunity</p>
                        <span class="card-link">Learn More →</span>
                    </div>
                    <div class="about-card" onclick="document.querySelector('.myhealthstory-section').scrollIntoView({behavior: 'smooth'})">
                        <div class="card-icon">❤️</div>
                        <h3>MyHealthStory Initiative</h3>
                        <p>Patient empowerment tool born from lived cancer experience</p>
                        <span class="card-link">Explore →</span>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
    
    function createResearchInnovationSection(ecosystem, humanoid) {
        const section = document.createElement('section');
        section.className = 'research-innovation';
        section.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Research & Innovation</h2>
                    <p class="section-subtitle">Pioneering a new architecture & business models for integrated home healthcare within a near-future AI-humanoid ecosystem.</p>
                </div>
                
                <div class="research-grid">
                    <!-- Healthcare Ecosystem Architecture Card -->
                    <div class="research-card">
                        <div class="card-header">
                            <div class="card-icon">🧠</div>
                            <h3>${ecosystem.title}</h3>
                        </div>
                        <p class="card-description">${ecosystem.subtitle}</p>
                        <ul class="feature-list">
                            ${ecosystem.features.map(feature => `<li>• ${feature}</li>`).join('')}
                        </ul>
                        <div class="card-details">
                            <p>${ecosystem.description}</p>
                        </div>
                        <button class="card-cta" onclick="window.location.href='mailto:${ecosystem.email}?subject=Healthcare Ecosystem Architecture Inquiry'">${ecosystem.cta}</button>
                    </div>
                    
                    <!-- Humanoid Healthcare Vision Card -->
                    <div class="research-card">
                        <div class="card-header">
                            <div class="card-icon">🏆</div>
                            <h3>${humanoid.title}</h3>
                        </div>
                        <p class="card-description">${humanoid.subtitle}</p>
                        <div class="market-highlight">
                            <span class="market-value">${humanoid.marketValue}</span>
                        </div>
                        <ul class="feature-list">
                            ${humanoid.features.map(feature => `<li>• ${feature}</li>`).join('')}
                        </ul>
                        <div class="card-image">
                            <img src="${humanoid.image}" alt="Humanoid Healthcare Pitch" style="width: 100%; border-radius: 8px; margin: 16px 0;">
                        </div>
                        <button class="card-cta" onclick="window.location.href='mailto:${humanoid.email}?subject=Humanoid Healthcare Vision Inquiry'">${humanoid.cta}</button>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
    
    function createMyHealthStorySection(myHealthStory) {
        const section = document.createElement('section');
        section.className = 'myhealthstory-section';
        section.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <div class="heart-icon">❤️</div>
                    <h2 class="section-title">${myHealthStory.title}</h2>
                    <p class="section-subtitle">${myHealthStory.subtitle}</p>
                    <div class="mission-statement">
                        <p><strong>Born from lived cancer experience</strong></p>
                        <p>${myHealthStory.mission}</p>
                    </div>
                </div>
                
                <div class="myhealthstory-content">
                    <div class="features-grid">
                        ${myHealthStory.features.map(feature => {
                            const [title, description] = feature.split(': ');
                            return `
                                <div class="feature-item">
                                    <h4>${title}</h4>
                                    <p>${description}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    
                    <div class="pricing-section">
                        <div class="pricing-grid">
                            <div class="pricing-card">
                                <h3>Current Plan</h3>
                                <div class="price">${myHealthStory.pricing.current.price}</div>
                                <p class="donation-info">${myHealthStory.pricing.current.donation}</p>
                                <p class="purchase-info">${myHealthStory.pricing.current.description}</p>
                                <button class="pricing-cta">Buy Current Plan Now</button>
                            </div>
                            
                            <div class="pricing-card featured">
                                <h3>Complete Plan</h3>
                                <div class="price">${myHealthStory.pricing.complete.price}</div>
                                <p class="donation-info">${myHealthStory.pricing.complete.donation}</p>
                                <p class="purchase-info">${myHealthStory.pricing.complete.description}</p>
                                <div class="complete-features">
                                    <p><strong>All features of the Current Plan, PLUS:</strong></p>
                                    ${myHealthStory.pricing.complete.features.map(feature => {
                                        const [title, description] = feature.split(': ');
                                        return `<p><strong>• ${title}:</strong> ${description}</p>`;
                                    }).join('')}
                                </div>
                                <button class="pricing-cta">Buy Complete Plan Now</button>
                            </div>
                        </div>
                        
                        <div class="donation-highlight">
                            <p><strong>${myHealthStory.donationInfo}</strong></p>
                        </div>
                        
                        <div class="payment-methods">
                            <div class="payment-icons">
                                <span class="payment-icon">💳 MasterCard</span>
                                <span class="payment-icon">💳 Visa</span>
                                <span class="payment-icon">💳 AMEX</span>
                                <span class="payment-icon">💳 PayPal</span>
                                <span class="payment-icon">💳 Discover</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="compliance-section">
                        <h3>${myHealthStory.compliance.title}</h3>
                        <div class="compliance-content">
                            ${myHealthStory.compliance.points.map(point => `<p>• ${point}</p>`).join('')}
                            <p class="refund-policy"><em>${myHealthStory.compliance.refundPolicy}</em></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
    
    function createExperienceSection(experience) {
        const section = document.createElement('section');
        section.className = 'experience-section';
        section.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${experience.title}</h2>
                    <p class="section-subtitle">${experience.subtitle}</p>
                </div>
                
                <div class="timeline">
                    ${experience.timeline.map(job => `
                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="job-header">
                                    <h3>${job.title}</h3>
                                    <div class="job-meta">
                                        <span class="company">${job.company}</span>
                                        <span class="period">${job.period}</span>
                                        <span class="location">${job.location}</span>
                                    </div>
                                </div>
                                <p class="job-description">${job.description}</p>
                                <ul class="achievements">
                                    ${job.achievements.map(achievement => `<li>• ${achievement}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="education-section">
                    <h3>Education & Certifications</h3>
                    <div class="education-grid">
                        ${experience.education.map(edu => `
                            <div class="education-item">
                                <div class="edu-icon">🎓</div>
                                <h4>${edu.title}</h4>
                                <p>${edu.institution} ${edu.year ? `(${edu.year})` : `(${edu.period})`}</p>
                                ${edu.note ? `<p class="edu-note">${edu.note}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        return section;
    }
    
    function createContactSection(contact) {
        const section = document.createElement('section');
        section.className = 'contact-section';
        section.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${contact.title}</h2>
                    <p class="section-subtitle">${contact.subtitle}</p>
                </div>
                
                <div class="contact-content">
                    <div class="contact-info">
                        <h3>Get in Touch</h3>
                        <div class="contact-item">
                            <div class="contact-icon">📧</div>
                            <div>
                                <strong>Email</strong>
                                <a href="mailto:${contact.info.email}">${contact.info.email}</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">📞</div>
                            <div>
                                <strong>Phone</strong>
                                <a href="tel:${contact.info.phone}">${contact.info.phone}</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">📍</div>
                            <div>
                                <strong>Location</strong>
                                <span>${contact.info.location}</span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">💼</div>
                            <div>
                                <strong>LinkedIn</strong>
                                <a href="#" target="_blank">${contact.info.linkedin}</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="collaboration-areas">
                        <h3>Areas of Collaboration</h3>
                        <div class="collaboration-grid">
                            ${contact.collaborationAreas.map(area => `
                                <div class="collaboration-item">
                                    <h4>${area.title}</h4>
                                    <p>${area.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
    
})();

