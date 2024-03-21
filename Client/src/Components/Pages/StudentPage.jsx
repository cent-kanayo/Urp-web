import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Journal from '../../assets/journals.png';

import Fj from '../../assets/Excos/fjs.webp';
import John from '../../assets/Excos/john.webp';
import Sonia from '../../assets/Excos/sonia.webp';
import Pamela from '../../assets/Excos/araf.webp';
import Timi from '../../assets/Excos/timi.webp';
import Korede from '../../assets/Excos/korede.webp';
import Folake from '../../assets/Excos/folake.webp';
import Fred from '../../assets/Excos/fred.webp';
import Jon from '../../assets/Excos/Eins.webp';
import Mo from '../../assets/Excos/mo.webp';

import P1 from '../../assets/Students/p1.png';
import P2 from '../../assets/Students/p2.png';
import P3 from '../../assets/Students/p3.png';
import P4 from '../../assets/Students/p4.png';
import P5 from '../../assets/Students/p5.png';
import P6 from '../../assets/Students/p6.png';
import P7 from '../../assets/Students/p7.png';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Excocard from '../Resuables/Excocard';
import GetHelp from '../Resuables/GetHelp';

import Bg1 from '../../assets/mainDesktop/homebg1.webp';
import Bg2 from '../../assets/mainDesktop/homebg2.webp';
import Bg3 from '../../assets/mainDesktop/homebg3.webp';
import Bg4 from '../../assets/mainDesktop/homebg4.webp';
import Bg5 from '../../assets/mainDesktop/homebg5.webp';
import Book from '../../assets/mainMobile/bookbg.png';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

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
  useEffect(() => {
    window.scrollTo({ top: 0 });
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

      <section className="mt-[40px] lg:mt-[160px] px-4 lg:px-0">
        <div className="flex justify-center mb-6 lg:mb-[60px] items-center relative">
          <h2 className="text-center text-[24px] lg:text-[2.5rem] text-black font-bold">
            The executive members
          </h2>
        </div>
        <div className="flex justify-center flex-wrap gap-[22px] lg:gap-6 max-w-[1249px] mx-auto">
          <Excocard name="John Favour" role="president" image={Fj} />
          <Excocard name="Aminu Gbenga" role="Vice President" image={Jon} />
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
          <Excocard name="Sorunke Arafat" role="P.R.O" image={Pamela} />
          <Excocard
            name="Akinleye John"
            role="Welfare Secretary"
            image={John}
          />
          <Excocard
            name="Muibi Muhammed"
            role="Asst. General Secretary"
            image={Mo}
          />
          <Excocard
            name="Folayan Folake"
            role="Financial Secretary"
            image={Folake}
          />
          <Excocard name="Laikpo Fredrick" role="Treasurer" image={Fred} />
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
      <section className="px-6 lg:px-0">
        <div className="max-w-[1122px] mx-auto mt-[64px] lg:mt-[160px] py-6 lg:py-0">
          <h3 className="text-center lg:text-left text-[32px] font-[600] capitalize mb-6">
            popular shots
          </h3>
          <div>
            <article className="flex flex-col md:flex-row md:justify-center mb-[24px] gap-[22px]">
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[739px]">
                <img
                  src={P6}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px]">
                <img
                  src={P5}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
            </article>
            <article className="flex flex-col md:flex-row md:justify-center mb-[24px] gap-[22px]">
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px] hidden lg:block">
                <img
                  src={P1}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px]">
                <img
                  src={P2}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px]">
                <img
                  src={P3}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
            </article>
            <article className="flex flex-col md:flex-row md:justify-center mb-[24px] gap-[22px]">
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px]">
                <img
                  src={P4}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[739px]">
                <img
                  src={P7}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
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
      {/* <section className="mt-[64px] lg:mt-[180px] mb-[64px] lg:mb-[80px] px-4 lg:px-0">
        <GetHelp
          h2="Get help, reach out to us and contribute to our growth"
          p="Experience seamless interaction wpresident effortlessly through quick links. With just a tap of a button, accessing everything has never been easier."
          text1="share your story"
          text2="student Hub"
          text3="requests"
          text4="make a donation"
          text5="Suggestions"
        />
      </section> */}
      <section className="grid place-items-center px-2 lg:px-0 my-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[529px] mx-auto mb-4">
            Ready to make a difference? Explore sponsorships and volunteer
            opportunities to create a meaningful impact
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-2 bg-[#03312E] text-white text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md"
          >
            contact us
          </Link>
          <div className="flex justify-center gap-x-5 lg:gap-x-10 lg:px-0">
            <span className="lg:hidden">
              <EmailIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <EmailIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span className="lg:hidden">
              <FacebookIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <FacebookIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span className="lg:hidden">
              <InstagramIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <InstagramIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span className="lg:hidden">
              <TwitterIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <TwitterIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span className="lg:hidden">
              <LinkedInIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <LinkedInIcon htmlColor="#934B00" fontSize="large" />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudentPage;
