import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import GetHelp from '../Resuables/GetHelp';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import rsbg from '../../assets/mainDesktop/rsbg.png';
import BookCover from '../../assets/mainDesktop/bookCover.png';
import Pen from '../../assets/mainDesktop/pen.png';
import { useEffect } from 'react';

const PlannersPen = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="mb-[80px] h-[720px] bg-[#9D9E9D] py-[172px] flex items-end justify-start ">
        <div className="max-w-[1212px] mx-auto flex-1">
          <div className="flex flex-col text-white">
            <p className="text-[32px]">The</p>
            <h1 className="-mt-6 font-semibold text-[96px]">Planner’s Pen</h1>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px]">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[20px]">Cluster Name</h5>
          <div className="flex items-center gap-x-6">
            <p className="text-[14px]">1st July,2023</p>
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
        <div className="text-[20px] leading-[150%] flex flex-col">
          <p className="mb-20">
            Since its inception in April, 2020, the aim of The Planners’ Pen has
            been to demystify Urban Planning -making it relatable, exciting,
            interesting and innovative for Planning Students in Nigeria. In our
            last edition, we began a conscious effort to achieve this aim by
            focusing on one of the current trends in Urban planning –
            Sustainability.
          </p>
          <p className="mb-20">
            In this edition, we bring to your attention, Computed-Aided Design
            (CAD), a very vital tool in present day Urban Planning. We featured
            seasoned designers who will walk us through their journey to
            achieving expertise in popular CAD applications. Poems, spotlights
            and games are also featured in this edition. It is our desire, as
            always, that you enjoy reading and recommend the magazine your
            network. We are very grateful to all our contributors and the Lagos
            Urban Development Initiative (LUDI) for the continued support.
          </p>
          <p>Happy Reading!</p>
        </div>
      </section>
      <section className="mt-[80px] bg-white py-[80px]">
        <div className="flex justify-center items-center gap-6">
          <div className="max-w-[345px] h-[350px] pen-box">
            <div>
              <img src={Pen} alt="" />
            </div>
            <div className="px-3 pt-4">
              <div>
                <h2 className="text-[#1B1B1B] font-bold mb-2 text-[16px]">
                  Inclusivity
                </h2>
                <p className="text-[#ADABAB] text-[14px] mb-2">
                  Best way to sustainable planning
                </p>
                <div className="flex items-center space-x-2 mb-4 text-[10px] text-[#5B5756]">
                  <span>5 min Read</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-[#5B5756]"></span>
                  <span>1st Edition</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[#1B1B1B]">
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Careers in urban planning
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  diary of an urban planner
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  spotlight
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[345px] h-[350px] pen-box">
            <div>
              <img src={Pen} alt="" />
            </div>
            <div className="px-3 pt-4">
              <div>
                <h2 className="text-[#1B1B1B] font-bold mb-2 text-[16px]">
                  Inclusivity
                </h2>
                <p className="text-[#ADABAB] text-[14px] mb-2">
                  Best way to sustainable planning
                </p>
                <div className="flex items-center space-x-2 mb-4 text-[10px] text-[#5B5756]">
                  <span>5 min Read</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-[#5B5756]"></span>
                  <span>1st Edition</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[#1B1B1B]">
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Careers in urban planning
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  diary of an urban planner
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  spotlight
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[345px] h-[350px] pen-box">
            <div>
              <img src={Pen} alt="" />
            </div>
            <div className="px-3 pt-4">
              <div>
                <h2 className="text-[#1B1B1B] font-bold mb-2 text-[16px]">
                  Inclusivity
                </h2>
                <p className="text-[#ADABAB] text-[14px] mb-2">
                  Best way to sustainable planning
                </p>
                <div className="flex items-center space-x-2 mb-4 text-[10px] text-[#5B5756]">
                  <span>5 min Read</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-[#5B5756]"></span>
                  <span>1st Edition</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[#1B1B1B]">
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Careers in urban planning
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  diary of an urban planner
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  spotlight
                </p>
              </div>
            </div>
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

export default PlannersPen;
