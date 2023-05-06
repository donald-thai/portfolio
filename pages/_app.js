import NavMenu from "@/components/NavMenu";
import { useState } from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <NavMenu navOpen={navOpen} setNavOpen={setNavOpen} />
      <Component
        {...pageProps}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        className={`${navOpen ? "moveUp" : ""} transiton-[height] duration-700 ease-[cubic-bezier(.13, .53, .38, .97)] wrapper`}
      />
    </>
  );
}
