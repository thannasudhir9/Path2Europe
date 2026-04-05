# Firebase Setup Guide: Path2Europe Consulting

This guide provides detailed steps to connect and use Firebase with your Path2Europe project for authentication and database management.

## Prerequisites
- A Google account.
- A Firebase project (create one at [Firebase Console](https://console.firebase.google.com/)).
- Node.js and npm installed.

---

## Step 1: Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** and follow the prompts to name your project (e.g., `Path2Europe`).
3. (Optional) Enable Google Analytics for your project.
4. Click **Create project**.

## Step 2: Register Your Web App
1. In the Firebase Console, click the **Web icon (</>)** to add a web app.
2. Enter an app nickname (e.g., `Path2Europe Web`).
3. (Optional) Set up Firebase Hosting.
4. Click **Register app**.
5. Copy the `firebaseConfig` object provided. It will look like this:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

## Step 3: Set Up Firebase Authentication
1. In the Firebase Console, go to **Build > Authentication**.
2. Click **Get started**.
3. Select the **Sign-in method** tab.
4. Enable the **Google** provider and click **Save**.

## Step 4: Set Up Firestore Database
1. In the Firebase Console, go to **Build > Firestore Database**.
2. Click **Create database**.
3. Choose a location and click **Next**.
4. Select **Start in test mode** (for development) and click **Create**.
5. Define your collections (e.g., `leads`, `webinar_registrations`).

## Step 5: Integrate Firebase into Your Project
1. Install Firebase SDK:
   ```bash
   npm install firebase
   ```
2. Create a `firebase-applet-config.json` file in your project root and paste your config:
   ```json
   {
     "apiKey": "YOUR_API_KEY",
     "authDomain": "YOUR_AUTH_DOMAIN",
     "projectId": "YOUR_PROJECT_ID",
     "storageBucket": "YOUR_STORAGE_BUCKET",
     "messagingSenderId": "YOUR_MESSAGING_SENDER_ID",
     "appId": "YOUR_APP_ID"
     "firestoreDatabaseId": "(default)"
   }
   ```
3. Create a `src/firebase.ts` file to initialize Firebase:
   ```typescript
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';
   import firebaseConfig from '../firebase-applet-config.json';

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
   ```

## Step 6: Update Security Rules
1. In the Firebase Console, go to **Build > Firestore Database > Rules**.
2. Paste the following rules (adjust based on your needs):
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /leads/{leadId} {
         allow create: if true; // Allow anyone to submit a lead
         allow read: if request.auth != null; // Only authenticated users can read
       }
       match /webinar_registrations/{regId} {
         allow create: if true;
         allow read: if request.auth != null;
       }
     }
   }
   ```
3. Click **Publish**.

---
*Guide created on Sun, 05 Apr 2026 10:18:56 UTC*
*Made with ❤️ from Sudhir Kumar Thanna to everyone*
