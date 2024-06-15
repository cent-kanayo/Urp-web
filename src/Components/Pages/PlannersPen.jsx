import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Pen1 from '../../assets/mainDesktop/pen1.png';
import Pen2 from '../../assets/mainDesktop/pen2.png';
import Pen3 from '../../assets/mainDesktop/pen3.png';

const PlannersPen = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="mb-[64px] lg:mb-[72px] h-[505px] lg:h-[720px] bg-[#9D9E9D] py-[106px] lg:py-[172px] flex items-end justify-start planners-bg">
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
      </section>
      <section className="max-w-[800px] mx-auto">
        <div className="text-[12px] lg:text-[16px] leading-[150%] flex flex-col px-[35px] lg:px-0">
          <p className="mb-10">
          The Planner’s Pen was a student run magazine which commenced publication in April, 2020. The aim of The Planners’ Pen was to demystify Urban Planning - making it relatable, exciting, interesting and innovative for Planning Students in Nigeria. Each edition featured submissions by students who initiated discussions, fostered knowledge sharing and created a space for improving the perception of the course.
          </p>
          <p className="mb-10 lg:mb-20">
          The project was also supported by the Lagos Urban Development Initiative (LUDI). Happy Reading!
          </p>
        </div>
      </section>
      <section className="mt-[80px] bg-white py-[80px]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4 lg:px-0">
          <Link
            to="https://res.cloudinary.com/dnewvftac/image/upload/v1715243460/urp-website-files/skmul7tcwf2qpff1xp6l.pdf"
            target="_blank"
            className="lg:max-w-[345px] w-full pen-box pb-2"
          >
            <div>
              <img
                src={Pen3}
                alt=""
                className="w-full h-[236px] object-cover"
              />
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
                  <span>3rd Edition</span>
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
          </Link>
          <Link
            to="https://res.cloudinary.com/dnewvftac/image/upload/v1715243450/urp-website-files/wumxbb73f3ako7pjibuq.pdf"
            target="_blank"
            className="lg:max-w-[345px] w-full pen-box pb-2"
          >
            <div>
              <img
                src={Pen2}
                alt=""
                className="w-full h-[236px] object-cover"
              />
            </div>
            <div className="px-3 pt-4">
              <div>
                <h2 className="text-[#1B1B1B] font-bold mb-2 text-[16px]">
                  Sustainable cities
                </h2>
                <p className="text-[#ADABAB] text-[14px] mb-2">
                  COVID-19 AND CITIES
                </p>
                <div className="flex items-center space-x-2 mb-4 text-[10px] text-[#5B5756]">
                  <span>2nd Edition</span>
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
          </Link>
          <Link
            to="https://res.cloudinary.com/dnewvftac/image/upload/v1715243440/urp-website-files/nvv5xsjeyp5ckth2pykl.pdf"
            target="_blank"
            className="lg:max-w-[345px] w-full pen-box pb-4 lg:pb-0"
          >
            <div>
              <img
                src={Pen1}
                alt=""
                className="w-full h-[236px] object-cover"
              />
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
                  <span>1st Edition</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[#1B1B1B] pb-2">
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
          </Link>
        </div>
      </section>
      <section className="grid place-items-center px-2 lg:px-0 my-[64px] lg:my-[80px] bg-[#CDE3E3]">
        <div className="text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
          For more enquiries
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[342px] lg:max-w-[529px] mx-auto mb-4">
          Ready to make a difference and make a meaningful impact?
          </p>
          <Link
            to="/contact  "
            className="inline-block px-6 py-2 bg-[#03312E] text-white text-[14px] lg:text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md"
          >
            contact us
          </Link>
          {/* <div className="flex justify-center gap-x-5 lg:gap-x-10 lg:px-0">
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
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default PlannersPen;
