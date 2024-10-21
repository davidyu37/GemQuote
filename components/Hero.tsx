// components/Hero.tsx

import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Maximise Your Jewellery Sales with AI-Driven Quotes
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          {config.appName} simplifies quoting, streamlines communication, and
          boosts revenue. Manage quotes from anywhere, use AI to enhance your
          customer communication, and track every stage of the process. Close
          deals faster and elevate your sales with smart notifications and
          integrated email management.
        </p>
        <a
          href="https://getwaitlist.com/waitlist/21281"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary btn-wide">
            Get Early Access Now
          </button>
        </a>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="/gemquote_dashboard.png"
          alt="Jewelry Business Management"
          className="w-full rounded-lg shadow-lg"
          priority={true}
          width={750}
          height={750}
        />
      </div>
    </section>
  );
};

export default Hero;
