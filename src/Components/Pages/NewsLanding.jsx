import { useState } from 'react';
import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

import Contact from '../Resuables/Contact';

import { urlFor } from '../../../sanity';
import { useGlobalContext } from '../../Context/AppContext';
import paginate, { months } from '../data';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const NewsLanding = () => {
  const [page, setPage] = useState(0);
  const { posts, isLoading } = useGlobalContext();
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > posts?.slice(3)?.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = posts?.slice(3)?.length - 1;
      }
      return prevPage;
    });
  };

  if (isLoading)
    return (
      <div className="pt-10 pb-96 flex justify-center">
        {<CircularProgress color="success" />}
      </div>
    );
  return (
    <main>
      <section className="flex mb-[80px] rs-bg">
        <div className="flex-1">
          {posts[0]?.mainImage && (
            <img
              src={urlFor(posts[0]?.mainImage).width(300).url()}
              alt={posts[0]?.subtitle}
              className="w-full h-full absolute -z-10 object-cover"
            />
          )}
          <div className="max-w-[1122px] mx-auto text-[#FDFFFD] py-[67px] lg:py-[147px] px-6 lg:px-0">
            <div className="flex items-center space-x-2 mb-4 lg:mb-6">
              <article className="w-[24px] h-[2px] bg-white"></article>
              <p className="text-[14px]">
                {months[new Date(posts[0]?._createdAt).getMonth()]}{' '}
                {new Date(posts[0]?._createdAt).getFullYear()}
              </p>
            </div>
            <div className="max-w-[598px]">
              <div>
                <h1 className="text-[24px] lg:text-[2.5rem] font-bold mb-4 leading-[150%]">
                  <q>{posts[0]?.title?.substr(0, 50)}...</q>
                </h1>
                <p className="text-[12px] lg:text-[20px] max-w-[491px]">
                  {posts[0]?.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1154px] mx-auto px-[30px] lg:px-0">
        <h3 className="text-center text-[24px] lg:text-[40px] font-bold mb-10">
          Top Stories
        </h3>
        <div className="flex flex-col md:flex-row gap-6">
          {posts?.slice(0, 3)?.map((item) => {
            return (
              <Link
                key={item?._id}
                to={`/news/${item?._id}`}
                className="lg:w-[357px]"
              >
                <div className="lg:w-[357px] h-[240px] lg:h-[440px]">
                  <img
                    src={urlFor(item?.mainImage).width(300).url()}
                    alt={item?.subtitle}
                    className="w-full h-full object-cover block hover:scale-105 transition-all duration-300 ease-linear"
                  />
                </div>
                <div className="max-w-[548px]">
                  <p className="text-[#934B00] text-[20px] capitalize mb-3">
                    {months[new Date().getMonth(item?._createdAt)]},{' '}
                    {new Date().getFullYear(item?._createdAt)}
                  </p>
                  <h2 className="inter typo-3 text-[#010A09] leading-8 mb-3">
                    <q>{item?.title?.substr(0, 50)}...</q>
                  </h2>
                  <p className="text-[14px] md:text-[14px] text-[#010A09] mb-6">
                    {item?.subtitle}
                  </p>
                </div>
                <div className="w-[144px] flex justify-center items-center gap-x-2 border-[0.5px] border-[#010A09] rounded-[2px]  py-2 hover:bg-[#cde3e3]">
                  <span>
                    <p className="text-[1rem] text-[#010A09] capitalize">
                      read more
                    </p>
                  </span>
                  <EastOutlinedIcon />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="max-w-[1122px] mx-auto my-[64px] lg:my-20 lg:hidden">
        {posts?.length > 3 && (
          <div>
            <h3 className="text-[#011717] text-[40px] font-bold text-center capitalize mb-[40px]">
              Other News & Events
            </h3>
            <div className="">
              <div className="flex flex-wrap items-center gap-[24px]">
                {posts?.length > 3 &&
                  paginate(posts?.slice(3), 1)[page]?.map((item) => (
                    <Link
                      key={item?._id}
                      to={`/news/${item?._id}`}
                      className="relative w-[358px] h-[530px] bg-[#1B1B1B] rounded-[2px] p-4"
                    >
                      <div>
                        <p className="text-[#F0C808] text-[14px] mb-2">
                          {months[new Date().getMonth(item?._createdAt)]},{' '}
                          {new Date().getFullYear(item?._createdAt)}
                        </p>
                        <h2 className="text-[#FDFFFD] text-[24px] font-medium mb-2">
                          <q>{item?.title?.substr(0, 50)}...</q>
                        </h2>
                        <p className="text-[#F7F7F7] text-[14px] leading-[150%] h-[80px] mb-2">
                          {item?.subtitle}
                        </p>
                        <div className="inline-flex items-center  space-x-2 border-[0.5px] border-[#FDFFFD] rounded-[2px]  py-2 px-6 mb-4">
                          <span>
                            <Link
                              to="/news"
                              className="text-[14px] text-[#FDFFFD] capitalize"
                            >
                              Read More
                            </Link>
                          </span>
                          <EastOutlinedIcon
                            fontSize="small"
                            htmlColor="#FDFFFD"
                          />
                        </div>
                        <div className="h-[240px] relative">
                          <img
                            src={urlFor(item?.mainImage).width(300).url()}
                            alt={item?.subtitle}
                            className="w-full h-full object-cover block"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="flex justify-between items-center mt-[40px]">
                <span role="button" onClick={prevPage}>
                  <img src={LeftIcon} alt="left toggle button" />
                </span>
                <span role="button" onClick={nextPage}>
                  <img src={RightIcon} alt="right toggle button" />
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="max-w-[1122px] mx-auto my-[64px] lg:my-20 hidden lg:block">
        {posts?.length > 3 && (
          <div>
            <h3 className="text-[#011717] text-[40px] font-bold text-center capitalize mb-[40px]">
              Other News & Events
            </h3>
            <div className="">
              <div className="flex flex-wrap items-center gap-[24px]">
                {posts?.length > 3 &&
                  paginate(posts?.slice(3), 3)[page]?.map((item) => (
                    <Link
                      key={item?._id}
                      to={`/news/${item?._id}`}
                      className="relative w-[358px] h-[530px] bg-[#1B1B1B] rounded-[2px] p-4"
                    >
                      <div>
                        <p className="text-[#F0C808] text-[14px] mb-2">
                          {months[new Date().getMonth(item?._createdAt)]},{' '}
                          {new Date().getFullYear(item?._createdAt)}
                        </p>
                        <h2 className="text-[#FDFFFD] text-[24px] font-medium mb-2">
                          <q>{item?.title?.substr(0, 50)}...</q>
                        </h2>
                        <p className="text-[#F7F7F7] text-[14px] leading-[150%] h-[80px] mb-2">
                          {item?.subtitle}
                        </p>
                        <div className="inline-flex items-center  space-x-2 border-[0.5px] border-[#FDFFFD] rounded-[2px]  py-2 px-6 mb-4">
                          <span>
                            <Link
                              to="/news"
                              className="text-[14px] text-[#FDFFFD] capitalize"
                            >
                              Read More
                            </Link>
                          </span>
                          <EastOutlinedIcon
                            fontSize="small"
                            htmlColor="#FDFFFD"
                          />
                        </div>
                        <div className="h-[240px] relative">
                          <img
                            src={urlFor(item?.mainImage).width(300).url()}
                            alt={item?.subtitle}
                            className="w-full h-full object-cover block"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="flex justify-between items-center mt-[40px]">
                <span role="button" onClick={prevPage}>
                  <img
                    src={LeftIcon}
                    alt="left toggle button"
                    aria-label="previous button"
                  />
                </span>
                <span role="button" onClick={nextPage}>
                  <img
                    src={RightIcon}
                    alt="right toggle button"
                    aria-label="next button"
                  />
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      <Contact h2="For more enquiries." />
    </main>
  );
};

export default NewsLanding;
