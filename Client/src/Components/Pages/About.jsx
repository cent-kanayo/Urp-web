import { useEffect, useRef } from 'react';

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

import { Link } from 'react-router-dom';

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
      {/* <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px] px-[35px] lg:px-0">
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
      </section> */}
      <section className="max-w-[800px] mx-auto px-[35px] lg:px-0">
        <h2 className="text-center text-[24px] lg:text-[32px] font-[600] mb-6">
          WELCOME TO THE DEPARTMENT OF URBAN AND REGIONAL PLANNING
        </h2>
        <div className="text-[12px] lg:text-[18px] leading-[150%] flex flex-col">
          <p className="mb-6">
            Founded in 1980, the Department of Urban and Regional Planning at
            the University of Lagos is a leading academic department at the
            forefront of advancing urban and regional planning research and
            practice in Nigeria. We aim to promote urban and regional planning
            practices by providing a conducive environment for teaching,
            training, and developing town planners who can apply theoretical,
            analytical, and design thinking skills to solve contemporary complex
            urban and development challenges. 
          </p>
          <p className="mb-6">
            Our commitment to academic excellence is rooted in our belief in the
            power of experiential learning, evidenced in our collaborative
            teaching style, which combines theory with field experience and
            real-life case studies. Our academic staff consists of seasoned
            planning experts, renowned for their contributions to urban planning
            at home and abroad, are actively engaged in research and projects
            that provide opportunities for student-academia collaborations and
            hands-on learning.
          </p>
          <div>
            <p className="mb-6 font-semibold">Key facts</p>
            <ul className="list-disc pl-8 pt-4 flex flex-col gap-2 font-medium">
              <li>
                The Department of Urban and Regional Planning is domiciled
                within the Faculty of Environmental Sciences at the University
                of Lagos. 
              </li>
              <li>The Department was founded in the 1980/1981 session. </li>
              <li>
                Degrees Offered: Bachelor of Science in Urban and Regional
                Planning (BSc); Master of Science in Urban and Regional
                Planning; Master of Urban Logistics and Transport Policy (MULT);
                Master in Urban Management (MUM); Master of Philosophy in Urban
                and Regional Planning (MPHIL); Doctor of Philosophy in Urban and
                Regional Planning (PhD). 
              </li>
              <li>Number of Academic Staff: 20.</li>
              <li>Number of Students (2023/2024): 200</li>
              <li>
                The Town Planners Registration Council of Nigeria ranked DURP as
                The Best Accredited Programme in 2010. 
              </li>
            </ul>
          </div>
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
                About Urban and Regional Planning Department
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Urban and Regional Planning department is dedicated to the
                pursuit of academic excellence through learning, teaching, and
                research in the field. The primary goal is to contribute to the
                advancement of urban and regional planning practices, ultimately
                improving the quality of human settlements. The department aims
                to provide design solutions for current settlement challenges
                and anticipate future requirements by imparting design skills
                that articulate plans and guide their implementation. It
                emphasizes the importance of ensuring the effective execution of
                planning solutions, producing plans that are feasible and
                actionable. Furthermore, the department seeks to address
                critical issues in planning and development, working towards
                minimizing the urban and rural divide. An additional objective
                is to foster the advancement of learning, offering equal
                educational opportunities to qualified individuals irrespective
                of race, creed, gender, or political affiliation in the domain
                of Urban and Regional Planning.
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
                Rationale/Justification
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Department prepares graduate planners to influence positive
                economic, social, political, and technological outcomes through
                physical interventions. Graduates are trained to create optimal
                environments for decision-making and actions, aiming for maximum
                societal benefits at minimal costs. Success is gauged by
                achieving harmony in a physically beautiful, economical, secure,
                and efficient environment.
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
                To train and produce world class professional town planners,
                equipped with requisite knowledge and skills to solve
                contemporary planning and development problems; and who are
                ethically upright and excellent in character and service to
                humanity.
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
                To further the practice and theoretical development of Urban and
                Regional Planning by providing a conducive teaching, learning
                and development environment where staff and students can
                interact and compete effectively with their counterparts both
                nationally and internationally in terms of intellectual and
                professional competence.
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
                Our Philosophy
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The programme is designed to graduate professionals who are able
                to comprehend the complex nature of the problems and prospects
                of human settlements through competent teaching of a wide range
                of courses.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <section className="grid place-items-center px-2 lg:px-0 my-[64px] lg:my-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[342px] lg:max-w-[529px] mx-auto mb-4">
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

export default About;
