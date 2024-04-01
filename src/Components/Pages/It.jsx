import { useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Pamela from '../../assets/honours/pamela.webp';
import Ay from '../../assets/honours/Ay.webp';
import Cent from '../../assets/honours/cent.webp';

import Excocard from '../Resuables/Excocard';
import Comment from '../../Components/Resuables/Comment';
import { Link } from 'react-router-dom';

const It = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[64px] lg:mb-[80px] it-bg px-[60px] lg:px-0">
        <div className="about-welcome flex-1 h-[64px] lg:h-[108px] px-[60px] lg:px-0">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            IT Team
          </h1>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto px-6 lg:px-0">
        <h2 className="text-center text-[32px] lg:text-[40px] font-[600] mb-6">
          The ‘A’ Team
        </h2>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col">
          <p className="mb-6">
            Meet our IT team, a trio of committed experts united by a common
            vision of academic achievement effortlessly fused with the latest
            technology.
          </p>
          <p className="mb-6">
            We are driven to be at the forefront of technology, and as such, we
            want to improve learning environments and research capacities by
            smoothly integrating cutting-edge tools and platforms into the
            academic scene.
          </p>
          <p>
            We are open to collaboration and believe that combining our skills
            with those of others will result in innovative ideas that redefine
            the intersection of academics and technology. Join us in shaping the
            future of academic excellence through the fusion of knowledge and
            innovative IT solutions.
          </p>
        </div>
      </section>
      <section className="mt-[80px] max-w-[1119px] mx-auto flex flex-wrap justify-center gap-6">
        <Excocard
          name="Ayomide Akinseye"
          role="Team Lead/ Designer"
          image={Ay}
          link={'/it-department/#'}
        />
        <Excocard
          name="Okpini Pamela"
          role="UI Designer"
          image={Pamela}
          link={'/it-department/#'}
        />
        <Excocard
          name="Chukwu Innocent"
          role="Software Engineer"
          image={Cent}
          link={'/it-department/#'}
        />
      </section>
      <section className="grid place-items-center px-2 lg:px-0 my-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[529px] mx-auto mb-4">
            Send us a mail filler text is a great way to show the size you want
            to have
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-2 bg-[#03312E] text-white text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md"
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

export default It;
