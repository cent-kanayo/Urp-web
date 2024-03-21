import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import P1 from '../../assets/mainDesktop/stadia.png';

import CluterCard from '../Resuables/CluterCard';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ResearchCluster = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[64px] lg:mb-[80px] research-bg px-[60px] lg:px-0">
        <div className="about-welcome flex-1 h-[64px] lg:h-[108px] px-[60px] lg:px-0">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            Research clusters
          </h1>
        </div>
      </section>

      <section className="mt-[64px] lg:mt-[80px] max-w-[1120px] mx-auto px-6 lg:px-0">
        <div className="flex flex-col md:flex-row flex-wrap gap-y-6 gap-x-[22px] lg:gap-x-6 mb-6">
          <div
            to="/projects/single-project"
            className="md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P1} alt="" className="w-full mb-4" />
            <div>
              <h2 className="text-[14px] lg:text-[24px] text-[#011717] font-medium mb-2">
                Spatial Data Infrastructure Cluster (SDI)
              </h2>

              <p className="text-[#ADABAB] text-[12px] lg:text-[16px] mb-2">
                The Spatial Data Infrastructure Cluster (SDI) is a vital
                research and innovation hub for the development, optimization,
                and utilization of Spatial Data Infrastructures, crucial for
                modern geospatial data management.
              </p>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px] mb-2">
                SDI, an interdisciplinary cluster combines professionals from
                geography, remote sensing, computer science, and urban planning
                to address spatial data challenges, aiming to create
                standardized data formats, interoperable technologies, and best
                practices.
              </p>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px] mb-2">
                Join the Spatial Data Infrastructure Cluster to explore
                geospatial data, driving advancements that impact our
                understanding of the world and shaping its future.
              </p>
              <div className="flex space-x-4 items-center mt-4">
                <p>For more information</p>
                <button className="px-6 py-2 bg-[#03312E] text-white  text-[14px] lg:text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear shadow-md">
                  Click here
                </button>
              </div>
            </div>
          </div>
          <div
            to="/projects/single-project-3"
            className="md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P1} alt="" className="w-full mb-4" />
            <div>
              <h2 className="text-[14px] lg:text-[24px] text-[#011717] font-medium mb-2">
                UNILAG-LISA{' '}
              </h2>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px] mb-2">
                UNILAG-LISA, a research cluster at the University of Lagos, is a
                dynamic community of scholars, researchers, and innovators
                dedicated to advancing knowledge in language, information, and
                systems analysis.
              </p>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px] mb-2">
                UNILAG-LISA is a cluster dedicated to tackling contemporary
                challenges in language processing, information retrieval, and
                systems analysis, integrating diverse expertise for practical
                applications.
              </p>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px] mb-2">
                As we navigate the ever-changing landscape of technology and
                communication, UNILAG-LISA stands out as a beacon of innovation,
                trying to make significant contributions to both academic
                scholarship and real-world solutions. Join us as we investigate
                the intersections of language, information, and systems analysis
                to design a future where understanding and technology converge.
              </p>
              <div className="flex space-x-4 items-center mt-4">
                <p>For more information</p>
                <button className="px-6 py-2 bg-[#03312E] text-white  text-[14px] lg:text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear shadow-md">
                  Click here
                </button>
              </div>
            </div>
          </div>
          <div
            to="/projects/single-project-2"
            className="md:max-w-[260px] lg:max-w-[548px]"
          >
            <img src={P1} alt="" className="w-full mb-4" />
            <div>
              <h2 className="text-[14px] lg:text-[24px] text-[#011717] font-medium mb-2">
                CENTRE FOR HOUSING AND SUSTAINABLE DEVELOPMENT{' '}
              </h2>
              <p className="text-[#ADABAB] text-[12px] lg:text-[16px] mb-2">
                UNILAG-LISA, a research cluster at the University of Lagos, is a
                dynamic community of scholars, researchers, and innovators
                dedicated to advancing knowledge in language, information, and
                systems analysis.
              </p>
              <div className="flex space-x-4 items-center mt-4">
                <p>For more information</p>
                <button className="px-6 py-2 bg-[#03312E] text-white  text-[14px] lg:text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear shadow-md">
                  Click here
                </button>
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
            Ready to make a difference? Explore sponsorships and volunteer
            opportunities to create a meaningful impact
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

export default ResearchCluster;
