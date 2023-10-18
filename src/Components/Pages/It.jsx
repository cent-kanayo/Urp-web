import { useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Exco4 from '../../assets/Excos/exco4.png';
import Exco5 from '../../assets/Excos/exco5.png';
import Exco6 from '../../assets/Excos/exco6.png';

import Excocard from '../Resuables/Excocard';
import Comment from '../../Components/Resuables/Comment';

const It = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex items-center mb-[80px] h-[600px] bg-[#02211F]">
        <div className="flex-1">
          <h1 className="text-[2.5rem] font-bold text-center text-white">
            IT Team
          </h1>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto">
        <h2 className="text-center text-[32px] font-[600] mb-6">
          Dedication Message
        </h2>
        <div className="text-[20px] leading-[150%] flex flex-col">
          <p className="mb-6">
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
        </div>
      </section>
      <section className="mt-[80px] max-w-[1119px] mx-auto flex flex-wrap gap-6">
        <Excocard name="Oreoluwa Jeffery" role="president" image={Exco4} />
        <Excocard name="Oreoluwa Jeffery" role="president" image={Exco5} />
        <Excocard name="Oreoluwa Jeffery" role="president" image={Exco5} />
        <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
        <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
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
      <Comment />
    </main>
  );
};

export default It;
