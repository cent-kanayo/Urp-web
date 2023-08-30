import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const EventCard = () => {
  return (
    <div className="lg:flex gap-[20px] max-w-[528px]">
      <div className="relative mb-4 flex-1 lg:h-[200px] lg:w-[262px] ">
        <img
          src="https://media.istockphoto.com/id/1414024629/photo/teacher-reading-lecture-at-university.webp?b=1&s=170667a&w=0&k=20&c=_uGbnxBofRGnJDN08N-PIvkQV0INrXVcdKRYlL2SasE="
          alt=""
          className="block w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="max-w-[614px] flex-1">
        <p className="text-[#934B00] text-[14px] capitalize mb-3">June, 2023</p>
        <h3 className="text-[14px] text-[#010A09] leading-7 mb-3">
          Professor KYC is being congratulated for his meritorious deeds and
          actions in combating the decay of education
        </h3>
        <div className="w-[146px] flex justify-center items-center gap-2 border-[0.5px] border-[#010A09] rounded-[2px] py-2">
          <span>
            <a href="#" className="text-[14px] text-[#010A09] capitalize">
              view event
            </a>
          </span>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
