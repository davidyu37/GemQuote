// components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

const Footer = () => {
  return (
    <footer className="relative bg-neutral-950 border-t border-primary/10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-10">
          {/* Logo and Company Info */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative p-1">
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8 h-8 transition-transform duration-350 ease-luxury group-hover:scale-105"
                width={32}
                height={32}
                priority
              />
            </div>
            <span className="font-serif font-bold text-xl text-neutral-50 group-hover:text-primary transition-colors duration-350 ease-luxury">
              {config.appName}
            </span>
          </Link>

          {/* Essential Links */}
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-3">
            {config.mailgun.supportEmail && (
              <a
                href={`mailto:${config.mailgun.supportEmail}`}
                className="group text-sm text-neutral-400 hover:text-primary transition-colors duration-350 ease-luxury"
              >
                <span className="relative">
                  Support
                  <span className="absolute left-0 -bottom-px w-0 h-px bg-primary transition-all duration-350 ease-luxury group-hover:w-full" />
                </span>
              </a>
            )}
            <Link
              href="/privacy-policy"
              className="group text-sm text-neutral-400 hover:text-primary transition-colors duration-350 ease-luxury"
            >
              <span className="relative">
                Privacy Policy
                <span className="absolute left-0 -bottom-px w-0 h-px bg-primary transition-all duration-350 ease-luxury group-hover:w-full" />
              </span>
            </Link>
            <Link
              href="/tos"
              className="group text-sm text-neutral-400 hover:text-primary transition-colors duration-350 ease-luxury"
            >
              <span className="relative">
                Terms of Service
                <span className="absolute left-0 -bottom-px w-0 h-px bg-primary transition-all duration-350 ease-luxury group-hover:w-full" />
              </span>
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} {config.appName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
