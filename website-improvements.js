// Website Quick Wins Improvements - Andy Squire AIx
// This script adds personal story callouts, audience-specific CTAs, and improved visual hierarchy

(function() {
    'use strict';
    
    // Wait for the page to be fully loaded
    function waitForPageLoad(callback) {
        if (document.readyState === 'complete') {
            callback();
        } else {
            window.addEventListener('load', callback);
        }
    }
    
    // Remove duplicate sections from the website
    function removeDuplicateSections() {
        console.log('Starting duplicate section removal...');
        
        // Remove duplicate Interactive Insights sections
        const insightSections = document.querySelectorAll('.insight-deck-section');
        if (insightSections.length > 1) {
            console.log(`Found ${insightSections.length} insight deck sections, removing duplicates`);
            // Keep the first one, remove the rest
            for (let i = 1; i < insightSections.length; i++) {
                console.log('Removing duplicate insight deck section:', i);
                insightSections[i].remove();
            }
        }
        
        // Remove duplicate audience/stakeholder CTA sections
        const audienceSections = document.querySelectorAll('.audience-ctas');
        if (audienceSections.length > 1) {
            console.log(`Found ${audienceSections.length} audience CTA sections, removing duplicates`);
            // Keep the first one, remove the rest
            for (let i = 1; i < audienceSections.length; i++) {
                console.log('Removing duplicate audience CTA section:', i);
                audienceSections[i].remove();
            }
        }
        
        // More comprehensive duplicate detection
        const allSections = document.querySelectorAll('section');
        const seenSections = new Map();
        
        allSections.forEach((section, index) => {
            // Create multiple signatures for better duplicate detection
            const headings = section.querySelectorAll('h1, h2, h3, h4');
            const headingText = Array.from(headings).map(h => h.textContent.trim()).join('|');
            
            // Check for specific duplicate patterns
            const isDuplicateInsights = headingText.includes('Insights from the Frontline') || 
                                      section.classList.contains('insight-deck-section');
            
            const isDuplicatePartnership = headingText.includes('Partner with the Future') ||
                                         headingText.includes('Robotics Manufacturers') ||
                                         headingText.includes('Healthcare Institutions') ||
                                         section.classList.contains('audience-ctas');
            
            if (isDuplicateInsights) {
                const key = 'insights-section';
                if (seenSections.has(key)) {
                    console.log('Removing duplicate insights section:', headingText);
                    section.remove();
                } else {
                    seenSections.set(key, section);
                }
            }
            
            if (isDuplicatePartnership) {
                const key = 'partnership-section';
                if (seenSections.has(key)) {
                    console.log('Removing duplicate partnership section:', headingText);
                    section.remove();
                } else {
                    seenSections.set(key, section);
                }
            }
        });
        
        // Remove any remaining old-style founder insight callouts
        const founderInsights = document.querySelectorAll('.founder-insight');
        if (founderInsights.length > 0) {
            console.log('Removing old founder insight callouts:', founderInsights.length);
            founderInsights.forEach(insight => insight.remove());
        }
        
        // Also check for any sections that might have been added multiple times by our script
        setTimeout(() => {
            // Second pass after a brief delay to catch any dynamically added duplicates
            const laterInsightSections = document.querySelectorAll('.insight-deck-section');
            if (laterInsightSections.length > 1) {
                console.log('Second pass: removing additional insight deck duplicates');
                for (let i = 1; i < laterInsightSections.length; i++) {
                    laterInsightSections[i].remove();
                }
            }
            
            const laterAudienceSections = document.querySelectorAll('.audience-ctas');
            if (laterAudienceSections.length > 1) {
                console.log('Second pass: removing additional audience CTA duplicates');
                for (let i = 1; i < laterAudienceSections.length; i++) {
                    laterAudienceSections[i].remove();
                }
            }
        }, 1000);
        
        console.log('Duplicate sections removal completed');
    }
    
    // Restructure website with new section layout
    function restructureWebsiteLayout() {
        console.log('Starting website restructure...');
        
        // Remove existing structure that might conflict
        const existingResearchSection = document.querySelector('.research-innovation-section');
        const existingMyHealthSection = document.querySelector('.myhealthstory-section');
        if (existingResearchSection) existingResearchSection.remove();
        if (existingMyHealthSection) existingMyHealthSection.remove();
        
        // Find the main content area or body to insert new sections
        const mainContent = document.querySelector('main') || document.body;
        
        // Create About Section (concise overview)
        const aboutSection = document.createElement('section');
        aboutSection.className = 'about-section section-padding';
        aboutSection.innerHTML = `
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="section-title">About AndySquire.AI</h2>
                    <p class="section-subtitle">Transforming healthcare through AI innovation and patient-centered design</p>
                </div>
                
                <div class="about-pillars">
                    <div class="pillar-item">
                        <div class="pillar-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                <path d="M2 17l10 5 10-5"/>
                                <path d="M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <h3>Healthcare Ecosystem Architecture</h3>
                        <p>Comprehensive business model framework with triple-win value creation for patients, healthcare providers, and robotics manufacturers.</p>
                    </div>
                    
                    <div class="pillar-item">
                        <div class="pillar-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" stroke-width="2">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M12 1v6m0 6v6"/>
                                <path d="m21 12-6 0m-6 0-6 0"/>
                            </svg>
                        </div>
                        <h3>Humanoid Healthcare Vision</h3>
                        <p>Strategic framework for $1 trillion AI humanoid healthcare market with focus on aging populations and chronic care.</p>
                    </div>
                    
                    <div class="pillar-item">
                        <div class="pillar-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                        </div>
                        <h3>MyHealthStory Initiative</h3>
                        <p>Patient empowerment tool designed from lived cancer experience to improve communication with medical teams.</p>
                    </div>
                </div>
            </div>
        `;
        
        // Create Research & Innovation Section
        const researchSection = document.createElement('section');
        researchSection.className = 'research-innovation-section section-padding';
        researchSection.innerHTML = `
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="section-title">Research & Innovation</h2>
                    <p class="section-subtitle">Pioneering a new architecture & business models for integrated home healthcare within a near-future AI-humanoid ecosystem.</p>
                </div>
                
                <div class="research-cards-grid">
                    <div class="research-detail-card">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                <path d="M2 17l10 5 10-5"/>
                                <path d="M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <h3>Healthcare Ecosystem Architecture</h3>
                        <p class="card-description">Comprehensive business model framework with triple-win value creation for patients, healthcare providers, and robotics manufacturers.</p>
                        <ul class="feature-list">
                            <li>Data-driven business model (DDBM)</li>
                            <li>High-level business architecture</li>
                            <li>IT architecture integration</li>
                            <li>Stakeholder value propositions</li>
                        </ul>
                        <button class="learn-more-btn" onclick="window.location.href='mailto:andy@andysquire.ai?subject=Healthcare Ecosystem Architecture Inquiry'">
                            Learn More
                        </button>
                    </div>
                    
                    <div class="research-detail-card">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" stroke-width="2">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M12 1v6m0 6v6"/>
                                <path d="m21 12-6 0m-6 0-6 0"/>
                            </svg>
                        </div>
                        <h3>Humanoid Healthcare Vision</h3>
                        <p class="card-description">Strategic framework for $1 trillion AI humanoid healthcare market with focus on aging populations and chronic care.</p>
                        <ul class="feature-list">
                            <li>Market analysis & opportunity</li>
                            <li>Regulatory compliance (SaMD)</li>
                            <li>Triple-win value creation</li>
                            <li>Implementation roadmap</li>
                        </ul>
                        <button class="learn-more-btn" onclick="window.location.href='mailto:andy@andysquire.ai?subject=Humanoid Healthcare Vision Inquiry'">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Create MyHealthStory Section (separate and distinct)
        const myHealthStorySection = document.createElement('section');
        myHealthStorySection.className = 'myhealthstory-section section-padding';
        myHealthStorySection.innerHTML = `
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="section-title">MyHealthStory</h2>
                    <p class="section-subtitle">Empowering patients through better healthcare communication</p>
                </div>
                
                <div class="myhealthstory-card">
                    <div class="card-header">
                        <div class="card-icon large">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                        </div>
                        <div class="card-meta">
                            <h3>MyHealthStory Initiative</h3>
                            <p class="card-tagline">Born from lived cancer experience</p>
                        </div>
                    </div>
                    
                    <div class="card-content">
                        <p class="card-description">Patient empowerment tool designed from lived cancer experience to improve communication with medical teams.</p>
                        
                        <div class="features-grid">
                            <div class="feature-item">
                                <span class="feature-icon">📄</span>
                                <span>One-page health summary</span>
                            </div>
                            <div class="feature-item">
                                <span class="feature-icon">📝</span>
                                <span>Form-fillable PDF template</span>
                            </div>
                            <div class="feature-item">
                                <span class="feature-icon">🔒</span>
                                <span>Privacy & consent management</span>
                            </div>
                            <div class="feature-item">
                                <span class="feature-icon">❤️</span>
                                <span>Royal Marsden Cancer Charity support</span>
                            </div>
                        </div>
                        
                        <div class="cta-section">
                            <button class="primary-cta-btn" onclick="scrollToMyHealthStory()">
                                Download MyHealthStory
                            </button>
                            <p class="charity-note">50% of proceeds support Royal Marsden Cancer Charity</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert sections in the correct order
        // Find a good insertion point (after hero/header, before existing content)
        const heroSection = document.querySelector('section') || document.querySelector('header') || mainContent.firstElementChild;
        
        if (heroSection && heroSection.nextSibling) {
            // Insert after hero section
            heroSection.parentNode.insertBefore(aboutSection, heroSection.nextSibling);
            aboutSection.parentNode.insertBefore(researchSection, aboutSection.nextSibling);
            researchSection.parentNode.insertBefore(myHealthStorySection, researchSection.nextSibling);
        } else {
            // Append to main content
            mainContent.appendChild(aboutSection);
            mainContent.appendChild(researchSection);
            mainContent.appendChild(myHealthStorySection);
        }
        
        console.log('Website restructure completed');
    }
    function createInsightDeck() {
        // Remove any existing individual callouts first
        const existingCallouts = document.querySelectorAll('.founder-insight');
        existingCallouts.forEach(callout => callout.remove());
        
        // Find a good place to insert the Insight Deck (after hero section or first main section)
        const heroSection = document.querySelector('section') || document.querySelector('main') || document.body;
        
        const insightDeckSection = document.createElement('section');
        insightDeckSection.className = 'insight-deck-section section-padding';
        insightDeckSection.innerHTML = `
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="section-title">Insights from the Frontline</h2>
                    <p class="section-subtitle">The experiences that drive our <span class="hashtag-highlight">#PatientFirstAI</span> vision</p>
                </div>
                
                <div class="insight-deck-container">
                    <div class="insight-deck">
                        <div class="insight-cards-wrapper">
                            <div class="insight-cards" id="insightCards">
                                <!-- Cards will be populated by JavaScript -->
                            </div>
                        </div>
                        
                        <div class="deck-controls">
                            <button class="deck-nav-btn prev-btn" id="prevInsight" aria-label="Previous insight">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="15,18 9,12 15,6"></polyline>
                                </svg>
                            </button>
                            
                            <div class="deck-indicators" id="deckIndicators">
                                <!-- Indicators will be populated by JavaScript -->
                            </div>
                            
                            <button class="deck-nav-btn next-btn" id="nextInsight" aria-label="Next insight">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="9,18 15,12 9,6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert after hero section
        if (heroSection.nextSibling) {
            heroSection.parentNode.insertBefore(insightDeckSection, heroSection.nextSibling);
        } else {
            heroSection.parentNode.appendChild(insightDeckSection);
        }
        
        // Initialize the deck functionality
        initializeInsightDeck();
    }
    
    // Initialize the interactive deck functionality
    function initializeInsightDeck() {
        const insights = [
            {
                type: 'founder',
                quote: "During my treatment, I wished for 24/7 support that truly understood my needs. This personal experience drives our humanoid healthcare vision.",
                attribution: "Andy Squire, Founder & CEO",
                avatar: "assets/andy-headshot-BurDoHN4.jpeg",
                context: "Cancer Survivor & Healthcare Innovator"
            },
            {
                type: 'patient',
                quote: "I spent hours explaining my medical history to each new doctor. A system that already knew my story would have saved so much time and stress.",
                attribution: "Sarah M., Patient Advocate",
                avatar: null,
                context: "Chronic Care Patient"
            },
            {
                type: 'founder',
                quote: "Born from my frustration with fragmented medical records during treatment, MyHealthStory puts patients back in control of their health narrative.",
                attribution: "Andy Squire, Cancer Survivor",
                avatar: "assets/andy-headshot-BurDoHN4.jpeg",
                context: "MyHealthStory Creator"
            },
            {
                type: 'patient',
                quote: "The emotional support was just as important as the medical care. Having someone available 24/7 who understood what I was going through would have been life-changing.",
                attribution: "Michael R., Community Voice",
                avatar: null,
                context: "Cancer Treatment Survivor"
            },
            {
                type: 'founder',
                quote: "Every innovation we develop starts with a simple question: 'How would this have helped me during my cancer journey?' Patient needs must drive technology, not the other way around.",
                attribution: "Andy Squire, Patient Advocate",
                avatar: "assets/andy-headshot-BurDoHN4.jpeg",
                context: "Healthcare Technology Pioneer"
            },
            {
                type: 'patient',
                quote: "Technology should make healthcare more human, not less. The best innovations are the ones that help doctors and nurses connect with us better.",
                attribution: "Elena K., Patient Experience Advocate",
                avatar: null,
                context: "Healthcare Quality Advocate"
            }
        ];
        
        let currentIndex = 0;
        const cardsContainer = document.getElementById('insightCards');
        const indicatorsContainer = document.getElementById('deckIndicators');
        const prevBtn = document.getElementById('prevInsight');
        const nextBtn = document.getElementById('nextInsight');
        
        // Create insight cards
        function createInsightCard(insight, index) {
            const card = document.createElement('div');
            card.className = `insight-card ${insight.type === 'founder' ? 'founder-card' : 'patient-card'} ${index === 0 ? 'active' : ''}`;
            
            const avatarHtml = insight.avatar 
                ? `<img src="${insight.avatar}" alt="${insight.attribution}" class="insight-avatar" onerror="this.style.display='none'">`
                : `<div class="patient-avatar">
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                       <circle cx="12" cy="7" r="4"></circle>
                     </svg>
                   </div>`;
            
            card.innerHTML = `
                <div class="card-content">
                    <div class="card-header">
                        ${avatarHtml}
                        <div class="card-meta">
                            <div class="attribution">${insight.attribution}</div>
                            <div class="context">${insight.context}</div>
                        </div>
                    </div>
                    <blockquote class="insight-quote">
                        "${insight.quote}"
                    </blockquote>
                </div>
            `;
            
            return card;
        }
        
        // Create indicator dots
        function createIndicator(index) {
            const indicator = document.createElement('button');
            indicator.className = `deck-indicator ${index === 0 ? 'active' : ''}`;
            indicator.setAttribute('aria-label', `Go to insight ${index + 1}`);
            indicator.addEventListener('click', () => goToSlide(index));
            return indicator;
        }
        
        // Populate cards and indicators
        insights.forEach((insight, index) => {
            cardsContainer.appendChild(createInsightCard(insight, index));
            indicatorsContainer.appendChild(createIndicator(index));
        });
        
        // Navigation functions
        function goToSlide(index) {
            const cards = cardsContainer.querySelectorAll('.insight-card');
            const indicators = indicatorsContainer.querySelectorAll('.deck-indicator');
            
            // Remove active class from all
            cards.forEach(card => card.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            // Add active class to current
            cards[index].classList.add('active');
            indicators[index].classList.add('active');
            
            currentIndex = index;
            updateNavButtons();
        }
        
        function nextSlide() {
            const nextIndex = (currentIndex + 1) % insights.length;
            goToSlide(nextIndex);
        }
        
        function prevSlide() {
            const prevIndex = (currentIndex - 1 + insights.length) % insights.length;
            goToSlide(prevIndex);
        }
        
        function updateNavButtons() {
            // Always enable both buttons since we're cycling
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });
        
        // Auto-advance (optional - can be removed if not desired)
        let autoAdvanceInterval;
        function startAutoAdvance() {
            autoAdvanceInterval = setInterval(nextSlide, 8000); // 8 seconds
        }
        
        function stopAutoAdvance() {
            clearInterval(autoAdvanceInterval);
        }
        
        // Start auto-advance and pause on hover
        startAutoAdvance();
        const deckContainer = document.querySelector('.insight-deck-container');
        deckContainer.addEventListener('mouseenter', stopAutoAdvance);
        deckContainer.addEventListener('mouseleave', startAutoAdvance);
        
        // Initial setup
        updateNavButtons();
    }
    
    // Replace collaboration section with audience-specific CTAs
    function replaceCollaborationSection() {
        // Find the collaboration section
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        let collaborationSection = null;
        
        headings.forEach(heading => {
            if (heading.textContent.includes("Let's Collaborate") || 
                heading.textContent.includes("Collaboration") ||
                heading.textContent.includes("Get in Touch")) {
                collaborationSection = heading.closest('section') || heading.parentElement;
            }
        });
        
        if (collaborationSection) {
            const audienceCTASection = createAudienceCTASection();
            collaborationSection.parentNode.replaceChild(audienceCTASection, collaborationSection);
        } else {
            // If no collaboration section found, add it before the footer
            const footer = document.querySelector('footer') || document.body.lastElementChild;
            const audienceCTASection = createAudienceCTASection();
            footer.parentNode.insertBefore(audienceCTASection, footer);
        }
    }
    
    // Create audience-specific CTA section
    function createAudienceCTASection() {
        const section = document.createElement('section');
        section.className = 'audience-ctas';
        section.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="section-title">Partner with the Future of Healthcare</h2>
                <p class="subtitle">Join us in revolutionizing patient care through AI and humanoid technology</p>
                
                <div class="audience-grid">
                    <div class="audience-card robotics subtle-hover">
                        <h3>🤖 Robotics Manufacturers</h3>
                        <h4>Partner with Us to Build Medical Humanoids</h4>
                        <ul>
                            <li>Multiple revenue streams through SaMD integration</li>
                            <li>Healthcare market access and regulatory support</li>
                            <li>Proven patient-centered design methodology</li>
                            <li>$1 trillion market opportunity by 2040</li>
                        </ul>
                        <button class="cta-button robotics-cta" onclick="window.location.href='mailto:andy@andysquire.ai?subject=Robotics Partnership Inquiry'">
                            Explore Partnership
                        </button>
                    </div>

                    <div class="audience-card healthcare subtle-hover">
                        <h3>🏥 Healthcare Institutions</h3>
                        <h4>Transform Patient Care with AI Solutions</h4>
                        <ul>
                            <li>Reduce operational costs through automation</li>
                            <li>Improve patient outcomes with 24/7 support</li>
                            <li>Transition to preventative care models</li>
                            <li>Seamless EHR integration and compliance</li>
                        </ul>
                        <button class="cta-button healthcare-cta" onclick="window.location.href='mailto:andy@andysquire.ai?subject=Healthcare Institution Consultation'">
                            Schedule Consultation
                        </button>
                    </div>

                    <div class="audience-card investors subtle-hover">
                        <h3>💰 Investors & Partners</h3>
                        <h4>Invest in the $1 Trillion Healthcare AI Market</h4>
                        <ul>
                            <li>Massive market opportunity with proven demand</li>
                            <li>20+ years healthcare industry expertise</li>
                            <li>Scalable AI solutions with global potential</li>
                            <li>Strong regulatory and compliance framework</li>
                        </ul>
                        <button class="cta-button investor-cta" onclick="window.location.href='mailto:andy@andysquire.ai?subject=Investment Opportunity Discussion'">
                            View Investment Deck
                        </button>
                    </div>

                    <div class="audience-card patients subtle-hover">
                        <h3>❤️ Patients & Advocates</h3>
                        <h4>Join the <span class="hashtag-highlight">#PatientFirstAI</span> Movement</h4>
                        <ul>
                            <li>Access patient empowerment tools like MyHealthStory</li>
                            <li>Join a supportive community of patient advocates</li>
                            <li>Contribute to better healthcare outcomes for all</li>
                            <li>Support cancer research through our initiatives</li>
                        </ul>
                        <button class="cta-button patient-cta" onclick="scrollToMyHealthStory()">
                            Download MyHealthStory
                        </button>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
    
    // Improve visual hierarchy
    function improveVisualHierarchy() {
        // Add better spacing and typography classes
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (!section.classList.contains('audience-ctas')) {
                section.classList.add('section-padding');
            }
        });
        
        // Enhance main headings
        const mainHeadings = document.querySelectorAll('h1, h2');
        mainHeadings.forEach(heading => {
            if (!heading.classList.contains('section-title')) {
                heading.classList.add('section-title');
            }
        });
        
        // Enhance subheadings
        const subHeadings = document.querySelectorAll('h3, h4');
        subHeadings.forEach(heading => {
            if (!heading.classList.contains('subsection-title')) {
                heading.classList.add('subsection-title');
            }
        });
        
        // Enhance PatientFirstAI hashtags
        const textNodes = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const textNodesArray = [];
        let node;
        while (node = textNodes.nextNode()) {
            if (node.textContent.includes('#PatientFirstAI')) {
                textNodesArray.push(node);
            }
        }
        
        textNodesArray.forEach(textNode => {
            const parent = textNode.parentNode;
            if (parent && parent.tagName !== 'SCRIPT' && parent.tagName !== 'STYLE') {
                const newHTML = textNode.textContent.replace(
                    /#PatientFirstAI/g, 
                    '<span class="hashtag-highlight">#PatientFirstAI</span>'
                );
                if (newHTML !== textNode.textContent) {
                    const wrapper = document.createElement('span');
                    wrapper.innerHTML = newHTML;
                    parent.replaceChild(wrapper, textNode);
                }
            }
        });
    }
    
    // Convert research section to cards (if exists)
    function enhanceResearchSection() {
        const headings = document.querySelectorAll('h1, h2, h3');
        let researchSection = null;
        
        headings.forEach(heading => {
            if (heading.textContent.includes('Research') && heading.textContent.includes('Innovation')) {
                researchSection = heading.closest('section') || heading.parentElement;
            }
        });
        
        if (researchSection) {
            researchSection.classList.add('research-cards');
            
            // Look for lists or content blocks that could be converted to cards
            const lists = researchSection.querySelectorAll('ul');
            if (lists.length > 0) {
                const cardGrid = document.createElement('div');
                cardGrid.className = 'card-grid';
                
                // Create sample research cards based on the content
                const researchCards = [
                    {
                        icon: '🏗️',
                        title: 'Healthcare Ecosystem Architecture',
                        description: 'Comprehensive business model framework with triple-win value creation for patients, healthcare providers, and robotics manufacturers.',
                        features: ['Data-driven business model (DDBM)', 'High-level business architecture', 'IT architecture integration', 'Stakeholder value propositions']
                    },
                    {
                        icon: '🤖',
                        title: 'Humanoid Healthcare Vision',
                        description: 'Strategic framework for $1 trillion AI humanoid healthcare market with focus on aging populations and chronic care.',
                        featured: true,
                        stat: { number: '$1T', label: 'Market Opportunity by 2040' }
                    },
                    {
                        icon: '📋',
                        title: 'MyHealthStory Initiative',
                        description: 'Patient empowerment tool designed from lived cancer experience to improve communication with medical teams.',
                        charity: '50% proceeds to Royal Marsden Cancer Charity'
                    }
                ];
                
                researchCards.forEach(card => {
                    const cardElement = createResearchCard(card);
                    cardGrid.appendChild(cardElement);
                });
                
                // Replace the first list with the card grid
                lists[0].parentNode.replaceChild(cardGrid, lists[0]);
            }
        }
    }
    
    // Create research card element - static, no animations
    function createResearchCard(card) {
        const cardDiv = document.createElement('div');
        cardDiv.className = `research-card ${card.featured ? 'featured' : ''} subtle-hover`; // Remove fade-in
        
        let cardContent = `
            <div class="card-icon">${card.icon}</div>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        `;
        
        if (card.features) {
            cardContent += `
                <ul class="feature-list">
                    ${card.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
        }
        
        if (card.stat) {
            cardContent += `
                <div class="market-stat">
                    <span class="stat-number">${card.stat.number}</span>
                    <span class="stat-label">${card.stat.label}</span>
                </div>
            `;
        }
        
        if (card.charity) {
            cardContent += `<div class="charity-badge">${card.charity}</div>`;
        }
        
        cardContent += `<button class="learn-more ${card.featured ? 'primary' : ''}">Learn More</button>`;
        
        cardDiv.innerHTML = cardContent;
        return cardDiv;
    }
    
    // Scroll to MyHealthStory section
    window.scrollToMyHealthStory = function() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        let myHealthStorySection = null;
        
        headings.forEach(heading => {
            if (heading.textContent.includes('MyHealthStory')) {
                myHealthStorySection = heading;
            }
        });
        
        if (myHealthStorySection) {
            myHealthStorySection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Initialize all improvements
    function initializeImprovements() {
        console.log('Initializing website improvements...');
        
        // Add CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'website-improvements.css';
        document.head.appendChild(link);
        
        // Wait a bit for the page to settle, then apply improvements
        setTimeout(() => {
            removeDuplicateSections(); // Remove duplicates first
            restructureWebsiteLayout(); // Apply new section structure
            createInsightDeck(); // Replace individual callouts with interactive deck
            replaceCollaborationSection();
            improveVisualHierarchy();
            enhanceResearchSection();
            fixVisualGlitches(); // Add function to fix card stacking and icons
            
            console.log('Website improvements applied successfully!');
        }, 2000);
    }
    
    // Fix visual glitches and replace problematic icons
    function fixVisualGlitches() {
        // Fix card stacking issues in Architecture section
        const architectureCards = document.querySelectorAll('.research-card, .card');
        architectureCards.forEach((card, index) => {
            // Ensure proper z-index and positioning
            card.style.position = 'relative';
            card.style.zIndex = '1';
            
            // Fix any overlapping issues
            if (card.style.marginTop === '' || card.style.marginTop === '0px') {
                card.style.marginTop = '0';
            }
        });
        
        // Replace crane icon with building/growth icon
        const craneIcons = document.querySelectorAll('svg, img, .icon');
        craneIcons.forEach(icon => {
            // Look for crane-like icons or construction icons that might be perceived negatively
            const iconContent = icon.innerHTML || icon.src || icon.alt || '';
            if (iconContent.includes('crane') || 
                iconContent.includes('demolish') || 
                iconContent.includes('tear') ||
                (icon.tagName === 'DIV' && icon.textContent === '🏗️')) {
                
                // Replace with building/growth icon
                if (icon.tagName === 'DIV') {
                    icon.textContent = '🏗️'; // Keep construction but ensure it's positive
                    icon.title = 'Building Healthcare Solutions';
                } else {
                    // Replace with a positive building SVG
                    icon.innerHTML = `
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 21h18"/>
                            <path d="M5 21V7l8-4v18"/>
                            <path d="M19 21V11l-6-4"/>
                            <path d="M9 9v.01"/>
                            <path d="M9 12v.01"/>
                            <path d="M9 15v.01"/>
                            <path d="M9 18v.01"/>
                        </svg>
                    `;
                    icon.setAttribute('title', 'Building Healthcare Infrastructure');
                }
            }
        });
        
        // Specifically look for and replace the crane icon in research cards
        const researchCards = document.querySelectorAll('.research-card');
        researchCards.forEach(card => {
            const iconElement = card.querySelector('.card-icon');
            if (iconElement && iconElement.textContent === '🏗️') {
                // Replace with a more positive building icon
                iconElement.innerHTML = `
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" stroke-width="2">
                        <rect x="4" y="2" width="16" height="20" rx="2"/>
                        <path d="M8 6h8"/>
                        <path d="M8 10h8"/>
                        <path d="M8 14h8"/>
                        <path d="M8 18h8"/>
                        <path d="M12 2v20"/>
                    </svg>
                `;
                iconElement.style.color = '#1e88e5';
                iconElement.setAttribute('title', 'Healthcare Architecture & Foundation');
            }
        });
        
        // Fix any broken "Learn More" buttons
        const learnMoreButtons = document.querySelectorAll('.learn-more, button[class*="learn"]');
        learnMoreButtons.forEach(button => {
            if (!button.onclick && !button.href) {
                // Add functionality to scroll to relevant section or contact
                button.onclick = function() {
                    // Try to find a relevant section to scroll to
                    const parentCard = button.closest('.research-card, .card');
                    if (parentCard) {
                        const cardTitle = parentCard.querySelector('h3, h4');
                        if (cardTitle && cardTitle.textContent.includes('MyHealthStory')) {
                            scrollToMyHealthStory();
                        } else {
                            // Default to contact
                            window.location.href = 'mailto:andy@andysquire.ai?subject=Learn More Request';
                        }
                    }
                };
                button.style.cursor = 'pointer';
            }
        });
        
        // Ensure all CTA buttons are functional
        const ctaButtons = document.querySelectorAll('.cta-button, button[class*="cta"]');
        ctaButtons.forEach(button => {
            if (!button.onclick && !button.href) {
                // Add default contact functionality
                button.onclick = function() {
                    const buttonText = button.textContent.toLowerCase();
                    let subject = 'General Inquiry';
                    
                    if (buttonText.includes('partnership')) {
                        subject = 'Partnership Inquiry';
                    } else if (buttonText.includes('consultation')) {
                        subject = 'Consultation Request';
                    } else if (buttonText.includes('investment')) {
                        subject = 'Investment Discussion';
                    } else if (buttonText.includes('download')) {
                        scrollToMyHealthStory();
                        return;
                    }
                    
                    window.location.href = `mailto:andy@andysquire.ai?subject=${encodeURIComponent(subject)}`;
                };
                button.style.cursor = 'pointer';
            }
        });
        
        console.log('Visual glitches fixed and icons updated');
    }
    
    // Start the improvements
    waitForPageLoad(initializeImprovements);
    
    // Also try to initialize after a delay in case the page is dynamically loaded
    setTimeout(initializeImprovements, 3000);
    
})();

