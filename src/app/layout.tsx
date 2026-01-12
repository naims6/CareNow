import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import ScrollProgress from "../components/ScrollProgress";
import NextAuthProvider from "./provider/NextAuthProvider";
import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "CareNow - Trusted Baby Sitting & Elderly Care Services in Bangladesh",
    template: "%s | CareNow",
  },
  description:
    "Find reliable, verified caregivers for baby sitting, elderly care, and special needs. Book professional care services in Dhaka, Chittagong, Sylhet & across Bangladesh. Safe, affordable, and trusted by 1200+ families.",
  keywords: [
    "baby sitting services Bangladesh",
    "elderly care at home",
    "caregiver service Dhaka",
    "babysitter near me",
    "senior care Bangladesh",
    "special needs caregiver",
    "home care services",
    "child care services",
    "nanny service Bangladesh",
    "24/7 caregiving",
    "post-surgery care",
    "emergency caregiver",
    "trusted babysitter",
    "professional elderly care",
    "care now Bangladesh",
  ],
  authors: [{ name: "CareNow Bangladesh" }],
  creator: "CareNow",
  publisher: "CareNow Bangladesh",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://care-now-delta.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "bn-BD": "/bn",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://care-now-delta.vercel.app/",
    siteName: "CareNow",
    title: "CareNow - Trusted Baby Sitting & Elderly Care Services",
    description:
      "Professional caregiving services for children, elderly, and special needs in Bangladesh. Book verified caregivers with confidence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CareNow - Professional Care Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareNow - Trusted Care Services in Bangladesh",
    description:
      "Book verified caregivers for baby sitting, elderly care, and special needs. Safe, professional, and affordable.",
    images: ["/twitter-image.png"],
    creator: "@carenowbd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Healthcare Services",
  classification: "Caregiving Services",
  abstract:
    "Professional caregiving platform connecting families with verified caregivers for children, elderly, and special needs in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <div className="min-h-screen w-full relative">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <ScrollProgress />
              <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                  // Define default options
                  className: "",
                  duration: 5000,
                  removeDelay: 1000,
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },

                  // Default options for specific types
                  success: {
                    duration: 3000,
                    iconTheme: {
                      primary: "green",
                      secondary: "black",
                    },
                  },
                }}
              />
            </ThemeProvider>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
