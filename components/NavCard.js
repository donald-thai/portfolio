import React from "react";

const NavCard = ({ navOpen, title, link }) => {
  return (
    <div>
      <a href={link}>
        <h2 className="text-white text-3xl font-bold uppercase mb-4">{title}</h2>
        <img
          className="w-[15em] aspect-[1] md:w-[20em] md:aspect-[1.8/1] object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1667848015080-00ee6e487bc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </a>
    </div>
  );
};

export default NavCard;
