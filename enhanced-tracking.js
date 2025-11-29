/**
 * Enhanced Conversion Tracking & Event Analytics
 * PatientCentricCare.AI - Humanoid Healthcare SaMD Startup
 * Optimized for $6M Seed Round Investor Engagement
 */

// ============================================================================
// SCROLL DEPTH TRACKING
// ============================================================================
(function() {
  const scrollMilestones = [25, 50, 75, 100];
  const reached = {};
  
  function trackScrollDepth() {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    scrollMilestones.forEach(milestone => {
      if (scrollPercent >= milestone && !reached[milestone]) {
        reached[milestone] = true;
        
        gtag('event', 'scroll', {
          'event_category': 'Engagement',
          'event_label': milestone + '%',
          'value': milestone,
          'non_interaction': true
        });
        
        console.log('Scroll depth tracked:', milestone + '%');
      }
    });
  }
  
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(trackScrollDepth, 150);
  });
})();

// ============================================================================
// TIME ON PAGE TRACKING
// ============================================================================
(function() {
  const timeMilestones = [30, 60, 120, 300]; // seconds
  const reached = {};
  let startTime = Date.now();
  
  setInterval(function() {
    const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
    
    timeMilestones.forEach(milestone => {
      if (timeOnPage >= milestone && !reached[milestone]) {
        reached[milestone] = true;
        
        gtag('event', 'timing_complete', {
          'name': 'time_on_page',
          'value': milestone,
          'event_category': 'Engagement',
          'event_label': milestone + 's',
          'non_interaction': true
        });
        
        console.log('Time on page tracked:', milestone + 's');
      }
    });
  }, 5000); // Check every 5 seconds
})();

// ============================================================================
// OUTBOUND LINK TRACKING
// ============================================================================
document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (!link) return;
  
  const href = link.getAttribute('href');
  if (!href) return;
  
  // Track external links
  if (href.startsWith('http') && !href.includes('andysquire.ai')) {
    gtag('event', 'click', {
      'event_category': 'Outbound Link',
      'event_label': href,
      'transport_type': 'beacon'
    });
    console.log('Outbound link tracked:', href);
  }
  
  // Track mailto links
  if (href.startsWith('mailto:')) {
    gtag('event', 'email_click', {
      'event_category': 'Contact',
      'event_label': href.replace('mailto:', ''),
      'value': 10
    });
    console.log('Email link tracked:', href);
  }
  
  // Track tel links
  if (href.startsWith('tel:')) {
    gtag('event', 'phone_click', {
      'event_category': 'Contact',
      'event_label': href.replace('tel:', ''),
      'value': 15
    });
    console.log('Phone link tracked:', href);
  }
});

// ============================================================================
// BUTTON HOVER INTENT TRACKING
// ============================================================================
(function() {
  const trackedButtons = new Set();
  
  document.addEventListener('mouseover', function(e) {
    const button = e.target.closest('button, .grid-button, .cta-button, a[download]');
    if (!button) return;
    
    const buttonText = button.textContent.trim() || button.getAttribute('aria-label') || 'Unknown Button';
    const buttonId = buttonText + '_' + (button.className || 'no-class');
    
    if (!trackedButtons.has(buttonId)) {
      trackedButtons.add(buttonId);
      
      gtag('event', 'button_hover', {
        'event_category': 'Intent',
        'event_label': buttonText,
        'non_interaction': true
      });
      
      console.log('Button hover intent tracked:', buttonText);
    }
  });
})();

// ============================================================================
// ENHANCED FILE DOWNLOAD TRACKING
// ============================================================================
window.trackEnhancedDownload = function(fileName, fileType, buttonName, conversionValue) {
  // GA4 file_download event
  gtag('event', 'file_download', {
    'file_name': fileName,
    'file_extension': fileType,
    'link_text': buttonName,
    'event_category': 'Investor_Content',
    'event_label': fileName,
    'value': conversionValue || 50
  });
  
  // Enhanced ecommerce tracking (treat downloads as products)
  gtag('event', 'view_item', {
    'currency': 'CHF',
    'value': conversionValue || 50,
    'items': [{
      'item_id': fileName,
      'item_name': buttonName,
      'item_category': 'Investor Document',
      'item_category2': fileType.toUpperCase(),
      'price': conversionValue || 50
    }]
  });
  
  console.log('Enhanced download tracked:', fileName, 'Value:', conversionValue);
};

// ============================================================================
// VISIBILITY TRACKING (Page Visibility API)
// ============================================================================
(function() {
  let hiddenTime = null;
  
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      hiddenTime = Date.now();
    } else {
      if (hiddenTime) {
        const awayDuration = Math.floor((Date.now() - hiddenTime) / 1000);
        
        gtag('event', 'page_return', {
          'event_category': 'Engagement',
          'event_label': 'Returned after ' + awayDuration + 's',
          'value': awayDuration,
          'non_interaction': true
        });
        
        console.log('User returned after', awayDuration, 'seconds');
        hiddenTime = null;
      }
    }
  });
})();

// ============================================================================
// FORM INTERACTION TRACKING
// ============================================================================
document.addEventListener('focus', function(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    const fieldName = e.target.name || e.target.id || e.target.placeholder || 'Unknown Field';
    
    gtag('event', 'form_start', {
      'event_category': 'Form Interaction',
      'event_label': fieldName,
      'non_interaction': true
    });
    
    console.log('Form field focused:', fieldName);
  }
}, true);

// ============================================================================
// ERROR TRACKING (JavaScript Errors)
// ============================================================================
window.addEventListener('error', function(e) {
  gtag('event', 'exception', {
    'description': e.message + ' @ ' + e.filename + ':' + e.lineno,
    'fatal': false
  });
  
  console.error('JavaScript error tracked:', e.message);
});

// ============================================================================
// PERFORMANCE TRACKING
// ============================================================================
window.addEventListener('load', function() {
  setTimeout(function() {
    if (window.performance && window.performance.timing) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
      
      gtag('event', 'timing_complete', {
        'name': 'page_load',
        'value': pageLoadTime,
        'event_category': 'Performance',
        'event_label': 'Full Page Load'
      });
      
      gtag('event', 'timing_complete', {
        'name': 'dom_ready',
        'value': domReadyTime,
        'event_category': 'Performance',
        'event_label': 'DOM Ready'
      });
      
      console.log('Performance tracked - Page Load:', pageLoadTime + 'ms', 'DOM Ready:', domReadyTime + 'ms');
    }
  }, 0);
});

console.log('Enhanced tracking initialized for PatientCentricCare.AI');

