# Investor Tracking Setup Guide

## Overview
This document explains how to set up investor tracking for the Investor Portal. All investor logins and actions are logged to a Google Sheet for analysis.

---

## Google Sheets Setup

### 1. Create the Tracking Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named: **"Investor Portal Tracking"**
3. Add these column headers in Row 1:
   - `Timestamp`
   - `Email`
   - `Action`
   - `IP Address`
   - `User Agent`
   - `Session Duration`

### 2. Get the Spreadsheet ID

From your spreadsheet URL:
```
https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
```

Copy the `SPREADSHEET_ID_HERE` part.

---

## Google Sheets API Setup

### 1. Create a Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project: "PatientCentricCare Investor Tracking"
3. Enable **Google Sheets API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 2. Create Service Account Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Name: `investor-tracking-service`
4. Click "Create and Continue"
5. Skip optional steps
6. Click "Done"

### 3. Generate JSON Key

1. Click on the service account you just created
2. Go to "Keys" tab
3. Click "Add Key" → "Create new key"
4. Choose "JSON"
5. Download the JSON file

### 4. Share Spreadsheet with Service Account

1. Open the JSON file you downloaded
2. Find the `client_email` field (looks like: `investor-tracking-service@project-id.iam.gserviceaccount.com`)
3. Go back to your Google Sheet
4. Click "Share"
5. Paste the service account email
6. Give it "Editor" access
7. Uncheck "Notify people"
8. Click "Share"

---

## Netlify Environment Variables

Add these to your Netlify site:

1. Go to Netlify Dashboard → Your Site → Site Settings → Environment Variables

2. Add these variables:

```
INVESTOR_PASS=YourSecurePasswordHere2025!
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=investor-tracking-service@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----
```

**Important:** For `GOOGLE_PRIVATE_KEY`, copy the entire `private_key` value from the JSON file, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` parts.

---

## Testing

### Test Login
1. Visit: `https://www.andysquire.ai/investors`
2. Enter the password you set in `INVESTOR_PASS`
3. Check your Google Sheet - a new row should appear with:
   - Timestamp
   - Email (if provided)
   - Action: "login"
   - IP address
   - User agent

### Test Actions
1. Click on any dashboard card
2. Check your Google Sheet - a new row should appear with:
   - Action: "thesis", "roadmap", or "dataroom"

---

## Security Notes

✅ **Password is stored in Netlify environment variable** - not in code  
✅ **Service account has limited access** - only to this one spreadsheet  
✅ **Investor portal is not indexed** - `noindex, nofollow` meta tag  
✅ **Session expires after 24 hours** - automatic logout  
✅ **All access is logged** - full audit trail  

---

## Analytics Integration

The portal also tracks to Google Analytics:
- Event: `investor_portal_login` - when someone logs in
- Event: `investor_action` - when someone clicks a card

View these in: Google Analytics → Events → investor_portal_login

---

## Quick Start (MVP Version)

If you want to launch quickly without Google Sheets integration:

1. Set `INVESTOR_PASS` in Netlify environment variables
2. Deploy the site
3. Investor tracking will log to console (visible in Netlify Functions logs)
4. Add Google Sheets integration later

The portal will work perfectly without Google Sheets - you'll just need to check Netlify logs instead of a spreadsheet.

---

## Future Enhancements

- Email notifications when investors log in
- Automatic investor CRM sync
- Dashboard analytics (time spent, pages viewed)
- Document download tracking
- Investor engagement scoring

---

## Support

If you need help setting this up, contact me and I can walk you through it step-by-step!

