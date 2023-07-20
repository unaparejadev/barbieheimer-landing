import React, { useRef } from 'react';
import classnames from 'classnames';
import { useHover } from 'usehooks-ts';

const Barbie = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div ref={hoverRef} className="flex flex-col justify-center items-center w-1/2 h-screen bg-[url('../images/barbie_bg.jpg')] bg-cover bg-center relative hover:cursor-pointer">
      <div className={isHover ?
        'opacity-50 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600' :
        'w-full h-full absolute z-10 opacity-80 bg-black'
      } />
      <h1 className={classnames(
        'w-full text-right font-[Barbie] text-9xl font-extrabold text-white z-20 drop-shadow-lg',
        isHover ? '' : 'opacity-10')}>
        Barbie
      </h1>
    </div>
  );
};

export default Barbie;
