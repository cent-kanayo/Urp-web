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

import P1 from '../../assets/mainDesktop/p1.png';
import P2 from '../../assets/mainDesktop/p2.png';
import P3 from '../../assets/mainDesktop/p3.png';
import Contact from '../Resuables/Contact';
import { Link } from 'react-router-dom';

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-10 lg:mb-[80px] projects-bg">
        <div className="flex-1">
          <h1 className="text-[2.5rem] font-bold text-center text-white">
            Projects
          </h1>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto px-[35px] lg:px-0">
        <h2 className="text-center text-[14px] lg:text-[32px] font-[600] mb-6">
          Urban Planning Showcase
        </h2>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col">
          <p className="mb-6 text-center lg:text-left">
            Witness the groundbreaking research projects that are shaping the
            world of urban and regional planning. Our passionate team is pushing
            the boundaries of innovation, creating cutting-edge solutions for
            modern cities!
          </p>
        </div>
      </section>
      <section className="mt-[64px] lg:mt-[80px]">
        <div className="flex justify-center gap-y-6 gap-x-[22px] lg:gap-x-6 mb-6">
          <Link
            to="/projects/single-project"
            className="max-w-[160px] md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P1} alt="" className="w-full" />
            <div>
              <h2 className="text-[14px] lg:text-[24px] text-[#011717] font-medium mb-2">
                Urban Renewal Project of Abule Oja/ Development of University
                Land
              </h2>
              <p className="text-[#1B1B1B] text-[12px] lg:text-[16px]">
                By Year 3 - Group 1 (2023)
              </p>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px]">
                29-09-2023
              </p>
            </div>
          </Link>
          <Link
            to="/projects/single-project"
            className="max-w-[160px] md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P2} alt="" className="w-full" />
            <div>
              <h2 className="text-[14px] lg:text-[24px] text-[#011717] font-medium mb-2">
                Urban Renewal Project of Bariga
              </h2>
              <p className="text-[#1B1B1B] text-[12px] lg:text-[16px]">
                By Year 3 - Group 1 (2023)
              </p>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px]">
                29-09-2023
              </p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center gap-6">
          <Link
            to="/projects/single-project"
            className="max-w-[160px] md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P3} alt="" className="w-full" />
            <div>
              <h2 className="text-[14px] lg:text-[24px] text-[#011717] font-medium mb-2">
                Streetscpaing of Shipeolu Street, Onipanu
              </h2>
              <p className="text-[#1B1B1B] text-[12px] lg:text-[16px]">
                By Akinseye Ayomide
              </p>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px]">
                29-09-2023
              </p>
            </div>
          </Link>
          <Link
            to="/projects/single-project"
            className="max-w-[160px] md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P1} alt="" className="w-full" />
            <div>
              <h2 className="text-[14px] lg:text-[24px] text-[#011717] font-medium mb-2">
                Revolutionary Transport Infrastructure
              </h2>
              <p className="text-[#1B1B1B] text-[12px] lg:text-[16px]">
                By Muyiwa Ibrahim
              </p>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px]">
                29-09-2023
              </p>
            </div>
          </Link>
        </div>
      </section>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default Projects;
