import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Oppenheimer: React.FC = () => {
  return (
    <div
      className="
      flex 
      flex-col 
      border-l-4
    border-black
      justify-center
      items-start
      w-1/2 
      bg-[url('../images/oppenheimer4k.jpg')] 
      bg-cover
      bg-bottom
      h-screen
      bg-no-repeat
    "
    >
      <h1 className="text-9xl text-gray-800 font-[Gotham]">Heimer</h1>
    </div>
  );
};

export default Oppenheimer;
