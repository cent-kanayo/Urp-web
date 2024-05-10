import { useEffect, useRef, useState } from 'react';
import RQ from '../../assets/quoteR.png';
import LQ from '../../assets/quoteL.png';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Oduwaye from '../../assets/lecturers/oduwaye.webp';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import BookCover from '../../assets/mainDesktop/bookCover.png';
const Leke = () => {
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
    setTab1(true);
    setTab2(false);
    setTab3(false);
  }, []);
  return (
    <main>
      <section className="h-[600px] flex flex-col lg:flex-row mb-[80px]">
        <div className="flex-1">
          <img
            src={Oduwaye}
            alt="Our HOD"
            className="h-[320px] lg:h-[600px] w-[100%] object-cover"
          />
        </div>
        <div className="flex-1 bg-[#192C69]  h-[232px] lg:h-auto flex justify-center items-center px-[27px] lg:px-0 py-[17px] lg:py-0">
          <div className="lg:w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" className="w-[29px] lg:w-auto" />
            </div>
            <p className="text-white text-[12px] lg:text-[20px] leading-[150%] my-6 lg:my-[59px]">
              Professor Leke Oduwaye is well-known for his deep appreciation of
              knowledge sharing and his unwavering commitment to fostering an
              environment of mutual respect among colleagues and peers
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
            Professor Leke ODUWAYE
          </h5>
        </div>
        <div className="flex justify-center gap-x-6 lg:px-0">
          <span className="bg-gray-200 p-2 rounded-md hover:animate-pulse">
            <a
              href="https://www.linkedin.com/in/leke-oduwaye-a737a11aa/"
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
        <div className="text-[12px] lg:text-[16px] leading-[150%] flex flex-col gap-6 px-6 lg:px-0">
          <p>
            Professor Leke Oduwaye is a Town Planner, an Architect, former Head
            of Department and former Dean of the Department of Urban and
            Regional Planning and Faculty of Environmental Sciences, University
            of Lagos respectfully.
          </p>
          <p>
            He was a Visiting Professor at the following universities: Lagos
            State University, Lagos; Bells University, Ota, Nigeria; Covenant
            University, Ota and Ogun State University, Ago Iwoye, Nigeria. He
            was appointed a Visiting Professor at Bayero University, Kano and
            Osun State University, Osogbo, Nigeria.
          </p>
          <p>
            Professor Oduwaye attended Rivers State University, Port Harcourt,
            Obafemi Awolowo University, Ile Ife, and the University of Ibadan
            where he obtained his B.Sc, M.Sc, and Ph.D degrees. He is a Fellow
            of the Nigerian Institute of Town Planners, Registered Town Planner
            with the Town Planners Registration Council of Nigeria, Member of
            the Nigerian Institute of Architects, Registered Architect with the
            Architects Registration Council of Nigeria, and Member of the
            Nigerian Institute of Management.
          </p>
          <p>
            Professor Oduwaye's research areas are on the city, urban land use
            planning, and sustainable development on which he has made
            significant and outstanding contributions to the theoretical and
            empirical understanding of urban land use dynamics, geospatial
            structure of cities, urban land values, cities and globalization,
            urban regeneration and branding, climate change, clean and green
            development among others. He has published in many scholarly
            journals and delivered papers at many local and international
            conferences. He has also supervised many Ph.D. theses. He is on the
            editorial boards of many reputable journals. He has also served as
            an expert to the World Bank, the United Nations agencies, Federal
            and State Governments on land use, urban policy, and development. He
            also served on many committees of the Nigerian Institute of Town
            Planners, which includes Chairman of the 10 Year Strategic Plan
            Committee, Education Committee, Membership Committee, Practice
            Committee, and member of the Lagos State Elders Committee. He was a
            member of Oshodi-Isolo and Apapa Local Planning Authority, Lagos.
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
                    May 2015
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://www.ceeol.com/search/article-detail?id=330196"
                      target="_blank"
                    >
                      Urban Sprawl and Loss of Agricultural Land in Peri-urban
                      Areas of Lagos
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://www.ceeol.com/search/article-detail?id=330196"
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
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2011</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://ir.unilag.edu.ng/handle/123456789/7764"
                      target="_blank"
                    >
                      Factors influencing the quality of rail transport services
                      in metropolitan Lagos
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://ir.unilag.edu.ng/handle/123456789/7764"
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
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2009</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://doi.org/10.1080/23792949.2017.1399804"
                      target="_blank"
                    >
                      Challenges of sustainable physical planning and
                      development in metropolitan Lagos
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://doi.org/10.1080/23792949.2017.1399804"
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
                    December 1998
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[15px] leading-[150%]">
                    <a
                      target="_blank"
                      href="https://doi.org/10.1080/23792949.2017.1399804"
                    >
                      Urban landscape planning experience in Nigeria
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://doi.org/10.1080/23792949.2017.1399804"
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
                  href="https://scholar.google.com/citations?hl=en&user=JHyX2KMAAAAJ"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Google Scholar Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.researchgate.net/profile/Leke-Oduwaye"
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
                  2010 - 2012
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Australian Postgraduate Awards
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Industry
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Overall Best graduating Student, Urban and Regional Planning
                  Department,
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Obafemi Awolowo University, Ile-Ife.
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Most consistent student from Part IV to V, Faculty of
                  Environmental Design and Management
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Obafemi Awolowo University, Ile-Ife.
                </p>
              </div>
            </article>
            <article className={tab2 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <p>Urban Land Use Planning </p>
                <p>Sustainable Development</p>
              </div>
            </article>
            <article className={tab3 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <p>Comfortable when with my people and colleagues</p>
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
              <article className="hidden">
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2010 - 2012
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Distinguished Alumnus Award, Faculty of Environmental Design
                    and Management,
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    Obafemi Awolowo University, Ile Ife.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Deserving Alumnus Award, Faculty of Environmental Design and
                    Management,
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    Obafemi Awolowo University, Ile-Ife.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Exemplary Leadership Award, Department of Urban and Regional
                    Planning,
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    University of Lagos.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Environmental Planning Association Award of Excellence
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    Obafemi Awolowo University, Ile-Ife.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Excellence Award, Nigerian Institute of Town Planners
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    Lagos Chapter.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Award for Development of Town Planning
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    Nigerian Institute of Town Planners, Lagos Chapter.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Distinguished Member Award
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    Nigerian Institute of Town Planners, Lagos Chapter.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Best Researcher Award, Faculty of Environmental Sciences
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    University of Lagos.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    University of Lagos Central Research Grants.
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    University of Lagos.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Association of African Planning Schools Grant.
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    University of Lagos.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    African Urban Research Initiative/Cities Alliance Grant.
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    University of Lagos.
                  </p>
                </div>
                <div className="mb-10">
                  {/* <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p> */}
                  <h4 className="text-[#090302] text-[20px] leading-[150%]">
                    Habitat Grant.
                  </h4>
                  <p className="text-[#5B5756] text-[16px] leading-[150%]">
                    United Nations
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
                  <p>Spatial Data Infrastructure and Land Administration</p>
                  <p>Housing</p>
                  <p>GIS application</p>
                  <p>Urban Analytics</p>
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
                  <p>Reading</p>
                  <p>Volleyball</p>
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
                  <a href="mailto:aoduwaye@unilag.edu.ng">Send an E-mail</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leke;
