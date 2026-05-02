# Deployment Checklist ✅

## Before Deployment

### Code Preparation
- [ ] Test build locally: `npm run build`
- [ ] No console errors in browser
- [ ] All pages load correctly
- [ ] Dark/Light theme works
- [ ] Responsive on mobile/tablet/desktop
- [ ] All links work (internal navigation)

### Content Updates
- [ ] Update GitHub URL in Footer.js
- [ ] Update LinkedIn URL in Footer.js
- [ ] Update Email address in Footer.js and Contact.js
- [ ] Update Twitter/X handle in Footer.js
- [ ] Add resume PDF to `public/resume.pdf`
- [ ] Update meta tags in `public/index.html`

### Images
- [ ] Add profile photo (if needed)
- [ ] Add project screenshots to `public/images/projects/`
- [ ] Optimize images (compress if large)
- [ ] Test images load correctly

---

## Deployment Steps

### 1. GitHub Setup
- [ ] Create GitHub account (if needed)
- [ ] Create new repository named `portfolio`
- [ ] Initialize git: `git init`
- [ ] Add files: `git add .`
- [ ] Commit: `git commit -m "Initial commit"`
- [ ] Add remote: `git remote add origin https://github.com/yourusername/portfolio.git`
- [ ] Push: `git push -u origin main`

### 2. Vercel Deployment
- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub
- [ ] Click "Add New..." → "Project"
- [ ] Select `portfolio` repository
- [ ] Verify build settings (auto-detected)
- [ ] Click "Deploy"
- [ ] Wait for deployment (2-3 minutes)
- [ ] Test live site

---

## Post-Deployment

### Testing
- [ ] Visit live URL
- [ ] Test all pages
- [ ] Test on mobile device
- [ ] Test dark/light theme
- [ ] Test all external links
- [ ] Check images load
- [ ] Test contact form (if applicable)

### SEO & Analytics
- [ ] Update meta description
- [ ] Add Open Graph tags
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test social media preview

### Sharing
- [ ] Add URL to LinkedIn profile
- [ ] Add URL to GitHub profile README
- [ ] Add URL to resume
- [ ] Share on social media
- [ ] Add to email signature

---

## Future Updates

### To Update Your Site:
```bash
# 1. Make changes
# 2. Test locally: npm start
# 3. Commit changes
git add .
git commit -m "Updated content"

# 4. Push to GitHub
git push

# 5. Vercel auto-deploys (2-3 min)
```

### To Add Images:
```bash
# 1. Add to public/images/
cp ~/Downloads/image.png public/images/

# 2. Update code to use image
# 3. Commit and push
git add .
git commit -m "Added images"
git push
```

---

## Troubleshooting

### Build Fails
- [ ] Run `npm run build` locally
- [ ] Check for errors in console
- [ ] Verify all imports are correct
- [ ] Check Vercel deployment logs

### Images Not Showing
- [ ] Use `/images/...` not `./images/...`
- [ ] Verify images are in `public/` folder
- [ ] Check file names match exactly (case-sensitive)
- [ ] Clear browser cache

### Site Not Updating
- [ ] Check Vercel dashboard for deployment status
- [ ] Wait 2-3 minutes for deployment
- [ ] Clear browser cache (Ctrl+Shift+R)
- [ ] Check git push was successful

---

## Quick Commands

```bash
# Development
npm start                    # Run dev server
npm run build               # Test production build

# Git
git status                  # Check changes
git add .                   # Stage all changes
git commit -m "message"     # Commit
git push                    # Deploy to live site

# Vercel
vercel                      # Deploy preview
vercel --prod              # Deploy to production
```

---

## Success! 🎉

Your portfolio is now:
- ✅ Live on the internet
- ✅ Automatically updates on git push
- ✅ Secured with HTTPS
- ✅ Hosted on fast global CDN
- ✅ Free forever

**Live URL:** https://your-portfolio.vercel.app

---

**Need Help?**
- Read: DEPLOYMENT_GUIDE.md (detailed instructions)
- Read: QUICK_DEPLOY.md (5-minute guide)
- Vercel Docs: https://vercel.com/docs
