import React from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const SpotlightBox = ({ image, h2, p, btn }) => {
  return (
    <article className="flex flex-col spotlight-box hover:shadow-xl duration-300 transition-all ease-linear max-w-[358px]">
      <div className="h-[200px] relative">
        <img
          src={image}
          alt="Spotlight avatar"
          className="block h-[100%] w-[100%]"
        />
      </div>
      <div className="py-[24px] px-[8px]">
        <h2 className="mb-4 whitespace-nowrap">{h2}</h2>
        <p className="mb-4">{p}</p>
        <div className="px-0">
          <button className="hover:animate-pulse flex items-center gap-x-2">
            <span className="underline underline-offset-4">{btn}</span>
            <span>
              <EastOutlinedIcon htmlColor="#57A0A0" />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SpotlightBox;
