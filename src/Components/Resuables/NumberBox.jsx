const NumberBox = ({ text, heading, sub, color }) => {
  return (
    <article className="box capitalize">
      <p className="p1">{text}</p>
      {color === 'green' && <h2 className="text-[#024B4B] h2">{heading}</h2>}
      {color === 'yellow' && <h2 className="text-[#f0c808] h2">{heading}</h2>}
      {color === 'orange' && <h2 className="text-[#934B00] h2">{heading}</h2>}
      {color === 'red' && <h2 className="text-[#DD1C1A] h2">{heading}</h2>}
      <p className="p2">{sub}</p>
    </article>
  );
};

export default NumberBox;
