import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Azmil from "../assets/azmil.png";
import Express from "../assets/express.jpg";
import Button from "./Button";
import Card from "./Card";
import Table from "./Table";
import Footer from "./Footer";

function Content() {
  return (
    <>
      <div className="mt-[70px] px-28 text-white lg:flex md:flex space-x-2 font-fira">
        <div className="w-[55%] pt-16 font-fira  space-y-[32px] px-1 py-1">
          <h1 className="font-semibold text-2xl leading-10">
            Azmil is a junior web designer and front-end developer
          </h1>
          <h2 className="text-graybg">
            currently working in a startup company as a Service Desk using
            oracle database technology
          </h2>
          <Button text={`Contact me !!`} />
        </div>
        <div className="w-[45%]  px-1 py-1">
          <Image alt="azmil" src={Azmil} />
          <div className="px-2 py-2 border border-graybg font-fira flex items-center space-x-2">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="15"
                height="15"
                fill="#98C379"
                stroke="#98C379"
              />
            </svg>

            <label>Currently Working in PT. PKP</label>
          </div>
        </div>
      </div>
      <div className="grid place-content-center text-white mt-4">
        <div className="flex flex-col items-end font-fira">
          <h2 className=" px-3 py-3 border border-white font-2xl">
            If you can't stand the tiredness of studying, then you will be in
            danger of stupidity
          </h2>
          <h2 className=" px-3 py-2 border border-white">- Imam Syafi'i</h2>
        </div>
      </div>
      <section className="px-28 font-fira mt-10">
        <div
          className="flex justify-between text-white items-center"
          id="Label"
        >
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl">#projects </h2>
            <svg
              width="311"
              height="2"
              viewBox="0 0 511 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD" />
            </svg>
          </div>
          <Link href="/">View All ~~{">"}</Link>
        </div>
        <div className="mt-10 flex space-x-2">
          <Card
            images="express.jpg"
            type="NODEJS MYSQL ORM"
            header="API Service"
            desc="RESTFULL API using Express JS"
          />
          <Card
            images="todos.webp"
            type="NODEJS REACTJS"
            header="Todo List"
            desc="Simple Todo List Using React"
          />
          <Card
            images="scrapping.jpg"
            type="NODEJS EXPRESSJS"
            header="Komik API"
            desc="Create API using Express JS, with web scrapping"
          />
        </div>
      </section>
      <section className="px-28 mt-16 text-white" id="Skill">
        <h2 className="font-fira text-2xl">#skils...</h2>
        <div className="flex mt-10">
          <div className="w-[45%]"></div>
          <div className="flex-1">
            <div className="grid grid-cols-3 space-x-2">
              <Table title="Langugae" desc="JavaScript PHP" />
              <Table title="Database" desc="MySql Oracle" />
              <Table title="Tools" desc="VSCode Linux Git Docker" />
            </div>
            <div className="grid grid-cols-3 space-x-2 mt-4">
              <Table title="Other" desc="HTML Tailwind Daisy-UI" />
              <Table title="Frameworks" desc="React Express.js CodeIgniter" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Content;
