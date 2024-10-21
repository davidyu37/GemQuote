// components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo and Company Info */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-6 h-6"
              width={24}
              height={24}
              priority
            />
            <span className="font-bold text-lg">{config.appName}</span>
          </Link>

          {/* Essential Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-base-content/80">
            {config.mailgun.supportEmail && (
              <a
                href={`mailto:${config.mailgun.supportEmail}`}
                className="hover:text-primary transition-colors"
              >
                Support
              </a>
            )}
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/tos" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-base-content/60">
            © {new Date().getFullYear()} {config.appName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
