# Google Ads Conversion Tracking Implementation Guide

## Overview
This document outlines the implementation of Google Ads conversion tracking for 4 key investor actions on andysquire.ai.

## Conversion Actions Created in Google Ads

### 1. Watch Full Investor Video
- **Conversion Name:** Watch full investor video
- **Value:** 50 CHF
- **Category:** Sign-up
- **Trigger:** When user clicks "Watch Now" button for investor pitch video
- **Function:** `trackWatchInvestorVideo()`

### 2. Download Investor Deck
- **Conversion Name:** Download Investor Deck
- **Value:** 75 CHF
- **Category:** Sign-up
- **Trigger:** When user downloads InvestorDeck-HumanoidHealthcare.pdf
- **Function:** `trackDownloadInvestorDeck()`

### 3. Download Regulatory Plan
- **Conversion Name:** Download Regulatory Plan
- **Value:** 60 CHF
- **Category:** Sign-up
- **Trigger:** When user downloads UpdatedSept25HumanoidRegulatoryPathway.pdf
- **Function:** `trackDownloadRegulatoryPlan()`

### 4. Download SaMD Feature Infographic
- **Conversion Name:** Download SaMD Feature Infographic
- **Value:** 40 CHF
- **Category:** Sign-up
- **Trigger:** When user downloads SaMDFeaturesInfographic.pdf
- **Function:** `trackDownloadSaMDInfographic()`

## Implementation Details

### JavaScript Functions Added
All new conversion tracking functions have been added to the `<head>` section of index.html:

```javascript
// 1. Watch Full Investor Video Conversion
function trackWatchInvestorVideo() {
  gtag('event', 'conversion', {
    'send_to': 'AW-290924137/watch_video_conversion_id',
    'value': 50.00,
    'currency': 'CHF',
    'transaction_id': 'WATCH_INVESTOR_VIDEO_' + Date.now()
  });
}

// 2. Download Investor Deck Conversion
function trackDownloadInvestorDeck() {
  gtag('event', 'conversion', {
    'send_to': 'AW-290924137/download_deck_conversion_id',
    'value': 75.00,
    'currency': 'CHF',
    'transaction_id': 'DOWNLOAD_INVESTOR_DECK_' + Date.now()
  });
}

// 3. Download Regulatory Plan Conversion
function trackDownloadRegulatoryPlan() {
  gtag('event', 'conversion', {
    'send_to': 'AW-290924137/download_regulatory_conversion_id',
    'value': 60.00,
    'currency': 'CHF',
    'transaction_id': 'DOWNLOAD_REGULATORY_PLAN_' + Date.now()
  });
}

// 4. Download SaMD Feature Infographic Conversion
function trackDownloadSaMDInfographic() {
  gtag('event', 'conversion', {
    'send_to': 'AW-290924137/download_samd_conversion_id',
    'value': 40.00,
    'currency': 'CHF',
    'transaction_id': 'DOWNLOAD_SAMD_INFOGRAPHIC_' + Date.now()
  });
}
```

### Button Updates
All relevant buttons in the Humanoid Healthcare section have been updated to call the new tracking functions:

1. **Watch Now Button:** Now calls `trackWatchInvestorVideo()`
2. **Download Investor Deck:** Now calls `trackDownloadInvestorDeck()`
3. **Download Regulatory Path Forwards:** Now calls `trackDownloadRegulatoryPlan()`
4. **Download SaMD Features Infographic:** Already calls `trackDownloadSaMDInfographic()` via updated `trackSaMDFeaturesDownload()`

## Next Steps Required

### 1. Update Conversion IDs
Replace the placeholder conversion IDs in the JavaScript functions with the actual conversion IDs from Google Ads:

- `watch_video_conversion_id` → Replace with actual ID from Google Ads
- `download_deck_conversion_id` → Replace with actual ID from Google Ads
- `download_regulatory_conversion_id` → Replace with actual ID from Google Ads
- `download_samd_conversion_id` → Replace with actual ID from Google Ads

### 2. Get Conversion IDs from Google Ads
1. Go to Google Ads → Tools & Settings → Conversions
2. Click on each conversion action
3. Copy the conversion ID from the tracking code
4. Update the JavaScript functions with the correct IDs

### 3. Testing
After updating the conversion IDs:
1. Test each button click on the website
2. Check Google Ads conversion reporting
3. Verify tracking in Google Analytics
4. Monitor for 24-48 hours to ensure data is flowing correctly

## File Changes Made
- **index.html:** Added 4 new conversion tracking functions and updated button onclick handlers

## Benefits
- **ROI Measurement:** Track which Google Ads drive the most valuable investor actions
- **Campaign Optimization:** Optimize ad spend based on conversion performance
- **Investor Funnel Analysis:** Understand which content drives the most engagement
- **Value Attribution:** Assign monetary values to different investor actions

## Monitoring
- Check Google Ads conversion reporting daily
- Monitor conversion rates by campaign and ad group
- Analyze which investor actions have the highest conversion rates
- Use data to optimize ad targeting and bidding strategies
