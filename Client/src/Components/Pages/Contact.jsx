import { useEffect } from 'react';

import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import Comment from '../Resuables/Comment';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex lg:mb-[80px] contact-bg mb-[64px]">
        <div className="journal-welcome flex-1">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="max-w-[1112px] mx-auto mb-[64px] lg:mb-20 px-6 lg:px-0 text-[#1B1B1B]">
        <h2 className="text-center text-[24px] lg:text-[40px] font-[600] mb-6 lg:mb-10">
          Get in Touch with us
        </h2>
        <div className="leading-[150%] flex flex-col max-w-[800px] mx-auto">
          <p className="lg:mb-6 text-[12px] lg:text-[16px] text-center">
            Have questions, need assistance, or want to learn more about Urban
            and Regional planning? Reach out to us! Our team is here to help and
            eager to assist you on your academic journey. Fill out the form
            below, and we'll get back to you promptly.
          </p>
        </div>
      </section>
      <Comment />
      <section className="my-[64px] lg:my-[80px]">
        <div className="bg-[#303648] py-10 lg:py-20 lg:h-[346px] flex justify-center h-[252px]">
          <div className="text-center max-w-[546px] mx-auto px-[35px] lg:px-0">
            <h3 className="text-[#FDFFFD] font-bold text-[24px] lg:text-[40px]">
              Connect Now
            </h3>
            <p className="text-[12px] lg:text-[14px] text-[#FDFFFD] mb-10 lg:mb-[60px]">
              Don’t miss out on the opportunity to learn from the best! Immerse
              yourself in the world of physics with Dr. Odunayo!
            </p>
            <div className="flex gap-x-6 justify-center">
              <div className="bg-[#FDFFFD] rounded-[2px] px-4 lg:px-6 py-2 flex items-center gap-x-2">
                <span className="lg:hidden">
                  <MarkunreadOutlinedIcon
                    htmlColor="#1B1B1B"
                    fontSize="small"
                  />
                </span>
                <span className="hidden lg:block">
                  <MarkunreadOutlinedIcon htmlColor="#1B1B1B" />
                </span>
                <span className="text-[#1B1B1B] text-[12px] lg:text-[14px] hover:animate-pulse">
                  <a href="mailto:magunbiade@unilag.edu.ng">Send an E-mail</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
