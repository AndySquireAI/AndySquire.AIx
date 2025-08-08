// Visual Hierarchy Enhancement Script
document.addEventListener('DOMContentLoaded', function() {
    // Wait for the page to fully load before applying enhancements
    setTimeout(applyVisualHierarchy, 1000);
});

function applyVisualHierarchy() {
    console.log('🎨 Applying Visual Hierarchy improvements...');
    
    // Apply section titles
    applySectionTitles();
    
    // Apply subsection titles
    applySubsectionTitles();
    
    // Apply section padding
    applySectionPadding();
    
    // Apply hashtag highlighting
    applyHashtagHighlighting();
    
    // Apply enhanced typography
    applyEnhancedTypography();
    
    // Apply list improvements
    applyListImprovements();
    
    console.log('✅ Visual Hierarchy improvements applied successfully');
}

function applySectionTitles() {
    // Find main section headings and apply section-title class
    const headings = document.querySelectorAll('h1, h2');
    
    headings.forEach(heading => {
        const text = heading.textContent.toLowerCase();
        
        // Main hero title - apply hero-specific styling
        if (text.includes('founder') && text.includes('ceo')) {
            heading.classList.add('hero-title');
            // Ensure proper line breaks for hero title
            if (heading.innerHTML.includes('Humanoid Healthcare')) {
                heading.innerHTML = heading.innerHTML.replace(
                    /(Founder & CEO,)\s*(Humanoid Healthcare)/i,
                    '$1<br>$2'
                );
            }
        }
        // Other major section headings
        else if (text.includes('partner with') || 
                 text.includes('research') || 
                 text.includes('innovation') ||
                 text.includes('myhealthstory') ||
                 text.includes('experience') ||
                 text.includes('about')) {
            heading.classList.add('section-title');
        }
    });
    
    console.log('📝 Section titles enhanced');
}

function applySubsectionTitles() {
    // Find subsection headings and apply subsection-title class
    const subheadings = document.querySelectorAll('h3, h4');
    
    subheadings.forEach(heading => {
        const text = heading.textContent.toLowerCase();
        
        // Card titles and subsection headings
        if (text.includes('robotics') || 
            text.includes('healthcare institutions') ||
            text.includes('investors') ||
            text.includes('patients') ||
            text.includes('advocates') ||
            text.includes('ecosystem') ||
            text.includes('vision') ||
            text.includes('initiative')) {
            heading.classList.add('subsection-title');
        }
        // Smaller subsection titles
        else if (heading.tagName === 'H4') {
            heading.classList.add('subsection-title', 'small');
        }
    });
    
    console.log('📋 Subsection titles enhanced');
}

function applySectionPadding() {
    // Find main sections and apply appropriate padding
    const sections = document.querySelectorAll('section, div[class*="section"], main > div');
    
    sections.forEach(section => {
        // Skip if already has padding classes
        if (section.classList.contains('section-padding')) return;
        
        const content = section.textContent.toLowerCase();
        
        // Hero sections get large padding
        if (content.includes('founder') && content.includes('ceo')) {
            section.classList.add('section-padding', 'large');
        }
        // CTA sections get standard padding
        else if (content.includes('partner with') || 
                 content.includes('robotics manufacturers')) {
            section.classList.add('section-padding');
        }
        // Other sections get standard padding
        else if (section.children.length > 0) {
            section.classList.add('section-padding');
        }
    });
    
    console.log('📏 Section padding applied');
}

function applyHashtagHighlighting() {
    // Find and highlight hashtags
    const textNodes = getTextNodes(document.body);
    
    textNodes.forEach(node => {
        const text = node.textContent;
        if (text.includes('#')) {
            const parent = node.parentElement;
            if (parent && !parent.classList.contains('hashtag-highlight')) {
                // Replace hashtags with highlighted spans
                const highlightedText = text.replace(
                    /(#\w+)/g, 
                    '<span class="hashtag-highlight">$1</span>'
                );
                
                if (highlightedText !== text) {
                    parent.innerHTML = parent.innerHTML.replace(text, highlightedText);
                }
            }
        }
    });
    
    console.log('🏷️ Hashtags highlighted');
}

function applyEnhancedTypography() {
    // Apply enhanced text styling to paragraphs and descriptions
    const paragraphs = document.querySelectorAll('p');
    
    paragraphs.forEach(p => {
        // Skip if already enhanced or is a button/link
        if (p.classList.contains('enhanced-text') || 
            p.classList.contains('hero-description') ||
            p.closest('button') || 
            p.closest('a')) return;
        
        const text = p.textContent;
        
        // Hero description gets special white styling
        if (text.includes('Translating lived cancer experience') ||
            text.includes('AI-enabled home rehabilitation')) {
            p.classList.add('hero-description');
        }
        // Hero description gets large enhanced text
        else if (text.includes('Translating lived cancer experience') ||
            text.includes('AI-enabled home rehabilitation')) {
            p.classList.add('enhanced-text', 'large');
        }
        // Other paragraphs get standard enhanced text
        else if (text.length > 50) {
            p.classList.add('enhanced-text');
        }
    });
    
    // Apply content spacing to containers
    const containers = document.querySelectorAll('div, section');
    containers.forEach(container => {
        const children = Array.from(container.children);
        if (children.length > 2 && 
            children.some(child => child.tagName === 'P' || child.tagName.match(/H[1-6]/))) {
            container.classList.add('content-spacing');
        }
    });
    
    console.log('✍️ Enhanced typography applied');
}

function applyListImprovements() {
    // Find and enhance lists
    const lists = document.querySelectorAll('ul');
    
    lists.forEach(list => {
        // Skip if already enhanced or is a navigation list
        if (list.classList.contains('enhanced-list') || 
            list.classList.contains('bullet-list') ||
            list.closest('nav') ||
            list.classList.contains('benefits-list')) return;
        
        const items = list.querySelectorAll('li');
        if (items.length > 0) {
            // Check if it's the Robotics Manufacturers section
            const parentText = list.closest('div, section')?.textContent.toLowerCase() || '';
            const isRoboticsSection = parentText.includes('robotics manufacturers') ||
                                    parentText.includes('multiple revenue streams') ||
                                    parentText.includes('subscription models');
            
            if (isRoboticsSection) {
                // Use bullet points for Robotics Manufacturers for consistency
                list.classList.add('bullet-list');
            } else {
                // Check if it's a feature/benefit list for other sections
                const hasFeatureText = Array.from(items).some(item => {
                    const text = item.textContent.toLowerCase();
                    return text.includes('partnership') || 
                           text.includes('market') || 
                           text.includes('patient') ||
                           text.includes('communication') ||
                           text.includes('research') ||
                           text.includes('enhanced') ||
                           text.includes('reduced') ||
                           text.includes('streamlined');
                });
                
                if (hasFeatureText) {
                    list.classList.add('enhanced-list');
                }
            }
        }
    });
    
    console.log('📋 Lists enhanced');
}

function getTextNodes(element) {
    const textNodes = [];
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                // Skip script and style elements
                if (node.parentElement.tagName === 'SCRIPT' || 
                    node.parentElement.tagName === 'STYLE') {
                    return NodeFilter.FILTER_REJECT;
                }
                // Only include text nodes with actual content
                if (node.textContent.trim().length > 0) {
                    return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_REJECT;
            }
        }
    );
    
    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    return textNodes;
}

// Apply button enhancements
function applyButtonEnhancements() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.classList.contains('enhanced-button')) {
            button.classList.add('enhanced-button');
        }
    });
}

// Initialize button enhancements
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(applyButtonEnhancements, 1200);
    setTimeout(applyDarkBackgroundFixes, 1300);
    setTimeout(removeDoubleBullets, 1400);
});

// Apply dark background text fixes
function applyDarkBackgroundFixes() {
    // Find sections with dark backgrounds and apply white text
    const darkSections = document.querySelectorAll('section, div');
    
    darkSections.forEach(section => {
        const computedStyle = window.getComputedStyle(section);
        const bgColor = computedStyle.backgroundColor;
        const bgImage = computedStyle.backgroundImage;
        
        // Check if section has dark background
        const isDarkBg = bgColor.includes('rgb(26, 32, 44)') || // dark navy
                        bgColor.includes('rgb(45, 55, 72)') ||  // dark grey
                        bgColor.includes('rgb(23, 25, 35)') ||  // very dark
                        section.style.backgroundColor?.includes('dark') ||
                        section.classList.contains('bg-dark') ||
                        section.classList.contains('dark-bg');
        
        if (isDarkBg) {
            section.classList.add('dark-bg-text');
            
            // Also apply to child elements
            const textElements = section.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
            textElements.forEach(el => {
                if (!el.closest('button') && !el.closest('a')) {
                    el.style.color = '#ffffff';
                }
            });
        }
    });
    
    console.log('🌙 Dark background text fixes applied');
}

// Remove double bullets and fix list styling
function removeDoubleBullets() {
    // Find all lists and remove double bullet styling
    const allLists = document.querySelectorAll('ul, ol');
    
    allLists.forEach(list => {
        // Remove any enhanced-list or bullet-list classes that create double bullets
        if (list.classList.contains('enhanced-list') || list.classList.contains('bullet-list')) {
            // Check if this list is creating double bullets
            const items = list.querySelectorAll('li');
            items.forEach(item => {
                // If the item already has a bullet/checkmark in the text, remove our CSS bullets
                const text = item.textContent.trim();
                if (text.startsWith('•') || text.startsWith('✓') || text.startsWith('✔')) {
                    item.style.listStyle = 'none';
                    item.style.paddingLeft = '0';
                    if (item.querySelector('::before')) {
                        item.style.position = 'static';
                    }
                }
            });
        }
        
        // For CTA card lists, ensure they only have small bullets next to text
        const parentCard = list.closest('[class*="card"], [class*="cta"]');
        if (parentCard) {
            list.style.listStyle = 'none';
            list.style.padding = '0';
            
            const items = list.querySelectorAll('li');
            items.forEach(item => {
                item.style.listStyle = 'none';
                item.style.paddingLeft = '0';
                item.style.position = 'static';
                
                // Remove any CSS-generated bullets
                const beforeStyle = window.getComputedStyle(item, '::before');
                if (beforeStyle.content && beforeStyle.content !== 'none') {
                    item.classList.remove('enhanced-list', 'bullet-list');
                }
            });
        }
    });
    
    console.log('🔧 Double bullets removed');
}


            });
        }
    });
    
    // Specifically target CTA cards and remove double bullets
    const ctaCards = document.querySelectorAll('[class*="card"], [class*="cta"], .audience-ctas div');
    ctaCards.forEach(card => {
        const lists = card.querySelectorAll('ul');
        lists.forEach(list => {
            // Remove all CSS-generated bullets for CTA cards
            list.classList.remove('enhanced-list', 'bullet-list');
            list.style.listStyle = 'none';
            list.style.padding = '0';
            
            const items = list.querySelectorAll('li');
            items.forEach(item => {
                item.style.listStyle = 'none';
                item.style.paddingLeft = '0';
                item.style.position = 'static';
                
                // Remove CSS pseudo-elements
                item.classList.remove('enhanced-list', 'bullet-list');
                
                // Add inline style to override any CSS bullets
                item.style.setProperty('list-style', 'none', 'important');
                item.style.setProperty('padding-left', '0', 'important');
                item.style.setProperty('position', 'static', 'important');
            });
        });
    });
    
    console.log('🔧 Double bullets removed and list consistency applied');
}

