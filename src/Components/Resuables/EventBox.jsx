import Image from '../../assets/mountain.png';
const EventBox = ({ quote }) => {
  return (
    <div className="event-box">
      <img src={Image} alt="" className="absolute -z-10" />
      <div className="border-b border-white mb-6 pt-[128px]">
        <span className="text-[1rem] text-white mr-2">Jul</span>
        <span className="text-[2.25rem] text-white">28</span>
      </div>
      <q className="text-[#FDFFFD] text-[1.5rem] leading-[150%] text-center">
        {quote}
      </q>
    </div>
  );
};

export default EventBox;
