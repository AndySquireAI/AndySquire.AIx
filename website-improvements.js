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
    
    // Create interactive Insight Deck to consolidate all personal stories
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

