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
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

import Contact from '../Resuables/Contact';
import Alarm from '../../assets/alarm.png';

const Journal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[80px] journal-bg">
        <div className="journal-welcome flex-1">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            The URP Journal
          </h1>
        </div>
      </section>
      <div className="lg:flex flex-col lg:flex-row lg:gap-[80px] xl:pl-[7%] px-6 lg:px-0">
        <section className=" lg:max-w-[358px] mx-auto lg:mx-0">
          <div className="bg-[#934B00] py-10 px-6 lg:px-10 mb-10">
            <div className=" flex justify-between items-start mb-[32px]">
              <p className="text-[#FDFFFD]">2023</p>
              <img src={Alarm} alt="" />
            </div>
            <div>
              <h2 className="text-[#FDFFFD] text-[32px] lg:text-[2.5rem] font-bold mb-[106px] lg:mb-[141px]">
                The <br /> Journal
              </h2>
              <p className="text-[#FDFFFD] text-[14px] lg:text-[16px]">
                The Department of Urban and Regional Planning
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[297px] mb-10">
            <button className="bg-[#03312E] text-[#FDFFFD] text-[20px] rounded-[2px] py-4 px-[46px] flex items-center space-x-2">
              <span>
                <VerticalAlignBottomIcon fontSize="small" />
              </span>
              <span>Download Full PDF</span>
            </button>
          </div>
          <div className="w-[297px] h-[527px] overflow-y-scroll">
            <p className="mb-6 text-[#1B1B1B] text-[20px]">Contributors</p>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div className="w-[64px] h-[64px] rounded-full bg-[#CECDCC]"></div>
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Alex Radcliffe-Burnty
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Senoir Associate Officer
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div className="w-[64px] h-[64px] rounded-full bg-[#CECDCC]"></div>
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Alex Radcliffe-Burnty
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Senoir Associate Officer
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div className="w-[64px] h-[64px] rounded-full bg-[#CECDCC]"></div>
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Alex Radcliffe-Burnty
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Senoir Associate Officer
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div className="w-[64px] h-[64px] rounded-full bg-[#CECDCC]"></div>
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Alex Radcliffe-Burnty
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Senoir Associate Officer
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div className="w-[64px] h-[64px] rounded-full bg-[#CECDCC]"></div>
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Alex Radcliffe-Burnty
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Senoir Associate Officer
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div className="w-[64px] h-[64px] rounded-full bg-[#CECDCC]"></div>
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Alex Radcliffe-Burnty
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Senoir Associate Officer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[800px] px-6 lg:px-0 mt-[64px] lg:mt-0">
          <h2 className="text-center text-[24px] lg:text-[32px] font-bold mb-6">
            About The Journal
          </h2>
          <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col">
            <p className="mb-6">
              Our lecturer extraordinaire, Ms. Damilola Odekunle, is a
              trailblazing rockstar of academia, with revolutionary ideas that
              shake up the very foundations of traditional teaching methods. Her
              contagious enthusiasm and exceptional ability to engage students
              have made her a true legend among her peers.
            </p>
            <p className="mb-6">
              Ms. Odekunle holds a Ph.D. in Urban and Regional Planning from a
              renowned international university, where her groundbreaking
              research focused on innovative approaches to urban renewal and
              community-based development. During her graduate studies, she
              received several accolades for her exceptional academic
              performance and was recognized as a promising researcher in the
              field of urban planning.
            </p>
            <p className="mb-6">
              Despite her young age, Ms. Odekunle has already published numerous
              research papers in reputable international journals, contributing
              valuable insights to the field of urban and regional planning. Her
              work has received widespread recognition and has been presented at
              various prestigious conferences, earning her invitations to speak
              at global symposiums.
            </p>
            <p className="">
              In addition to her academic achievements, Ms. Odekunle is an
              advocate for gender equality and diversity in academia. She
              actively mentors and supports aspiring young female planners,
              encouraging them to pursue careers in the field and break barriers
              in traditionally male-dominated domains.
            </p>
          </div>
          <div className="h-[200px] lg:h-[400px] bg-[#CECDCC] my-[64px] lg:my-[80px]"></div>
          <div className="max-w-[228px] mx-auto lg:max-w-none flex items-center gap-3 lg:gap-6 flex-wrap mt-[80px] justify-center lg:justify-start">
            <div className="w-[60px] lg:w-[123px] h-[26px] lg:h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
              <p className="text-[#57A0A0] text-[12px] lg:text-[20px]">Tags</p>
            </div>
            <div className="w-[60px] lg:w-[123px] h-[26px] lg:h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
              <p className="text-[#57A0A0] text-[12px] lg:text-[20px]">Tags</p>
            </div>
            <div className="w-[60px] lg:w-[123px] h-[26px] lg:h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
              <p className="text-[#57A0A0] text-[12px] lg:text-[20px]">Tags</p>
            </div>
            <div className="w-[60px] lg:w-[123px] h-[26px] lg:h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
              <p className="text-[#57A0A0] text-[12px] lg:text-[20px]">Tags</p>
            </div>
            <div className="w-[60px] lg:w-[123px] h-[26px] lg:h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
              <p className="text-[#57A0A0] text-[12px] lg:text-[20px]">Tags</p>
            </div>
            <div className="w-[60px] lg:w-[123px] h-[26px] lg:h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
              <p className="text-[#57A0A0] text-[12px] lg:text-[20px]">Tags</p>
            </div>
            <div className="w-[60px] lg:w-[123px] h-[26px] lg:h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
              <p className="text-[#57A0A0] text-[12px] lg:text-[20px]">Tags</p>
            </div>
          </div>
        </section>
      </div>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default Journal;
