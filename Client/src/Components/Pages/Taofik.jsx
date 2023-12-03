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

import Lawanson from '../../assets/lecturers/lawanson.webp';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import BookCover from '../../assets/mainDesktop/bookCover.png';
const Taofik = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const refB1 = useRef(null);
  const refB2 = useRef(null);
  const refB3 = useRef(null);

  const handleClick = (current) => {
    if (current === 'ach') {
      ref1.current.classList.add('opacity');
      refB1.current.classList.add('tabs');
    } else {
      ref1.current.classList.remove('opacity');
      refB1.current.classList.remove('tabs');
    }
    if (current === 'res') {
      ref2.current.classList.add('opacity');
      refB2.current.classList.add('tabs');
    } else {
      ref2.current.classList.remove('opacity');
      refB2.current.classList.remove('tabs');
    }
    if (current === 'ex') {
      ref3.current.classList.add('opacity');
      refB3.current.classList.add('tabs');
    } else {
      ref3.current.classList.remove('opacity');
      refB3.current.classList.remove('tabs');
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
    ref1.current.classList.add('opacity');
    ref2.current.classList.remove('opacity');
    ref3.current.classList.remove('opacity');

    refB1.current.classList.add('tabs');
    refB2.current.classList.remove('tabs');
    refB3.current.classList.remove('tabs');
  }, []);
  return (
    <main>
      <section className="h-[600px] flex flex-col lg:flex-row mb-[80px]">
        <div className="flex-1 bg-[#9B9FAB]">
          {/* <img
            src={Lawanson}
            alt="Our HOD"
           className="h-[320px] lg:h-[600px] w-[100%] object-cover"
          /> */}
        </div>
        <div className="flex-1 bg-[#1C2954] h-[232px] lg:h-auto flex justify-center items-center px-[27px] lg:px-0 py-[17px] lg:py-0">
          <div className="lg:w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" className="w-[29px] lg:w-auto" />
            </div>
            <p className="text-white text-[12px] lg:text-[20px] leading-[150%] my-6 lg:my-[59px]">
              Taofik Salau is widely admired for his embodiment of courtesy,
              integrity, perseverance, self-control, and an indomitable spirit
              in all aspects of his life.
            </p>
            <div className="flex justify-end">
              <img src={RQ} alt="" className="w-[29px] lg:w-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px] px-6 lg:px-0">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[14px] lg:text-[20px] font-semibold">
            Dr. Taofik SALAU
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
              href="https://ng.linkedin.com/in/wale-taofik-56609595"
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
            Dr. Taofik SALAU is Senior Lecturer in the Department of Urban and
            Regional Planning, University of Lagos, Nigeria. He holds a
            Bachelor’s degree in Urban and Regional Planning at the University
            of Nigeria, Nsukka in 1991. He holds an M.Sc. in in Transportation
            Studies from the Olabisi Onabanjo University, Ago-Iwoye in 1997 and
            another M.Sc. in Urban and Regional Planning from University of
            Ibadan in 2006. He obtained his Doctor of Philosophy degree (PhD) in
            Urban and Regional Planning from the University of Ibadan, Nigeria
            in 2015.
          </p>
          <p>
            Dr. Salau’s primary research interests revolve around questions of
            the determinants of the demand for public transport in cities,
            specifically with regard to public transportation and the negative
            societal effects of car-centric urban planning, master planning and
            Urban Environmental and Infrastructure Planning and Management. He
            has published over thirty (30) academic articles in reputable
            national and international journals.
          </p>
          <p>
            Dr. Salau is a Fellow of the Nigerian Institute of Town Planners
            (FNITP) and has been licensed to practice as a Town Planner by the
            Town Planners Registration Council of Nigeria (TOPREC).
          </p>
          <p>
            Dr. Salau is happily married with three young sons. He enjoys
            mentoring, gardening, photography, martial arts and exploring
            beautiful landscapes.
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
                    December 2021
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://www.routledge.com/Promoting-Statistical-Practice-and-Collaboration-in-Developing-Countries/Awe-Love-Vance/p/book/9781032195551"
                      target="_blank"
                    >
                      COVID-19 Pandemic Experience and Imperatives for Physical
                      Planning in Ogun State, Nigeria: A Situation Review
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://www.routledge.com/Promoting-Statistical-Practice-and-Collaboration-in-Developing-Countries/Awe-Love-Vance/p/book/9781032195551"
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
                    January 2015
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://www.tandfonline.com/doi/full/10.1080/21650020.2015.1124247"
                      target="_blank"
                    >
                      Public transportation in metropolitan Lagos, Nigeria:
                      analysis of public transport users’ socioeconomic
                      characteristics
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://www.tandfonline.com/doi/full/10.1080/21650020.2015.1124247"
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
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">
                    May 2013
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://journals.co.za/doi/abs/10.10520/EJC136878"
                      target="_blank"
                    >
                      Conceptualizing the liveable African city
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://journals.co.za/doi/abs/10.10520/EJC136878"
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
                      target="_blank"
                      href="https://ir.unilag.edu.ng/items/c554912b-b3ba-4d52-83fc-06c5a02d2171"
                    >
                      Amoebic Urbanization in Nigerian Cities: The case of Lagos
                      and Ota
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
                  href="https://scholar.google.com/citations?user=RZN0ijMAAAAJ&hl=en"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Google Scholar Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.researchgate.net/profile/Taofiki-Salau"
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
      <section className="mb-[64px] lg:mb-[80px] bg-white lg:py-[104px] lg:h-[700px] px-6 lg:px-0">
        <div className="max-w-[1110px] mx-auto flex flex-col lg:flex-row justify-between h-[400px]">
          <div className="max-w-[540px] info-box">
            s
            <h3
              className="hidden lg:block text-[#ADABAB] font-[600] leading-[150%] text-[24px] lg:text-[2rem] mb-10 whitespace-normal"
              role="button"
              onClick={() => handleClick('ach')}
              ref={ref1}
            >
              Achievements/Accolades/Awards/ Honours
            </h3>
            <h3
              className="text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10 opacity-75"
              role="button"
              onClick={() => handleClick('res')}
              ref={ref2}
            >
              Research Interests
            </h3>
            <h3
              className="text-[#ADABAB] font-[600] leading-[150%] text-[2rem]"
              role="button"
              onClick={() => handleClick('ex')}
              ref={ref3}
            >
              Extracurricular Activities
            </h3>
          </div>
          <div className="w-[400px] pr-[24px] h-[400px] accordion overflow-y-scroll">
            <article className="hidden" ref={refB1}>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2023
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Chairman, Research and Development Committee
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Nigerian Institute of Town Planners Lagos State Chapter
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2023
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Member, Capacity Building Committee
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Nigerian Institute of Town Planners Lagos State Chapter
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2021 to date
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Co-Director and Team Lead, Review of Badagry Master Plan for
                  Lagos State Government
                </h4>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2016-2018
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Co-Director and Team Lead, Preparation of Oshodi-Isolo Model
                  City Plan Lagos State Government (2016), with Vistaplan
                  Consulting
                </h4>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2014-2018
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Co-Director and Team Lead, Preparation of Redemption City of
                  God Master Plan for the Redeemed Christian Church of God
                </h4>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2009
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  University of Lagos Central Research Committee’s Grant for the
                  Analysis of Households’ Travel Behaviour in Lagos
                </h4>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2018
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Most Supporting Lecturer of All Time Award
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Faculty of Environmental Sciences Students Association
                  (FESSA), University of Lagos
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2009
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Distinguished Researcher Award (Faculty of Environmental
                  Sciences), Central Research Committee
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Lagos 4th Research Fair and Conference
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1995
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Faculty Prize (Best Graduating Student), Faculty of
                  Environmental Design and Management
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Obafemi Awolowo University, Ile-Ife, 1993/1994 Session
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1995
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Best Graduating Student, Department of Urban and Regional
                  Planning
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Obafemi Awolowo University, Ile-Ife, 1993/1994 Session
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1995
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Life Gold Statesman Award, Man O’ War Club
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Obafemi Awolowo University, Ile-Ife.
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1990
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Overall Best Student in Town and Regional Planning
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Ogun State Polytechnic, Abeokuta, 1989/1990 Session
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1990
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Best Student in Academics
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Ogun State Polytechnic, Abeokuta, 1989/1990 Session
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2020
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Mentorship Award
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  The Redeemed Christian Church of God, Jesus Assembly, Lagos
                  Province 29, Alakuko
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2023
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Member, Built Environment Policy Committee
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Lagos
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2022 till date
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Member, Church Archive Committee
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  The Redeemed Christian Church of God
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2019 till date
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Chairman, Main Entrance Redevelopment Committee
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Obafemi Awolowo University Campus, Ile-Ife
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2019
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Chairman, Faculty Hooding Ceremony Committee (50th
                  Convocation)
                </h4>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2023
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Chairman, Research and Development Committee, Nigerian
                  Institute of Town Planners
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Lagos State Chapter
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2023
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Member, Capacity Building Committee, Nigerian Institute of
                  Town Planners
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Lagos State Chapter
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2015 to 2018
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Member, Examination Board
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Nigerian Institute of Town Planners (NITP)
                </p>
              </div>
            </article>
            <article className="hidden" ref={refB2}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Urban Mobility
                </h4>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Transport Planning
                </h4>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Logistics
                </h4>
              </div>
            </article>
            <article className="hidden" ref={refB3}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Urban planning and project management consultant
                </h4>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Clergy Duties
                </h4>
              </div>
            </article>
          </div>
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
              <div className="border-[#1B1B1B] border-[1px] rounded-[2px] px-6 py-2 flex items-center gap-x-2">
                <span>
                  <PhoneOutlinedIcon htmlColor="black" />
                </span>
                <span className="text-[12px] lg:text-[14px] whitespace-nowrap">
                  Call Dr. Adewale
                </span>
              </div>
              <div className="bg-[#1B1B1B] rounded-[2px]  px-4 lg:px-6 py-2 flex items-center gap-x-2">
                <span className="lg:hidden">
                  <MarkunreadOutlinedIcon fontSize="small" htmlColor="white" />
                </span>
                <span className="hidden lg:block">
                  <MarkunreadOutlinedIcon htmlColor="white" />
                </span>
                <span className="text-[#FDFFFD] text-[12px] lg:text-[14px] underline hover:animate-pulse whitespace-nowrap">
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

export default Taofik;
