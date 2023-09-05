import React from "react";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { openInNewTab } from "@/assets/funcs";

const projects = () => {
  return (
    <>
      <div
        className={`h-full w-full bg-[#e2e2e2] pt-28 md:pt-32 px-5 md:px-32 pb-32
      `}>
        <div className="w-full h-[30vh] lg:h-[50vh]">
          <div className="text-4xl md:text-6xl font-semibold uppercase tracking-wider flex flex-col gap-1 mb-8">
            <h1>My</h1>
            <h1 className="font-semibold text-[3.5rem] md:text-8xl lg:text-9xl">
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
            title={"FHIRhouse"}
            description={"Web App"}
            img={"./youtube-mac.png"}
            gradient={"bg-gradient-to-r from-red-500 to-red-800"}
            link={"/projects/fhirhouse"}
          />

          <ProjectCard
            title={"Portfolio Website"}
            description={"Web App"}
            img={"./portfolio-website.png"}
            gradient={"bg-gradient-to-br from-gray-500 to-[#F5F5F7]"}
            link={"/projects/portfolio-website"}
          />

          <ProjectCard
            title={"WorkFlow"}
            description={"Mobile App"}
            img={"./workflow.png"}
            link={"/projects/workflow"}
          />

          <ProjectCard
            title={"GoMeet"}
            description={"Mobile App"}
            img={"./workflow.png"}
            gradient={"bg-gradient-to-r from-[#00b09b] to-[#96c93d]"}
            link={"/projects/gomeet"}
          />

          <ProjectCard
            title={"YouTube Downloader"}
            description={"Web App"}
            img={"./youtube-mac.png"}
            gradient={"bg-gradient-to-b from-red-600 via-red-500 to-orange-400"}
            link={"/projects/ytdownloader"}
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
