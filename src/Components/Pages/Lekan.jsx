import { useEffect, useState } from 'react';
import HODLight from '../../assets/Fram.png';
import RQ from '../../assets/quoteR.png';
import LQ from '../../assets/quoteL.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import BookCover from '../../assets/mainDesktop/bookCover.png';
import Activities from '../Resuables/Activities';
const Lekan = () => {
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);

  const handleClick = (current) => {
    if (current === 'ach') {
      setTab1(true);
      setTab2(false);
      setTab3(false);
    }

    if (current === 'res') {
      setTab1(false);
      setTab2(true);
      setTab3(false);
    }
    if (current === 'ex') {
      setTab1(false);
      setTab2(false);
      setTab3(true);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setTab1(true);
    setTab2(false);
    setTab3(false);
  }, []);
  return (
    <main>
      <section className="h-[600px] flex flex-col lg:flex-row mb-[80px]">
        <div className="flex-1 bg-[#9B9FAB]">
          {/* <img
            src={Lawanson}
            alt="Mrs. Damilola M. OLALEKAN"
           className="h-[320px] lg:h-[600px] w-[100%] object-cover"
          /> */}
        </div>
        <div className="flex-1 bg-[#BF4468] h-[232px] lg:h-auto flex justify-center items-center px-[27px] lg:px-0 py-[17px] lg:py-0">
          <div className="lg:w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" className="w-[29px] lg:w-auto" />
            </div>
            <p className="text-white text-[12px] lg:text-[20px] leading-[150%] my-6 lg:my-[59px]">
              A passionate, hardworking, honest, determined, and driven
              individual with a remarkable ability to work and deliver, even in
              the face of challenging situations.
            </p>
            <div className="flex justify-end">
              <img src={RQ} alt="" className="w-[29px] lg:w-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px] px-6 lg:px-0">
        <div className="text-[#090302]">
          <h5 className="text-[14px] lg:text-[20px] font-semibold">
            Mrs. Damilola M. OLALEKAN
          </h5>
        </div>
        <div className="flex justify-center gap-x-6 lg:px-0">
          <span className="bg-gray-200 p-2 rounded-md hover:animate-pulse">
            <a
              href="https://www.linkedin.com/in/damilola-olalekan-33b189176/"
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
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-center text-[24px] lg:text-[40px] font-bold text-[#011717] mb-6">
          Bio
        </h3>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col gap-6 px-6 lg:px-0">
          <p>
            Damilola is currently an Assistant Lecturer in the Department of
            Urban and Regional Planning, at the University of Lagos. She
            graduated with a First Class in Urban and Regional Planning from the
            University of Lagos, Nigeria, and also holds a Master’s degree in
            the same department and school.
          </p>
          <p>
            She was one of the beneficiaries of the University of Lagos Scholars
            Award for the period of her 5 years as an undergraduate. She also
            won the award of the 2015 best-graduating student in the Department
            of Urban and Regional Planning, University of Lagos. During her
            final year as an undergraduate, she was selected as one of the
            student planners with the potential to participate in the Heinrich
            Böll Stiftung Nigeria research project on Urban Planning Processes
            in Lagos State. She was selected as one of the 2018 Embassy of
            France in Nigeria Fieldwork Grants Awards for her Master’s thesis on
            “Effects of Urbanization on Heritage Buildings in Lagos Island,
            Nigeria”.
          </p>
          <p>
            Before her appointment at the University of Lagos, Damilola had
            worked as a Planning Officer at the Lagos State Local Government
            Commission. She has worked with the Lagos State Government, 100
            Resilient Cities, Heinrich Böll Stiftung Foundation, Harvard
            University, Institute of African in Diaspora Studies, UNILAG, etc.
            on several projects like the Preparation of the Lagos Resilience
            Document, Strategic Planning and Urban Mega Projects research, Urban
            Water poverty, Religious Urbanization in Africa and many more. She
            is currently part of ACRC research teams and the Growing up in
            Cities Project Team.
          </p>
        </div>
      </section>
      <section className="lg:h-[680px] bg-[#FAFAFA] py-[52px] my-[64px] lg:my-[80px]">
        <div>
          <h3 className="text-center text-[#011717] text-[24px] lg:text-[32px] font-[600] capitalize mb-[40px]">
            Articles and Research hubs
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-6 lg:gap-x-[24px]">
              <div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute  top-10 lg:top-[74px] lg:max-w-[174px] lg:pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2022</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href=" https://ng.boell.org/en/default/fairsharedcitypaper"
                      target="_blank"
                    >
                      Fair Shared City: Lagos. Feminist City Planning from the
                      Micro Level. Lagos
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href=" https://ng.boell.org/en/default/fairsharedcitypaper"
                        target="_blank"
                      >
                        View Publication
                      </a>
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute  top-10 lg:top-[74px] lg:max-w-[174px] lg:pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2021</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://www.internationaljournalssrg.org/IJHSS/2021/Volume8-Issue3/IJHSS-V8I3P114.pdf "
                      target="_blank"
                    >
                      Urban Residents’ Housing Satisfactions in Iponri Housing
                      Estate, Lagos, Nigeria
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://www.internationaljournalssrg.org/IJHSS/2021/Volume8-Issue3/IJHSS-V8I3P114.pdf "
                        target="_blank"
                      >
                        View Cluster
                      </a>
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute  top-10 lg:top-[74px] lg:max-w-[174px] lg:pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2020</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://ng.boell.org/sites/default/files/202010/LUP%20Debunking%20Myths%20FINAL_0.pdf"
                      target="_blank"
                    >
                      Lagos Urban Planning: Debunking Myths & Stereotypes. Women
                      are Weaker Sex
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://ng.boell.org/sites/default/files/202010/LUP%20Debunking%20Myths%20FINAL_0.pdf"
                        target="_blank"
                      >
                        View Publication
                      </a>
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute  top-10 lg:top-[74px] lg:max-w-[174px] lg:pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2020</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      target="_blank"
                      href="https://ir.unilag.edu.ng/items/c554912b-b3ba-4d52-83fc-06c5a02d2171"
                    >
                      Local Responses to the Corona virus lockdown:Adapting to
                      Change in Lagos Island
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        target="_blank"
                        href="https://ir.unilag.edu.ng/items/c554912b-b3ba-4d52-83fc-06c5a02d2171"
                      >
                        View Publication
                      </a>
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div className="mt-[24px] px-6 lg:px-0">
              <p className="mb-4">
                <a
                  href="https://orcid.org/0000-0003-1259-577X"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Orcid Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://scholar.google.com/citations?hl=en&user=z6J6kpYAAAAJ"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Google Scholar Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.researchgate.net/profile/Mistura-Olalekan"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  ResearchGate Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[64px] lg:mb-[80px] bg-white lg:py-[104px] lg:h-[700px] px-6 lg:px-0 hidden lg:block">
        <div className="max-w-[1110px] mx-auto flex flex-col lg:flex-row justify-between h-[400px]">
          <div className="max-w-[540px] info-box">
            s
            <h3
              className={
                tab1
                  ? 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10 opacity'
                  : 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10'
              }
              role="button"
              onClick={() => handleClick('ach')}
            >
              Achievements/Accolades/Awards/ Honours
            </h3>
            <h3
              className={
                tab2
                  ? 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10 opacity'
                  : 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10'
              }
              role="button"
              onClick={() => handleClick('res')}
            >
              Research Interests
            </h3>
            <h3
              className={
                tab3
                  ? 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10 opacity'
                  : 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10'
              }
              role="button"
              onClick={() => handleClick('ex')}
            >
              Extracurricular Activities
            </h3>
          </div>
          <div className="w-[400px] pr-[24px] h-[400px] accordion overflow-y-scroll">
            <article className={tab1 ? 'tabs' : 'hidden'}>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2023
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Best Graduating Student in Urban and Regional Planning
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Lagos
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2023
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Member, Nigerian Institute of Town Planners
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Registered Town Planner
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2023
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Scholars Award for maintaining CGPA of 4.50 and above
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Lagos
                </p>
              </div>
            </article>
            <article className={tab2 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Urban Studies and Sustainable Management
                </h4>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Gender and Social Justice
                </h4>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Urban Heritage Studies
                </h4>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Pro-poor governance and development
                </h4>
              </div>
            </article>
            <article className={tab3 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <Activities
                  text="First Aiding (Certified First Aider; Certified in HSE)"
                  icon="aid"
                />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="lg:hidden px-6 lg:px-0">
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem]"
                role="button"
              >
                Achievements/Accolades/Awards/ Honours
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <article>
                <div className="mb-10">
                  <p className="text-[#ADABAB] text-[12px] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                    2023
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Best Graduating Student in Urban and Regional Planning
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    University of Lagos
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-[#ADABAB] text-[12px] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                    2023
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Member, Nigerian Institute of Town Planners
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    Registered Town Planner
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-[#ADABAB] text-[12px] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                    2023
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Scholars Award for maintaining CGPA of 4.50 and above
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    University of Lagos
                  </p>
                </div>
              </article>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem]"
                role="button"
              >
                Research Interests
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <article>
                <div className="flex flex-col gap-2 text-[#090302] text-[14px] leading-[150%]">
                  <h4 className="text-[#090302] leading-[150%]">
                    Urban Studies and Sustainable Management
                  </h4>
                  <h4 className="text-[#090302] leading-[150%]">
                    Gender and Social Justice
                  </h4>
                  <h4 className="text-[#090302] leading-[150%]">
                    Urban Heritage Studies
                  </h4>
                  <h4 className="text-[#090302] leading-[150%]">
                    Pro-poor governance and development
                  </h4>
                </div>
              </article>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem]"
                role="button"
              >
                Extracurricular Activities
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <article>
                <div className="flex flex-col gap-2 text-[#090302] text-[14px] leading-[150%]">
                  <Activities
                    text="First Aiding (Certified First Aider; Certified in HSE)"
                    icon="aid"
                  />
                </div>
              </article>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <section className="my-[80px]">
        <div className="bg-[#FAFAFA] py-10 lg:py-20 lg:h-[346px] flex justify-center h-[252px]">
          <div className="text-center max-w-[546px] mx-auto px-[35px] lg:px-0">
            <h3 className="text-[#1B1B1B] font-bold text-[24px] lg:text-[40px]">
              Connect Now
            </h3>
            <p className="text-[12px] lg:text-[14px] text-[#1B1B1B] mb-10 lg:mb-[60px]">
              Have questions or need assistance? Reach out to our lecturer below
            </p>
            <div className="flex gap-x-2 lg:gap-x-6 justify-center">
              <div className="bg-[#1B1B1B] rounded-[2px]  px-4 lg:px-6 py-2 flex items-center gap-x-2">
                <span className="lg:hidden">
                  <MarkunreadOutlinedIcon fontSize="small" htmlColor="white" />
                </span>
                <span className="hidden lg:block">
                  <MarkunreadOutlinedIcon htmlColor="white" />
                </span>
                <span className="text-[#FDFFFD] text-[12px] lg:text-[14px] underline hover:animate-pulse whitespace-nowrap">
                  <a href="mailto:moluwo@unilag.edu.ng">Send an E-mail</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Lekan;
