import Journal from '../../assets/journals.png';

import Fj from '../../assets/Excos/fjs.png';
import John from '../../assets/Excos/john.png';
import Sonia from '../../assets/Excos/sonia.png';
import Pamela from '../../assets/Excos/pamela.png';
import Timi from '../../assets/Excos/timi.png';
import Korede from '../../assets/Excos/korede.png';
import Exco4 from '../../assets/Excos/exco4.png';
import Exco5 from '../../assets/Excos/exco5.png';
import Exco6 from '../../assets/Excos/exco6.png';

import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';

import Excocard from '../Resuables/Excocard';
import Cta from '../Resuables/Cta';
import Contact from '../Resuables/Contact';

import GetHelp from '../Resuables/GetHelp';

import Bg1 from '../../assets/mainDesktop/homebg1.webp';
import Bg2 from '../../assets/mainDesktop/homebg2.webp';
import Bg3 from '../../assets/mainDesktop/homebg3.webp';
import Bg4 from '../../assets/mainDesktop/homebg4.webp';
import Bg5 from '../../assets/mainDesktop/homebg5.webp';
import Book from '../../assets/mainMobile/bookbg.png';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useState } from 'react';

const BGS = [Bg1, Bg2, Bg3, Bg4, Bg5];
const StudentPage = () => {
  const [bgs, setBgs] = useState(BGS);
  const [index, setIndex] = useState(0);

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
          <div className="flex justify-center items-center gap-2 2g:gap-[126px] lg:px-0">
            <span
              className="border-[2px] border-[#F0C808] p-[2px] lg:p-2 hover:bg-[#F0C808]"
              role="button"
              onClick={() => handleClick('prev')}
            >
              <ArrowBackIosNewOutlinedIcon htmlColor="white" fontSize="small" />
            </span>
            <div className="flex-1 lg:flex-none lg:w-[789px] lg:h-[160px] bg-[#090302] py-3 lg:py-6 px-3 lg:px-10 items-center">
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
      <section className="mt-[40px] lg:mt-[160px] px-4 lg:px-0">
        <div className="flex justify-center mb-6 lg:mb-[60px] items-center relative">
          <h2 className="text-center text-[24px] lg:text-[2.5rem] text-black font-bold capitalize ">
            the executives
          </h2>
        </div>
        <div className="flex justify-center flex-wrap gap ma2-w-[1249px] mx-auto">
          <Excocard name="John Favour" role="president" image={Fj} />
          <Excocard name="Aminu Gbenga" role="Vice President" image={John} />
          <Excocard
            name="Sonia Ugwunna"
            role="General Secretary"
            image={Sonia}
          />
          <Excocard
            name="Elemide Oluwatimilehin"
            role="Sport Secretary"
            image={Timi}
          />
          <Excocard
            name="Elerewe Olukorede S."
            role="Social Secretary"
            image={Korede}
          />
          <Excocard
            name="Okpini Pamela"
            role="Financial Secretary"
            image={Pamela}
          />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco4} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco5} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
        </div>
        {/* <div className="flex items-center justify-center mt-10 lg:hidden">
          <span className="text-[1rem]text-[#010A09] font-medium capitalize ">
            see all
          </span>
          <span>
            <ArrowForwardIosOutlinedIcon htmlColor="#934B00" fontSize="small" />
          </span>
        </div> */}
      </section>
      <section>
        <div className="max-w-[1122px] mx-auto mt-[64px] lg:mt-[160px] py-6 lg:py-0">
          <h3 className="text-center lg:text-left text-[32px] font-[600] capitalize mb-6">
            popular shots
          </h3>
          <div>
            <article className="flex justify-center mb-[24px] gap-[22px]">
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] w-[160px] lg:w-[739px]"></span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] w-[160px] lg:w-[358px]"></span>
            </article>
            <article className="flex justify-center mb-[24px] gap-[22px]">
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] w-[160px] lg:w-[358px] hidden lg:block"></span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] w-[160px] lg:w-[358px]"></span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] w-[160px] lg:w-[358px]"></span>
            </article>
            <article className="flex justify-center mb-[24px] gap-[22px]">
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] w-[160px] lg:w-[358px]"></span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] w-[160px] lg:w-[739px]"></span>
            </article>
          </div>
        </div>
      </section>
      <section className="mt-[64px] lg:mt-[80px] h-[404px] lg:bg-[#5B5756] flex items-end lg:items-center relative">
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
              A compilation of literary works born from years of research and
              placeholder text till our design gets a writer .Faculty of
              Environmental Science, University of Lagos. It is taught in a few
              and highly elitist universities in Nigeria, hence the need to meet
              universal standards to master the requisite skills of
              architectural design. Since its foundation...
            </p>
            <p className="text-[#FDFFFD] text-[12px] leading-[150%] lg:hidden">
              A compilation of literary works born from years of research and
              placeholder text till our design gets a writer .Faculty of
              Environmental Science, University of Lagos. It is taught in a few
              and highly elitist universities in Nigeria, hence the need to meet
              universal standards to master the requisite skills...
            </p>
            <div>
              <button className="capitalize bg-[#F5FFF6] text-[#010A09] rounded-[2px] px-8 py-2 text-[14px] hover:animate-pulse">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[64px] lg:mt-[180px] mb-[64px] lg:mb-[80px] px-4 lg:px-0">
        <GetHelp
          h2="Get help, reach out to us and contribute to our growth"
          p="Experience seamless interaction wpresident effortlessly through quick links. With just a tap of a button, accessing everything has never been easier."
          text1="share your story"
          text2="student Hub"
          text3="requests"
          text4="make a donation"
          text5="Suggestions"
        />
      </section>

      <section className="lg:h-[680px] bg-[#010A09] py-6 lg:py-[68px] lg:mt-[160px]">
        <div>
          <h3 className="text-center text-[#FDFFFD] text-[32px] font-[600] capitalize mb-[40px]">
            upcoming events
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex justify-center items-center gap-x-[24px]">
              <div className="hidden lg:block w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="hidden lg:block w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
            </div>
            <div className="max-w-[340px] lg:max-w-none mx-auto flex justify-between items-center mt-6 lg:mt-[40px]">
              <span>
                <img
                  src={LeftIcon}
                  alt="left toggle button"
                  className="w-[32px] lg:w-auto"
                />
              </span>
              <span>
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
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default StudentPage;
