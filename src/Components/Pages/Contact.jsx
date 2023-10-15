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
import Comment from '../Resuables/Comment';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[80px] contact-bg">
        <div className="journal-welcome flex-1">
          <h1 className="text-[2.5rem] font-bold text-center text-white">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="max-w-[1112px] mx-auto">
        <h2 className="text-center text-[40px] font-[600] mb-10">
          Random Acquire to Maguire
        </h2>
        <div className="leading-[150%] flex flex-col max-w-[800px] mx-auto">
          <p className="mb-6 text-[16px] text-center">
            If you’re an adventurer who loves being out in nature, a hiking and
            trekking tour should be next on your <br /> list. You can expect
            great wildlife photography opportunities and the chance to travel
            with a group of like-minded individuals who love the great outdoors.
          </p>
        </div>
      </section>
      <section className="my-[80px]">
        <div className="bg-[#5B5756] py-20 h-[346px] flex justify-center">
          <div className="text-center">
            <h3 className="text-[#FDFFFD] font-bold text-[40px]">
              Connect Now
            </h3>
            <p className="text-[14px] text-[#FDFFFD] mb-[60px]">
              Have questions or need assistance? Reach out to our lecturer below
            </p>
            <div className="flex gap-x-6 justify-center">
              <div className="border-[#FDFFFD] border-[1px] rounded-[2px] px-6 py-2 flex items-center gap-x-2">
                <span>
                  <PhoneOutlinedIcon htmlColor="#FDFFFD" />
                </span>
                <span className="text-[14px] text-[#FDFFFD]">
                  Call Professor Nwokoro
                </span>
              </div>
              <div className="bg-[#FDFFFD] rounded-[2px] px-6 py-2 flex items-center gap-x-2">
                <span>
                  <MarkunreadOutlinedIcon htmlColor="#1B1B1B" />
                </span>
                <span className="text-[#1B1B1B] text-[14px] underline hover:animate-pulse">
                  <a href="mailto:aoduwaye@unilag.edu.ng">Send an E-mail</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Comment />
    </main>
  );
};

export default Contact;
