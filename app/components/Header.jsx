"use client";
import React from "react";
import { Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import logo from "../../public/logo-white.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: "Home",
    to: "/",
    key: "1",
  },
  {
    label: "Shop",
    to: "/products",
    key: "2",
  },
  {
    label: "Login",
    to: "/login",
    key: "3",
  },
];
const index = () => {
  const pathname = usePathname();
  return (
      <div className="bg-[#060606] flex w-full md:pt-4 md:pb-0 py-4 lg:px-24 md:px-8 px-4 items-center justify-between flex-wrap gap shadow-xl">
        {/* logo */}
        <div className="">
          <Link href="/">
            <Image
              src={logo}
              width="170"
              height="50"
              alt="white-logo"
              className="max-h-full max-w-32 sm:max-w-44"
            />
            {/* <h1 className="max-h-full max-w-32 text-2xl sm:max-w-44 text-md">TECH HAVEN</h1> */}
          </Link>
        </div>
        {/* buttons */}
        {/* in md screens it'll be buttons otherwise it's dropdown */}
        <div className="md:flex gap-4 hidden text-center">
          {items.map((item, ind) => (
              <Link 
                key={ind}
                href={item.to}
                className={`px-4 text-white leading-[5rem] relative ${item.to === pathname? "border-b-4 border-maingold": 'hover:text-[#e1d3d3]'}`}
              >
                {item.label}
                {/* {pathname === item.to &&
                <span className="block h-1 w-full bg-maingold left-0 bottom-0"></span>} */}
              </Link>
          ))}
        </div>
        {/* dropdown */}
        <div className="md:hidden block">
          <Dropdown
            menu={{
              items,
              onClick,
              // style: { width: "160px" },
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <MenuOutlined className="text-xl" />
            </a>
          </Dropdown>
        </div>
      </div>
  );
};

export default index;
