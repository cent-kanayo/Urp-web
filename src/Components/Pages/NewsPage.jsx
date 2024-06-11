import { useEffect, useState } from 'react';
import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';

import Contact from '../Resuables/Contact';



import { urlFor } from '../../../sanity';
import { PortableText } from '@portabletext/react';
import { useGlobalContext } from '../../Context/AppContext';
import { useParams } from 'react-router-dom';
import paginate, { months } from '../data';
import { CircularProgress } from '@mui/material';

const NewsPage = () => {
  const [page, setPage] = useState(0);
  const { id } = useParams();
  const { posts, post, isLoading, fetchSinglePost } = useGlobalContext();
  const myPortableTextComponents = {
    types: {
      image: ({ value }) => <img src={urlFor(value).width(300).url()} />,
      callToAction: ({ value, isInline }) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },
  };

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

  useEffect(() => {
    fetchSinglePost(id);
  }, []);
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
          {post?.mainImage && (
            <img
              src={urlFor(post?.mainImage).width(300).url()}
              alt={post?.subtitle}
              className="w-full h-full absolute -z-10 object-cover"
            />
          )}
          <div className="max-w-[1122px] mx-auto text-[#FDFFFD] py-[67px] lg:py-[147px] px-6 lg:px-0">
            <div className="flex items-center space-x-2 mb-4 lg:mb-6">
              <article className="w-[24px] h-[2px] bg-white"></article>
              <p className="text-[14px]">
                {months[new Date(post?._createdAt).getMonth()]}{' '}
                {new Date(post?._createdAt).getFullYear()}
              </p>
            </div>
            <div className="max-w-[598px]">
              <div>
                <h1 className="text-[24px] lg:text-[2.5rem] font-bold mb-4 leading-[150%]">
                  <q>{post?.title?.substr(0, 50)}...</q>
                </h1>
                <p className="text-[12px] lg:text-[20px] max-w-[491px]">
                  {post?.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto px-[30px] lg:px-0">
        <h3 className="text-center text-[24px] lg:text-[40px] font-bold mb-6">
          {post?.subtitle}
        </h3>
        <div className="text-[12px] lg:text-[16px] leading-[150%] flex flex-col gap-8 lg:gap-6">
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
      </section>
      {post?.gallery?.length && (
        <section className="px-6 lg:px-0">
          <div className="max-w-[1122px] mx-auto mt-[64px] lg:mt-[160px] py-6 lg:py-0">
            <h3 className="text-center text-[32px] font-[600] capitalize mb-6">
              Pictures from event
            </h3>
            <div>
              <article className="flex flex-col md:flex-row md:justify-center mb-[24px] flex-wrap gap-[22px]">
                {post?.gallery?.map((item) => {
                  return (
                    <span className="bg-[#D9D9D9] h-[200px] md:w-[358px]">
                      <img
                        src={urlFor(item).width(300).url()}
                        alt={post?.subtitle}
                        className="w-full h-full object-cover"
                      />
                    </span>
                  );
                })}
              </article>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-[1122px] mx-auto my-[64px] lg:my-20 lg:hidden">
        {posts?.length > 3 && (
          <div>
            <h3 className="text-[#011717] text-[40px] font-bold text-center capitalize mb-[40px]">
              Other News & Events
            </h3>
            <div className="">
              <div className="flex flex-wrap items-center gap-[24px]">
                {posts?.length > 3 &&
                  paginate(
                    posts?.filter((item) => item?._id !== id),
                    1
                  )[page]?.map((item) => (
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
      <section className="max-w-[1122px] mx-auto my-[64px] lg:my-20 hidden lg:block px-6 px-0">
        {posts?.length > 3 && (
          <div>
            <h3 className="text-[#011717] text-[40px] font-bold text-center capitalize mb-[40px]">
              Other News & Events
            </h3>
            <div className="">
              <div className="flex flex-wrap items-center gap-[24px]">
                {posts?.length > 3 &&
                  paginate(
                    posts?.filter((item) => item?._id !== id),
                    3
                  )[page]?.map((item) => (
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

export default NewsPage;
