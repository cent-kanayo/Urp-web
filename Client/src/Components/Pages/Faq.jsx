import { useEffect, useRef, useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Comment from '../Resuables/Comment';

const Faq = () => {
  const [arrowUp1, setArrowUp1] = useState(false);
  const [arrowUp2, setArrowUp2] = useState(false);
  const [arrowUp3, setArrowUp3] = useState(false);
  const [arrowUp4, setArrowUp4] = useState(false);
  const [arrowUp5, setArrowUp5] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const onDropdownClicked = (tarket) => {
    if (tarket === '1') {
      ref1.current.classList.toggle('programs-show');
      ref2.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      setArrowUp1((prev) => !prev);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
    }
    if (tarket === '2') {
      ref2.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      setArrowUp2((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
    }
    if (tarket === '3') {
      ref3.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      setArrowUp3((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp4(false);
      setArrowUp5(false);
    }
    if (tarket === '4') {
      ref4.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      setArrowUp4((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp5(false);
    }
    if (tarket === '5') {
      ref5.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      setArrowUp5((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[31px] lg:mb-[80px] faq-bg">
        <div className="journal-welcome flex-1">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            FAQ’s
          </h1>
        </div>
      </section>
      <section className="max-w-[1112px] mx-auto mb-[64px] lg:mb-20 px-6 lg:px-0">
        <h2 className="text-center text-[24px] lg:text-[40px] font-bold mb-6 lg:mb-10">
          Explore Your Answers: Urban & regional planning FAQ's Corner
        </h2>
        <div className="leading-[150%] flex flex-col max-w-[800px] mx-auto">
          <p className="lg:mb-6 text-[12px] lg:text-[16px] text-center">
            Have questions about Urban & regional planning programs, policies,
            or procedures? Dive into our Frequently Asked Questions (FAQs) for
            quick and comprehensive answers. Can't find what you're looking for?
            Feel free to reach out to our department for personalized
            assistance!
          </p>
        </div>
      </section>
      <section className="max-w-[738px] mx-auto mb-[80px] px-6 lg:px-0">
        <div
          className="mb-6 py-2 px-4 border-b-[1px] border-[#1B1B1B]"
          role="button"
          onClick={() => onDropdownClicked('1')}
        >
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[12px] lg:text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              {arrowUp1 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref1} className="programs-hide mt-6">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              debitis eius aliquid vero sapiente corrupti rerum perspiciatis
              maxime excepturi natus!
            </h3>
          </div>
        </div>
        <div
          className="mb-6 py-2 px-4 border-b-[1px] border-[#1B1B1B]"
          role="button"
          onClick={() => onDropdownClicked('2')}
        >
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[12px] lg:text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              {arrowUp2 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref2} className="programs-hide mt-6">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              debitis eius aliquid vero sapiente corrupti rerum perspiciatis
              maxime excepturi natus!
            </h3>
          </div>
        </div>
        <div
          className="mb-6 py-2 px-4 border-b-[1px] border-[#1B1B1B]"
          role="button"
          onClick={() => onDropdownClicked('3')}
        >
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[12px] lg:text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              {arrowUp3 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref3} className="programs-hide mt-6">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              debitis eius aliquid vero sapiente corrupti rerum perspiciatis
              maxime excepturi natus!
            </h3>
          </div>
        </div>
        <div
          className="mb-6 py-2 px-4 border-b-[1px] border-[#1B1B1B]"
          role="button"
          onClick={() => onDropdownClicked('4')}
        >
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[12px] lg:text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              {arrowUp4 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref4} className="programs-hide mt-6">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              debitis eius aliquid vero sapiente corrupti rerum perspiciatis
              maxime excepturi natus!
            </h3>
          </div>
        </div>
        <div
          className="py-2 px-4 border-b-[1px] border-[#1B1B1B]"
          role="button"
          onClick={() => onDropdownClicked('5')}
        >
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[12px] lg:text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              {arrowUp5 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref5} className="programs-hide mt-6">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              debitis eius aliquid vero sapiente corrupti rerum perspiciatis
              maxime excepturi natus!
            </h3>
          </div>
        </div>
      </section>
      <Comment />
      <section className="grid place-items-center px-2 lg:px-0 my-[64px] lg:my-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[342px] lg:max-w-[529px] mx-auto mb-4">
            Send us a mail filler text is a great way to show the size you want
            to have
          </p>
          <button className="px-6 py-2 bg-[#03312E] text-white text-[14px] lg:text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md">
            contact us
          </button>
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

export default Faq;
