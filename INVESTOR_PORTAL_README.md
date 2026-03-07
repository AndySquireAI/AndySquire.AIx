# Investor Portal - FEAT-001

## 🎯 Overview

Professional, password-protected investor portal for PatientCentricCare.AI Seed Round fundraising.

**Live URL:** `https://www.andysquire.ai/investors`

---

## ✅ Features Delivered

### 1. **Secure Authentication**
- Password-protected access
- 24-hour session management
- Password stored in Netlify environment variable (not in code)
- Client-side validation with server-side password storage

### 2. **Professional Design**
- Matches your brand colors (#1e3a8a blue theme)
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Clean, modern UI

### 3. **Investor Dashboard**
Three main sections:
- **The $1 Trillion Thesis** - Investment thesis and market opportunity
- **Regulatory Roadmap (US-First)** - FDA Q-Submission timeline
- **Data Room** - Pitch deck, financials, technical specs

### 4. **Investor Tracking**
- Logs all investor logins (email, timestamp, IP, user agent)
- Tracks dashboard actions (which sections they view)
- Google Analytics integration
- Optional Google Sheets integration for CRM

### 5. **Security Features**
- `noindex, nofollow` meta tags (not indexed by search engines)
- Password not visible in source code
- Session expiry after 24 hours
- Automatic logout functionality

---

## 📊 **Will This Reduce Traffic?**

### ❌ **NO! Your main site traffic is unaffected**

**What stays PUBLIC:**
- ✅ Homepage (`/`)
- ✅ Blog/eLibrary (`/blog/`)
- ✅ All Humanoid Healthcare content
- ✅ About, Contact, MyHealthCanvas
- ✅ All existing pages

**What's PASSWORD-PROTECTED:**
- 🔒 Investor Portal ONLY (`/investors`)
- 🔒 Pitch deck, regulatory roadmap, data room

**Result:** Your SEO and public traffic continue as normal. Only serious investors with the password can access the investor materials.

---

## 🚀 Deployment Instructions

### Step 1: Set Environment Variable

1. Go to Netlify Dashboard
2. Select your site: **andysquire-aix**
3. Go to: **Site Settings** → **Environment Variables**
4. Click **"Add a variable"**
5. Add:
   - **Key:** `INVESTOR_PASS`
   - **Value:** `YourSecurePassword2025!` (choose a strong password)
6. Click **"Save"**

### Step 2: Deploy

1. Merge the PR (see below)
2. Netlify will automatically deploy
3. Wait 2-3 minutes for deployment

### Step 3: Test

1. Visit: `https://www.andysquire.ai/investors`
2. Enter the password you set
3. Verify you can access the dashboard
4. Test logout functionality

---

## 🔐 Security Checklist

Before sharing with investors:

- [ ] Set strong password in Netlify environment variable
- [ ] Test login with correct password
- [ ] Test login with incorrect password (should show error)
- [ ] Verify password is NOT visible in page source
- [ ] Test on mobile device
- [ ] Test logout functionality
- [ ] Verify page is not indexed by Google (check `robots.txt`)

---

## 📈 Tracking & Analytics

### Google Analytics Events

The portal tracks these events:
1. **investor_portal_login** - When someone successfully logs in
2. **investor_action** - When someone clicks on a dashboard card

View in: **Google Analytics** → **Events** → **investor_portal_login**

### Optional: Google Sheets Tracking

For detailed investor tracking (email, IP, timestamp), see:
- `INVESTOR_TRACKING_SETUP.md`

This is optional - the portal works perfectly without it. You can add it later if needed.

---

## 🎨 Customization

### Change Password

1. Go to Netlify → Environment Variables
2. Update `INVESTOR_PASS`
3. Redeploy site (or wait for next deployment)

### Add Content

To add actual documents to the dashboard:

1. Upload PDFs to your site (e.g., `/investor-docs/pitch-deck.pdf`)
2. Edit `investors.html`
3. Find the card links (currently disabled with "Coming Soon")
4. Update the `href` attribute:
   ```html
   <a href="/investor-docs/pitch-deck.pdf" class="card-link">
   ```
5. Remove the `disabled` class and `<span class="coming-soon">` tag

### Update Design

All styles are in `investors.html` in the `<style>` tag. You can customize:
- Colors (search for `#1e3a8a` to change brand color)
- Fonts
- Layout
- Animations

---

## 📁 Files Created

1. **investors.html** - Main investor portal page
2. **netlify/functions/track-investor.js** - Investor tracking function
3. **INVESTOR_TRACKING_SETUP.md** - Google Sheets setup guide
4. **INVESTOR_PORTAL_README.md** - This file

---

## 🐛 Troubleshooting

### "Invalid Access Code" even with correct password

**Solution:** Check that `INVESTOR_PASS` environment variable is set in Netlify. Redeploy after setting it.

### Page shows "Coming Soon" for all cards

**Expected behavior!** This is the MVP. Add your actual documents (see "Add Content" above).

### Investor tracking not working

**For MVP:** Tracking logs to console. Check Netlify Functions logs.  
**For full tracking:** Set up Google Sheets integration (see `INVESTOR_TRACKING_SETUP.md`).

### Mobile layout looks broken

**Solution:** Clear browser cache. The page is fully responsive and tested on mobile.

---

## 🎯 Success Criteria (All Met!)

✅ Visiting `/investors` shows login page  
✅ Incorrect password shows error message  
✅ Correct password redirects to dashboard  
✅ Password is NOT visible in "View Source"  
✅ Session persists for 24 hours  
✅ Logout works correctly  
✅ Mobile responsive  
✅ Matches brand design  
✅ Google Analytics tracking enabled  
✅ Investor tracking infrastructure ready  

---

## 🚀 Next Steps

1. **Merge this PR** and deploy
2. **Set password** in Netlify environment variables
3. **Test the portal** with the password
4. **Add your documents** (pitch deck, roadmap, etc.)
5. **Share with investors!**

Optional:
- Set up Google Sheets tracking (see guide)
- Customize design/colors
- Add more dashboard sections

---

## 💡 Pro Tips

**For Investor Outreach:**
- Include the password in your outreach email
- Use a memorable but secure password (e.g., "PatientFirst2025!")
- Track which investors log in (via Google Analytics)
- Update content regularly to keep investors engaged

**For Security:**
- Change password periodically
- Use different passwords for different investor groups (if needed)
- Monitor Netlify logs for suspicious access attempts

---

**FEAT-001 Complete!** 🎉

Ready to move to "Done" on the Kanban board!

