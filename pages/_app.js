import NavMenu from "@/components/NavMenu";
import { useState } from "react";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function App({ Component, pageProps }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className={poppins.className}>
      <NavMenu navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className={`${navOpen ? "moveUp" : ""} transiton-[height] duration-700 ease-[cubic-bezier(.13, .53, .38, .97)] wrapper`}>
        <Component
          {...pageProps}
        />
      </div>
    </main>
  );
}
