import React from "react";
import watches from "../../public/adminUi/categories/watches-category.png";
import accessories from "../../public/adminUi/categories/accessories-category.png";
import ipads from "../../public/adminUi/categories/ipads-category.png";
import laptops from "../../public/adminUi/categories/laptops-category.png";
import phones from "../../public/adminUi/categories/phones-category.png";
import tv from "../../public/adminUi/categories/tv-home-category.png";
import Link from "next/link";
import Image from "next/image";
const Categories = () => {
  const data = [
    {
      image: watches,
      title: "Watches",
    },
    {
      image: tv,
      title: "TV & Home",
    },
    {
      image: ipads,
      title: "Ipads",
    },
    {
      image: accessories,
      title: "Accessories",
    },
    {
      image: laptops,
      title: "Laptops",
    },
    {
      image: phones,
      title: "Phones",
    },
  ];
  return (
    <div className="mt-24 mx-auto container xl:px-24 md:px-8 px-4 h-100vh relative">
      {/* header */}
      <div className="flex justify-between items-center ">
        <h3 className="text-maingold md:text-3xl text-2xl font-semibold ">
          Shop by Categories
        </h3>
        <Link href="/products" className="text-maingold md:text-base text-sm">
          Show All
        </Link>
      </div>
      {/* cards */}
      <div className="flex gap-4 flex-wrap w-full mt-8 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-r from-[#2e3038] to-[rgb(10,10,10)] text-center overflow-hidden h-[50vh] md:w-[calc((100%-2rem)/3)] sm:w-[calc((100%-1rem)/2)] w-full rounded-lg relative"
          >
            <div
              style={{ backgroundImage: `url(${item.image.src})` }}
              className="w-full h-full bg-cover bg-center"
            ></div>
            <h5 className="w-[calc(100%-2rem)] box-border bg-gradient-to-r from-[#060606] to-[#090909] rounded-lg py-4 absolute bottom-4 left-4 text-maingold">
              {item.title}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
