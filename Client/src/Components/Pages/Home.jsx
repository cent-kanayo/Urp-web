import React, { useEffect, useState } from 'react';
import NumberBox from '../Resuables/NumberBox';
import HODDark from '../../assets/mainDesktop/DrAD.webp';
import HODLight from '../../assets/mainDesktop/DrAL.webp';
import Journal from '../../assets/journals.png';

import Spotlight from '../Resuables/Spotlight';
import Events from '../Resuables/Events';
import Cta from '../Resuables/Cta';
import Contact from '../Resuables/Contact';

import Hod from '../../assets/mainMobile/hod.png';
import Book from '../../assets/mainMobile/bookbg.png';

import Bg1 from '../../assets/mainDesktop/homebg1.webp';
import Bg2 from '../../assets/mainDesktop/homebg2.webp';
import Bg3 from '../../assets/mainDesktop/homebg3.webp';
import Bg4 from '../../assets/mainDesktop/homebg4.webp';
import Bg5 from '../../assets/mainDesktop/homebg5.webp';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';
import { getPosts } from '../../../sanity';
import { useGlobalContext } from '../../Context/AppContext';

const BGS = [Bg1, Bg2, Bg3, Bg4, Bg5];

const Home = () => {
  document.title = 'URP UNILAG';
  const [bgs, setBgs] = useState(BGS);
  const [index, setIndex] = useState(0);
  const { posts, isLoading } = useGlobalContext();
  const handleClick = (type) => {
    if (type === 'next') {
      setIndex((prev) => (prev > BGS?.length - 2 ? 0 : prev + 1));
    } else {
      setIndex((prev) => (prev < 0 ? BGS?.length - 2 : prev - 1));
    }
  };

  useEffect(() => {
    const lastIndex = BGS.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, BGS]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    getPosts();
  }, []);
  return (
    <main>
      <section className="hero-bg text-center">
        {BGS.map((pic, picIndex) => {
          let position = 'nextSlide';
          if (picIndex === index) {
            position = 'activeSlide';
          }
          if (
            picIndex === index - 1 ||
            (index === 0 && picIndex === BGS.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <div className={`bgSlide ${position}`} key={picIndex}>
              <img
                src={pic}
                alt="Background carousel 1"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}

        <div className="py-[100px] lg:py-[204.5px]">
          <div className="flex justify-center items-center gap-x-2 lg:gap-x-[126px] lg:px-0">
            <span
              className="border-[2px] border-[#F0C808] p-[2px] lg:p-2 hover:bg-[#F0C808]"
              role="button"
              onClick={() => handleClick('prev')}
            >
              <ArrowBackIosNewOutlinedIcon htmlColor="white" fontSize="small" />
            </span>
            <div className="welcome-box flex-1 lg:flex-none lg:w-[789px] lg:h-[160px] py-3 lg:py-6 px-3 lg:px-10 items-center">
              <p className="text-[14px] md:text-[24px] text-[#F0C808] font-medium leading-[150%] mb-4">
                Where Innovation Meets Excellence!
              </p>
              <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#F5FFF6]">
                Urban & Regional Planning
              </h1>
            </div>
            <span
              className="border-[2px] border-[#F0C808] p-[2px] lg:p-2 hover:bg-[#F0C808]"
              role="button"
              onClick={() => handleClick('next')}
            >
              <ArrowForwardIosOutlinedIcon htmlColor="white" fontSize="small" />
            </span>
          </div>
        </div>
      </section>
      <section className="lg:flex flex-col justify-center bg-white">
        <div>
          <h3 className="text-[14px] md:text-[20px] text-center text-[#03312E] my-[80px] leading-[150%] max-w-[713px] mx-auto">
            Giving definition to an undefined world, Welcome to URP, <br />
            where standards are created.
          </h3>
          <div className="flex flex-col gap-[64px] lg:gap-0 justify-center items-center lg:flex-row lg:justify-between max-w-[1120px] mx-auto">
            <NumberBox
              text="Programmes"
              heading="7"
              sub="Number of degree programmes offered in the department"
              color="green"
            />
            <NumberBox
              text="Excellence"
              heading="5"
              sub="First Class students currently in the Department"
              color="yellow"
            />
            <NumberBox
              text="Enrollment"
              heading="200"
              sub="Number of students currently enrolled in the Department"
              color="orange"
            />
            {/* <NumberBox
              text="diverse"
              heading="1142"
              sub="Number of total students enrolled since inception of the Department"
              color="red"
            /> */}
          </div>
        </div>
      </section>
      <section className="my-[64px] py-6 lg:py-[80px]">
        <div className="relative h-[400px] md:h-[600px] lg:h-[800px] flex items-end justify-center">
          <div className="hidden lg:block absolute h-[100%] left-0 lg:w-[50%] -z-10">
            <img
              src={HODLight}
              alt=""
              className="block w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="hidden lg:block lg:absolute h-[100%] right-0 w-[50%]">
            <img
              src={HODDark}
              alt=""
              className="block w-[100%] h-[100%] object-cover"
            />
            <img
              src={Hod}
              alt=""
              className="block w-[100%] h-[100%] object-cover absolute lg:hidden"
            />
          </div>
          <div className="lg:hidden absolute h-[100%] w-full">
            <img
              src={Hod}
              alt=""
              className="block w-[100%] h-[100%] object-cover md:object-fill absolute lg:hidden"
            />
          </div>
          <div className="h-[201px] lg:h-auto w-full  lg:mx-0  lg:max-w-none">
            <div className="bg-[#FDFFFD] relative z-30 px-4 lg:px-10 py-3 lg:py-6 lg:absolute lg:left-[48%] mx-4 lg:top-[251px] md:w-[540px] md:mx-auto gap-4 lg:gap-6  flex flex-col border-l-[4px] border-[#5B5756] rounded-[4px]">
              <div className="flex items-end gap-x-4">
                <h2 className="text-[#011717] text-[24px] lg:text-[36px] font-bold capitalize underline underline-offset-[10px]">
                  Dr. Agunbiade
                </h2>
                <p className="translate-y-2">HOD</p>
              </div>
              <p className="text-[14px] leading-[150%] hidden lg:block">
                Welcome to the Department of Urban and Regional Planning at the
                University of Lagos! As the Head of Department, it is my utmost
                pleasure to extend a warm welcome to both our new and existing
                students. You have chosen a field that is at the forefront of
                shaping sustainable and vibrant communities. This student
                website has been specially crafted to serve as your compass,
                providing you with the essential information...
              </p>
              <p className="text-[12px] leading-[150%] lg:hidden">
                Welcome to the Department of Urban and Regional Planning at the
                University of Lagos! As the Head of Department, it is my utmost
                pleasure to extend a warm welcome to both our new and existing
                students. You have chosen...
              </p>
              <div>
                <Link
                  to="/about"
                  className="bg-[#5B5756] text-[14px] px-6 py-2 rounded-[2px] text-[#F5FFF6] hover:bg-[#353939]"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Spotlight />
      <section className="mt-[64px] lg:mt-[160px] h-[404px] lg:bg-[#011717] flex items-end lg:items-center  relative">
        <div className="absolute -z-10 lg:static lg:z-10 flex-1 h-[100%] w-full">
          <img src={Journal} alt="" className="hidden lg:block h-[100%]" />
          <img src={Book} alt="" className="lg:hidden h-[100%] w-full" />
        </div>
        <div className="lg:flex-1 flex flex-col bg-[#011717] mx-4 md:mx-auto md:w-[564px] py-6 lg:py-0 px-4 lg:px-0 mb-[25px] lg:mb-0">
          <div className="md:w-[564px] flex flex-col gap-4 lg:gap-6">
            <h2 className="text-[#F5FFF6] text-[24px] lg:text-[40px] font-bold">
              Introducing The Journal
            </h2>
            <p className="text-[#FDFFFD] text-[14px] leading-[150%] hidden lg:block">
              Urban and Regional Planning Review (URPR) is a multidisciplinary
              journal devoted to articles that address contemporary urban and
              regional issues and is directed towards an audience that includes
              practitioners, policymakers, scholars and students.....
            </p>
            <p className="text-[#FDFFFD] text-[12px] leading-[150%] lg:hidden">
              Urban and Regional Planning Review (URPR) is a multidisciplinary
              journal devoted to articles that address contemporary urban and
              regional issues and is directed towards an audience that includes
              practitioners, policymakers, scholars and students.....
            </p>
            <div>
              <Link
                to="http://urpr.unilag.edu.ng/issue/view/277"
                className="bg-[#F5FFF6] text-[#010A09] rounded-[2px] px-8 py-2 text-[14px] hover:animate-pulse"
              >
                Go to page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {isLoading ? (
        <div className="h-[600px]">
          <h1>Loading...</h1>
        </div>
      ) : (
        <Events posts={posts} />
      )}
      <section className="mt-[80px] h-[404px] lg:bg-[#5B5756] flex items-end lg:items-center relative">
        <div className="absolute w-full -z-10 lg:static lg:z-10 flex-1 h-[100%]">
          <img src={Journal} alt="" className="hidden lg:block h-[100%]" />
          <img src={Book} alt="" className="lg:hidden h-[100%] w-full" />
        </div>
        <div className="lg:flex-1 flex flex-col bg-[#5B5756] mx-4  md:mx-auto md:w-[564px] py-6 lg:py-0 px-4 lg:px-0 mb-[25px] lg:mb-0">
          <div className="lg:w-[564px] flex flex-col gap-6">
            <h2 className="text-[#F5FFF6] text-[24px] lg:text-[40px] font-bold">
              Innovative research hubs
            </h2>
            <p className="text-[#FDFFFD] text-[14px] leading-[150%] hidden lg:block">
              At the Department of Urban and Regional Planning, we are driven by
              the profound belief in the transformative power of collaborative
              research. We recognize that the collective intelligence of diverse
              minds working together has the capacity to transcend conventional
              limits, opening new frontiers of knowledge and making
              substantial.....
            </p>
            <p className="text-[#FDFFFD] text-[12px] leading-[150%] lg:hidden">
              At the Department of Urban and Regional Planning, we are driven by
              the profound belief in the transformative power of collaborative
              research. We recognize that the collective intelligence of diverse
              minds working together has the capacity to transcend conventional
              limits...
            </p>
            <div>
              <button className="capitalize bg-[#F5FFF6] text-[#010A09] rounded-[2px] px-8 py-2 text-[14px] hover:animate-pulse">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default Home;
