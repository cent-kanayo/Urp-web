const NumberBox = ({ text, heading, sub, color }) => {
  return (
    <article className="box capitalize">
      <p className="p1 text-[18px] md:text-[20px]">{text}</p>
      {color === 'green' && (
        <h2 className="text-[#024B4B] text-[56px] font-bold leading-[150%]">
          {heading}
        </h2>
      )}
      {color === 'yellow' && (
        <h2 className="text-[#f0c808] text-[56px] font-bold leading-[150%]">
          {heading}
        </h2>
      )}
      {color === 'orange' && (
        <h2 className="text-[#934B00] text-[56px] font-bold leading-[150%]">
          {heading}
        </h2>
      )}
      {color === 'red' && (
        <h2 className="text-[#DD1C1A] text-[56px] font-bold leading-[150%]">
          {heading}
        </h2>
      )}
      <p className="p2 text-[12px] md:text-[16px]">{sub}</p>
    </article>
  );
};

export default NumberBox;
