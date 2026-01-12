"use client";

import Link from "next/link";
import { Logo } from "@/src/components/logo";
import { Menu, X, User, Home, Heart, Users, DollarSign, HelpCircle, Info, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Heart },
  { name: "Caregivers", href: "/caregivers", icon: Users },
  { name: "About", href: "/about", icon: Info },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "How It Works", href: "/how-it-works", icon: HelpCircle },
];

export const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    signOut({redirect: false})
    router.push("/login")
    setIsUserDropdownOpen(false);
  };

  if(status === "loading") {
    return (
      <header className="fixed top-0 left-0 z-50 w-full">
        <nav className="w-full border-b bg-white/95 backdrop-blur-md supports-backdrop-filter:bg-white/60 dark:bg-zinc-950/95 dark:supports-backdrop-filter:bg-zinc-950/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo Skeleton */}
              <div className="flex items-center">
                <div className="h-8 w-32 bg-muted animate-pulse rounded" />
              </div>

              {/* Desktop Navigation Skeleton */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                <div className="flex space-x-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-4 w-16 bg-muted animate-pulse rounded" />
                  ))}
                </div>

                <div className="ml-6 flex items-center space-x-4">
                  {/* Theme Toggle Skeleton */}
                  <div className="h-9 w-9 bg-muted animate-pulse rounded-md" />
                  <div className="h-6 w-px bg-border" />
                  {/* Auth Buttons Skeleton */}
                  <div className="h-9 w-16 bg-muted animate-pulse rounded-md" />
                  <div className="h-9 w-20 bg-muted animate-pulse rounded-md" />
                </div>
              </div>

              {/* Mobile Menu Button Skeleton */}
              <div className="flex items-center gap-2 lg:hidden">
                <div className="h-9 w-9 bg-muted animate-pulse rounded-md" />
                <div className="h-9 w-9 bg-muted animate-pulse rounded-md" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="w-full border-b bg-white/95 backdrop-blur-md supports-backdrop-filter:bg-white/60 dark:bg-zinc-950/95 dark:supports-backdrop-filter:bg-zinc-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Logo />              
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <div className="flex space-x-6">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="ml-6 flex items-center space-x-4">
                <ThemeToggle />
                
                {session?.user ? (
                  // User dropdown for logged in users
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                      className="flex items-center gap-2 rounded-full p-1 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label="User menu"
                    >
                      <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-primary/20">
                        {session.user.image ? (
                          <Image
                            src={session.user.image}
                            alt={session.user.name || "User"}
                            fill
                            className="object-cover"
                            sizes="32px"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-primary/10">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isUserDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg border bg-background p-2 shadow-lg shadow-black/5 ring-1 ring-black/5 dark:ring-white/10"
                        >
                          {/* User Info */}
                          <div className="flex items-center gap-3 p-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full border">
                              {session.user.image ? (
                                <Image
                                  src={session.user.image}
                                  alt={session.user.name || "User"}
                                  fill
                                  className="object-cover"
                                  sizes="40px"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-primary/10">
                                  <User className="h-5 w-5 text-primary" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold truncate">
                                {session.user.name || "User"}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {session.user.email}
                              </p>
                            </div>
                          </div>

                          <div className="my-2 h-px bg-border" />

                          {/* Dashboard Link */}
                          <Link
                            href="/dashboard"
                            onClick={() => setIsUserDropdownOpen(false)}
                            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                          >
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                          </Link>

                          <div className="my-2 h-px bg-border" />

                          {/* Logout Button */}
                          <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/50"
                          >
                            <LogOut className="h-4 w-4" />
                            Logout
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Original login/signup buttons for non-logged in users
                  <>
                    <div className="h-6 w-px bg-border" />
                    <Button asChild variant="outline" size="sm">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href="/sign-up">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              
              {session?.user ? (
                // Mobile user avatar
                <div className="relative mr-2" ref={dropdownRef}>
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-primary/20"
                    aria-label="User menu"
                  >
                    {session.user.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/10">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                    )}
                  </button>

                  {/* Mobile Dropdown Menu */}
                  <AnimatePresence>
                    {isUserDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg border bg-background p-2 shadow-lg shadow-black/5 ring-1 ring-black/5 dark:ring-white/10"
                      >
                        {/* User Info */}
                        <div className="flex items-center gap-3 p-3">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full border">
                            {session.user.image ? (
                              <Image
                                src={session.user.image}
                                alt={session.user.name || "User"}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-primary/10">
                                <User className="h-5 w-5 text-primary" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">
                              {session.user.name || "User"}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {session.user.email}
                            </p>
                          </div>
                        </div>

                        <div className="my-2 h-px bg-border" />

                        {/* Dashboard Link */}
                        <Link
                          href="/dashboard"
                          onClick={() => {
                            setIsUserDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                        >
                          <LayoutDashboard className="h-4 w-4" />
                          Dashboard
                        </Link>

                        <div className="my-2 h-px bg-border" />

                        {/* Logout Button */}
                        <button
                          onClick={handleLogout}
                          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/50"
                        >
                          <LogOut className="h-4 w-4" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : null}

              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant="ghost"
                size="icon"
                className="relative"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="lg:hidden"
          >
            <div 
              className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm" 
              onClick={() => setIsMenuOpen(false)} 
            />
            
            <div className="fixed inset-x-0 top-16 z-50 mx-4 overflow-hidden rounded-t-2xl border bg-background shadow-2xl">
              <div className="px-4 pb-4 pt-6">
                {/* Menu Items */}
                <nav className="grid gap-2">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.name}</span>
                        {isActive && (
                          <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Auth Buttons - Only show if not logged in */}
                {!session?.user && (
                  <div className="mt-8 grid grid-cols-2 gap-3 px-2">
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link href="/login">
                        <User className="mr-2 h-4 w-4" />
                        Login
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link href="/sign-up">Sign Up</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};