# Project Documentation: Path2Europe Consulting

## Project Overview
Path to Europe Consulting is a full-stack web application designed to help professionals and fresh graduates transition to careers in Europe. It specializes in IT training (Salesforce), AI-driven job search optimization, and cultural integration.

## Project Structure
- `PROJECT_DOCUMENTATION.md`: Main project documentation and technical overview.
- `README.md`: Project overview and getting started guide.
- `FIREBASE_SETUP_GUIDE.md`: Detailed steps for Firebase integration.
- `prompts.md`: History of all AI prompts used to build the application.
- `GITHUB_HOSTING_GUIDE.md`: Step-by-step instructions for hosting on GitHub Pages.
- `/src/App.tsx`: Main application component containing all sections, routing, and the Admin CRM.
- `/src/index.css`: Global styles using Tailwind CSS.
- `/src/main.tsx`: Entry point.
- `/public/`: Static assets (images, icons).
- `package.json`: Project dependencies and scripts.
- `metadata.json`: App metadata and permissions.

## Technical Architecture & Folder Structure

For a technical deep dive, here is the breakdown of the project's organization and the purpose of each key file:

### Root Directory
- **`PROJECT_DOCUMENTATION.md`**: The primary documentation file you are reading now.
- **`README.md`**: Project overview and quick start guide.
- **`FIREBASE_SETUP_GUIDE.md`**: Technical guide for connecting and using Firebase.
- **`prompts.md`**: Tracks the evolution of the project through natural language prompts.
- **`GITHUB_HOSTING_GUIDE.md`**: Technical guide for CI/CD deployment via GitHub Actions.
- **`package.json`**: Defines project dependencies (React 19, Vite 6, Tailwind 4, Framer Motion, React Router) and build scripts.
- **`vite.config.ts`**: Configuration for the Vite build tool, including Tailwind CSS integration and environment variable definitions.
- **`tsconfig.json`**: TypeScript configuration for strict type checking and module resolution.
- **`metadata.json`**: Application-level metadata used by the hosting environment for permissions and app naming.
- **`.env.example`**: Template for required environment variables (e.g., Gemini API keys).

### Source Directory (`/src`)
- **`main.tsx`**: The application entry point that bootstraps the React app into the DOM.
- **`App.tsx`**: The "God Component" of this single-page application. It contains:
  - **Routing**: Uses `react-router-dom` (HashRouter) to separate the Landing Page (`/`), the Admin Dashboard (`/admin`), and the Payment Page (`/payment`). HashRouter is used to ensure compatibility with GitHub Pages and other static hosting environments.
- **Payment Integration:** A secure payment page with UPI integration (Mobile: 9000668360), QR code generation, and dynamic discount application.
  - **State Management**: Handles active navigation sections, form validation logic, and promo code application.
  - **Component Architecture**: Modularized sub-components (Navbar, Hero, Services, Docs, AdminCRM, etc.) defined within the same file for rapid iteration and performance.
  - **Animation Logic**: Implementation of `motion` (Framer Motion) for scroll-reveal and hover effects.
  - **Admin CRM**: A secure standalone page for monitoring leads, viewing documentation, and prompt history.
- **`index.css`**: The global stylesheet. It uses the modern `@import "tailwindcss";` syntax (Tailwind 4.0+) and defines theme variables.

### Public Assets (`/public`)
- Contains static assets like the favicon and any images that are not processed by the Vite build pipeline.

## Key Features
- **Dark Mode Support**: Integrated theme toggle for light and dark modes with smooth transitions.
- **Payment Tab**: Fixed navigation for the Payment tab in the navbar, and added an interactive package selection feature on the payment page.
- **Advanced Discount Logic**:
    - `StudentOffer`: ₹1999 off for Freshers.
    - `ExperiencedOffer`: ₹2999 off for Pros.
    - `AdminOffer`: Stackable-style discount (₹500 extra off on top of standard offers).
    - `GroupOffer`: Special pricing for groups of 10 students (₹4999 -> ₹1999).
    - `TestOffer`: Hidden code for testing (₹0 payment).
- **Transparent Pricing**: Visible promo codes on the home page.
- **Advanced Training (Freshers)**: 30-day training program held on Saturdays and Sundays. Includes lifetime access to all video recordings, documentation, and resources.
- **Professional Guarantee**: A commitment to transform IT knowledge from "0 to Hero" in just 7 days of focused engagement.
- **Dynamic Navbar:** Smooth scrolling with `IntersectionObserver` logic (simulated via scroll event listener) for active section highlighting.
- **Form Engine:** Custom-built validation engine with real-time feedback and `mailto` protocol integration for zero-backend lead generation.
- **Admin CRM:** A secure dashboard for monitoring leads, with breakdown by category (Students vs. Experienced) and detailed lead information. Now hosted on a separate `#/admin` route (using HashRouter).
- **Payment Gateway:** A dedicated `#/payment` route for handling enrollments with UPI support, bank details, and promo code validation. Now accessible via a direct "Payment" tab in the navigation bar (placed beside Pricing).
- **Payment Verification:** Added a mandatory bold message on the payment page requiring users to send a screenshot for activation and portal access.
- **Webinar & Registration:** New registration page (`#/register`) for live weekend sessions (Sat/Sun, 5-6 PM IST) with integrated Google Calendar, Google Meet link (`meet.google.com/gyw-fqrm-vbg`), and WhatsApp Group (`chat.whatsapp.com/K5ocM7obWynAUnCg3CalBE`).
- **Admin CRM Enhancements:** Tabbed dashboard for monitoring leads and webinar registrations separately.
- **Roadmap & Future Scope:** Detailed plan for future enhancements including AI Chatbots, Google Sheets integration, and automated follow-ups.
- **Discount Code System:** Dynamic pricing updates based on promo codes (`StudentOffer`, `ExperiencedOffer`, `AdminOffer`). Includes package-specific restrictions.
- **Responsive UI:** Implemented using Tailwind's utility-first classes with a mobile-first breakpoint strategy.
- **Motion Design:** Utilizes `motion/react` for hardware-accelerated animations.

## Timestamps
- **Documentation Generated:** Thu, 26 Mar 2026 10:42:04 UTC
- **Last Updated:** Mon, 30 Mar 2026 12:20:04 UTC
- **GitHub Synced:** Mon, 30 Mar 2026 12:20:04 UTC

## Prompt History Summary
1. **Initial Build:** Create a consulting website for European career paths.
2. **Contact Form:** Add a contact form with name, email, message, and WhatsApp integration.
3. **Pricing & Gallery:** Add pricing tiers (24,999 for pros, free for grads) and European travel images.
4. **Validation:** Implement real-time form validation and visual feedback.
5. **Contact Details:** Update email (pathtoeurope.eu@gmail.com) and WhatsApp (+91-9110368346).
6. **Package Updates:** Add "1 Year Free" extension for experienced professionals if no response from clients.
7. **Founder Update:** Change founder name to Sudhir Kumar Thanna.
8. **Co-Founder:** Add Sai Lakshmi Harisha as a co-founder with LinkedIn profile.
9. **Navbar Enhancements:** Implement smooth scrolling and active link transitions.
10. **Docs Section:** Create a "Docs" tab with free resources, resume samples, and official links.
11. **Final Polish:** Add Google Drive "Coming Soon" section, highlight 10+ years experience, and add a personalized footer.
12. **Services & Admin CRM:** Expanded services, added discount codes, and implemented a secure Admin CRM tab for lead monitoring and documentation.
13. **Email Enhancements:** Added copy-to-clipboard functionality for the email in the About section and integrated `mailto` links with prepopulated subjects in both the About and Footer sections.
14. **Multi-Page Routing & Future Scope:**
    - Integrated `react-router-dom` for true multi-page navigation.
    - Moved Admin CRM to a dedicated `/admin` route that opens in a new tab.
    - Added a "Future Scope & Roadmap" section to the Admin panel with plans for Google Sheets integration, AI Chatbots, and automated marketing.
15. **Registration & Webinar Enhancements:**
    - Created a dedicated registration page (`#/register`) with full name, email, and phone capture.
    - Integrated registration data into the Admin CRM with a new tabbed navigation system.
    - Added automated success flow with WhatsApp group links and calendar integration.
    - Updated the Webinar section with direct Google Meet and Calendar links.
    - Corrected all UPI and bank transfer details on the payment page.

---
*Made with ❤️ from Sudhir Kumar Thanna to everyone*
