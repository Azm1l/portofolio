import React from "react";
import Button from "./Button";
import Express from "../assets/express.jpg";
import Image from "next/image";
import Todo from "../assets/todos.webp";
import Scrapping from "../assets/scrapping.jpg";

function Card({ type, header, desc, images }) {
  return (
    <div className="flex-1 border border-white divide-y">
      <Image
        src={`/${images}`}
        width={400}
        height={200}
        alt="project"
        className="w-[400px] h-[200px]"
      />
      <h2 className="text-graybg pl-2">{type}</h2>
      <div className="px-4 py-4 space-y-4 ">
        <h2 className="text-white font-bold text-lg">{header}</h2>
        <label className="text-graybg">{desc}</label>
        <div>
          <Button text={`Github <~~>`} />
        </div>
      </div>
    </div>
  );
}

export default Card;
