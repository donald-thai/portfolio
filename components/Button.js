import React from "react";

const Button = ({text, onClick, color, className, icon}) => {
  return (
    <button className={`px-6 py-2 md:px-8 md:py-3 text-md md:text-lg ${color || "bg-gray-200"} rounded-md hover:scale-105 active:scale-95 transition ease-in-out duration-300 ${className}`} onClick={onClick}>
      <div className="flex gap-2">

        {text && <h1>{text}</h1>}
        {icon && <img src={icon} alt="" />}
      </div>
    </button>
  );
};

export default Button;
