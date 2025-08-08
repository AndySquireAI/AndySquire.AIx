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
    
    // Add personal story callouts
    function addPersonalStoryCallouts() {
        // Find sections to add callouts to
        const sections = [
            {
                selector: 'h2, h3',
                searchText: 'Humanoid Healthcare',
                callout: {
                    quote: "During my treatment, I wished for 24/7 support that truly understood my needs. This personal experience drives our humanoid healthcare vision.",
                    attribution: "Andy Squire, Founder & CEO"
                }
            },
            {
                selector: 'h2, h3',
                searchText: 'MyHealthStory',
                callout: {
                    quote: "Born from my frustration with fragmented medical records during treatment, MyHealthStory puts patients back in control of their health narrative.",
                    attribution: "Andy Squire, Cancer Survivor"
                }
            },
            {
                selector: 'h2, h3',
                searchText: 'Research',
                callout: {
                    quote: "Every innovation we develop starts with a simple question: 'How would this have helped me during my cancer journey?' Patient needs must drive technology, not the other way around.",
                    attribution: "Andy Squire, Patient Advocate"
                }
            }
        ];
        
        sections.forEach(section => {
            const headings = document.querySelectorAll(section.selector);
            headings.forEach(heading => {
                if (heading.textContent.includes(section.searchText)) {
                    const calloutElement = createCalloutElement(section.callout);
                    // Insert after the heading's parent section
                    const parentSection = heading.closest('section') || heading.parentElement;
                    if (parentSection && parentSection.nextSibling) {
                        parentSection.parentNode.insertBefore(calloutElement, parentSection.nextSibling);
                    } else if (parentSection) {
                        parentSection.parentNode.appendChild(calloutElement);
                    }
                }
            });
        });
    }
    
    // Create callout element
    function createCalloutElement(callout) {
        const calloutDiv = document.createElement('div');
        calloutDiv.className = 'founder-insight fade-in';
        calloutDiv.innerHTML = `
            <div class="insight-content">
                <img src="assets/andy-headshot-BurDoHN4.jpeg" alt="Andy Squire" class="insight-avatar" onerror="this.style.display='none'">
                <blockquote>
                    ${callout.quote}
                    <cite>${callout.attribution}</cite>
                </blockquote>
            </div>
        `;
        return calloutDiv;
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
                    <div class="audience-card robotics fade-in">
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

                    <div class="audience-card healthcare fade-in">
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

                    <div class="audience-card investors fade-in">
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

                    <div class="audience-card patients fade-in">
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
    
    // Create research card element
    function createResearchCard(card) {
        const cardDiv = document.createElement('div');
        cardDiv.className = `research-card ${card.featured ? 'featured' : ''} fade-in`;
        
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
    
    // Add animation on scroll
    function addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.1s';
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate
        setTimeout(() => {
            const animatedElements = document.querySelectorAll('.founder-insight, .audience-card, .research-card');
            animatedElements.forEach(el => observer.observe(el));
        }, 1000);
    }
    
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
            addPersonalStoryCallouts();
            replaceCollaborationSection();
            improveVisualHierarchy();
            enhanceResearchSection();
            addScrollAnimations();
            
            console.log('Website improvements applied successfully!');
        }, 2000);
    }
    
    // Start the improvements
    waitForPageLoad(initializeImprovements);
    
    // Also try to initialize after a delay in case the page is dynamically loaded
    setTimeout(initializeImprovements, 3000);
    
})();

