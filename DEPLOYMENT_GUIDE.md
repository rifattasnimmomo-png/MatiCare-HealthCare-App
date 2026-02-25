# 🚀 Deployment Guide for MatriCare App

This guide will help you publish your MatriCare app to GitHub and deploy it so anyone can access it.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top-right corner and select **"New repository"**
3. Fill in the repository details:
   - **Repository name**: `matricare-app` (or your preferred name)
   - **Description**: "MatriCare - A comprehensive mobile healthcare app for pregnancy monitoring"
   - **Visibility**: Choose **Public** (so anyone can see it)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Update Vite Configuration

**IMPORTANT**: Before pushing to GitHub, update the repository name in `vite.config.ts`:

Open `vite.config.ts` and change line 8:
```typescript
base: '/matricare-app/',  // Change this to match YOUR repository name
```

If your repository name is different (e.g., `my-health-app`), change it to:
```typescript
base: '/my-health-app/',
```

## Step 3: Push Your Code to GitHub

Run these commands in your terminal (PowerShell):

```powershell
# Add your GitHub repository as remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push your code to GitHub
git push -u origin main
```

**Example**:
```powershell
git remote add origin https://github.com/johndoe/matricare-app.git
git push -u origin main
```

You'll be prompted to enter your GitHub credentials.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source**: Select "GitHub Actions"
5. The workflow will automatically deploy your app

## Step 5: Access Your Published App

After a few minutes, your app will be available at:
```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

**Example**:
```
https://johndoe.github.io/matricare-app/
```

## 🔄 Making Updates

When you make changes to your app:

1. Stage your changes:
   ```powershell
   git add .
   ```

2. Commit your changes:
   ```powershell
   git commit -m "Description of your changes"
   ```

3. Push to GitHub:
   ```powershell
   git push
   ```

GitHub Actions will automatically rebuild and redeploy your app!

## 📋 Quick Deployment Checklist

- [ ] Create GitHub repository
- [ ] Update `base` in `vite.config.ts` with your repo name
- [ ] Add remote origin
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages with GitHub Actions
- [ ] Wait for deployment (check Actions tab)
- [ ] Visit your live app URL!

## 🆘 Troubleshooting

### Page shows 404
- Make sure the `base` in `vite.config.ts` matches your repository name exactly
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes for deployment to complete

### Assets not loading
- Verify the `base` path in `vite.config.ts` is correct
- Check the GitHub Actions workflow completed successfully (Actions tab)

### Changes not appearing
- Check the Actions tab on GitHub to see if deployment completed
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

## 🎉 You're Done!

Your MatriCare app is now live and accessible to anyone with the URL!

Share your app:
- Tweet about it
- Add it to your portfolio
- Share on LinkedIn
- Show it to potential employers

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or open an issue in your repository.
