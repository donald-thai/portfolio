import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';

const NavCard = ({ title, link, setNavOpen, img }) => {
  const router = useRouter();
  const handleClick = () => {
    setNavOpen(false)
    setTimeout(() => {
      router.push(link)
    }, 750)
  }

  return (
    <div onClick={handleClick}>
      {/* <Link href={link || "/404"}> */}
        <h2 className="text-white text-3xl font-bold uppercase mb-4">{title}</h2>
        <img
          className="w-[10em] aspect-[1/1] md:w-[22em] md:aspect-[2/1] object-cover rounded-lg"
          src={img || "https://images.unsplash.com/photo-1667848015080-00ee6e487bc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
          alt=""
        />
      {/* </Link> */}
    </div>
  );
};

export default NavCard;
