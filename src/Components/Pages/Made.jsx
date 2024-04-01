import { useEffect, useState } from 'react';
import RQ from '../../assets/quoteR.png';
import LQ from '../../assets/quoteL.png';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Nwa from '../../assets/lecturers/Lfarin.png';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import BookCover from '../../assets/mainDesktop/bookCover.png';
import Activities from '../Resuables/Activities';
const Made = () => {
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
        <div className="flex-1">
          <img
            src={Nwa}
            alt="Our HOD"
            className="h-[320px] lg:h-[600px] w-[100%] object-cover"
          />
        </div>
        <div className="flex-1 bg-[#0F1F39]  h-[232px] lg:h-auto flex justify-center items-center px-[27px] lg:px-0 py-[17px] lg:py-0">
          <div className="lg:w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" className="w-[29px] lg:w-auto" />
            </div>
            <p className="text-white text-[12px] lg:text-[20px] leading-[150%] my-6 lg:my-[59px]">
              Dr. Farinmade is a saintly scholar, operating with the grace and
              extraordinary power of God in his scholarly pursuits
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
            Dr. Ademola FARINMADE
          </h5>
        </div>
        <div className="flex justify-center gap-x-6 lg:px-0">
          <span className="bg-gray-200 p-2 rounded-md hover:animate-pulse">
            <a
              href="https://www.linkedin.com/in/farinmade-ademola-98754840/"
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
            Dr. Farinmade is a registered Town planner with interests in the
            urban informal sector, urban economics, and urban regeneration. He
            holds his first and second degrees in Urban and Regional Planning
            obtained at Obafemi Awolowo University, Ile-Ife. He obtained his
            Ph.D. in the same field from the University of Lagos, where he
            lectures.
          </p>
          <p>
            He is a member of the pro-poor development Research cluster at the
            University of Lagos and is equally a member of both Urban Management
            and Urban Planning Research clusters. His journey in the University
            has seen him supervise several undergraduate and postgraduate
            students. He has published several academic papers in books,
            articles, and journals, both locally and internationally. Dr.
            Farinmade is actively engaged in research, teaching, and the
            supervision of undergraduate and postgraduate students.
          </p>
          <p>
            He has also served as the chairman of the Facilities Management
            Committee of the Faculty of Environmental Science and is a member of
            the Faculty Sexual Harassment Committee.
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
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">
                    August 2018
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S2210670717306674?via%3Dihub"
                      target="_blank"
                    >
                      Assessing the effect of urban informal economic activity
                      on the quality of the built environment for sustainable
                      urban development in Lagos, Nigeria
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://www.sciencedirect.com/science/article/abs/pii/S2210670717306674?via%3Dihub"
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
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2018</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://doi.org/10.1016/j.jum.2018.03.001"
                      target="_blank"
                    >
                      Urban Safety and Security in Lagos Metropolis, Nigeria:
                      CCTV Inclusive Design for Sustainable Urban Development
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://doi.org/10.1016/j.jum.2018.03.001"
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
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">
                    September 2023
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="http://ajer.coou.edu.ng/index.php/journal/article/view/159"
                      target="_blank"
                    >
                      Housing Affordability in Ikorodu Local Government Area,
                      Lagos State, Nigeria
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="http://ajer.coou.edu.ng/index.php/journal/article/view/159"
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
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2012</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[15px] leading-[150%]">
                    <a
                      href="https://scholar.google.com/scholar?cluster=1703410053477339975&hl=en&oi=scholarr"
                      target="_blank"
                    >
                      Challenges of improving informal sector activities
                      conditions in Lagos Island
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://scholar.google.com/scholar?cluster=1703410053477339975&hl=en&oi=scholarr"
                        target="_blank"
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
                  href="https://orcid.org/0000-0003-0695-3614"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Orcid Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://scholar.google.com/citations?user=pJ7UhiMAAAAJ&hl=en"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Google Scholar Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.researchgate.net/profile/Ademola-Farinmade"
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
      <section className="my-[80px] bg-white py-[104px] h-[700px] hidden lg:block">
        <div className="max-w-[1110px] mx-auto flex justify-between h-[400px]">
          <div className="max-w-[540px] info-box">
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
              onClick={() => handleClick('res')}
              role="button"
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
                  2020
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Best Graduating Student, Msc Sociology
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Ile-Ife
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2020
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Best Graduating Student, Msc Sociology
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Ile-Ife
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2020
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Best Graduating Student, Msc Sociology
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Ile-Ife
                </p>
              </div>
            </article>
            <article className={tab2 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <p>Urban Management</p>
                <p>Pro-poor Development</p>
                <p>Urban Planning</p>
              </div>
            </article>
            <article className={tab3 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <Activities text="Pastor" icon="church" />
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
                    2020
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Best Graduating Student, Msc Sociology
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    University of Ile-Ife
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-[#ADABAB] text-[12px] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                    2020
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Best Graduating Student, Msc Sociology
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    University of Ile-Ife
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-[#ADABAB] text-[12px] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                    2020
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Best Graduating Student, Msc Sociology
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    University of Ile-Ife
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
                  <p>Urban Management</p>
                  <p>Pro-poor Development</p>
                  <p>Urban Planning</p>
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
                  <Activities text="Pastor" icon="church" />
                </div>
              </article>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <section className="my-[80px]">
        <div className="bg-[#FAFAFA] py-20 h-[346px] flex justify-center">
          <div className="text-center">
            <h3 className="text-[#1B1B1B] font-bold text-[40px]">
              Connect Now
            </h3>
            <p className="text-[14px] text-[#1B1B1B] mb-[60px]">
              Have questions or need assistance? Reach out to our lecturer below
            </p>
            <div className="flex gap-x-6 justify-center">
              <div className="bg-[#1B1B1B] rounded-[2px] px-6 py-2 flex items-center gap-x-2">
                <span>
                  <MarkunreadOutlinedIcon htmlColor="white" />
                </span>
                <span className="text-[#FDFFFD] text-[14px] underline hover:animate-pulse">
                  <a href="mailto:afarinmade@unilag.edu.ng">Send an E-mail</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Made;
