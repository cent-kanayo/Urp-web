import { useEffect, useRef, useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Comment from '../Resuables/Comment';
import { Link } from 'react-router-dom';

const Faq = () => {
  const [arrowUp1, setArrowUp1] = useState(false);
  const [arrowUp2, setArrowUp2] = useState(false);
  const [arrowUp3, setArrowUp3] = useState(false);
  const [arrowUp4, setArrowUp4] = useState(false);
  const [arrowUp5, setArrowUp5] = useState(false);
  const [arrowUp6, setArrowUp6] = useState(false);
  const [arrowUp7, setArrowUp7] = useState(false);
  const [arrowUp8, setArrowUp8] = useState(false);
  const [arrowUp9, setArrowUp9] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);

  const onDropdownClicked = (tarket) => {
    if (tarket === '1') {
      ref1.current.classList.toggle('programs-show');
      ref2.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      ref8.current.classList.remove('programs-show');
      ref9.current.classList.remove('programs-show');
      setArrowUp1((prev) => !prev);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp7(false);
      setArrowUp8(false);
      setArrowUp9(false);
    }
    if (tarket === '2') {
      ref2.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      ref8.current.classList.remove('programs-show');
      ref9.current.classList.remove('programs-show');
      setArrowUp2((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp7(false);
      setArrowUp8(false);
      setArrowUp9(false);
    }
    if (tarket === '3') {
      ref3.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      ref8.current.classList.remove('programs-show');
      ref9.current.classList.remove('programs-show');
      setArrowUp3((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp7(false);
      setArrowUp8(false);
      setArrowUp9(false);
    }
    if (tarket === '4') {
      ref4.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      ref8.current.classList.remove('programs-show');
      ref9.current.classList.remove('programs-show');
      setArrowUp4((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp7(false);
      setArrowUp8(false);
      setArrowUp9(false);
    }
    if (tarket === '5') {
      ref5.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      ref8.current.classList.remove('programs-show');
      ref9.current.classList.remove('programs-show');
      setArrowUp5((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp6(false);
      setArrowUp7(false);
      setArrowUp8(false);
      setArrowUp9(false);
    }
    if (tarket === '6') {
      ref6.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      ref8.current.classList.remove('programs-show');
      ref9.current.classList.remove('programs-show');
      setArrowUp6((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp7(false);
      setArrowUp8(false);
      setArrowUp9(false);
    }
    if (tarket === '7') {
      ref7.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref8.current.classList.remove('programs-show');
      ref9.current.classList.remove('programs-show');
      setArrowUp7((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp8(false);
      setArrowUp9(false);
    }
    if (tarket === '8') {
      ref8.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      ref9.current.classList.remove('programs-show');
      setArrowUp8((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp7(false);
      setArrowUp9(false);
    }
    if (tarket === '9') {
      ref9.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      ref8.current.classList.remove('programs-show');
      setArrowUp9((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp7(false);
      setArrowUp8(false);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
    ref1.current.classList.add('programs-show');
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
          Explore your answers: Urban & Regional Planning FAQ's corner
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
              Am I the right fit for this program?
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
              The department welcomes applications from students of diverse
              backgrounds. The ideal applicant is passionate about the built
              environment, fascinated with human, spatial and natural
              interactions within urban environments; and interested in
              reshaping the world, one square metre at a time. 
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
              What is the duration of URP Programs?
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
              The Bachelor's Program runs for five years while the post graduate
              degree programs vary between two years and six years.
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
              How can I apply to URP programs in the department?
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
              Applications are made directly to the University of Lagos. Kindly
              visit (Insert link to undergraduate and postgraduate admissions)
              for more information.
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
              What background, experience or skills do I need to study URP?
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
              The multidisciplinary nature of URP means that all experience and
              background is relevant. Moreso, our department is committed to
              fostering an academic environment which enhances skills
              development and knowledge sharing. Hence, our faculty and students
              are on ground to provide you with all training you will need in
              your course duration.
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
              What financial aid options are available for URP students?
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
              Currently, the department does not offer financial aid. However,
              we provide support to our students who seek external funding
              opportunities.
            </h3>
          </div>
        </div>
        <div
          className="py-2 px-4 border-b-[1px] border-[#1B1B1B]"
          role="button"
          onClick={() => onDropdownClicked('6')}
        >
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[12px] lg:text-[20px] text-[#1B1B1B]">
              How can I connect with the department faculty?
            </span>
            <span>
              {arrowUp6 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref6} className="programs-hide mt-6">
            <h3>
              Our faculty are very open to interacting and partnering with
              prospective students, researchers, partners, and interested
              members of the public. You can connect directly with our faculty
              (Link the staff page) or fill out an enquiry form (Link the
              contact us page) and we will get back to you.
            </h3>
          </div>
        </div>
        <div
          className="py-2 px-4 border-b-[1px] border-[#1B1B1B]"
          role="button"
          onClick={() => onDropdownClicked('7')}
        >
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[12px] lg:text-[20px] text-[#1B1B1B]">
              What are the job placement opportunities for graduates from the
              department?
            </span>
            <span>
              {arrowUp7 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref7} className="programs-hide mt-6">
            <h3>
              Our graduates are well sought after in the urban planning sector
              home and abroad, with notable alumni working in Town Planning
              Offices, Government MDAs, Policy Making, International
              Organizations, etc.
            </h3>
          </div>
        </div>
        <div
          className="py-2 px-4 border-b-[1px] border-[#1B1B1B]"
          role="button"
          onClick={() => onDropdownClicked('8')}
        >
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[12px] lg:text-[20px] text-[#1B1B1B]">
              Where can I find the academic calendar and important dates?
            </span>
            <span>
              {arrowUp8 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref8} className="programs-hide mt-6">
            <h3>
              The Academic Calendar is published by the University. Please click
              here to download (or view?, whichever is preferable) the 2023/2024
              Academic Calendar.
            </h3>
          </div>
        </div>
        <div
          className="py-2 px-4 border-b-[1px] border-[#1B1B1B]"
          role="button"
          onClick={() => onDropdownClicked('9')}
        >
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[12px] lg:text-[20px] text-[#1B1B1B]">
              What extracurricular activities are available within the
              department?
            </span>
            <span>
              {arrowUp9 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref9} className="programs-hide mt-6">
            <h3>
              The department regularly offers field trips under several courses,
              offering the students the opportunity to explore and travel while
              gaining course credit. Also, the Urban and Regional Planning
              Students Association plans extracurricular events every semester
              for students to connect.
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
