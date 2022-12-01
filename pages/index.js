import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div className=" bg-blackbg ">
      <Head>
        <title>Azmil Awaludin</title>
        <meta property="og:title" content="My Portofolio" key="title" />
      </Head>
      <Navbar />
      <Content />
    </div>
  );
}
