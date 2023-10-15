import EventCard from './EventCard';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Prof from '../../assets/mainDesktop/law.png';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <section className="mt-[80px] lg:mt-[80px] px-4 lg:px-0 bg-white">
      <h2 className="text-center text-[2.5rem] font-[600] capitalize mb-[60px]">
        News & events
      </h2>
      <div className="grid place-items-center">
        <div className="flex flex-col lg:flex-row gap-[44px]">
          <Link
            to="/news"
            className="hover:scale-105 transition-all ease-linear"
          >
            <div className="h-[440px] lg:w-[548px] relative mb-4">
              <img
                src={Prof}
                alt=""
                className="block w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="max-w-[548px]">
              <p className="text-[#934B00] text-[20px] capitalize mb-3">
                June, 2023
              </p>
              <h3 className="typo-3 text-[#010A09] leading-8 mb-3">
                “Grand ideas are good, but people need to survive”
              </h3>
              <p className="text-[14px] md:text-[14px] text-[#010A09] mb-6">
                Professor Lawanson Calls for Human-Centred Urban Development
                Approach
              </p>
            </div>
            <div className="w-[144px] flex justify-center items-center gap-x-2 border-[0.5px] border-[#010A09] rounded-[2px]  py-2">
              <span>
                <Link
                  to="/news"
                  className="text-[1rem] text-[#010A09] capitalize"
                >
                  read more
                </Link>
              </span>
              <EastOutlinedIcon />
            </div>
          </Link>
          <div className="flex flex-col gap-[20px]">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
