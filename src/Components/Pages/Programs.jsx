import Excocard from '../Resuables/Excocard';
import Cta from '../Resuables/Cta';
import Contact from '../Resuables/Contact';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useEffect, useState } from 'react';

const Programs = () => {
  return (
    <main>
      <section className="flex mb-[80px] programs-bg">
        <div className="flex-1"></div>
      </section>
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-center text-[32px] font-[600] mb-6">Programmes</h3>
        <div className="text-[20px] leading-[150%] flex flex-col">
          <p>
            Choosing to study Urban and Regional planning in the University of
            Lagos is the first step on your journey toward an exciting future.
            We offer many different course options, from undergraduate or
            graduate programs, to pre-professional courses, you’ll have no
            trouble pursuing your passions the way that’s right for you.
          </p>
        </div>
      </section>
      <section className="max-w-[1248px] mx-auto mt-[80px]">
        <div className="mb-6 py-3 px-6 bg-[#FAFAFA]">
          <div className="flex justify-between items-center">
            <span className="text-[20px]">
              MBA in Community Economic Development
            </span>
            <span className="flex items-center space-x-6">
              <span className="text-[16px]">Degree, Undergraduate</span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="mb-6 py-3 px-6 bg-[#FAFAFA]">
          <div className="flex justify-between items-center">
            <span className="text-[20px]">
              MBA in Community Economic Development
            </span>
            <span className="flex items-center space-x-6">
              <span className="text-[16px]">Degree, Undergraduate</span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="mb-6 py-3 px-6 bg-[#FAFAFA]">
          <div className="flex justify-between items-center">
            <span className="text-[20px]">
              MBA in Community Economic Development
            </span>
            <span className="flex items-center space-x-6">
              <span className="text-[16px]">Degree, Undergraduate</span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="mb-6 py-3 px-6 bg-[#FAFAFA]">
          <div className="flex justify-between items-center">
            <span className="text-[20px]">
              MBA in Community Economic Development
            </span>
            <span className="flex items-center space-x-6">
              <span className="text-[16px]">Degree, Undergraduate</span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="mb-6 py-3 px-6 bg-[#FAFAFA]">
          <div className="flex justify-between items-center">
            <span className="text-[20px]">
              MBA in Community Economic Development
            </span>
            <span className="flex items-center space-x-6">
              <span className="text-[16px]">Degree, Undergraduate</span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="mb-6 py-3 px-6 bg-[#FAFAFA]">
          <div className="flex justify-between items-center">
            <span className="text-[20px]">
              MBA in Community Economic Development
            </span>
            <span className="flex items-center space-x-6">
              <span className="text-[16px]">Degree, Undergraduate</span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="mb-6 py-3 px-6 bg-[#FAFAFA]">
          <div className="flex justify-between items-center">
            <span className="text-[20px]">
              MBA in Community Economic Development
            </span>
            <span className="flex items-center space-x-6">
              <span className="text-[16px]">Degree, Undergraduate</span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
        <div className="py-3 px-6 bg-[#FAFAFA]">
          <div className="flex justify-between items-center">
            <span className="text-[20px]">
              MBA in Community Economic Development
            </span>
            <span className="flex items-center space-x-6">
              <span className="text-[16px]">Degree, Undergraduate</span>
              <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
            </span>
          </div>
        </div>
      </section>
      <section className="grid place-items-center px-2 lg:px-0 my-[80px] bg-[#CDE3E3]">
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

export default Programs;
