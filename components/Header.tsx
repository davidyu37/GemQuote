"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Handle scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-350 ease-luxury
        ${
          isScrolled
            ? "bg-neutral-950/95 backdrop-blur-sm shadow-gold-sm py-3"
            : "bg-transparent py-5"
        }`}
    >
      <nav className="container flex items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            title={`${config.appName} homepage`}
          >
            <div className="relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-350 ease-luxury"></div>
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8 h-8 relative transition-transform duration-350 ease-luxury group-hover:scale-105"
                width={32}
                height={32}
                priority
              />
            </div>
            <span className="font-serif font-bold text-xl text-neutral-50 group-hover:text-primary transition-colors duration-350 ease-luxury">
              {config.appName}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Add your nav items here if needed */}
          <Link
            href="#early-access"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute -inset-2 bg-gold-gradient opacity-0 group-hover:opacity-20 rounded-lg blur-sm transition-opacity duration-350 ease-luxury"></div>
            <button className="relative px-6 py-2 bg-neutral-950/50 text-primary border border-primary/20 hover:border-primary/40 rounded-lg transition-all duration-350 ease-luxury group-hover:text-primary-light">
              Get Early Access Now
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden relative p-2 rounded-lg text-neutral-50 hover:text-primary transition-colors duration-350 ease-luxury"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 bg-gold-gradient opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-350 ease-luxury"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 relative transition-transform duration-350 ease-luxury"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Mobile menu */}
        <div
          className={`absolute top-full left-0 right-0 transition-all duration-350 ease-luxury
            ${
              isOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
            }`}
        >
          <div className="bg-neutral-950/95 backdrop-blur-sm border-t border-primary/10 shadow-gold">
            <div className="container mx-auto px-4 py-4">
              <Link
                href="#early-access"
                className="block group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-350 ease-luxury"></div>
                <button className="relative w-full px-6 py-3 bg-neutral-950/50 text-primary border border-primary/20 hover:border-primary/40 rounded-lg transition-all duration-350 ease-luxury group-hover:text-primary-light">
                  Get Early Access
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
