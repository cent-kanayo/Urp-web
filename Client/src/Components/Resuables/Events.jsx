import EventCard from './EventCard';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Prof from '../../assets/mainDesktop/law.png';
import Fj from '../../assets/mainDesktop/fj.png';
import Paint from '../../assets/mainDesktop/paint.png';
import Orientation from '../../assets/mainDesktop/orientation.png';

import { Link } from 'react-router-dom';
import { urlFor } from '../../../sanity';
import { months } from '../data';

const Events = ({ posts }) => {
  return (
    <section className="mt-[64px] lg:mt-[80px] px-4 lg:px-0 bg-white">
      <h2 className="text-center text-[24px] lg:text-[2.5rem] font-[600] capitalize mb-10 lg:mb-[60px]">
        News & events
      </h2>
      <div className="grid place-items-center">
        <div className="flex flex-col lg:flex-row gap-[44px]">
          <Link
            to={`/news/${posts[0]?._id}`}
            className="hover:scale-105 transition-all ease-linear"
          >
            <div className="h-[200px] lg:h-[440px] lg:w-[548px] relative mb-4">
              <img
                // src={urlFor(posts[0]?.mainImage).width(300).url()}
                alt={posts[0]?.subtitle}
                className="block w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="max-w-[548px]">
              <p className="text-[#934B00] text-[20px] capitalize mb-3">
                {months[new Date().getMonth(posts[0]?._createdAt)]},{' '}
                {new Date().getFullYear(posts[0]?._createdAt)}
              </p>
              <h3 className="inter typo-3 text-[#010A09] leading-8 mb-3">
                <q>{posts[0]?.title?.substr(0, 50)}...</q>
              </h3>
              <p className="text-[14px] md:text-[14px] text-[#010A09] mb-6">
                {posts[0]?.subtitle}
              </p>
            </div>
            <div className="w-[144px] flex justify-center items-center gap-x-2 border-[0.5px] border-[#010A09] rounded-[2px]  py-2">
              <span>
                <p className="text-[1rem] text-[#010A09] capitalize">
                  read more
                </p>
              </span>
              <EastOutlinedIcon />
            </div>
          </Link>
          <div className="flex flex-col gap-6 lg:gap-[20px]">
            {posts?.slice(1)?.map((post) => (
              <EventCard
                image={urlFor(post?.mainImage).width(300).url()}
                text={post?.subtitle}
                date={post?._createdAt}
                id={post?._id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
