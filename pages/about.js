import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { openInNewTab } from "@/assets/funcs";

const about = () => {
  return (
    <div
      className={`h-full w-full bg-[#e2e2e2] pt-28 px-5 md:px-20 lg:px-32 pb-32 flex flex-col `}>
      <div className="uppercase tracking-wide font-bold flex flex-col gap-2 md:gap-3 mb-28 md:mb-40">
        <div className="flex items-center gap-6">
          <h1 className="flex-1 text-[3.25rem]/[1.5rem] md:text-8xl lg:text-9xl">
            Donald
          </h1>
          <div className="flex-1">
            <h3 className="hidden lg:inline w-[80%] md:text-base lg:text-xl normal-case font-semibold tracking-normal">
              i am an aspiring software engineer based in austin, texas with
              experience in full stack development. currently looking for SWE
              internship opportunities
            </h3>
          </div>
        </div>
        <div className="flex flex-col uppercase w-fit text-[3.25rem] md:text-8xl lg:text-9xl gap-3">
          <div className="flex justify-between items-center gap-2 md:gap-10">
            <h1 className="text-white">An</h1>
            <img
              src="/ice-tree.jpg"
              alt=""
              className="object-cover h-[1em] md:h-[1.25em] lg:h-[1em] w-[2em]"
            />
            <h1>Thai</h1>
          </div>
        </div>
        <div>
          <h3 className="w-full text-sm md:text-base lg:text-xl normal-case font-semibold lg:hidden">
            I am an aspiring software engineer based in Austin, Texas with
            experience in full stack development. currently looking for SWE
            internship opportunities
          </h3>
        </div>
        <div className="flex mt-5 md:mt-10 gap-3 md:gap-6 items-center h-fit">
          <img
            src="./github-box.svg"
            alt="github icon"
            className="w-7 md:w-10 h-full hover:scale-110 active:scale-95 transition ease-in-out duration-300"
            onClick={() => openInNewTab("https://github.com/donald-thai")}
          />
          <img
            src="./linkedin-box.svg"
            alt="linkedin icon"
            className="w-7 md:w-10 h-full hover:scale-110 active:scale-95 transition ease-in-out duration-300"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/donald-thai/")
            }
          />
          <Button
            text={"Resume"}
            icon={"./open-new-tab.svg"}
            color={"bg-white"}
            onClick={() =>
              openInNewTab(
                "https://drive.google.com/file/d/1J4o-jj0oSYTQXdWl3IZYomppUoufHP77/view"
              )
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full mb-20 md:mb-28">
        <h1 className="text-3xl md:text-5xl font-bold">✳ WHO AM I</h1>
        <div className="flex flex-col-reverse md:flex-row gap-6 justify-between w-full">
          <div className=" md:flex-1">
            <div className="md:text-xl lg:text-2xl flex flex-col gap-6 md:w-[80%]">
              <p>
                I am a junior pursuing a bachelor's degree in Computer Science
                at the University of Texas at Austin. As an avid problem solver,
                I enjoy challenging myself and am constantly looking for
                opportunities to learn new things.
              </p>
              <p>
                I have primarily worked on front end development. However, I
                have worked with backend before and am currently learning more
                about it.
              </p>
            </div>
          </div>
          <div className="hidden md:inline md:flex-1 md:relative">
            <img
              src="/standing-nyc.jpg"
              alt=""
              className="object-cover h-[50%] md:h-full w-full md:absolute md:top-0 md:left-0"
            />
          </div>

          <div className="inline md:hidden">
            <img
              src="/standing-nyc.jpg"
              alt=""
              className="object-cover h-[20em] w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full mb-20 md:mb-28">
        <h1 className="text-3xl md:text-5xl font-bold">✳ MY EXPERIENCE</h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
          <div className="md:text-xl lg:text-2xl flex-1">
            <div className="md:w-[80%] flex flex-col gap-8">
              <p>
                Over the past two summers, I've been a software engineer intern
                at Cigna. Last summer, I worked in an AGILE team to create a
                dashboard that displays data related to an internally used
                software from start to minimum viable product (MVP) release. In
                addition, I also worked in a team of other interns to develop a
                mobile app,{" "}
                <Link href="/projects" className="underline font-bold">
                  WorkFlow
                </Link>
                , to help employees make the most of ther in-person days.
              </p>
              <p className="hidden lg:inline">This summer, ...</p>
            </div>
          </div>
          {/* Picture overlapping solution: https://bricampgomez.com/blog/how-to-overlap-images-in-css/ */}
          <div className="grid grid-cols-[repeat(12,1fr)] relative flex-1">
            <div className="col-[8_/_-1] row-[1] z-[1] pt-[130%] lg:pt-[110%]">
              <img
                src="/tecdp-award.jpg"
                alt=""
                className="w-[100%] object-cover"
              />
            </div>
            <div className="col-[1_/_span_11] row-[1]">
              <img
                src="/tecdp-2022.jpg"
                alt=""
                className="w-[100%] lg:w-[90%] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="inline lg:hidden md:text-xl">
          <p>
            This summer, I am interning at Cigna again. I'm currently working with the High Performance Providers team to help clean up their front end as well as restructure their backend APIS. Along with this work, I am on a team with other interns designing an application, FHIRhouse, that solves an internal problem at Cigna. As the frontend lead, I have designed the entire frontend of the app and am currently building it out.
          </p>
        </div>
      </div>

      <div className="flex gap-8 justify-between mb-16">
        <div className="flex-1">
          <img
            src="/vball1.jpg"
            alt="Man spikes a volleyball"
            className="object-cover aspect-[1.8/2] w-full"
          />
        </div>
        <div className="flex-1">
          <img
            src="/bball1.jpg"
            alt="Man shoots a basketball"
            className="object-cover aspect-[1.8/2] w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-8 justify-between">
        <div className="flex-[4_4_0] text-[1.75rem] md:text-5xl font-bold md:text-right">
          <h1 className="md:hidden">✳ OTHER INTERESTS</h1>
          <h1 className="hidden md:inline">OTHER INTERESTS ✳</h1>
        </div>
        <div className="flex-[5_5_0]">
          <p className="md:text-xl lg:text-2xl ">
            In my free time, I like to play sports. I've participated in
            intramural basketball, volleyball, and ultimate frisbee as part of
            the Texas Vietnamese Student Association. In addition to sports, I
            also love to watch{" "}
            <Link className="underline font-bold" href="/other">
              movies/tv shows, listen to music, and read books.
            </Link>{" "}
            I'm also looking to get into photograhy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
