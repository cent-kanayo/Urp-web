import { useEffect } from 'react';

import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';

import Contact from '../Resuables/Contact';

import GetHelp from '../Resuables/GetHelp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import rsbg from '../../assets/mainDesktop/rsbg.png';
import BookCover from '../../assets/mainDesktop/bookCover.png';

import Nwa from '../../assets/lecturers/Lfarin.png';
import RQ from '../../assets/quoteR.png';
import LQ from '../../assets/quoteL.png';

import Bike from '../../assets/bike.png';
import Activity from '../../assets/activity.png';
import OpenB from '../../assets/book-opened.png';

const StudentSpotlight = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="h-[600px] flex flex-col lg:flex-row mb-[80px]">
        <div className="flex-1">
          <img
            src={Nwa}
            alt="Our HOD"
            className="h-[320px] lg:h-[600px] w-[100%] object-cover"
          />
        </div>
        <div className="flex-1 bg-[#2C410A] h-[232px] lg:h-auto flex justify-center items-center px-[27px] lg:px-0 py-[17px] lg:py-0">
          <div className="lg:w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" className="w-[29px] lg:w-auto" />
            </div>
            <p className="text-white text-[12px] lg:text-[20px] leading-[150%] my-[20px] lg:my-[59px]">
              The problem is constantly evolving, with adversaries adapting to
              whatever defense researchers might develop to keep carrying out
              their malicious activities. You can never say that your job is
              done.
            </p>
            <div className="flex justify-end">
              <img src={RQ} alt="" className="w-[29px] lg:w-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px] px-6 lg:px-0">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[14px] lg:text-[20px]">
            Crest Bankole-Radcliffe
          </h5>
          <div className="flex items-center gap-x-2 lg:gap-x-6">
            <p className="text-[12px] lg:text-[14px]">1st July,2023</p>
            <CreateNewFolderOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div className="flex justify-center gap-x-6 lg:px-0">
          <span>
            <FacebookIcon htmlColor="#090302" fontSize="medium" />
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/muyiwa-a-52a67734/"
              target="_blank"
              aria-label="Link to LinkedIn"
            >
              <LinkedInIcon
                fontSize="medium"
                className="text-[#090302] hover:text-[#192C69]"
              />
            </a>
          </span>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-center text-[24px] lg:text-[40px] font-bold text-[#011717] mb-6">
          Student Of the Month
        </h3>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col gap-6 px-6 lg:px-0">
          <p>
            Our lecturer extraordinaire, Ms. Damilola Odekunle, is a
            trailblazing rockstar of academia, with revolutionary ideas that
            shake up the very foundations of traditional teaching methods. Her
            contagious enthusiasm and exceptional ability to engage students
            have made her a true legend among her peers.
          </p>
          <p>
            Ms. Odekunle holds a Ph.D. in Urban and Regional Planning from a
            renowned international university, where her groundbreaking research
            focused on innovative approaches to urban renewal and
            community-based development. During her graduate studies, she
            received several accolades for her exceptional academic performance
            and was recognized as a promising researcher in the field of urban
            planning.
          </p>
          <p>
            Despite her young age, Ms. Odekunle has already published numerous
            research papers in reputable international journals, contributing
            valuable insights to the field of urban and regional planning. Her
            work has received widespread recognition and has been presented at
            various prestigious conferences, earning her invitations to speak at
            global symposiums.
          </p>
          <p>
            In addition to her academic achievements, Ms. Odekunle is an
            advocate for gender equality and diversity in academia. She actively
            mentors and supports aspiring young female planners, encouraging
            them to pursue careers in the field and break barriers in
            traditionally male-dominated domains.
          </p>
        </div>
        <div className="mt-[64px] lg:mt-[80px] px-[35px] lg:px-0">
          <div className="bg-[#CECDCC] px-10 py-4 flex items-center space-x-2 lg:space-x-4 mb-6">
            <div>
              <img src={OpenB} alt="" />
            </div>
            <div>
              <h4 className="mb-2 text-[#1B1B1B] text-[14px] lg:text-[16px]">
                Author Extraordinaire
              </h4>
              <p className="max-w-[355px] text-[#5B5756] text-[12px]">
                Multiple publications in renowned international journals with
                groundbreaking research
              </p>
            </div>
          </div>
          <div className="bg-[#CECDCC] px-10 py-4 flex items-center space-x-2 lg:space-x-4 mb-6">
            <div>
              <img src={Activity} alt="" />
            </div>
            <div>
              <h4 className="mb-2 text-[#1B1B1B] text-[14px] lg:text-[16px]">
                Author Extraordinaire
              </h4>
              <p className="max-w-[355px] text-[#5B5756] text-[12px]">
                Multiple publications in renowned international journals with
                groundbreaking research
              </p>
            </div>
          </div>
          <div className="bg-[#CECDCC] px-10 py-4 flex items-center space-x-2 lg:space-x-4">
            <div>
              <img src={Bike} alt="" />
            </div>
            <div>
              <h4 className="mb-2 text-[#1B1B1B] text-[14px] lg:text-[16px]">
                Author Extraordinaire
              </h4>
              <p className="max-w-[355px] text-[#5B5756] text-[12px]">
                Multiple publications in renowned international journals with
                groundbreaking research
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:h-[680px] bg-[#010A09] py-6 lg:py-[52px] my-[80px] px-6 lg:px-0">
        <div>
          <h3 className="text-center text-[#FDFFFD] text-[24px] lg:text-[2.5rem] font-[600] capitalize mb-[40px]">
            Previous Urp Heroes
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex lg:justify-center justify-between items-center gap-x-[24px]">
              <div className="hidden relative w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] lg:flex justify-center items-end">
                <div className="w-full h-[72px] bg-white py-[18px] px-[54px] z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2">
                    <p className="flex justify-center items-center space-x-2 lg:space-x-2">
                      <a
                        href="https://doi.org/10.1016/j.compenvurbsys.2018.06.009"
                        target="_blank"
                      >
                        View Profile
                      </a>
                      <EastOutlinedIcon />
                    </p>
                  </article>
                </div>
              </div>
              <div className="hidden relative w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] lg:flex justify-center items-end">
                <div className="w-full h-[72px] bg-white py-[18px] px-[54px]  z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2">
                    <p className="flex justify-center items-center space-x-2 lg:space-x-2">
                      <a
                        href="https://doi.org/10.1016/j.jum.2018.03.001"
                        target="_blank"
                      >
                        View Profile
                      </a>
                      <EastOutlinedIcon />
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <div className="w-full lg:h-[72px] bg-white py-2 lg:py-[18px] px-4 lg:px-[54px]   z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2">
                    <p className="flex justify-center items-center space-x-2 lg:space-x-2 text-[12px]">
                      <a
                        href="https://doi.org/10.1080/23792949.2017.1399804"
                        target="_blank"
                      >
                        View Profile
                      </a>
                      <EastOutlinedIcon />
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <div className="w-full lg:h-[72px] bg-white py-2 lg:py-[18px] px-4 lg:px-[54px]  z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2">
                    <p className="flex justify-center items-center space-x-2 lg:space-x-2 text-[12px]">
                      <a
                        href="https://doi.org/10.1080/23792949.2017.1399804"
                        target="_blank"
                      >
                        View Profile
                      </a>
                      <EastOutlinedIcon />
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 lg:mt-[40px]">
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

export default StudentSpotlight;
