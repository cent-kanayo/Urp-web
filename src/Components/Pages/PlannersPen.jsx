import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Pen from '../../assets/mainDesktop/pen.png';
import { useEffect } from 'react';

const PlannersPen = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main className="overflow-x-hidden">
      <section className="mb-[64px] lg:mb-[72px] h-[505px] lg:h-[720px] bg-[#9D9E9D] py-[106px] lg:py-[172px] flex items-end justify-start ">
        <div className="max-w-[1212px] mx-auto flex-1 px-[52px] lg:px-0">
          <div className="flex flex-col text-white">
            <p className="text-[24px] lg:text-[32px]">The</p>
            <h1 className="-mt-4 lg:-mt-6 font-semibold text-[48px] lg:text-[96px] whitespace-nowrap">
              Planner’s Pen
            </h1>
          </div>
        </div>
      </section>
      <section className="w-[279px] lg:w-auto mx-auto">
        <h2 className="text-center text-[32px] lg:text-[40px] font-bold mb-4 lg:mb-[36px]">
          The Planner’s Pen
        </h2>
        <section className="max-w-[1117px] mx-auto flex flex-col gap-4 lg:gap-0 md:flex-row justify-between lg:items-center mb-[40px]">
          <div className="text-[#5B5756] text-[14px] flex items-center space-x-2">
            <p className="text-[20px]">5 min Read</p>
            <span className="w-[4px] h-[4px] rounded-full block bg-[#CECDCC]"></span>
            <p className="text-[20px]">1st Edition</p>
          </div>
          <div className="flex lg:justify-center gap-x-6 lg:px-0">
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
      </section>
      <section className="max-w-[800px] mx-auto">
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col px-[35px] lg:px-0">
          <p className="mb-10 lg:mb-20">
            Since its inception in April, 2020, the aim of The Planners’ Pen has
            been to demystify Urban Planning -making it relatable, exciting,
            interesting and innovative for Planning Students in Nigeria. In our
            last edition, we began a conscious effort to achieve this aim by
            focusing on one of the current trends in Urban planning –
            Sustainability.
          </p>
          <p className="mb-10 lg:mb-20">
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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4 lg:px-0">
          <div className="lg:max-w-[345px] w-full lg:h-[350px] pen-box pb-2 lg:pb-0">
            <div>
              <img src={Pen} alt="" className="w-full" />
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
          <div className="lg:max-w-[345px] w-full lg:h-[350px] pen-box pb-2 lg:pb-0">
            <div>
              <img src={Pen} alt="" className="w-full" />
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
          <div className="lg:max-w-[345px] w-full lg:h-[350px] pen-box pb-2 lg:pb-0">
            <div>
              <img src={Pen} alt="" className="w-full" />
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

export default PlannersPen;
