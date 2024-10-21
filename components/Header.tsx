// components/Header.tsx
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

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-base-200 shadow-sm">
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2"
            title={`${config.appName} homepage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-8 h-8"
              width={32}
              height={32}
              priority
            />
            <span className="font-bold text-xl">{config.appName}</span>
          </Link>
        </div>

        {/* Get Early Access button (desktop) */}
        <div className="hidden md:block">
          <Link href="#early-access" className="btn btn-primary">
            Get Early Access Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
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
          className={`absolute top-16 left-0 right-0 bg-base-200 shadow-md transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <Link href="#early-access" className="btn btn-primary btn-block">
              Get Early Access
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
