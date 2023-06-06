import Button from "@/components/Button";
import { useRouter } from 'next/router';

const index = ({ navOpen, setNavOpen }) => {

  const router = useRouter()

  return (
    <>
      <div
        className={`h-full w-full pt-[6vh] pl-5 lg:pl-14 ${
          navOpen ? "moveUp" : ""
        } transiton-[height] duration-700 ease-[cubic-bezier(.13, .53, .38, .97)] wrapper bg-white`}>
        {/* Just in case some browsers don't support svh*/}
        <div
          className={`h-[94svh] lg:h-[94vh] lg:h-[94svh] w-full flex flex-col justify-around md:justify-between bg-[#e2e2e2]`}>
          <div>
            <div className="text-[3.2rem]/[3.2rem] lg:text-[6.7rem]/[6.5rem] font-medium mb-6 md:mb-4 uppercase">
              <h1>HI, I'M</h1>
              <h1>DONALD THAI</h1>
            </div>
            <div className="w-full flex">
              <img
                src="/news.jpg"
                alt="Man looks to the side in front of news study"
                className="object-cover w-[80%] lg:h-[35svh] lg:w-[38vw]"
              />
            </div>
          </div>

          <div className="mt-20 w-full flex pr-2 justify-end text-right md:hidden">
            <p className="w-64 lg:text-[1.2rem]/6 uppercase font-medium">
              I create applications aimed at bettering my community
            </p>
          </div>
          <div className="flex justify-end md:justify-between items-end w-full">
            <div className="hidden md:inline">
              <img
                src="./down-arrow.svg"
                alt=""
                className="w-fit h-14 md:h-20 pb-2 object-cover"
              />
            </div>
            <p className="hidden w-64 uppercase font-medium md:inline lg:text-[1.2rem]/6 pb-2">
              I create applications aimed at bettering my community
            </p>
            <div className="pr-2 text-[3.2rem]/[3.2rem] md:pr-0 lg:text-[6.7rem]/[6.4rem] font-medium text-right">
              <h1>SOFTWARE</h1>
              <h1>ENGINEER</h1>
            </div>
          </div>
        </div>

        <div className="w-full bg-white flex">
          <div className="mt-16 lg:mt-32 pb-20 pr-5 md:pr-0 flex-1">
            <h3 className="uppercase text-xl font-medium mb-4">
              📍 Austin, TX
            </h3>
            <h1 className="text-4xl uppercase md:text-6xl font-bold mb-8">
              A little about me.{" "}
            </h1>
            <p className="md:w-[80%] text-xl/[2.5rem] md:text-2xl/[3rem]">
              I am a junior majoring in Computer Science at the University of
              Texas at Austin. I enjoy solving problems and creating apps in my
              free time. I also love playing sports, especially basketball and
              volleyball.
            </p>
            <div className="md:w-[80%] mt-10 flex gap-6">
              <Button text={"Learn More 👋"} color={"bg-[#FAEDCD]"} onClick={() => router.push("/about")}/>

              <Button text={"My Projects 💻"} color={"bg-[#e2e2e2]"} onClick={() => router.push("/projects")}/>
            </div>
          </div>
          <div className="hidden md:flex bg-[#e2e2e2] pt-32 pb-20 text-right flex justify-center flex-1 pr-5 lg:pr-14 ">
            <div className="">
              <img
                src="/lean.jpg"
                alt="man leaning over railing with new york city in the background"
                className="object-cover md:w-[20em] md:h-[33em] lg:w-[25em] lg:h-[29.4em]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
