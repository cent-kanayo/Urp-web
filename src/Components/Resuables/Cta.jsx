import React from 'react';

const Cta = ({ h2, p, btn }) => {
  return (
    <section className="cta grid place-items-center text-center mt-[150px] py-[68px]">
      <div className="max-w-[1169px] mx-auto text-">
        <h2 className="capitalize text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-bold text-[#FDFFFD] mb-6">
          {h2}
        </h2>
        <p className="text-[1rem] md:text-[1.25rem] leading-[150%] text-[#FDFFFD] mb-6">
          {p}
        </p>
        <button className="capitalize bg-[#F5FFF6] rounded-md px-8 py-2 text-[#011717] hover:animate-pulse">
          {btn}
        </button>
      </div>
    </section>
  );
};

export default Cta;
