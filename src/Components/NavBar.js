import Link from "next/link";
import { useState } from "react";
export default function NavBar({ bgcolor, textcolor }) {
  return (
    <>
      <nav
        className={`${
          bgcolor ? "bg-sky-400" : "bg-transparent"
        } flex sm:text-xl lg:text-3xl text-white min-h-4 py-5`}
      >
        <h2
          style={{
            width: "50%",
          }}
          className="md:text-center font-bold sm:text-left "
        >
          InvestIQ
        </h2>
        <ul
          className="flex justify-evenly text-xl md:text-2xl"
          style={{
            width: "50%",
          }}
        >
          <li className="hover:text-gray-300 hover:cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 hover:cursor-pointer">
            <Link href="/portfolio">Get Started</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
