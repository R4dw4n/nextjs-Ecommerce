import React from "react";
import Counter from "./Counter";
import hero2 from "../../public/assets/images/image-4.svg";
import Image from "next/image";
import Link from "next/link";

const Deals = () => {
  return (
      <div className="mt-24 mx-auto container xl:px-24 md:px-8 px-4 relative flex lg:flex-row flex-col gap-8 items-center">
        {/* text-info */}
        <div className="lg:max-w-[50%] lg:text-left text-center">
          <h2 className="text-white text-3xl">Deals of the Month</h2>
          <p className="text-[#999] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            consequatur perferendis fugiat eos magnam earum quisquam hic
            corrupti culpa. Sunt inventore veritatis sapiente obcaecati nobis
            ipsam ut dicta in expedita.
          </p>
          <Counter />
          <Link
            href="/products"
            className="hover:!text-white hover:!border-dark py-4 px-2 bg-maingold rounded text-dark"
          >
            View Products -&gt;
          </Link>
        </div>
        {/* image */}
        <div className="min-w-[50%] h-auto">
          <Image
            src={hero2.src}
            className="w-full h-auto"
            alt="asset"
            width={25}
            height={25}
          />
        </div>
      </div>
  );
};

export default Deals;
