import {useEffect, useState} from "react";
import NavCard from "./NavCard";
import $ from "jquery";

const NavDrawer = ({ navOpen }) => {

  return (
    <nav
      className={`h-0 w-full fixed left-0 bottom-0 z-[50] bg-black ${
        navOpen ? "h-[65svh]" : ""
      } transiton-[height] duration-700 ease-[cubic-bezier(.13, .53, .38, .97)]`} id="nav">
      <div
        className={`w-fit h-[70%] relative`}
        id="links"
        onMouseMove={(e) => {
          // From: https://codepen.io/piogil/pen/XebobL jquery solution.
          let cntWd = $("#nav").innerWidth();
          let links = $("#links");
          let sldWd = links.outerWidth();
          links.css({
            left:
              ((cntWd - sldWd) * (e.pageX / cntWd).toFixed(3)).toFixed(1) +
              "px",
          });
        }}
        onMouseLeave={(e) => {
          let links = $("#links");
          // links.css({ left: "0px" });
        }}>
        <div
          className={`flex gap-[2em] mt-[4em] md:mt-[3em] relative w-max linkWrapperDefault ${
            navOpen ? "linkWrapperOpen" : ""
          } bg-black transition-[transform] duration-700 ease-[cubic-bezier(.13, .53, .38, .97)] px-10`}>
          {/* Cards go here */}
          <NavCard title={"Home"} />
          <NavCard title={"Projects"} />
          <NavCard title={"About Me"} />
          <NavCard title={"Other"} />
          <NavCard title={"Other"} />
          <NavCard title={"Other"} />
        </div>
      </div>
    </nav>
  );
};

export default NavDrawer;
