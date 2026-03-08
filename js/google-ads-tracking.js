// Google Ads Conversion Tracking for AndySquire.AI eLibrary
// Add this code to your website to track conversions

// ========================================
// 1. Article Engagement Tracking (2+ min read)
// ========================================
function trackArticleEngagement() {
  let timeOnPage = 0;
  const interval = setInterval(() => {
    timeOnPage += 1;
    if (timeOnPage >= 120) { // 2 minutes
      gtag('event', 'conversion', {
        'send_to': 'AW-290924137/article_engagement',
        'value': 5.00,
        'currency': 'GBP',
        'transaction_id': 'ARTICLE_' + Date.now()
      });
      clearInterval(interval);
    }
  }, 1000);
}

// Auto-start tracking on page load for blog articles
if (window.location.pathname.includes('/blog/blog-post-')) {
  trackArticleEngagement();
}

// ========================================
// 2. Newsletter Signup Tracking
// ========================================
function trackNewsletterSignup(email) {
  gtag('event', 'conversion', {
    'send_to': 'AW-290924137/newsletter_signup',
    'value': 15.00,
    'currency': 'GBP',
    'transaction_id': 'NEWSLETTER_' + Date.now()
  });
  
  gtag('event', 'newsletter_subscribe', {
    'event_category': 'engagement',
    'event_label': email,
    'value': 15
  });
}

// ========================================
// 3. Consultation Booking Tracking
// ========================================
function trackConsultationBooking(service) {
  gtag('event', 'conversion', {
    'send_to': 'AW-290924137/consultation_booking',
    'value': 50.00,
    'currency': 'GBP',
    'transaction_id': 'CONSULT_' + Date.now()
  });
  
  gtag('event', 'book_consultation', {
    'event_category': 'conversion',
    'event_label': service,
    'value': 50
  });
}

// ========================================
// 4. eBook/Resource Download Tracking
// ========================================
function trackResourceDownload(resourceName) {
  gtag('event', 'conversion', {
    'send_to': 'AW-290924137/resource_download',
    'value': 10.00,
    'currency': 'GBP',
    'transaction_id': 'DOWNLOAD_' + Date.now()
  });
  
  gtag('event', 'download', {
    'event_category': 'engagement',
    'event_label': resourceName,
    'value': 10
  });
}

// ========================================
// 5. Social Share Tracking
// ========================================
function trackSocialShare(platform, articleTitle) {
  gtag('event', 'share', {
    'method': platform,
    'content_type': 'article',
    'item_id': articleTitle
  });
  
  gtag('event', 'conversion', {
    'send_to': 'AW-290924137/social_share',
    'value': 2.00,
    'currency': 'GBP'
  });
}

// ========================================
// 6. Category Filter Tracking
// ========================================
function trackCategoryFilter(category) {
  gtag('event', 'filter', {
    'event_category': 'navigation',
    'event_label': category
  });
}

// ========================================
// 7. Scroll Depth Tracking
// ========================================
let scrollDepthTracked = {
  '25': false,
  '50': false,
  '75': false,
  '100': false
};

window.addEventListener('scroll', function() {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
  if (scrollPercent >= 25 && !scrollDepthTracked['25']) {
    gtag('event', 'scroll', {
      'event_category': 'engagement',
      'event_label': '25%',
      'value': 25
    });
    scrollDepthTracked['25'] = true;
  }
  
  if (scrollPercent >= 50 && !scrollDepthTracked['50']) {
    gtag('event', 'scroll', {
      'event_category': 'engagement',
      'event_label': '50%',
      'value': 50
    });
    scrollDepthTracked['50'] = true;
  }
  
  if (scrollPercent >= 75 && !scrollDepthTracked['75']) {
    gtag('event', 'scroll', {
      'event_category': 'engagement',
      'event_label': '75%',
      'value': 75
    });
    scrollDepthTracked['75'] = true;
  }
  
  if (scrollPercent >= 100 && !scrollDepthTracked['100']) {
    gtag('event', 'scroll', {
      'event_category': 'engagement',
      'event_label': '100%',
      'value': 100
    });
    scrollDepthTracked['100'] = true;
    
    gtag('event', 'conversion', {
      'send_to': 'AW-290924137/article_complete',
      'value': 5.00,
      'currency': 'GBP'
    });
  }
});

