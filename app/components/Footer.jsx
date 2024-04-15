import Image from "next/image";
import React from "react";
import logo from "../../public/logo-white.svg";
import facebook from "../../public/adminUi/footer/facebook.svg";
import instagram from "../../public/adminUi/footer/instagram.svg";
import twitter from "../../public/adminUi/footer/twitter.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="mt-24 xl:px-24 md:px-8 px-4 py-6 relative flex justify-between items-center bg-[#060606]">
      <Image
        src={logo.src}
        className="md:max-w-36 sm:max-w-32 max-w-20"
        alt="logo"
        width={150}
        height={150}
      />
      <p className="text-white md:text-base sm:text-sm text-[10px]">
        &copy;Tech Heaven. All Rights are reserved
      </p>
      <div className="flex sm:gap-8 gap-3 ">
        <Link href="#">
          <Image
            style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(62%) saturate(1070%) hue-rotate(319deg) brightness(102%) contrast(98%)"}}
            src={facebook.src}
            className="w-5 h-5"
            width={15}
            height={15}
            alt="facebook"
          />
        </Link>
        <Link href="#">
          <Image
            style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(62%) saturate(1070%) hue-rotate(319deg) brightness(102%) contrast(98%)"}}
            src={instagram.src}
            className="w-5 h-5"
            width={15}
            height={15}
            alt="instagram"
          />
        </Link>
        <Link href="#">
          <Image
            style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(62%) saturate(1070%) hue-rotate(319deg) brightness(102%) contrast(98%)"}}
            src={twitter.src}
            className="w-5 h-5"
            width={15}
            height={15}
            alt="twitter"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
