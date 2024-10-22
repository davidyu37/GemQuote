"use client";
// components/Hero.tsx

import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import Script from "next/script";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-neutral-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:py-32">
        {/* Left column - Text content */}
        <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start lg:w-1/2">
          {/* Hero Heading with animated reveal */}
          <h1 className="font-serif font-extrabold text-4xl lg:text-6xl tracking-tight text-neutral-50 space-y-3">
            <span className="block opacity-0 animate-reveal">
              Maximise Your
            </span>
            <span className="block opacity-0 animate-reveal [animation-delay:200ms]">
              Jewellery Sales
            </span>
            <span className="block opacity-0 animate-reveal [animation-delay:400ms]">
              with{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">AI-Driven</span>
                <div className="absolute inset-0   -z-10"></div>{" "}
                {/* Reduced blur and opacity */}
              </span>
            </span>
            <span className="relative inline-block opacity-0 animate-reveal [animation-delay:600ms]">
              <span className="relative z-10 text-primary">Quotes</span>
              <div className="absolute inset-0   -z-10"></div>{" "}
              {/* Reduced blur and opacity */}
            </span>
          </h1>

          {/* Hero Description with fade-up animation */}
          <p className="text-lg leading-relaxed text-neutral-300 max-w-2xl lg:max-w-none opacity-0 animate-fade-up [animation-delay:800ms]">
            {config.appName} simplifies quoting, streamlines communication, and
            boosts revenue. Manage quotes from anywhere, use AI to enhance your
            customer communication, and track every stage of the process. Close
            deals faster and improve your sales with smart notifications and
            integrated email management.
          </p>

          {/* Adjusted GetWaitlist Widget container */}
          <div className="mt-16 text-center w-full max-w-md">
            <div
              id="getWaitlistContainer"
              data-waitlist_id="21281"
              data-widget_type="WIDGET_2"
            ></div>
          </div>

          {/* Testimonials with fade-up animation */}
          <div className="w-full opacity-0 animate-fade-up [animation-delay:1200ms]">
            <TestimonialsAvatars priority={true} />
          </div>
        </div>

        {/* Right column - Image with floating animation */}
        <div className="relative lg:w-1/2 opacity-0 animate-fade-up [animation-delay:600ms]">
          {/* Decorative glow effects */}
          <div className="absolute inset-0 bg-primary/5 rounded-lg blur-xl"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>

          {/* Main image with hover effect */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-luxury"></div>
            <Image
              src="/gemquote_dashboard.png"
              alt="Jewellery Business Management"
              className="relative w-full rounded-lg shadow-gold border border-primary/10 transition-transform duration-350 ease-luxury animate-float"
              priority={true}
              width={750}
              height={750}
            />
          </div>
        </div>
      </div>

      {/* Add GetWaitlist CSS and JS */}
      <Script
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        @import url("https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css");

        /* Hide the "Waitlist hosted by getwaitlist.com" text */
        #getWaitlistContainer .gw-mt-2:last-child {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
