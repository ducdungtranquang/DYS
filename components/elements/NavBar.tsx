"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = ({ navLink }: any) => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const links = [
    {
      id: 1,
      link: "/",
      title: "home",
    },
    {
      id: 2,
      link: "shopping",
    },
    {
      id: 3,
      link: "profile",
    },
    {
      id: 4,
      link: "explore",
    },
    {
      id: 5,
      link: "contact",
    },
    {
      id: 6,
      link: "sign-in",
      title: "sign in",
    },
    {
      id: 7,
      link: "sign-up",
      title: "sign up",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav top-0 z-50">
      <div>
        {/* <h1 className="text-4xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-4xl font-signature ml-2">
          <Link className="link-underline link-underline-black" href="/">
            DYS
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className={
              "nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            }
          >
            <Link href={`/${link}`}>{title || link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <Link onClick={() => setNav(!nav)} href={`/${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
