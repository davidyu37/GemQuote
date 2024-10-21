// components/FeaturesAccordion.tsx
"use client";
import { useState, useRef } from "react";
import type { JSX } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  image: {
    path: string;
    alt: string;
  };
  svg?: JSX.Element;
}

const features = [
  {
    title: "Smart Quote Management",
    description:
      "Create professional quotes in minutes with customizable templates, automatic pricing calculations, and real-time material cost updates. Track every quote's status and follow-up automatically.",
    image: {
      path: "/gemquote_dashboard.png",
      alt: "Smart quoting dashboard showing quote management interface",
    },
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "AI-Powered Communication",
    description:
      "Let AI handle follow-ups, reminders, and customer communications with a consistent brand voice. Smart notifications ensure no opportunity slips through the cracks.",
    image: {
      path: "/gemquote_dashboard.png",
      alt: "AI communication interface showing automated messaging",
    },
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    title: "Sales Pipeline Management",
    description:
      "Track your sales pipeline from initial inquiry to final sale. Monitor conversion rates, identify bottlenecks, and optimize your sales process with detailed analytics.",
    image: {
      path: "/gemquote_dashboard.png",
      alt: "Sales pipeline visualization showing deal stages",
    },
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: "Customer Relationship Tools",
    description:
      "Build stronger customer relationships with detailed customer profiles, purchase history tracking, and automated anniversary reminders. Keep all customer interactions in one place.",
    image: {
      path: "/gemquote_dashboard.png",
      alt: "Customer relationship management dashboard",
    },
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
] as Feature[];

const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li className="border-b border-primary/10 last:border-none">
      <button
        className="relative flex gap-4 items-center w-full py-6 text-base md:text-lg group"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        {/* Icon wrapper with animations */}
        <span
          className={`relative flex items-center justify-center transition-colors duration-350 ease-luxury
            ${
              isOpen
                ? "text-primary"
                : "text-primary/60 group-hover:text-primary/80"
            }`}
        >
          {/* Icon */}
          <span className="relative">{svg}</span>
        </span>

        {/* Title */}
        <span
          className={`flex-1 font-medium transition-colors duration-350 ease-luxury
            ${
              isOpen
                ? "text-primary"
                : "text-neutral-200 group-hover:text-neutral-50"
            }`}
        >
          <h3 className="text-left">{title}</h3>
        </span>

        {/* Arrow icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className={`w-4 h-4 transition-transform duration-350 ease-luxury
            ${
              isOpen
                ? "rotate-180 text-primary"
                : "text-primary/60 group-hover:text-primary/80"
            }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {/* Content */}
      <div
        ref={accordion}
        className="transition-all duration-350 ease-luxury overflow-hidden"
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-6 text-neutral-300 leading-relaxed">
          {description}
        </div>
      </div>
    </li>
  );
};

const Media = ({ feature }: { feature: Feature }) => {
  return (
    <div className="hidden lg:block relative">
      <Image
        src={feature.image.path}
        alt={feature.image.alt}
        className="rounded-2xl shadow-gold border border-primary/10 object-cover object-center transition-all duration-350 ease-luxury"
        width={500}
        height={400}
      />
    </div>
  );
};

const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <section className="relative w-full bg-neutral-950" id="features">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Section heading */}
        <h2 className="font-serif font-extrabold text-4xl lg:text-5xl tracking-tight mb-16 md:mb-24 text-center">
          <span className="text-neutral-50 block mb-2">
            Everything you need to{" "}
          </span>
          <span className="bg-primary text-neutral-950 px-4 py-1 rounded-md inline-block transform -rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300">
            scale
          </span>
        </h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Accordion list */}
          <ul className="w-full divide-y divide-primary/10">
            {features.map((feature, i) => (
              <Item
                key={feature.title}
                index={i}
                feature={feature}
                isOpen={featureSelected === i}
                setFeatureSelected={() => setFeatureSelected(i)}
              />
            ))}
          </ul>

          {/* Feature image */}
          <Media feature={features[featureSelected]} key={featureSelected} />
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="https://getwaitlist.com/waitlist/21281"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute -inset-px rounded-lg bg-primary/20 animate-pulse [animation-duration:3s]"></div>
            <button className="relative px-8 py-3 bg-neutral-950 text-primary hover:text-primary-light border border-primary/20 hover:border-primary/40 rounded-lg transition-colors duration-350 ease-luxury text-lg font-medium">
              Get Early Access Now
            </button>
          </a>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/10"></div>
    </section>
  );
};

export default FeaturesAccordion;
