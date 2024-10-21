// components/CTA.tsx

import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-[80vh]">
      <Image
        src="/gemquote_cta.png"
        alt="Background"
        className="object-cover w-full brightness-[0.7]"
        fill
        priority
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-60 backdrop-blur-sm"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-2xl p-0 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            <span className="bg-primary text-primary-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
              Transform
            </span>{" "}
            Your Jewelry Business Today
          </h2>
          <div className="space-y-6 mb-12 md:mb-16">
            <p className="text-lg opacity-90">
              Join forward-thinking jewelers who are streamlining their
              operations, closing more sales, and growing their businesses with{" "}
              {config.appName}.
            </p>
            <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-base-100">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Quick Setup</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Priority Access</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Launch Pricing</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://getwaitlist.com/waitlist/21281"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-wide btn-lg"
            >
              Get Early Access Now
            </a>
            <p className="text-sm opacity-80">
              Limited spots available for early access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
