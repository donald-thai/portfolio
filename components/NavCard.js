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
    <div onClick={handleClick} className="inline-block last:mr-0 mr-8">
      {/* <Link href={link || "/404"}> */}
        <h2 className="text-white text-3xl font-bold uppercase mb-4">{title}</h2>
        <img
          className="w-[10em] aspect-[1/1] md:w-[22em] md:aspect-[2/1] object-cover rounded-lg"
          src={img || "https://images.unsplash.com/photo-1641377605325-759ef5950260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"}
          alt="picture of the respective page"
        />
      {/* </Link> */}
    </div>
  );
};

export default NavCard;
