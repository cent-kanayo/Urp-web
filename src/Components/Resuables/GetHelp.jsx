const GetHelp = ({ text1, text2, text3, text4, text5, h2, p }) => {
  return (
    <>
      <div className="mb-[60px] max-w-[935px] mx-auto">
        <h2 className="text-black font-medium text-center text-[2rem] mb-3">
          {h2}
        </h2>
        <p className="text-black text-center text-[1rem]">{p}</p>
      </div>
      <div className="max-w-[885px] mx-auto flex flex-wrap gap-x-5 gap-y-6">
        <div className="help-box border-1">
          <p>{text1}</p>
        </div>
        <div className="help-box border-2">
          <p>{text2}</p>
        </div>
        <div className="help-box border-3">
          <p>{text3}</p>
        </div>
        <div className="help-box border-4">
          <p>{text4}</p>
        </div>
        <div className="help-box border-5">
          <p>{text5}</p>
        </div>
      </div>
    </>
  );
};

export default GetHelp;
