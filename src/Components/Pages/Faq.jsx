import { useEffect, useRef } from 'react';
import HODLight from '../../assets/Fram.png';
import RQ from '../../assets/quoteR.png';
import LQ from '../../assets/quoteL.png';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import AG from '../../assets/lecturers/agunbiade.webp';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Comment from '../Resuables/Comment';

const Faq = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[80px] faq-bg">
        <div className="journal-welcome flex-1">
          <h1 className="text-[2.5rem] font-bold text-center text-white">
            FAQ’s
          </h1>
        </div>
      </section>
      <section className="max-w-[1112px] mx-auto mb-20">
        <h2 className="text-center text-[40px] font-[600] mb-10">
          Random Long Question the chance to travel with a group of like-minded
          individuals who love the great outdoors?
        </h2>
        <div className="leading-[150%] flex flex-col max-w-[800px] mx-auto">
          <p className="mb-6 text-[16px] text-center">
            If you’re an adventurer who loves being out in nature, a hiking and
            trekking tour should be next on your list. You can expect great
            wildlife photography opportunities and the chance to travel with a
            group of like-minded individuals who love the great outdoors.
          </p>
        </div>
      </section>
      <section className="max-w-[738px] mx-auto mb-[80px]">
        <div className="mb-6 py-2 px-4 border-b-[1px] border-[#1B1B1B]">
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="mb-6 py-2 px-4 border-b-[1px] border-[#1B1B1B]">
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="mb-6 py-2 px-4 border-b-[1px] border-[#1B1B1B]">
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="mb-6 py-2 px-4 border-b-[1px] border-[#1B1B1B]">
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="py-2 px-4 border-b-[1px] border-[#1B1B1B]">
          <div className="flex justify-between items-center max-w-[1000px]">
            <span className="text-[20px] text-[#1B1B1B]">
              Would i have to pay to use this website?
            </span>
            <span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
      </section>
      <Comment />
      <section className="grid place-items-center px-2 lg:px-0 mb-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[14px] leading-[150%] text-[#5B5756] max-w-[529px] mx-auto mb-4">
            Send us a mail filler text is a great way to show the size you want
            to have
          </p>
          <button className="px-6 py-2 bg-[#03312E] text-white text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md">
            contact us
          </button>
          <div className="flex justify-center gap-x-10 lg:px-0">
            <span>
              <EmailIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span>
              <FacebookIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span>
              <InstagramIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span>
              <TwitterIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span>
              <LinkedInIcon htmlColor="#934B00" fontSize="large" />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
