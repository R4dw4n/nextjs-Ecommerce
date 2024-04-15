import React from "react";
import shipping from "../../public/assets/icons/orders.svg";
import money from "../../public/assets/icons/dollar.svg";
import support from "../../public/assets/icons/support.svg";
import payment from "../../public/assets/icons/purchases.svg";
import Image from "next/image";
const data = [
  {
    icon: shipping,
    title: "Free Shipping",
    text: "Free shipping for orders above $150",
  },
  {
    icon: money,
    title: "Money Guarantee",
    text: "Within 30 days for an exchange",
  },
  {
    icon: support,
    title: "Online Support",
    text: "24 hours a day, 7 days a week",
  },
  {
    icon: payment,
    title: "Flexible Payment",
    text: "Pay with multiple credit cards",
  },
];
const Features = () => {
  return (
    <div className="container mt-24 mx-auto xl:px-24 md:px-8 px-4 relative flex justify-between flex-wrap gap-y-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="lg:w-[25%] sm:w-[50%] w-full lg:text-left text-center"
        >
          <Image
            style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(62%) saturate(1070%) hue-rotate(319deg) brightness(102%) contrast(98%)"}}
            src={item.icon.src}
            className="max-w-full lg:mx-0 mx-auto"
            width={25}
            height={25}
            alt={item.title}
          />
          <h3 className="font-bold text-xl my-2">{item.title}</h3>
          <p className="text-[#999] text-sm">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
