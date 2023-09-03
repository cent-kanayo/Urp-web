import { useEffect } from 'react';
import HODLight from '../../assets/Fram.png';
import RQ from '../../assets/quoteR.png';
import LQ from '../../assets/quoteL.png';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';
const HodWelcome = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="h-[600px] flex mb-[80px]">
        <div className="flex-1">
          <img src={HODLight} alt="Our HOD" className="h-[600px] w-[100%]" />
        </div>
        <div className="flex-1 bg-[#9D8F71] flex justify-center items-center">
          <div className="w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" />
            </div>
            <p className="text-white text-[20px] leading-[150%] my-[59px]">
              The problem is constantly evolving, with adversaries adapting to
              whatever defense researchers might develop to keep carrying out
              their malicious activities. You can never say that your job is
              done.
            </p>
            <div className="flex justify-end">
              <img src={RQ} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px]">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[20px]">Dr. Anthony Odunayo (HOD)</h5>
          <div className="flex items-center gap-x-6">
            <p className="text-[14px]">1st July,2023</p>
            <CreateNewFolderOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div className="flex justify-center gap-x-6 lg:px-0">
          <span>
            <InstagramIcon htmlColor="#090302" fontSize="medium" />
          </span>
          <span>
            <EmailIcon htmlColor="#090302" fontSize="medium" />
          </span>
          <span>
            <FacebookIcon htmlColor="#090302" fontSize="medium" />
          </span>
          <span>
            <LinkedInIcon htmlColor="#090302" fontSize="medium" />
          </span>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-center text-[32px] font-[600] mb-6">
          Meet the Marvelous Mind
        </h3>
        <div className="text-[20px] leading-[150%] flex flex-col gap-6">
          <p>
            I would like to express my pride of belonging to the Department of
            Urban and Regional Planning, Faculty of Environmental Science,
            University of Lagos. It is taught in a few and highly elitist
            universities in Nigeria, hence the need to meet universal standards
            to master the requisite skills of architectural design.
          </p>
          <p>
            Since its foundation a trailblazing rockstar of academia, with
            revolutionary ideas that shake up the very foundations of
            traditional teaching methods. Her contagious enthusiasm and
            exceptional ability to engage students have made her a true legend
            among her peers.
          </p>
          <p>
            Dr. Anthony Odunayo holds a Ph.D. in Urban and Regional Planning
            from a renowned international university, where her groundbreaking
            research focused on innovative approaches to urban renewal and
            community-based development. During her graduate studies, she
            received several accolades for her exceptional academic performance
            and was recognized as a promising researcher in the field of urban
            planning.
          </p>
          <p>
            Despite her young age, Dr. Odunayo has already published numerous
            research papers in reputable international journals, contributing
            valuable insights to the field of urban and regional planning. Her
            work has received widespread recognition and has been presented at
            various prestigious conferences, earning her invitations to speak at
            global symposiums.
          </p>
          <p>
            In addition to her academic achievements, Dr. Odunayo is an advocate
            for gender equality and diversity in academia. She actively mentors
            and supports aspiring young female planners, encouraging them to
            pursue careers in the field and break barriers in traditionally
            male-dominated domains.
          </p>
        </div>
      </section>
      <section className="h-[680px] bg-[#010A09] py-[68px] my-[80px]">
        <div>
          <h3 className="text-center text-[#FDFFFD] text-[32px] font-[600] capitalize mb-[40px]">
            Articles and Research hubs
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex justify-center items-center gap-x-[24px]">
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
            </div>
            <div className="flex justify-between items-center mt-[40px]">
              <span>
                <img src={LeftIcon} alt="left toggle button" />
              </span>
              <span>
                <img src={RightIcon} alt="right toggle button" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-center text-[32px] font-[600] mb-6">
          Dr. Odunayo’s Interests
        </h3>
        <div className="text-[20px] leading-[150%] flex flex-col gap-8">
          <p>
            As a lecturer, Dr. Odunayo excels in imparting knowledge with
            enthusiasm and dedication. She employs a student-centered approach,
            engaging her students in practical exercises and real-world case
            studies, allowing them to gain a deeper understanding of the complex
            challenges faced by urban environments.
          </p>
          <p>
            Her research interests span a wide range of topics, including
            sustainable urbanization, smart city initiatives, participatory
            planning, and resilient urban design. Driven by a desire to bridge
            the gap between academia and practice, she actively collaborates
            with local authorities, NGOs, and industry professionals to
            implement innovative solutions to urban issues.
          </p>
          <p>
            Ms. Damilola Odekunle envisions a future where cities are designed
            to be inclusive, sustainable, and resilient. She aims to continue
            her research, advocating for evidence-based policies that can
            transform urban areas into vibrant and livable spaces for all. As a
            role model for young academics, she hopes to inspire the next
            generation of urban planners to tackle pressing urban challenges
            with innovation, compassion, and a vision for a better world.
          </p>
          <p>
            Through her unwavering commitment to academia, research, and
            community service, Ms. Odekunle is making a significant impact in
            the field of urban and regional planning, leaving a lasting legacy
            that will shape the urban landscape of Nigeria and beyond.
          </p>
        </div>
      </section>
      <section className="max-w-[856px] mx-auto my-[80px]">
        <div className="h-[106px] bg-[#CECDCC] mb-6"></div>
        <div className="h-[106px] bg-[#CECDCC] mb-6"></div>
        <div className="h-[106px] bg-[#CECDCC]"></div>
      </section>
    </main>
  );
};

export default HodWelcome;
