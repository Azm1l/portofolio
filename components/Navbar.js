import Link from "next/link";
import React from "react";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="  bg-blackbg font-fira top-0 right-0 left-0 fixed">
      <div className="px-28 pt-8 py-3 flex justify-between">
        <span className="flex items-center space-x-2 text-white">
          <Link href="/">
            <VscAccount className="w-8 h-8" />
          </Link>
          <Link href="/" className="text-lg font-bold">
            azmil
          </Link>
        </span>
        <nav className="flex space-x-16 items-center text-graybg">
          <Link className="hover:text-white" href="/">
            #home
          </Link>
          <Link className="hover:text-white" href="/">
            #works
          </Link>
          <Link className="hover:text-white" href="/">
            #about-me
          </Link>
          <Link className="hover:text-white" href="/">
            #contacs
          </Link>
          <select className="bg-blackbg text-white">
            <option>EN</option>
            <option>IND</option>
          </select>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
