# Google Tag Manager Setup Guide for AndySquire.AI Blog

## 🎯 Overview

Your blog now has Google Tag Manager (GTM) integrated with comprehensive conversion tracking. This guide will help you complete the setup in Google Tag Manager and connect it to Google Ads.

## 📋 Step 1: Create Google Tag Manager Account

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Create Account"
3. **Account Name:** AndySquire.AI
4. **Container Name:** andysquire.ai
5. **Target platform:** Web
6. Click "Create"

## 🔧 Step 2: Get Your GTM Container ID

1. After creating the container, you'll see your **Container ID** (format: GTM-XXXXXXX)
2. **Replace** `GTM-ANDYSQUIRE` in the blog code with your actual Container ID

### Where to Update:

In `/home/ubuntu/convert_md_to_html_premium.py`, find and replace:
```javascript
'https://www.googletagmanager.com/gtm.js?id=GTM-ANDYSQUIRE'
```

With your actual Container ID:
```javascript
'https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX'
```

## 📊 Step 3: Configure Tags in GTM

### A. Google Ads Conversion Tracking Tag

1. In GTM, click **"Tags"** → **"New"**
2. **Tag Configuration:**
   - Tag Type: **Google Ads Conversion Tracking**
   - Conversion ID: Your Google Ads Conversion ID
   - Conversion Label: Your Google Ads Conversion Label
3. **Triggering:**
   - Trigger Type: **Custom Event**
   - Event name: `blog_view`
4. Save as **"Blog Page View - Google Ads"**

### B. Google Analytics 4 Tag (Optional but Recommended)

1. Click **"Tags"** → **"New"**
2. **Tag Configuration:**
   - Tag Type: **Google Analytics: GA4 Configuration**
   - Measurement ID: Your GA4 Measurement ID (G-XXXXXXXXXX)
3. **Triggering:**
   - Trigger: **All Pages**
4. Save as **"GA4 Configuration"**

### C. Social Share Tracking Tag

1. Click **"Tags"** → **"New"**
2. **Tag Configuration:**
   - Tag Type: **Google Ads Conversion Tracking**
   - Conversion ID: Your Google Ads Conversion ID
   - Conversion Label: Create a new label for "Blog Social Share"
3. **Triggering:**
   - Trigger Type: **Custom Event**
   - Event name: `share`
4. Save as **"Blog Social Share - Google Ads"**

## 🎯 Step 4: Set Up Conversion Actions in Google Ads

### Conversion Action 1: Blog Page View

1. Go to **Google Ads** → **Goals** → **Conversions** → **Summary**
2. Click **"+ New conversion action"**
3. Select **"Website"**
4. **Category:** Page view
5. **Conversion name:** Blog Page View
6. **Value:** Use different values for different conversions
7. **Count:** One
8. **Conversion window:** 30 days
9. **Attribution model:** Data-driven
10. Save and get the **Conversion ID** and **Conversion Label**

### Conversion Action 2: Blog Social Share

1. Click **"+ New conversion action"**
2. Select **"Website"**
3. **Category:** Engagement
4. **Conversion name:** Blog Social Share
5. **Value:** 5 CHF (estimated value of a share)
6. **Count:** Every
7. **Conversion window:** 30 days
8. Save and get the **Conversion ID** and **Conversion Label**

## 🔗 Step 5: Link GTM to Google Ads

1. In **Google Tag Manager**, add the Conversion IDs from Step 4
2. Update the tags created in Step 3 with the actual Conversion IDs and Labels
3. Click **"Submit"** in GTM to publish your changes
4. Add a **Version Name:** "Initial blog tracking setup"
5. Click **"Publish"**

## ✅ Step 6: Test Your Setup

### Test Blog Page View Tracking:

1. Go to **GTM** → **Preview**
2. Enter your blog URL: `https://andysquire.ai/blog/blog-post-humanoid_healthcare_robots.html`
3. Click **"Connect"**
4. You should see the `blog_view` event fire in the GTM debugger
5. Check that the Google Ads tag fires

### Test Social Share Tracking:

1. While in Preview mode, click any social share button
2. You should see the `share` event fire with the correct method (WhatsApp, LinkedIn, etc.)
3. Verify the Google Ads conversion tag fires

## 📈 Step 7: Monitor Conversions in Google Ads

1. Go to **Google Ads** → **Goals** → **Conversions** → **Summary**
2. You should start seeing:
   - **Blog Page View** conversions
   - **Blog Social Share** conversions
3. Wait 24-48 hours for data to populate

## 🎯 Step 8: Create Custom Conversion Goals

### Goal: Blog Engagement

1. Go to **Goals** → **Summary** → **Custom goals**
2. Click **"+ New custom goal"**
3. **Goal name:** Blog Engagement
4. **Conversion actions:** Select both "Blog Page View" and "Blog Social Share"
5. Save

### Apply to Campaigns:

1. Go to **Campaigns**
2. Select your blog-related campaigns
3. Click **Settings** → **Conversions**
4. Select **"Blog Engagement"** as the conversion goal
5. Save

## 📊 Events Being Tracked

Your blog automatically tracks these events:

| Event Name | Trigger | Data Sent |
|------------|---------|-----------|
| `blog_view` | Page load | blog_title, blog_category, blog_url |
| `share` | Social share click | method (WhatsApp/LinkedIn/etc), content_type, item_id |

## 🔧 Advanced: Campaign URL Parameters

To track which Google Ads campaigns drive blog traffic, use UTM parameters:

```
https://andysquire.ai/blog/?utm_source=google&utm_medium=cpc&utm_campaign=humanoid_robots
```

These will automatically be captured by GTM and passed to Google Ads.

## 🚀 Next Steps

1. **Replace GTM-ANDYSQUIRE** with your actual Container ID
2. **Set up the tags** in Google Tag Manager (Steps 3-5)
3. **Test everything** in Preview mode (Step 6)
4. **Publish** your GTM container
5. **Monitor** conversions in Google Ads (Step 7)

## 💡 Pro Tips

- **Assign values** to conversions based on your average customer lifetime value
- **Create segments** in GA4 for blog readers who convert to leads
- **Use remarketing** to target blog readers with specific Google Ads
- **A/B test** different blog topics to see which drive the most conversions

## 📞 Support

If you need help setting this up, the GTM container ID needs to be updated in the Python script and all blog posts regenerated.

---

**Last Updated:** October 11, 2025  
**Author:** Manus AI Assistant  
**For:** AndySquire.AI Blog Conversion Tracking

