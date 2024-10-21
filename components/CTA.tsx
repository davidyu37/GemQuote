// components/CTA.tsx

import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background image with refined overlay */}
      <Image
        src="/gemquote_cta.png"
        alt="Background"
        className="object-cover w-full h-full brightness-[0.3]"
        fill
        priority
      />

      {/* Gradient overlay - simplified */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950/80 backdrop-blur-[1px]"></div>

      {/* Main content */}
      <div className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl text-center py-16 md:py-20">
          {/* Heading */}
          <h2 className="font-serif font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12 text-neutral-50">
            <span className="bg-primary text-neutral-950 px-4 py-1 rounded-md inline-block mb-4">
              Transform
            </span>
            <span className="block">Your Jewelry Business Today</span>
          </h2>

          {/* Description */}
          <div className="space-y-8 mb-12 md:mb-16">
            <p className="text-lg text-neutral-50 leading-relaxed">
              Join forward-thinking jewelers who are streamlining their
              operations, closing more sales, and growing their businesses with{" "}
              <span className="text-primary">{config.appName}</span>.
            </p>

            {/* Features list */}
            <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-neutral-50">
              {["Quick Setup", "Priority Access", "Launch Pricing"].map(
                (feature) => (
                  <li
                    key={feature}
                    className="flex items-center justify-center gap-3 group"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-350 ease-luxury">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="group-hover:text-primary transition-colors duration-350 ease-luxury">
                      {feature}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CTA Button and text */}
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://getwaitlist.com/waitlist/21281"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-px rounded-lg bg-primary/20 animate-pulse [animation-duration:3s]"></div>
              <button className="relative px-12 py-4 bg-neutral-950/90 text-primary hover:text-primary-light border border-primary/20 hover:border-primary/40 rounded-lg transition-colors duration-350 ease-luxury text-lg font-medium">
                Get Early Access Now
              </button>
            </a>
            <p className="text-sm text-neutral-200">
              Limited spots available for early access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
