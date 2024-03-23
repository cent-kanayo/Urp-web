import { useEffect, useState } from 'react';
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

import Nwa from '../../assets/lecturers/Lfade.png';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import BookCover from '../../assets/mainDesktop/bookCover.png';
import Activities from '../Resuables/Activities';
const Fade = () => {
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
            alt="Dr. Victor A. ONIFADE"
            className="h-[320px] lg:h-[600px] w-[100%] object-cover"
          />
        </div>
        <div className="flex-1 bg-[#0C3F75]  h-[232px] lg:h-auto flex justify-center items-center px-[27px] lg:px-0 py-[17px] lg:py-0">
          <div className="lg:w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" className="w-[29px] lg:w-auto" />
            </div>
            <p className="text-white text-[12px] lg:text-[20px] leading-[150%] my-6 lg:my-[59px]">
              Dr Victor Onifade is an astute researcher, passionate about
              Housing and Urban management related issues who always looking for
              an opportunity to do better, learn new skills and achieve
              greatness in my field of choice{' '}
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
            Dr. Victor A. ONIFADE
          </h5>
        </div>
        <div className="flex justify-center gap-x-6 lg:px-0">
          <span className="bg-gray-200 p-2 rounded-md hover:animate-pulse">
            <a
              href="https://www.linkedin.com/in/victor-onifade-101aa1124/"
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
            Dr. Victor Onifade is an urban and regional planning specialist with
            interests in housing and user's satisfaction, urban management,
            internally displaced persons, and environmental management. His work
            focuses on meeting basic housing needs and the implications of
            homelessness in the urban environment. He holds a Ph.D. in Urban and
            Regional Planning from the University of Ibadan, Ibadan, Nigeria.
          </p>
          <p>
            Currently, he is a Senior Lecturer in urban planning and teaches
            courses related to housing, national development planning, and urban
            management. He also serves as the Cluster Manager of Sustainable
            Cities and African Urbanization Dynamics, a Pro-Poor Development
            Research cluster member at the Centre for Housing and Sustainable
            Development, University of Lagos.
          </p>
          <p>
            Dr. Onifade has authored and co-authored 37 peer-reviewed national
            and international articles and supervised 12 graduate-level theses.
            He has received recognition for his research, including the
            University of Lagos Central Research Grant award in 2016. He has
            also held the position of Post-doctoral Researcher for various
            projects, such as the Informal Appropriation of public space and
            urban infrastructure for Leisure Physical Activity in Lagos and
            Yaoundé (ALPhA), funded by the British Academy's Infrastructures of
            Wellbeing program in 2020-2021.
          </p>
          <p>
            Additionally, he serves as a Post-doctoral Researcher for the NIHR
            Global Health Research Group on Diet and Activity, focusing on a
            syndemic approach to the prevention of diet and physical
            activity-related NCDs project in 2022-2023. He is also a Named
            Researcher for the project "Growing up in African Cities: Focus on
            Low Income Communities in Lagos, Nigeria," funded by the Lagos
            African Cluster Centre, Institute of African and Diaspora Studies,
            University of Lagos in 2022-2023. Dr. Onifade is a registered town
            planner and a member of the Nigerian Institute of Town Planners
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
                    February 2022
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://www.mdpi.com/1660-4601/19/4/2285"
                      target="_blank"
                    >
                      A Systematic Review Protocol of Opportunities for
                      Noncommunicable Disease Prevention via Public Space
                      Initiatives in African Cities
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://www.mdpi.com/1660-4601/19/4/2285"
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
                    July 2021
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://www.tandfonline.com/doi/full/10.1080/23748834.2020.1806459"
                      target="_blank"
                    >
                      The urban environment and leisure physical activity during
                      the COVID-19 pandemic: a view from Lagos
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://www.tandfonline.com/doi/full/10.1080/23748834.2020.1806459"
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
                    December 2019
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://d1wqtxts1xzle7.cloudfront.net/96662093/Influence_of_Housing_Attributes_on_Housing_Satisfaction_in_Selected_Residential_Areas_of_Ogun_State_Nigeria-libre.pdf?1672609787=&response-content-disposition=inline%3B+filename%3DInfluence_of_Housing_Attributes_on_Housi.pdf&Expires=1695127449&Signature=UC6TQJoBIVjeEllGsuz5jz56B1zWUdLVTdz5BV5YQJ3KYvxCa-tVWKZKkNpKWgltSGXMLuj5cfT8~E4R0aH6wgW-lmtEZ5ewt9pLuB-B73M495uilGsbjiE-8QnCTS1kfF7eUt29pRKlHUYI4JKOMZyjrbkh16HLCzXNw5kOubH44lmUJNjssl0CJ4F29JXzrw8LU-nNaVyI1L0D5CIHxGuTil9iMPKamVdN5A9rpYmsvWUQC-3lKQzE6BGvGy-o7kGi-B4kPtLmHrM5ubBYxM0t0FRqlHmXVeJM34kja~Y~0xbzKgjvtsxqAgXqXYKOlvhVkCsvTK4LZztOqqMaAQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
                      target="_blank"
                    >
                      Influence of Housing Attributes on Housing Satisfaction in
                      Selected Residential Areas of Ogun State, Nigeria
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://d1wqtxts1xzle7.cloudfront.net/96662093/Influence_of_Housing_Attributes_on_Housing_Satisfaction_in_Selected_Residential_Areas_of_Ogun_State_Nigeria-libre.pdf?1672609787=&response-content-disposition=inline%3B+filename%3DInfluence_of_Housing_Attributes_on_Housi.pdf&Expires=1695127449&Signature=UC6TQJoBIVjeEllGsuz5jz56B1zWUdLVTdz5BV5YQJ3KYvxCa-tVWKZKkNpKWgltSGXMLuj5cfT8~E4R0aH6wgW-lmtEZ5ewt9pLuB-B73M495uilGsbjiE-8QnCTS1kfF7eUt29pRKlHUYI4JKOMZyjrbkh16HLCzXNw5kOubH44lmUJNjssl0CJ4F29JXzrw8LU-nNaVyI1L0D5CIHxGuTil9iMPKamVdN5A9rpYmsvWUQC-3lKQzE6BGvGy-o7kGi-B4kPtLmHrM5ubBYxM0t0FRqlHmXVeJM34kja~Y~0xbzKgjvtsxqAgXqXYKOlvhVkCsvTK4LZztOqqMaAQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
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
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2019</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[15px] leading-[150%]">
                    <a
                      href="https://istgeorelint.uoradea.ro/Reviste/Anale/Art/2019-1/auog.291110-785.pdf"
                      target="_blank"
                    >
                      CHALLENGES TO INCREMENTAL HOUSING DEVELOPMENT IN IBADAN
                      MUNICIPALITY
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://istgeorelint.uoradea.ro/Reviste/Anale/Art/2019-1/auog.291110-785.pdf"
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
                  href="https://orcid.org/0000-0002-0072-0791"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Orcid Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://scholar.google.com/citations?user=ybtb2dn34YsC&hl=en"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Google Scholar Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.researchgate.net/profile/Victor-Onifade"
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
                  2015
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Best Course Adviser -Urban and Regional Planning Student
                  Association
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Lagos
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2005
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Certificate of Commendation Imo State (Second – Tier)
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  National Youth Service Corp, Nigeria
                </p>
              </div>
            </article>
            <article className={tab2 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <p>Housing</p>
                <p>Urban and Environmental Management</p>
              </div>
            </article>
            <article className={tab3 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <Activities text="Community service" icon="community" />
                <Activities text="Visiting" icon="travel" />
                <Activities text="Religious activities" icon="church" />
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
                    2015
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Best Course Adviser -Urban and Regional Planning Student
                    Association
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    University of Lagos
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-[#ADABAB] text-[12px] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                    2005
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Certificate of Commendation Imo State (Second – Tier)
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    National Youth Service Corp, Nigeria
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
                  <p>Housing</p>
                  <p>Urban and Environmental Management</p>
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
                <div className="flex flex-col gap-2 text-[#090302] text-[12px] leading-[150%]">
                  <p>Community service</p>
                  <p>Visiting</p>
                  <p>Religious activities</p>
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
                  <a href="mailto:vonifade@unilag.edu.ng">Send an E-mail</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Fade;
