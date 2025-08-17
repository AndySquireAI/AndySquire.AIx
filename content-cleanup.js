// Phase 1: Content Cleanup Script
// Remove excessive "Andy-focused" content and prepare for patient-centric design

function performContentCleanup() {
  console.log('🧹 Starting Phase 1: Content Cleanup...');
  
  // Wait for page to be fully loaded
  if (document.readyState !== 'complete') {
    setTimeout(performContentCleanup, 100);
    return;
  }

  // 1. Update Hero Section - Remove excessive personal branding
  updateHeroSection();
  
  // 2. Simplify About Section - Move detailed bio content to bottom
  simplifyAboutSection();
  
  // 3. Clean up testimonial carousel - Reduce Andy-focused quotes
  cleanupTestimonials();
  
  // 4. Hide/comment sections not in new design
  hideUnnecessarySections();
  
  console.log('✅ Phase 1: Content Cleanup completed');
}

function updateHeroSection() {
  // Find hero section
  const heroElements = document.querySelectorAll('h1, h2, h3');
  
  for (let element of heroElements) {
    // Update overly personal hero title
    if (element.textContent.includes('Founder & CEO, Humanoid Healthcare')) {
      element.textContent = 'Patient-Centric Healthcare Innovation';
      console.log('✅ Updated hero title to be less Andy-focused');
    }
    
    // Update subtitle to be more patient-focused
    if (element.textContent.includes('Translating lived cancer experience')) {
      element.textContent = 'Empowering patients with AI-enabled healthcare solutions for better outcomes';
      console.log('✅ Updated hero subtitle to focus on patient value');
    }
  }
  
  // Find and update hashtag
  const hashtags = document.querySelectorAll('*');
  for (let element of hashtags) {
    if (element.textContent.includes('#PatientFirstAI')) {
      // Keep the hashtag but make it less personal
      element.innerHTML = element.innerHTML.replace('#PatientFirstAI', '<span style="color: #3B82F6;">#PatientCentricCare</span>');
      console.log('✅ Updated hashtag to #PatientCentricCare');
    }
  }
}

function simplifyAboutSection() {
  // Find About Andy Squire section
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  for (let heading of headings) {
    if (heading.textContent.includes('About Andy Squire')) {
      const aboutSection = heading.closest('section') || heading.parentElement;
      
      if (aboutSection) {
        // Add a comment to move this section later
        const comment = document.createComment('PHASE 1: This About section will be moved to bottom and simplified in later phases');
        aboutSection.parentNode.insertBefore(comment, aboutSection);
        
        // Temporarily hide excessive bio details
        const bioDetails = aboutSection.querySelectorAll('p');
        bioDetails.forEach((p, index) => {
          if (index > 0) { // Keep first paragraph, hide others
            p.style.display = 'none';
          }
        });
        
        // Hide Professional Network section
        const professionalSection = aboutSection.querySelector('*[class*="Professional"], *[class*="Network"]');
        if (professionalSection) {
          professionalSection.style.display = 'none';
        }
        
        console.log('✅ Simplified About section - detailed bio content hidden');
      }
    }
  }
}

function cleanupTestimonials() {
  // Find testimonial carousel
  const testimonials = document.querySelectorAll('*');
  
  for (let element of testimonials) {
    // Look for Andy Squire quotes in testimonials
    if (element.textContent.includes('Andy Squire') && 
        (element.textContent.includes('Founder & CEO') || 
         element.textContent.includes('Patient Advocate') ||
         element.textContent.includes('Healthcare Innovator'))) {
      
      // Hide excessive Andy quotes, keep patient stories
      const testimonialCard = element.closest('[class*="testimonial"], [class*="card"], [class*="slide"]');
      if (testimonialCard && element.textContent.includes('Andy Squire')) {
        testimonialCard.style.opacity = '0.3';
        testimonialCard.style.pointerEvents = 'none';
        console.log('✅ Reduced visibility of Andy-focused testimonial');
      }
    }
  }
}

function hideUnnecessarySections() {
  // Hide sections that won't be in the new patient-centric design
  const sectionsToHide = [
    'Professional Network & Recognition',
    'LinkedIn Network',
    'Professional Recommendations'
  ];
  
  const allElements = document.querySelectorAll('*');
  
  for (let element of allElements) {
    for (let sectionName of sectionsToHide) {
      if (element.textContent.includes(sectionName)) {
        const section = element.closest('section') || element.parentElement;
        if (section) {
          section.style.display = 'none';
          const comment = document.createComment(`PHASE 1: Hidden section - ${sectionName} - will be removed in later phases`);
          section.parentNode.insertBefore(comment, section);
          console.log(`✅ Hidden section: ${sectionName}`);
        }
      }
    }
  }
}

// Initialize content cleanup when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', performContentCleanup);
} else {
  performContentCleanup();
}

// Also run after a delay to catch dynamically loaded content
setTimeout(performContentCleanup, 2000);
setTimeout(performContentCleanup, 5000);

