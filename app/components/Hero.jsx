import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero1 from "/public/adminUi/hero/hero-1.png";
const Hero = () => {
  return (
      <div className="max-h-[900px] mx-auto  min-h-60 relative flex items-center w-full blue-back overflow-hidden">
        <Image
          className="h-auto max-w-full relative md:left-20 left-16"
          src={hero1}
          alt="hero-image"
        />
        <div className="absolute max-w-[6,0%]  top-1/2 lg:left-20 text-dark xl:left-40 left-8 -translate-y-1/2 sm:block ">
          <h1 className="lg:text-6xl  md:text-5xl sm:text-3xl text-2xl !leading-snug font-bold text-white">
            Unleash Innovation
            <br /> in Every Byte.
          </h1>
          <h2 className="md:text-xl sm:text-lg text-maingold">
            Explore a World of Cutting-Edge Tech
          </h2>
          <Link
            href="/products"
            className="block w-fit rounded hover:!text-white hover:!border-dark mt-12 p-1 text-sm
            md:mt-4 md:p-2 md:text-base bg-maingold"
          >
            Shop now
          </Link>
        </div>
      </div>
  );
};

export default Hero;
