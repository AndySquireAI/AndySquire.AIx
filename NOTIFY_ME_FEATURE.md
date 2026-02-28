# Investor Portal - "Notify Me" Feature

## Overview

The "Notify Me" feature captures investor interest when they click on "Coming Soon" documents in the Investor Portal. This allows you to:

1. **Track which documents investors are most interested in**
2. **Capture investor emails for follow-up**
3. **Notify investors when documents are ready**
4. **Measure engagement and prioritize content creation**

---

## How It Works

### User Experience

1. Investor logs into the portal with the access code
2. They see 3 document cards with "Coming Soon" badges:
   - The $1 Trillion Thesis
   - Regulatory Roadmap (US-First)
   - Data Room
3. When they click on a "Coming Soon" button, a modal appears
4. The modal says: "We're finalizing [Document Name]. Enter your email to be notified when it's ready."
5. They enter their email (and optionally their name)
6. They click "Notify Me When Ready"
7. A success message appears: "Thank you! We'll notify you when this document is ready."
8. The modal closes automatically after 2 seconds

### Behind the Scenes

**Netlify Forms Integration:**
- Form submissions are automatically captured by Netlify
- You can view submissions in: Netlify Dashboard → Forms → "investor-notify"
- Each submission includes:
  - Email address
  - Name (optional)
  - Document type (thesis, roadmap, or dataroom)
  - Timestamp

**Google Analytics Tracking:**
- When an investor clicks a "Coming Soon" button: Event `interest_thesis`, `interest_roadmap`, or `interest_dataroom`
- When they submit the notify form: Event `notify_signup_thesis`, `notify_signup_roadmap`, or `notify_signup_dataroom`

---

## Viewing Submissions

### Option 1: Netlify Dashboard (Easiest)

1. Go to: https://app.netlify.com
2. Select your site
3. Click **"Forms"** in the left sidebar
4. Click on **"investor-notify"** form
5. You'll see all submissions with:
   - Email
   - Name
   - Document they're interested in
   - Timestamp

### Option 2: Email Notifications

You can set up email notifications for form submissions:

1. In Netlify Dashboard → Forms → "investor-notify"
2. Click **"Settings & Usage"**
3. Scroll to **"Form notifications"**
4. Click **"Add notification"**
5. Choose **"Email notification"**
6. Enter your email address
7. Click **"Save"**

Now you'll get an email every time someone submits the form!

### Option 3: Webhook Integration (Advanced)

You can send form submissions to:
- Google Sheets (via Zapier or Make.com)
- Slack (instant notifications)
- Your CRM (e.g., HubSpot, Salesforce)

**To set up:**
1. In Netlify Dashboard → Forms → "investor-notify"
2. Click **"Settings & Usage"**
3. Scroll to **"Outgoing webhooks"**
4. Add your webhook URL
5. Submissions will be sent to that URL in JSON format

---

## Interpreting the Data

### What to Track

**Document Interest:**
- Which document gets the most "Notify Me" signups?
- This tells you which content to prioritize creating

**Investor Engagement:**
- Who is most engaged? (multiple document interests)
- Follow up with highly engaged investors first

**Timeline:**
- When do investors show interest?
- Cluster notifications around specific outreach campaigns

### Example Insights

**If "Regulatory Roadmap" has 10 signups, but "Thesis" has only 2:**
→ Investors are more concerned about regulatory risk than market opportunity
→ Prioritize creating the Regulatory Roadmap document
→ Address regulatory concerns in follow-up conversations

**If an investor signs up for all 3 documents:**
→ Highly engaged, serious investor
→ Priority follow-up
→ Consider scheduling a call

---

## Notifying Investors When Documents Are Ready

When you finish a document (e.g., "The $1 Trillion Thesis"):

### Step 1: Export the Email List

1. Go to Netlify Dashboard → Forms → "investor-notify"
2. Filter submissions by document type: "thesis"
3. Export to CSV or copy emails manually

### Step 2: Send Notification Email

**Email Template:**

```
Subject: The $1 Trillion Thesis - Now Available

Dear [Name],

Thank you for your interest in PatientCentricCare.AI's investment opportunity.

You recently requested to be notified when "The $1 Trillion Thesis" was ready. I'm pleased to share that it's now available in the Investor Portal.

Access the document here:
https://www.andysquire.ai/investors

Your access code: [Same code as before]

Inside you'll find:
• Comprehensive market opportunity analysis
• Competitive landscape assessment
• Growth strategy and projections
• TAM/SAM/SOM breakdown

I'd love to hear your thoughts and answer any questions you may have.

Best regards,
Andy Squire
Founder & CEO
PatientCentricCare.AI
```

### Step 3: Update the Portal

1. Upload the document to your repository (e.g., `investor-thesis.pdf`)
2. Update `investors.html`:
   - Remove `onclick="showNotifyModal(...)"` from the button
   - Change `href="#"` to `href="investor-thesis.pdf"`
   - Remove the "Coming Soon" badge
3. Commit and deploy

---

## Technical Details

### Form Structure

**Form Name:** `investor-notify`

**Fields:**
- `email` (required) - Investor's email address
- `name` (optional) - Investor's name
- `document` (hidden) - Document type (thesis, roadmap, dataroom)

**Netlify Features Used:**
- `data-netlify="true"` - Enables Netlify Forms
- `netlify-honeypot="bot-field"` - Spam protection

### Google Analytics Events

**Interest Events:**
- `interest_thesis` - Investor clicked on "The $1 Trillion Thesis"
- `interest_roadmap` - Investor clicked on "Regulatory Roadmap"
- `interest_dataroom` - Investor clicked on "Data Room"

**Signup Events:**
- `notify_signup_thesis` - Investor submitted email for Thesis
- `notify_signup_roadmap` - Investor submitted email for Roadmap
- `notify_signup_dataroom` - Investor submitted email for Data Room

**To view in Google Analytics:**
1. Go to: Google Analytics → Events
2. Look for events starting with `interest_` or `notify_signup_`
3. See count, unique users, and timestamps

---

## Customization

### Changing the Modal Message

Edit `investors.html`, line ~568:

```javascript
document.getElementById('modalMessage').textContent = `We're finalizing "${documentName}". Enter your email to be notified when it's ready.`;
```

Change to your preferred message.

### Changing the Success Message

Edit `investors.html`, line ~446:

```html
<p>Thank you! We'll notify you when this document is ready.</p>
```

### Changing the Auto-Close Timer

Edit `investors.html`, line ~608:

```javascript
setTimeout(closeNotifyModal, 2000); // 2000 = 2 seconds
```

Change `2000` to your preferred delay in milliseconds.

---

## Troubleshooting

### Form Submissions Not Appearing in Netlify

**Check:**
1. Is the site deployed to Netlify? (Forms only work on deployed sites, not local)
2. Did you submit the form at least once after deployment? (Netlify needs to detect the form)
3. Is `data-netlify="true"` present in the form tag?

**Solution:**
- Redeploy the site
- Submit a test form submission
- Wait 1-2 minutes for Netlify to process

### Modal Not Appearing

**Check:**
1. Open browser console (F12) and look for JavaScript errors
2. Verify the modal HTML is present in the page source
3. Check that the `showNotifyModal()` function is defined

**Solution:**
- Clear browser cache and reload
- Check for JavaScript errors in console

### Emails Not Being Sent

**Check:**
1. Have you set up email notifications in Netlify Dashboard?
2. Is your email address correct in the notification settings?
3. Check your spam folder

**Solution:**
- Verify notification settings in Netlify Dashboard
- Add netlify.com to your email whitelist

---

## Next Steps

### Immediate Actions

1. ✅ Deploy the updated portal (merge PR)
2. ✅ Test the "Notify Me" feature yourself
3. ✅ Set up email notifications in Netlify Dashboard
4. ✅ Monitor form submissions as investors use the portal

### When Documents Are Ready

1. Export email list from Netlify Forms
2. Send notification emails to interested investors
3. Update portal to link to actual documents
4. Remove "Coming Soon" badges

### Advanced Integrations

1. **Google Sheets Integration:**
   - Use Zapier to send form submissions to Google Sheets
   - Automatically track and organize investor interest

2. **Slack Notifications:**
   - Get instant Slack messages when investors show interest
   - Set up via Netlify webhooks + Zapier

3. **CRM Integration:**
   - Send submissions to your CRM (HubSpot, Salesforce, etc.)
   - Automatically create follow-up tasks

---

## Benefits Summary

✅ **Captures investor intent** - Know what they want to see  
✅ **Prioritizes content creation** - Build what investors care about most  
✅ **Enables targeted follow-up** - Reach out with relevant updates  
✅ **Measures engagement** - Track which investors are most interested  
✅ **Professional UX** - Better than dead "Coming Soon" buttons  
✅ **Zero maintenance** - Netlify handles form processing automatically  

---

**Questions or issues?** Check the Netlify Forms documentation: https://docs.netlify.com/forms/setup/

