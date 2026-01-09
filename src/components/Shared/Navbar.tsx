"use client";

import Link from "next/link";
import { Logo } from "@/src/components/logo";
import { Menu, X, User, Home, Heart, Users, DollarSign, HelpCircle, Info } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Heart },
  { name: "Caregivers", href: "/caregivers", icon: Users },
  { name: "About", href: "/about", icon: Info },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "How It Works", href: "/how-it-works", icon: HelpCircle },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
                <div className="h-6 w-px bg-border" />
                <Button asChild variant="outline" size="sm">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
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
            <div className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm" 
                 onClick={() => setIsMenuOpen(false)} />
            
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

                {/* Auth Buttons */}
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
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};