import classNames from "classnames";
import React, { useRef } from "react";
import { useHover } from "usehooks-ts";

const Oppenheimer: React.FC = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div
      ref={hoverRef}
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
      relative
      hover:cursor-pointer
    "
    >
      <div
        className={
          isHover ? "" : "absolute w-full h-full z-10 opacity-80 bg-black"
        }
      />
      <h1
        className={classNames(
          "text-9xl text-black drop-shadow-[0_20px_20px_rgba(255,255,255,0.8)] font-[Gotham]",
          isHover ? "" : "opacity-60"
        )}
      >
        Heimer
      </h1>
    </div>
  );
};

export default Oppenheimer;
