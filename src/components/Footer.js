import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200 p-4 flex justify-around text-sm" style={{ userSelect: 'none' }}>
      <button className="text-xl text-gray-600 hover:text-orange-500 transition-colors duration-300">Swiggy</button>
      <button className="text-xl text-gray-600 hover:text-orange-500 transition-colors duration-300">Food</button>
      <button className="text-xl text-gray-600 hover:text-orange-500 transition-colors duration-300">Instamart</button>
      <button className="text-xl text-gray-600 hover:text-orange-500 transition-colors duration-300">Dineout</button>
      <button className="text-xl text-gray-600 hover:text-orange-500 transition-colors duration-300">Card</button>
    </div>
  );
};

export default Footer;

