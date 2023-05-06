import React from "react";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { useRouter } from "next/router";

const projects = ({ navOpen, setNavOpen }) => {
  const router = useRouter();

  // from https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <div
        className={`h-full w-full ${
          navOpen ? "moveUp" : ""
        } transiton-[height] duration-700 ease-[cubic-bezier(.13, .53, .38, .97)] wrapper bg-[#e2e2e2] pt-28 md:pt-32 px-5 md:px-20 pb-32
      `}>
        <div className="w-full h-[40vh] md:h-[50vh] lg:h-[70vh]">
          <div className="text-3xl md:text-6xl font-semibold uppercase tracking-wider flex flex-col gap-1 mb-8">
            <h1>My</h1>
            <h1 className="font-semibold text-5xl md:text-8xl lg:text-9xl">
              Projects.
            </h1>
          </div>

          <Button
            text={"GitHub"}
            color={"bg-white"}
            icon={"./github.svg"}
            onClick={() => openInNewTab("https://github.com/donald-thai")}
          />
        </div>

        <div className="w-full flex lg:flex-row lg:justify-between flex-wrap gap-8 md:gap-14 items-center">
          <ProjectCard
            title={"Portfolio Website"}
            description={"Web App"}
            img={"./youtube-mac.png"}
            gradient={"bg-gradient-to-br from-gray-500 to-[#F5F5F7]"}
          />

          <ProjectCard
            title={"WorkFlow"}
            description={"Mobile App"}
            img={"./workflow.png"}
          />

          <ProjectCard
            title={"GoMeet"}
            description={"Mobile App"}
            img={"./workflow.png"}
            gradient={"bg-gradient-to-r from-[#00b09b] to-[#96c93d]"}
            // titleColor={"text-gray-700"}
            // descColor={"text-gray-500"}
          />

          <ProjectCard
            title={"YouTube Downloader"}
            description={"Web App"}
            img={"./youtube-mac.png"}
            gradient={"bg-gradient-to-b from-red-600 via-red-500 to-orange-400"}
          />

          <ProjectCard
            title={"Oil Rig Analyzer"}
            description={"Web App"}
            img={"./oil-mac.png"}
            gradient={"bg-gradient-to-tl from-[#ffafcc] to-[#bde0fe]"}
            descColor={"text-gray-500"}
          />

          <ProjectCard
            title={"File Sorter"}
            description={"Web App"}
            img={"./file-mac.png"}
            gradient={"bg-gradient-to-br from-orange-500 to-yellow-300"}
          />
        </div>
      </div>
    </>
  );
};

export default projects;
