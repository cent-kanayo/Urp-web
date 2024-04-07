import { useState } from 'react';

import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';

import Contact from '../Resuables/Contact';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';

import RQ from '../../assets/quoteR.png';
import LQ from '../../assets/quoteL.png';

import Bike from '../../assets/bike.png';
import Activity from '../../assets/activity.png';
import OpenB from '../../assets/book-opened.png';
import { useGlobalContext } from '../../Context/AppContext';
import paginate from '../data';
import { Link } from 'react-router-dom';
import { urlFor } from '../../../sanity';
import { PortableText } from '@portabletext/react';

const StudentSpotlight = () => {
  const [page, setPage] = useState(0);
  const { students, isLoading } = useGlobalContext();
  const imageUrl = students[0]?.mainImage
    ? urlFor(students[0]?.mainImage).width(300).url()
    : '';
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > students?.slice(1)?.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = students?.slice(1)?.length - 1;
      }
      return prevPage;
    });
  };
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

  return (
    <main>
      <section className="h-[600px] flex flex-col lg:flex-row mb-[80px]">
        <div className="flex-1">
          <img
            src={imageUrl}
            alt={students[0]?.title || ''}
            className="h-[320px] lg:h-[600px] w-[100%] object-left-top object-cover"
          />
        </div>
        <div className="flex-1 bg-[#2C410A] h-[232px] lg:h-auto md:flex lg:justify-center items-center px-[16px] lg:px-0 py-[17px] lg:py-0">
          <div className="lg:w-[525px] mx-auto">
            <div className="flex items-center">
              <img src={LQ} alt="" className="w-[29px] lg:w-auto mb-10 mt-6" />
            </div>
            <p className="text-white text-[12px] lg:text-[20px] leading-[150%] my-[20px] lg:my-[59px] text-center lg:text-left">
              {students[0]?.quote}
            </p>
            <div className="flex justify-end">
              <img src={RQ} alt="" className="w-[29px] lg:w-auto mt-10" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px] px-6 lg:px-0">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[14px] lg:text-[20px]">
            {students[0]?.title}
          </h5>
          {/* <div className="flex items-center gap-x-2 lg:gap-x-6">
            <p className="text-[12px] lg:text-[14px]">1st July,2023</p>
            <CreateNewFolderOutlinedIcon fontSize="small" />
          </div> */}
        </div>
        <div className="flex justify-center gap-x-6 lg:px-0">
          <span>
            <FacebookIcon htmlColor="#090302" fontSize="medium" />
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/muyiwa-a-52a67734/"
              target="_blank"
              aria-label="Link to LinkedIn"
            >
              <LinkedInIcon
                fontSize="medium"
                className="text-[#090302] hover:text-[#192C69]"
              />
            </a>
          </span>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-center text-[24px] lg:text-[40px] font-bold text-[#011717] mb-6">
          Student Of the Month
        </h3>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col gap-6 px-6 lg:px-0">
          <PortableText
            value={students[0]?.about}
            components={myPortableTextComponents}
          />
        </div>
        <div className="mt-[64px] lg:mt-[80px] px-[35px] lg:px-0">
          <div className="bg-[#CECDCC] px-10 py-4 flex items-center space-x-2 lg:space-x-4 mb-6">
            <div>
              <img src={OpenB} alt="" />
            </div>
            <div>
              <h4 className="mb-2 text-[#1B1B1B] text-[14px] lg:text-[16px]">
                Author Extraordinaire
              </h4>
              <p className="max-w-[355px] text-[#5B5756] text-[12px]">
                Multiple publications in renowned international journals with
                groundbreaking research
              </p>
            </div>
          </div>
          <div className="bg-[#CECDCC] px-10 py-4 flex items-center space-x-2 lg:space-x-4 mb-6">
            <div>
              <img src={Activity} alt="" />
            </div>
            <div>
              <h4 className="mb-2 text-[#1B1B1B] text-[14px] lg:text-[16px]">
                Author Extraordinaire
              </h4>
              <p className="max-w-[355px] text-[#5B5756] text-[12px]">
                Multiple publications in renowned international journals with
                groundbreaking research
              </p>
            </div>
          </div>
          <div className="bg-[#CECDCC] px-10 py-4 flex items-center space-x-2 lg:space-x-4">
            <div>
              <img src={Bike} alt="" />
            </div>
            <div>
              <h4 className="mb-2 text-[#1B1B1B] text-[14px] lg:text-[16px]">
                Author Extraordinaire
              </h4>
              <p className="max-w-[355px] text-[#5B5756] text-[12px]">
                Multiple publications in renowned international journals with
                groundbreaking research
              </p>
            </div>
          </div>
        </div>
      </section>
      {students?.length > 1 && (
        <section className="lg:h-[680px] bg-[#010A09] py-6 lg:py-[52px] my-[80px] px-6 lg:px-0 lg:hidden">
          <div>
            <h3 className="text-center text-[#FDFFFD] text-[24px] lg:text-[2.5rem] font-[600] capitalize mb-[40px]">
              Previous Urp Heroes
            </h3>
            <div className="max-w-[1112px] mx-auto">
              <div className="flex lg:justify-center justify-between items-center gap-x-[24px]">
                {students?.length > 1 &&
                  paginate(students?.slice(1), 1)[page]?.map((item) => {
                    <Link
                      key={item?._id}
                      to={`/student-spotlight/${item?._id}`}
                      className="relative w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] lg:flex justify-center items-end"
                    >
                      <img
                        src={urlFor(item?.mainImage).width(300).url()}
                        alt={item?.title}
                        className="absolute w-full h-full -z-10"
                      />
                      <div className="w-full h-[72px] bg-white py-[18px] px-[54px] z-10 opacity-[0.92]">
                        <article className="border-[#010A09] border-[2px] py-2">
                          <p className="flex justify-center items-center space-x-2 lg:space-x-2">
                            <p>View Profile</p>
                            <EastOutlinedIcon />
                          </p>
                        </article>
                      </div>
                    </Link>;
                  })}
              </div>
              <div className="flex justify-between items-center mt-6 lg:mt-[40px]">
                <span role="button" onClick={prevPage}>
                  <img
                    src={LeftIcon}
                    alt="left toggle button"
                    className="w-[32px] lg:w-auto"
                  />
                </span>
                <span role="button" onClick={nextPage}>
                  <img
                    src={RightIcon}
                    alt="right toggle button"
                    className="w-[32px] lg:w-auto"
                  />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
      {students?.length > 1 && (
        <section className="lg:h-[680px] bg-[#010A09] py-6 lg:py-[52px] my-[80px] px-6 lg:px-0 hidden lg:block">
          <div>
            <h3 className="text-center text-[#FDFFFD] text-[24px] lg:text-[2.5rem] font-[600] capitalize mb-[40px]">
              Previous Urp Heroes
            </h3>
            <div className="max-w-[1112px] mx-auto">
              <div className="flex lg:justify-center justify-between items-center gap-x-[24px]">
                {students?.length > 1 &&
                  paginate(students?.slice(1), 4)[page]?.map((item) => {
                    <Link
                      key={item?._id}
                      to={`/student-spotlight/${item?._id}`}
                      className="relative w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] lg:flex justify-center items-end"
                    >
                      <img
                        src={urlFor(item?.mainImage).width(300).url()}
                        alt={item?.title}
                        className="absolute w-full h-full -z-10"
                      />
                      <div className="w-full h-[72px] bg-white py-[18px] px-[54px] z-10 opacity-[0.92]">
                        <article className="border-[#010A09] border-[2px] py-2">
                          <p className="flex justify-center items-center space-x-2 lg:space-x-2">
                            <p>View Profile</p>
                            <EastOutlinedIcon />
                          </p>
                        </article>
                      </div>
                    </Link>;
                  })}
              </div>
              <div className="flex justify-between items-center mt-6 lg:mt-[40px]">
                <span role="button" onClick={prevPage}>
                  <img
                    src={LeftIcon}
                    alt="left toggle button"
                    className="w-[32px] lg:w-auto"
                  />
                </span>
                <span role="button" onClick={nextPage}>
                  <img
                    src={RightIcon}
                    alt="right toggle button"
                    className="w-[32px] lg:w-auto"
                  />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default StudentSpotlight;
