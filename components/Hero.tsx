import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Simplify Your Gemstone Quotations
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          GemQuote is your go-to solution for creating accurate and professional
          quotes in the gemstone industry. Streamline your process with
          real-time pricing and customizable templates.
        </p>
        <a
          href="https://getwaitlist.com/waitlist/21281"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary btn-wide">Get Early Access</button>
        </a>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="GemQuote Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
