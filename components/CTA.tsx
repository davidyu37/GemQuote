import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Simplify Your Gemstone Quotations
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Streamline your quoting process with GemQuote, the ultimate tool for
            gemstone dealers. Create accurate, professional quotes effortlessly.
          </p>

          <a
            href="https://getwaitlist.com/waitlist/21281"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-wide">
              Discover GemQuote
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;