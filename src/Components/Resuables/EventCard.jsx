import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const EventCard = () => {
  return (
    <div className="lg:h-[231px] lg:w-[595px] flex gap-[20px]">
      <div className="relative mb-4 flex-1">
        <img
          src="https://media.istockphoto.com/id/1414024629/photo/teacher-reading-lecture-at-university.webp?b=1&s=170667a&w=0&k=20&c=_uGbnxBofRGnJDN08N-PIvkQV0INrXVcdKRYlL2SasE="
          alt=""
          className="block w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="max-w-[614px] flex-1">
        <p className="text-[#934B00] text-[1rem] capitalize mb-3">June, 2023</p>
        <h3 className="text-[1.25rem] text-[#010A09] leading-7 mb-3">
          Professor KYC is being congratulated for his meritorious deeds and
          actions in combating the decay of education
        </h3>
        <div>
          <span>
            <a href="#" className="text-[1rem] text-[#010A09] capitalize">
              read more
            </a>
          </span>
          <ChevronRightOutlinedIcon htmlColor="#934B00" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
