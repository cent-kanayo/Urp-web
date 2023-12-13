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

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AG from '../../assets/lecturers/agunbiade.webp';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[64px] lg:mb-[80px] about-bg px-[60px] lg:px-0">
        <div className="about-welcome flex-1 h-[64px] lg:h-[108px] px-[60px] lg:px-0">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            About Us
          </h1>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px] px-[35px] lg:px-0">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[14px] font-semibold lg:text-[20px]">
            Dr. Muyiwa E. AGUNBIADE
          </h5>
          <div className="flex items-center gap-x-2 lg:gap-x-6">
            <p className="text-[12px] lg:text-[14px]">1st July,2023</p>
            <CreateNewFolderOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div className="flex justify-center gap-x-6 lg:px-0">
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
      <section className="max-w-[800px] mx-auto px-[35px] lg:px-0">
        <h2 className="text-center text-[24px] lg:text-[32px] font-[600] mb-6">
          MESSAGE FROM THE HEAD OF DEPARTMENT
        </h2>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col">
          <p className="mb-6">
            I would like to express my pride of belonging to the Department of
            Urban and Regional Planning, Faculty of Environmental Science,
            University of Lagos. It is taught in a few and highly elitist
            universities in Nigeria, hence the need to meet universal standards
            to master the requisite skills of architectural design.
          </p>
          <p className="mb-6">
            Since its foundation a trailblazing rockstar of academia, with
            revolutionary ideas that shake up the very foundations of
            traditional teaching methods. Her contagious enthusiasm and
            exceptional ability to engage students have made her a true legend
            among her peers.
          </p>
          <p className="mb-6">
            Dr. Anthony Odunayo holds a Ph.D. in Urban and Regional Planning
            from a renowned international university, where her groundbreaking
            research focused on innovative approaches to urban renewal and
            community-based development. During her graduate studies, she
            received several accolades for her exceptional academic performance
            and was recognized as a promising researcher in the field of urban
            planning.
          </p>
          <p className="mb-6">
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
      <section className="max-w-[1119px] mx-auto mt-[64px] lg:mt-[80px] px-[35px] lg:px-0">
        <div>
          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem] py-2"
                role="button"
              >
                About URP Department
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem] py-2"
                role="button"
              >
                Intro
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem] py-2"
                role="button"
              >
                Our Vision
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem] py-2"
                role="button"
              >
                Our Mission
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
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

export default About;
