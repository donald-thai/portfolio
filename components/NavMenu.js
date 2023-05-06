import NavDrawer from "./NavDrawer";
import Overlay from "./Overlay";
import $ from "jquery";


const NavMenu = ({ navOpen, setNavOpen }) => {
  const handlePress = () => {
    if (!navOpen) {
      let links = $("#links");
      links.css({ left: "0px" });
    }
    setNavOpen(!navOpen);

  };

  return (
    <>
      <button
        className={`rounded-full fixed left-1/2 bottom-[2em] w-[4em] h-[4em] ml-[-2em] md:w-[5.5em] md:h-[5.5em] z-[100] ${navOpen ? "bg-red-400" : "bg-[#C38133]"} md:ml-[-2.75em] flex items-center justify-center hover:scale-105 active:scale-95 transition-[transform] ease-in-out duration-500 shadowButton`}
        onClick={handlePress}>

          <img src={navOpen ? "./close.svg" : "./menu.svg"} alt="" className="aspect-[1/1] w-[45%]"/>
        {/* {navOpen ? <Menu /> : <Close />} */}
      </button>
      <NavDrawer navOpen={navOpen} setNavOpen={setNavOpen}/>
      <Overlay navOpen={navOpen} />
    </>
  );
};

export default NavMenu;
