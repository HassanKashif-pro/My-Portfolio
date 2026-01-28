# Quick Deploy Reference

## 🚀 Deploy Now (3 Steps)

### 1. Test Build Locally
```bash
npm run build
npx serve -s build -p 3000
```
Open http://localhost:3000 and verify everything works.

### 2. Add Environment Variables to Vercel
Go to [Vercel Dashboard](https://vercel.com/dashboard) → Your Project → Settings → Environment Variables

Copy all variables from `.env.production` file.

### 3. Deploy
```bash
git add .
git commit -m "Fix: Production deployment ready"
git push origin main
```

Vercel will auto-deploy if connected to Git.

---

## ✅ What Was Fixed

| Issue | Fix | File |
|-------|-----|------|
| Images not loading | Added `process.env.PUBLIC_URL` prefix | `src/Components/Carousel.tsx` |
| Asset path issues | Added `"homepage": "/"` | `package.json` |
| SPA routing broken | Enhanced rewrites config | `vercel.json` |
| Missing prod config | Created production env file | `.env.production` |

---

## 🔍 Verify Deployment

After deployment, check:
- [ ] Homepage loads: `https://your-app.vercel.app/`
- [ ] All images display
- [ ] Navigation works
- [ ] No console errors (F12)
- [ ] Page refresh works

---

## 🐛 Quick Troubleshooting

**Images not loading?**
```bash
# Check if images are in build
ls build/
# Should see: banking.jpg, todo.jpg, AiChatbot.jpg
```

**Routes return 404?**
- Verify `vercel.json` exists in root
- Check rewrites configuration

**Environment variables not working?**
- Add them in Vercel Dashboard
- Redeploy after adding

---

## 📞 Commands Reference

```bash
# Local development
npm run dev

# Production build
npm run build

# Test production build locally
npx serve -s build -p 3000

# Deploy to Vercel
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls
```

---

See `DEPLOYMENT_GUIDE.md` for detailed explanations.
