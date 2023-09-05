import Link from "next/link";
import React from "react";

const ProjectCard = ({
  img,
  title,
  description,
  gradient,
  titleColor,
  descColor,
  link,
}) => {
  return (
    <div
      className={`h-[20em] w-full md:h-[35em] lg:h-[45em] lg:w-[45%] rounded-xl flex flex-col ${
        gradient || "bg-gradient-to-b from-[#004986] to-[#22303c]"
      } transition duration-500 ease-in-out shadowCard hover:translate-y-[-1em]`}>
      <Link href={link || ""}>
        <div
          className={`px-5 pt-5 md:px-10 md:pt-10 ${
            titleColor || "text-white"
          } w-full`}>
          <h1 className="text-2xl md:text-5xl font-semibold md:mb-1">
            {title || "app"}
          </h1>
          <h3
            className={`text-lg md:text-2xl ${descColor || "text-[#cecece]"}`}>
            {description || "app"}
          </h3>
        </div>

        <div className="w-full flex items-center justify-center h-full">
          <img
            src={img || "./workflow.png"}
            alt="picture of the project"
            className="h-[12em] w-[12em]  md:h-[18em] md:w-[20em] lg:h-[22em] lg:w-[25em] object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
