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

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useState } from 'react';

const BGS = [Bg1, Bg2, Bg3, Bg4, Bg5];
const Honours = () => {
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
                className="w-full h-full"
              />
            </div>
          );
        })}

        <div className="py-[204.5px]">
          <div className="flex justify-center items-center gap-x-[126px]">
            <span
              className="border-[2px] border-[#F0C808] p-2 hover:bg-[#F0C808]"
              role="button"
              onClick={() => handleClick('prev')}
            >
              <ArrowBackIosNewOutlinedIcon htmlColor="white" fontSize="small" />
            </span>
            <div className="w-[709px] h-143px] bg-[#090302] py-6 px-10 flex flex-col justify-between gap-10 items-center">
              <p className="text-[24px] text-[#F0C808] font-medium leading-[150%]">
                Where Innovation Meets Excellence!
              </p>
              <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[40px] font-bold text-[#F5FFF6]">
                Urban & Regional Planning
              </h1>
            </div>
            <span
              className="border-[2px] border-[#F0C808] p-2 hover:bg-[#F0C808]"
              role="button"
              onClick={() => handleClick('next')}
            >
              <ArrowForwardIosOutlinedIcon htmlColor="white" fontSize="small" />
            </span>
          </div>
        </div>
      </section>
      <section className="mt-[160px] px-4 lg:px-0">
        <div className="flex justify-center mb-[60px] items-center relative">
          <h2 className="text-center text-[2.5rem] text-black font-medium capitalize ">
            the executives
          </h2>
        </div>
        <div className="flex justify-center flex-wrap gap-5 max-w-[1249px] mx-auto">
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
        <div className="flex items-center justify-center mt-10 lg:hidden">
          <span className="text-[1rem]text-[#010A09] font-medium capitalize ">
            see all
          </span>
          <span>
            <ArrowForwardIosOutlinedIcon htmlColor="#934B00" fontSize="small" />
          </span>
        </div>
      </section>
      <section>
        <div className="max-w-[1122px] mx-auto mt-[160px]">
          <h3 className="text-[32px] font-[600] capitalize mb-6">
            popular shots
          </h3>
          <div>
            <article className="flex justify-center mb-[24px] gap-x-[23px]">
              <span className="bg-[#D9D9D9] h-[200px] w-[739px]"></span>
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
            </article>
            <article className="flex justify-center mb-[24px] gap-x-[23px]">
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
            </article>
            <article className="flex justify-center mb-[24px] gap-x-[23px]">
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
              <span className="bg-[#D9D9D9] h-[200px] w-[739px]"></span>
            </article>
          </div>
        </div>
      </section>
      <section className="mt-[160px] h-[404px] bg-[#5B5756] flex items-center">
        <div className="flex-1 h-[100%]">
          <img src={Journal} alt="" className="block h-[100%]" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="w-[564px] flex flex-col gap-6">
            <h2 className="text-[#F5FFF6] text-[40px] font-bold">
              Access previous projects
            </h2>
            <p className="text-[#FDFFFD] text-[14px] leading-[150%]">
              A compilation of literary works born from years of research and
              placeholder text till our design gets a writer .Faculty of
              Environmental Science, University of Lagos. It is taught in a few
              and highly elitist universities in Nigeria, hence the need to meet
              universal standards to master the requisite skills of
              architectural design. Since its foundation...
            </p>
            <div>
              <button className="capitalize bg-[#F5FFF6] text-[#010A09] rounded-[2px] px-8 py-2 text-[] hover:animate-pulse">
                Get Access
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[180px] mb-[80px] px-4 lg:px-0">
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

      <section className="h-[680px] bg-[#010A09] py-[68px] mt-[160px]">
        <div>
          <h3 className="text-center text-[#FDFFFD] text-[32px] font-[600] capitalize mb-[40px]">
            upcoming events
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex justify-center items-center gap-x-[24px]">
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
            </div>
            <div className="flex justify-between items-center mt-[40px]">
              <span>
                <img src={LeftIcon} alt="left toggle button" />
              </span>
              <span>
                <img src={RightIcon} alt="right toggle button" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default Honours;
