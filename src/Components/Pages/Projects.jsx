import P1 from '../../assets/mainDesktop/p1.png';
import P2 from '../../assets/mainDesktop/p2.png';
import P3 from '../../assets/mainDesktop/p3.png';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Projects = () => {
  return (
    <main>
      <section className="flex mb-10 lg:mb-[80px] projects-bg">
        <div className="flex-1">
          <h1 className="text-[2.5rem] font-bold text-center text-white">
          Student Projects
          </h1>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto px-[35px] lg:px-0">
        <h2 className="text-center text-[14px] lg:text-[32px] font-[600] mb-6">
          Urban Planning Showcase
        </h2>
        <div className="text-[12px] lg:text-[16px] leading-[150%] flex flex-col">
          <p className="mb-6 text-center lg:text-left">
          Demonstrating our commitment to experiential learning and practice, our academic programs challenge students to develop groundbreaking and cutting-edge solutions to specific urban challenges in our local context. Using real-life locations as study areas and drawing from global examples, our urban design solutions cut across the areas of physical planning, urban renewal, transportation planning, industrial planning, master planning. 
          </p>
        </div>
      </section>
      <section className="mt-[64px] lg:mt-[80px] max-w-[1120px] mx-auto px-6 lg:px-0">
        <div className="flex flex-col md:flex-row flex-wrap gap-y-6 gap-x-[22px] lg:gap-x-6 mb-6">
          <Link
            to="/projects/single-project"
            className="md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P1} alt="" className="w-full mb-4" />
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
            to="/projects/single-project-3"
            className="md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P2} alt="" className="w-full mb-4" />
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
          <Link
            to="/projects/single-project-2"
            className="md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P3} alt="" className="w-full mb-4" />
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
        </div>
      </section>
      <section className="grid place-items-center px-2 lg:px-0 my-[64px] lg:my-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
          for more enquiries
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

export default Projects;
