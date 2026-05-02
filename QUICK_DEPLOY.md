# Quick Deploy Guide - 5 Minutes ⚡

## Step 1: Push to GitHub (2 minutes)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Portfolio ready for deployment"

# Create repo on GitHub: https://github.com/new
# Name it: portfolio

# Push to GitHub (replace 'yourusername')
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel (3 minutes)

1. Go to: https://vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Click "Add New..." → "Project"
4. Select your `portfolio` repository
5. Click "Deploy"
6. Wait 2-3 minutes
7. **Done!** 🎉

Your site is live at: `https://your-portfolio.vercel.app`

---

## Future Updates (30 seconds)

```bash
# Make changes to code or add images
git add .
git commit -m "Updated content"
git push

# Vercel automatically deploys!
# Check: https://vercel.com/dashboard
```

---

## Add Images

```bash
# 1. Add image to public/images/
mkdir -p public/images/projects
cp ~/Downloads/screenshot.png public/images/projects/

# 2. Use in code
# <img src="/images/projects/screenshot.png" alt="Project" />

# 3. Deploy
git add .
git commit -m "Added project images"
git push
```

---

## Troubleshooting

**Build fails?**
```bash
# Test locally first
npm run build

# If it works, push again
git push
```

**Images not showing?**
- Use `/images/...` not `./images/...`
- Put images in `public/` folder

**Site not updating?**
- Wait 2-3 minutes
- Check Vercel dashboard
- Clear browser cache (Ctrl+Shift+R)

---

## That's It! 🚀

Your portfolio is now:
- ✅ Live on internet
- ✅ Auto-updates on git push
- ✅ Free forever
- ✅ HTTPS enabled
- ✅ Fast global CDN

**Share your link:**
- LinkedIn: Add to profile
- GitHub: Add to README
- Resume: Add website URL
- Email signature

---

**Need help?** Check DEPLOYMENT_GUIDE.md for detailed instructions.
