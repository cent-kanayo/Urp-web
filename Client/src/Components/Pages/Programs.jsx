import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useEffect, useRef, useState } from 'react';

const Programs = () => {
  const [arrowUp1, setArrowUp1] = useState(false);
  const [arrowUp2, setArrowUp2] = useState(false);
  const [arrowUp3, setArrowUp3] = useState(false);
  const [arrowUp4, setArrowUp4] = useState(false);
  const [arrowUp5, setArrowUp5] = useState(false);
  const [arrowUp6, setArrowUp6] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const onDropdownClicked = (tarket) => {
    if (tarket === '1') {
      ref1.current.classList.toggle('programs-show');
      ref2.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      setArrowUp1((prev) => !prev);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
    }
    if (tarket === '2') {
      ref2.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      setArrowUp2((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
    }
    if (tarket === '3') {
      ref3.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      setArrowUp3((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
    }
    if (tarket === '4') {
      ref4.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      setArrowUp2((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp2(false);
      setArrowUp5(false);
      setArrowUp6(false);
    }
    if (tarket === '5') {
      ref5.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      setArrowUp2((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp2(false);
      setArrowUp6(false);
    }
    if (tarket === '6') {
      ref6.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      setArrowUp6((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp2(false);
    }
  };
  useEffect(() => {
    ref1.current.classList.add('programs-show');
    setArrowUp1(true);
  }, []);
  return (
    <main>
      <section className="flex mb-[80px] programs-bg">
        <div className="flex-1"></div>
      </section>
      <section className="max-w-[800px] mx-auto px-6 lg:px-0">
        <h3 className="text-center text-[32px] lg:text-[40px] font-[600] mb-6">
          Programmes
        </h3>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col">
          <p>
            Choosing to study Urban and Regional planning in the University of
            Lagos is the first step on your journey toward an exciting future.
            We offer many different course options, from undergraduate or
            graduate programs, to pre-professional courses, you’ll have no
            trouble pursuing your passions the way that’s right for you.
          </p>
        </div>
      </section>
      <section className="max-w-[1248px] mx-auto mt-[80px] px-6 lg:px-0">
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('1')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
                MBA in Community Economic Development
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Undergraduate
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Undergraduate
              </span>
              {arrowUp1 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref1} className="programs-hide mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Develop stronger economic ties. This MBA offers a leading edge
              curriculum that includes all business subjects found in
              traditional MBA programs, with an emphasis on economic
              development, leadership, governance and management of change.
            </p>
            <div className="flex justify-end mt-6">
              <button className="bg-[#CDE3E3] text-[#1B1B1B] px-6 py-2 rounded-[2px] text-[14px]">
                View Handbook
              </button>
            </div>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('2')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
                MBA in Community Economic Development
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Undergraduate
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Undergraduate
              </span>
              {arrowUp2 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref2} className="programs-hide mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Develop stronger economic ties. This MBA offers a leading edge
              curriculum that includes all business subjects found in
              traditional MBA programs, with an emphasis on economic
              development, leadership, governance and management of change.
            </p>
            <div className="flex justify-end mt-6">
              <button className="bg-[#CDE3E3] text-[#1B1B1B] px-6 py-2 rounded-[2px] text-[14px]">
                View Handbook
              </button>
            </div>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('3')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
                MBA in Community Economic Development
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Undergraduate
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Undergraduate
              </span>
              {arrowUp1 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref3} className="programs-hide mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Develop stronger economic ties. This MBA offers a leading edge
              curriculum that includes all business subjects found in
              traditional MBA programs, with an emphasis on economic
              development, leadership, governance and management of change.
            </p>
            <div className="flex justify-end mt-6">
              <button className="bg-[#CDE3E3] text-[#1B1B1B] px-6 py-2 rounded-[2px] text-[14px]">
                View Handbook
              </button>
            </div>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('4')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
                MBA in Community Economic Development
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Undergraduate
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Undergraduate
              </span>
              {arrowUp1 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref4} className="programs-hide mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Develop stronger economic ties. This MBA offers a leading edge
              curriculum that includes all business subjects found in
              traditional MBA programs, with an emphasis on economic
              development, leadership, governance and management of change.
            </p>
            <div className="flex justify-end mt-6">
              <button className="bg-[#CDE3E3] text-[#1B1B1B] px-6 py-2 rounded-[2px] text-[14px]">
                View Handbook
              </button>
            </div>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('5')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
                MBA in Community Economic Development
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Undergraduate
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Undergraduate
              </span>
              {arrowUp1 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref5} className="programs-hide mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Develop stronger economic ties. This MBA offers a leading edge
              curriculum that includes all business subjects found in
              traditional MBA programs, with an emphasis on economic
              development, leadership, governance and management of change.
            </p>
            <div className="flex justify-end mt-6">
              <button className="bg-[#CDE3E3] text-[#1B1B1B] px-6 py-2 rounded-[2px] text-[14px]">
                View Handbook
              </button>
            </div>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('6')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
                MBA in Community Economic Development
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Undergraduate
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Undergraduate
              </span>
              {arrowUp1 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref6} className="programs-hide mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Develop stronger economic ties. This MBA offers a leading edge
              curriculum that includes all business subjects found in
              traditional MBA programs, with an emphasis on economic
              development, leadership, governance and management of change.
            </p>
            <div className="flex justify-end mt-6">
              <button className="bg-[#CDE3E3] text-[#1B1B1B] px-6 py-2 rounded-[2px] text-[14px]">
                View Handbook
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="grid place-items-center px-2 lg:px-0 my-[80px] bg-[#CDE3E3] text-[#1B1B1B]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[529px] mx-auto mb-4">
            Send us a mail filler text is a great way to show the size you want
            to have
          </p>
          <button className="px-6 py-2 bg-[#03312E] text-white text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md">
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

export default Programs;
