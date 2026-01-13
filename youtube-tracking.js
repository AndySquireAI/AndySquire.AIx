// YouTube Video Completion Tracking for Investor Pitch Video
// This script tracks when users complete watching the YouTube video

// YouTube IFrame API Integration
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var videoStarted = false;
var milestones = {
  '25': false,
  '50': false,
  '75': false,
  '100': false
};

// YouTube API Ready Callback
function onYouTubeIframeAPIReady() {
  // This will be called when a YouTube video is embedded
  console.log('YouTube IFrame API Ready');
}

// Track video progress milestones
function trackVideoProgress(percentage) {
  const videoTitle = 'Humanoid Healthcare Investor Pitch';
  
  if (percentage >= 25 && !milestones['25']) {
    milestones['25'] = true;
    gtag('event', 'video_progress', {
      'video_title': videoTitle,
      'video_percent': 25,
      'event_category': 'Investor_Content',
      'event_label': 'Video 25% Complete',
      'value': 5
    });
    console.log('Video 25% milestone tracked');
  }
  
  if (percentage >= 50 && !milestones['50']) {
    milestones['50'] = true;
    gtag('event', 'video_progress', {
      'video_title': videoTitle,
      'video_percent': 50,
      'event_category': 'Investor_Content',
      'event_label': 'Video 50% Complete',
      'value': 10
    });
    console.log('Video 50% milestone tracked');
  }
  
  if (percentage >= 75 && !milestones['75']) {
    milestones['75'] = true;
    gtag('event', 'video_progress', {
      'video_title': videoTitle,
      'video_percent': 75,
      'event_category': 'Investor_Content',
      'event_label': 'Video 75% Complete',
      'value': 15
    });
    console.log('Video 75% milestone tracked');
  }
  
  if (percentage >= 90 && !milestones['100']) {
    milestones['100'] = true;
    // Call the main tracking function
    trackVideoComplete(videoTitle, 100);
    
    // Also fire Google Ads conversion
    gtag('event', 'conversion', {
      'send_to': 'AW-290924137/video123',  // You'll need to create this conversion ID
      'value': 20.00,
      'currency': 'GBP',
      'transaction_id': 'VIDEO_COMPLETE_' + Date.now()
    });
    
    console.log('Video completion milestone tracked');
  }
}

// Alternative tracking for direct YouTube links (when video opens in new tab)
// This uses localStorage to track if user came from our site
function initializeVideoTracking() {
  // Set a flag when user clicks our video link
  const videoLinks = document.querySelectorAll('a[href*="youtube.com/watch"]');
  videoLinks.forEach(link => {
    link.addEventListener('click', function() {
      localStorage.setItem('video_clicked_from_site', 'true');
      localStorage.setItem('video_click_time', Date.now().toString());
    });
  });
}

// Check if user returned from YouTube (simplified tracking)
function checkVideoReturn() {
  const videoClicked = localStorage.getItem('video_clicked_from_site');
  const clickTime = localStorage.getItem('video_click_time');
  
  if (videoClicked && clickTime) {
    const timeSpent = Date.now() - parseInt(clickTime);
    const minutesSpent = timeSpent / (1000 * 60);
    
    // If user spent more than 3 minutes away (reasonable for watching video)
    if (minutesSpent > 3) {
      gtag('event', 'video_engagement', {
        'video_title': 'Humanoid Healthcare Investor Pitch',
        'time_away_minutes': Math.round(minutesSpent),
        'event_category': 'Investor_Content',
        'event_label': 'Likely Video Watched',
        'value': 15
      });
      
      console.log('Video engagement tracked - user spent', Math.round(minutesSpent), 'minutes away');
    }
    
    // Clear the flags
    localStorage.removeItem('video_clicked_from_site');
    localStorage.removeItem('video_click_time');
  }
}

// Initialize tracking when page loads
document.addEventListener('DOMContentLoaded', function() {
  initializeVideoTracking();
  checkVideoReturn();
});

// For embedded YouTube videos (if you decide to embed instead of linking)
function onPlayerReady(event) {
  console.log('YouTube player ready');
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !videoStarted) {
    videoStarted = true;
    console.log('Video started playing');
  }
  
  if (event.data == YT.PlayerState.PLAYING) {
    // Track progress every 5 seconds while playing
    setInterval(function() {
      if (player && player.getCurrentTime && player.getDuration) {
        const currentTime = player.getCurrentTime();
        const duration = player.getDuration();
        const percentage = (currentTime / duration) * 100;
        trackVideoProgress(percentage);
      }
    }, 5000);
  }
}
