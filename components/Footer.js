import React from "react";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className=" font-fira mt-8">
      <hr></hr>
      <div className="px-28 flex pt-7">
        <div className="w-[80%] space-y-4 ">
          <Link href="/" className="flex items-center space-x-2">
            <VscAccount className="w-6 h-6 text-white" />
            <h2 className="font-bold text-2xl text-white">Azmil</h2>
            <label className="text-graybg pl-5">azmilawaludin@gmail.com</label>
          </Link>
          <p className="text-white">
            Junior web designer and front-end developer based in Indonesia
          </p>
        </div>
        <div className="w-[20%]">
          <h2 className="text-2xl text-white">Media</h2>
          <div className="flex pt-4 space-x-3">
            <Link href="/">
              <AiFillGithub className="w-6 h-6 text-white" />
            </Link>
            <Link href="/">
              <AiFillFacebook className="w-6 h-6 text-white" />
            </Link>
            <Link href="/">
              <AiFillLinkedin className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 pb-3 text-white">
        © Copyright 2022. Made by Azmil
      </div>
    </div>
  );
}

export default Footer;
