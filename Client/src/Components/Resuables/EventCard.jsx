import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { months } from '../data';
import { Link } from 'react-router-dom';

const EventCard = ({ image, text, date, id }) => {
  return (
    <Link to={`/news/${id}`} className="lg:flex gap-[20px] max-w-[528px]">
      <div className="relative mb-4 flex-1 h-[200px] lg:w-[262px] ">
        {image && (
          <img
            src={image}
            alt={text}
            className="block w-[100%] h-[100%] object-cover"
          />
        )}
      </div>
      <div className="max-w-[614px] flex-1">
        <p className="text-[#934B00] text-[14px] capitalize mb-3">
          {months[new Date(date).getMonth()]}, {new Date(date).getFullYear()}
        </p>
        <h3 className="text-[14px] text-[#010A09] leading-7 mb-3">{text}</h3>
        <div className="w-[146px] flex justify-center items-center gap-2 border-[0.5px] border-[#010A09] rounded-[2px] py-2 hover:bg-[#57A0A0] transition-all duration-300 ease-linear">
          <span>
            <a href="#" className="text-[14px] text-[#010A09] capitalize">
              view event
            </a>
          </span>
          <EastOutlinedIcon fontSize="small" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
