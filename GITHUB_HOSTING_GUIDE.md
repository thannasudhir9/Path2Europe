# GitHub Hosting Guide: Path to Europe Consulting

This guide provides step-by-step instructions to host your project on GitHub and deploy it using GitHub Pages.

## Prerequisites
- A GitHub account.
- Git installed on your local machine.
- Node.js and npm installed.

---

## Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Click the **+** icon in the top right and select **New repository**.
3. Name your repository (e.g., `Path2Europe`).
4. Choose **Public** or **Private**.
5. Click **Create repository**.

## Step 2: Initialize Git and Push Code
If you are working locally, follow these steps in your project root:

1. Initialize git:
   ```bash
   git init
   ```
2. Add all files:
   ```bash
   git add .
   ```
3. Commit your changes:
   ```bash
   git commit -m "Initial commit"
   ```
4. Link to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Path2Europe.git
   ```
5. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Step 3: Configure Vite for GitHub Pages
If your project will be hosted at `https://YOUR_USERNAME.github.io/Path2Europe/`, you need to update `vite.config.ts`:

1. Open `vite.config.ts`.
2. Add the `base` property:
   ```typescript
   export default defineConfig({
     base: '/Path2Europe/', // Replace with your repository name
     plugins: [react(), tailwindcss()],
     // ... other config
   });
   ```

## Step 4: Automated Deployment with GitHub Actions
This is the recommended way to deploy Vite apps.

1. In your GitHub repository, go to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Create a new file in your project at `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   env:
     FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-version: 24

         - name: Install dependencies
           run: npm install

         - name: Build
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

4. Commit and push this file to GitHub. GitHub Actions will automatically build and deploy your site.

## Step 5: Verify Deployment
1. Go to the **Actions** tab in your GitHub repository to monitor the build.
2. Once finished, go to **Settings > Pages** to find your live URL.

---
*Guide created on Thu, 26 Mar 2026 10:42:04 UTC*
*Last Updated: Sun, 29 Mar 2026 17:13:38 UTC*
*Made with ❤️ from Sudhir Kumar Thanna to everyone*
