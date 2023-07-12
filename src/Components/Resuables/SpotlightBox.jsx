import React from 'react';

const SpotlightBox = ({ image, h2, p, btn }) => {
  return (
    <article className="flex flex-col spotlight-box hover:shadow-xl duration-300 transition-all ease-linear">
      <div className="flex-1">
        <img src={image} alt="Spotlight avatar" />
      </div>
      <div className="flex-1 p-[24px]">
        <h2 className="mb-4">{h2}</h2>
        <p className="mb-4">{p}</p>
        <button className="hover:animate-pulse">{btn}</button>
      </div>
    </article>
  );
};

export default SpotlightBox;
