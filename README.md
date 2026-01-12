# CareNow - Professional Caregiving Platform

[![Next.js](https://img.shields.io/badge/Next.js-15+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

CareNow is a comprehensive, full-stack caregiving platform designed to connect families with verified caregivers for babysitting, elderly care, and special needs in Bangladesh. Built with performance, accessibility, and modern UI/UX in mind.

## 🚀 Key Features

- **Advanced Search & Filtering**: Find caregivers by name or location with real-time, **debounced search** for optimal performance.
- **Intelligent Sorting**: Sort caregivers by highest rating, lowest price, or newest listings to find the perfect match.
- **Dynamic Pagination**: Smooth navigation through large sets of caregiver data with a custom-built pagination system.
- **NextAuth Integration**: Secure authentication system supporting traditional credentials and social logins.
- **Professional UI/UX**:
  - **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
  - **Dark Mode Support**: Seamless theme switching with `next-themes`.
  - **Micro-animations**: Enhanced user experience using Framer Motion.
  - **Loading Skeletons**: Perceived performance improvements with tailored skeleton states.
- **SEO Optimized**: Robust metadata implementation, OpenGraph support, and canonical URLs for better search engine visibility.
- **Server-Side Excellence**: Leverages Next.js Server Actions for efficient data mutations and retrieval.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose & Native Driver)
- **State Management**: React Hooks & URL Query Parameters
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB Atlas account or local MongoDB instance

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/naims6/CareNow.git
    cd carenow
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    DB_NAME=your_database_name
    AUTH_SECRET=your_nextauth_secret
    # Social Login Credentials
    GOOGLE_CLIENT_ID=your_google_id
    GOOGLE_CLIENT_SECRET=your_google_secret
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Build for production:**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```text
src/
├── actions/        # Server Actions for DB operations
├── app/            # Next.js App Router (Routes & Layouts)
├── components/     # Reusable UI & Page components
├── lib/            # Utility functions & DB config
├── model/          # Mongoose schemas/models
├── types/          # TypeScript definitions
└── script/         # Seeding & maintenance scripts
```



_Developed with ❤️ by [Naim Sorker](https://github.com/naims6)_
