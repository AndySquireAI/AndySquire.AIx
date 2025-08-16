// Page Restructure Script - Step 1: Patient-First Flow
// Reorders sections to prioritize MyHealthStory forms over personal branding

function restructurePageForPatientFirst() {
  console.log('Starting page restructure for patient-first flow...');
  
  // Wait for the page to be fully loaded
  if (document.readyState !== 'complete') {
    setTimeout(restructurePageForPatientFirst, 100);
    return;
  }

  // Wait for React to render the content
  const rootElement = document.getElementById('root');
  if (!rootElement || !rootElement.children.length) {
    setTimeout(restructurePageForPatientFirst, 200);
    return;
  }

  try {
    // Find all main sections by looking for common patterns
    const allSections = document.querySelectorAll('section, div[class*="section"], div[class*="container"]');
    
    // Identify sections by their content
    let heroSection = null;
    let myHealthStorySection = null;
    let aboutSection = null;
    let partnerSection = null;
    let testimonialSection = null;
    let researchSection = null;
    let humanoidSection = null;
    let ecosystemSection = null;
    
    // Find sections by their headings and content
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach(heading => {
      const text = heading.textContent.toLowerCase();
      const section = heading.closest('section') || heading.closest('div[class*="section"]') || heading.closest('div[class*="container"]');
      
      if (!section) return;
      
      // Identify sections by their content
      if (text.includes('founder') && text.includes('ceo') || text.includes('humanoid healthcare') && section.querySelector('img')) {
        heroSection = section;
      } else if (text.includes('myhealthstory') && text.includes('pdf')) {
        myHealthStorySection = section;
      } else if (text.includes('about andy squire')) {
        aboutSection = section;
      } else if (text.includes('partner') && text.includes('future')) {
        partnerSection = section;
      } else if (text.includes('experience') && text.includes('drives')) {
        testimonialSection = section;
      } else if (text.includes('research') && text.includes('innovation')) {
        researchSection = section;
      } else if (text.includes('humanoid healthcare initiative')) {
        humanoidSection = section;
      } else if (text.includes('ecosystem') && text.includes('architecture')) {
        ecosystemSection = section;
      }
    });

    // If we can't find sections by headings, try alternative methods
    if (!myHealthStorySection) {
      // Look for PayPal buttons or form elements
      const paypalElements = document.querySelectorAll('[id*="paypal"], [class*="paypal"]');
      if (paypalElements.length > 0) {
        myHealthStorySection = paypalElements[0].closest('section') || paypalElements[0].closest('div[class*="section"]');
      }
    }

    console.log('Found sections:', {
      hero: !!heroSection,
      myHealthStory: !!myHealthStorySection,
      about: !!aboutSection,
      partner: !!partnerSection,
      testimonial: !!testimonialSection,
      research: !!researchSection,
      humanoid: !!humanoidSection,
      ecosystem: !!ecosystemSection
    });

    // Find the main container
    const mainContainer = heroSection?.parentElement || document.querySelector('main') || rootElement;
    
    if (!mainContainer) {
      console.log('Could not find main container, retrying...');
      setTimeout(restructurePageForPatientFirst, 500);
      return;
    }

    // Create the new order array (only include sections that exist)
    const newOrder = [
      heroSection,           // 1. New Hero Section (will be updated in next step)
      myHealthStorySection,  // 2. MyHealthStory Forms & Charity Section  
      partnerSection,        // 3. Consulting Section (will be separated later)
      humanoidSection,       // 4. Humanoid Healthcare Collaboration Section
      researchSection,       // 5. Research & Innovation
      ecosystemSection,      // 6. Ecosystem Architecture
      testimonialSection,    // 7. Testimonials
      aboutSection          // 8. About Andy Squire Section (moved to bottom)
    ].filter(section => section !== null);

    // Reorder the sections
    newOrder.forEach((section, index) => {
      if (section && section.parentElement === mainContainer) {
        mainContainer.appendChild(section);
      }
    });

    // Update the MyHealthStory section title to include the new branding
    if (myHealthStorySection) {
      const myHealthStoryHeading = myHealthStorySection.querySelector('h1, h2, h3, h4, h5, h6');
      if (myHealthStoryHeading && myHealthStoryHeading.textContent.includes('MyHealthStory')) {
        // For now, just ensure it's properly positioned - we'll update content in next step
        console.log('MyHealthStory section repositioned successfully');
      }
    }

    // Add a visual indicator that restructuring is complete
    const indicator = document.createElement('div');
    indicator.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: #10B981;
      color: white;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: bold;
      z-index: 9999;
      opacity: 0.9;
    `;
    indicator.textContent = 'Step 1: Page Restructured ✓';
    document.body.appendChild(indicator);

    // Remove indicator after 3 seconds
    setTimeout(() => {
      if (indicator.parentElement) {
        indicator.parentElement.removeChild(indicator);
      }
    }, 3000);

    console.log('Page restructure completed successfully!');
    
  } catch (error) {
    console.error('Error during page restructure:', error);
    setTimeout(restructurePageForPatientFirst, 1000);
  }
}

// Start the restructuring process when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', restructurePageForPatientFirst);
} else {
  restructurePageForPatientFirst();
}

// Also run after a delay to catch any late-loading content
setTimeout(restructurePageForPatientFirst, 2000);

