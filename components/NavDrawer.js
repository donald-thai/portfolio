import { useEffect, useState } from "react";
import NavCard from "./NavCard";
import ScrollContainer from "react-indiana-drag-scroll";
import $ from "jquery";

const NavDrawer = ({ navOpen, setNavOpen }) => {
  const numbers = new Array(50).fill(1).map((_, index) => index + 1);

  return (
    <nav
      className={`h-0 w-full fixed left-0 bottom-0 z-[50] bg-black ${
        navOpen ? "h-[65svh]" : ""
      } transiton-[height] duration-700 ease-[cubic-bezier(.13, .53, .38, .97)]`}
      id="nav">
      <ScrollContainer
        className={`whitespace-nowrap gap-[2em] py-[4em] md:pt-[3em] relative w-screen h-max linkWrapperDefault ${
          navOpen ? "linkWrapperOpen" : ""
        } bg-black transition-[transform] duration-700 ease-[cubic-bezier(.13, .53, .38, .97)] px-10`}
        horizontal>
        <NavCard
          title={"Home"}
          link="/"
          img="/home-screen.png"
          setNavOpen={setNavOpen}
        />
        <NavCard
          title={"Projects"}
          link="/projects"
          img="/projects-screen.png"
          setNavOpen={setNavOpen}
        />
        <NavCard title={"About Me"} link="/about" img="/about-screen.png" setNavOpen={setNavOpen} />
        <NavCard title={"Other"} setNavOpen={setNavOpen} />
      </ScrollContainer>
    </nav>
  );
};

export default NavDrawer;
