import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Journal from '../../assets/journals.png';

import Fj from '../../assets/Excos/fjs.webp';
import John from '../../assets/Excos/john.webp';
import Sonia from '../../assets/Excos/sonia.webp';
import Pamela from '../../assets/Excos/araf.webp';
import Timi from '../../assets/Excos/timi.webp';
import Korede from '../../assets/Excos/korede.webp';
import Folake from '../../assets/Excos/folake.webp';
import Fred from '../../assets/Excos/fred.webp';
import Jon from '../../assets/Excos/Eins.webp';
import Mo from '../../assets/Excos/mo.webp';

import P1 from '../../assets/Students/p1.png';
import P2 from '../../assets/Students/p2.png';
import P3 from '../../assets/Students/p3.png';
import P4 from '../../assets/Students/p4.png';
import P5 from '../../assets/Students/p5.png';
import P6 from '../../assets/Students/p6.png';
import P7 from '../../assets/Students/p7.png';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Excocard from '../Resuables/Excocard';
import GetHelp from '../Resuables/GetHelp';

import Book from '../../assets/mainMobile/bookbg.png';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const StudentPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-10 lg:mb-[80px] student-bg"></section>

      <section className="mt-[40px] lg:mt-[80px] px-4 lg:px-0">
        <div className="flex justify-center mb-6 lg:mb-[60px] items-center relative">
          <section className="max-w-[800px] mx-auto px-6 lg:px-0">
            <h2 className="text-center text-[24px] lg:text-[2.5rem] text-black font-bold mb-6">
              The Students’ association 2023/2024
            </h2>
            <div className="text-[12px] lg:text-[18px] leading-[150%] flex flex-col gap-6">
              <p>
                The Urban and Regional Planning Students' Association of Nigeria
                (URPSAN), University of Lagos Chapter is at the heart of student
                engagement at the department. As a dynamic  and student-driven
                association, URPSAN UNILAG is more than a society; we are a
                community of aspiring planners dedicated to shaping the future
                of our cities and regions. Our mission is to create a platform
                where ideas flourish, connections thrive, and each member is
                empowered to  contribute meaningfully to the discipline.
              </p>
              <p>
                From community outreach projects to interactive panel
                discussions with industry experts, URPSAN UNILAG presents a
                holistic experience for planning students that goes beyond the
                classroom, enriching the student journey and preparing members
                for the dynamic landscape of urban planning. Through a myriad of
                events, workshops, seminars, conferences, and events, we aim to
                bridge the gap between theory and practice, preparing our
                members for the challenges and opportunities that lie ahead in
                the world of urban planning.
              </p>
              <p>
                Whether you're a seasoned planner or a fresh enthusiast, URPSAN,
                University of  Lagos Chapter, welcomes you to join us on a
                transformative journey where ideas turn  into action, and the
                future of urban planning is shaped by the leaders of tomorrow. 
                Together, let's build the cities we envision, one innovative
                idea at a time.
              </p>
            </div>
          </section>
        </div>
        <div className="flex justify-center flex-wrap gap-[22px] lg:gap-6 max-w-[1249px] mx-auto">
          <Excocard
            name="John Favour"
            role="president"
            image={Fj}
            phone="07017255923"
            email="johnolusola36@gmail.com"
          />
          <Excocard
            name="Aminu Gbenga"
            role="Vice President"
            image={Jon}
            phone="+2349082566084"
            email="aminugbengaloaded@gmail.com"
          />
          <Excocard
            name="Sonia Ugwunna"
            role="General Secretary"
            image={Sonia}
            phone="08108489408"
            email="soniaryde2000@gmail.com"
          />
          <Excocard
            name="Elemide Oluwatimilehin"
            role="Sport Secretary"
            image={Timi}
            phone="09080843511"
            email="kingelemide@gmail.com "
          />
          <Excocard
            name="Elerewe Olukorede S."
            role="Social Secretary"
            image={Korede}
            phone="09040101459"
            email="koredeelerewe@gmail.com"
          />
          <Excocard
            name="Sorunke Arafat"
            role="P.R.O"
            image={Pamela}
            email="sorunkearafat@gmail.com"
            phone="+234 708 946 4585"
          />
          <Excocard
            name="Akinleye John"
            role="Welfare Secretary"
            image={John}
            phone="+234 906 040 2824"
            email="akinleyejohn99@gmail.com"
          />
          <Excocard
            name="Muibi Muhammed"
            role="Asst. General Secretary"
            image={Mo}
            phone="+234 816 570 8058"
            email="muibimuhammed02@gmail.com"
          />
          <Excocard
            name="Folayan Folake"
            role="Financial Secretary"
            image={Folake}
          />
          <Excocard
            name="Laikpo Fredrick"
            role="Treasurer"
            image={Fred}
            email="fredricklaikpo98@gmail.com"
            phone="08129632737"
          />
        </div>
        {/* <div className="flex items-center justify-center mt-10 lg:hidden">
          <span className="text-[1rem]text-[#010A09] font-medium capitalize ">
            see all
          </span>
          <span>
            <ArrowForwardIosOutlinedIcon htmlColor="#934B00" fontSize="small" />
          </span>
        </div> */}
      </section>
      <section className="px-6 lg:px-0">
        <div className="max-w-[1122px] mx-auto mt-[64px] lg:mt-[160px] py-6 lg:py-0">
          <h3 className="text-center lg:text-left text-[32px] font-[600] capitalize mb-6">
            popular shots
          </h3>
          <div>
            <article className="flex flex-col md:flex-row md:justify-center mb-[24px] gap-[22px]">
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[739px]">
                <img
                  src={P6}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px]">
                <img
                  src={P5}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
            </article>
            <article className="flex flex-col md:flex-row md:justify-center mb-[24px] gap-[22px]">
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px] hidden lg:block">
                <img
                  src={P1}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px]">
                <img
                  src={P2}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px]">
                <img
                  src={P3}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
            </article>
            <article className="flex flex-col md:flex-row md:justify-center mb-[24px] gap-[22px]">
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[358px]">
                <img
                  src={P4}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
              <span className="bg-[#D9D9D9] h-[170px] lg:h-[200px] lg:w-[739px]">
                <img
                  src={P7}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </span>
            </article>
          </div>
        </div>
      </section>
      <section className="mt-[64px] lg:mt-[80px] h-[404px] lg:bg-[#5B5756] flex items-end lg:items-center relative">
        <div className="absolute w-full -z-10 lg:static lg:z-10 flex-1 h-[100%]">
          <img src={Journal} alt="" className="hidden lg:block h-[100%]" />
          <img src={Book} alt="" className="lg:hidden h-[100%] w-full" />
        </div>
        <div className="lg:flex-1 flex flex-col bg-[#5B5756] mx-4  md:mx-auto md:w-[564px] py-6 lg:py-0 px-4 lg:px-0 mb-[25px] lg:mb-0">
          <div className="lg:w-[564px] flex flex-col gap-6">
            <h2 className="text-[#F5FFF6] text-[24px] lg:text-[40px] font-bold">
              Access previous projects
            </h2>
            <p className="text-[#FDFFFD] text-[14px] leading-[150%] hidden lg:block">
              Delve into this repository, where a wealth of projects awaits
              exploration, each serving as a testament to the intellectual
              vibrancy, boundless creativity, and unwavering dedication that
              define our community. The diverse spectrum of projects within
              reflects the multifaceted nature of our pursuits, ranging from
              groundbreaking.....
            </p>
            <p className="text-[#FDFFFD] text-[12px] leading-[150%] lg:hidden">
              Delve into this repository, where a wealth of projects awaits
              exploration, each serving as a testament to the intellectual
              vibrancy, boundless creativity, and unwavering dedication that
              define our community. The diverse spectrum of projects within
              reflects the multifaceted nature of our pursuits, ranging from
              groundbreaking.....
            </p>
            <div>
              <Link
                to="/projects"
                className="capitalize bg-[#F5FFF6] text-[#010A09] rounded-[2px] px-8 py-2 text-[14px] hover:animate-pulse"
              >
                Get Access
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="mt-[64px] lg:mt-[180px] mb-[64px] lg:mb-[80px] px-4 lg:px-0">
        <GetHelp
          h2="Get help, reach out to us and contribute to our growth"
          p="Experience seamless interaction wpresident effortlessly through quick links. With just a tap of a button, accessing everything has never been easier."
          text1="share your story"
          text2="student Hub"
          text3="requests"
          text4="make a donation"
          text5="Suggestions"
        />
      </section> */}
      <section className="grid place-items-center px-2 lg:px-0 my-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[529px] mx-auto mb-4">
            Ready to make a difference? Explore sponsorships and volunteer
            opportunities to create a meaningful impact
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

export default StudentPage;
