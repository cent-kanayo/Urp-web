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
const Taibat = () => {
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
      <section className="h-[600px] flex mb-[80px]">
        <div className="flex-1">
          <img
            src={Lawanson}
            alt="Our HOD"
            className="h-[600px] w-[100%] object-cover"
          />
        </div>
        <div className="flex-1 bg-[#1C2954] flex justify-center items-center">
          <div className="w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" />
            </div>
            <p className="text-white text-[20px] leading-[150%] my-[59px]">
              Taibat works at the interface of social complexities, urban
              realities and the pursuit of spatial justice in Africa.
            </p>
            <div className="flex justify-end">
              <img src={RQ} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px]">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[20px]">Prof. Taibat LAWANSON</h5>
          <div className="flex items-center gap-x-6">
            <p className="text-[14px]">1st July,2023</p>
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
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-center text-[32px] font-[600] mb-6">Bio</h3>
        <div className="text-[20px] leading-[150%] flex flex-col gap-6">
          <p>
            Taibat Lawanson is Professor of Urban Management and Governance at
            the University of Lagos. She is co-director at the Centre for
            Housing and Sustainable Development where she leads the Pro-Poor
            Development research cluster. She is also an Associate of the
            Institute of Africa and Diaspora studies. She holds a PhD in Urban
            and Regional Planning from the Federal University of Technology,
            Akure.
          </p>
          <p>
            Her research focuses on the interface of social complexities, urban
            realities and the pursuit of spatial justice in Africa. She is well
            known for her intersectoral approach with engages students, policy
            makers, civil society and local communities.
          </p>
          <p>
            She is is a pioneer World Social Science Fellow of the International
            (Social) Science Council and a proud alumna of the Rockefeller
            Foundation’s Bellagio Academic Residency. She is also a recipient of
            the 2017 DAAD Research Scholarship award for Academics, 2019
            Edinburgh Catalytic fellowship, 2019 Cadbury Academic Fellowship and
            2023 Global Research Fellowship of the Peace Research Institute Oslo
            awards.
          </p>
          <p>
            She serves on the board of directors of the Lagos Studies
            Association, editorial/editorial advisory committees of leading
            urban studies journals including Urban Forum, Urban Studies, Housing
            Studies, International Journal of Urban and Regional Research and
            Area Development and Policy, as well as the steering committee of
            Future Earth Urban Knowledge Action Network and international
            advisory committee of UNHABITAT’s flagship World Cities Report.
          </p>
          <p>
            Professor Lawanson is a registered town planner and fellow of the
            Nigerian Institute of Town planners. She is a member of
            International Society for City and Regional Planners and was Vice
            President of the African Planners Institute (2021 – 2022).
          </p>
        </div>
      </section>
      <section className="h-[680px] bg-[#FAFAFA] py-[52px] my-[80px]">
        <div>
          <h3 className="text-center text-[#011717] text-[32px] font-[600] capitalize mb-[40px]">
            Articles and Research hubs
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex justify-center items-center gap-x-[24px]">
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[68px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">July 2022</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://doi.org/10.1177/00420980211014461"
                      target="_blank"
                    >
                      Urban paradox and the rise of the neoliberal city: Case
                      study of Lagos, Nigeria
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
                    <p>
                      <a
                        href="https://doi.org/10.1177/00420980211014461"
                        target="_blank"
                      >
                        View Publication
                      </a>
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[68px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">July 2021</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://doi.org/10.1080/23748834.2020.1806459"
                      target="_blank"
                    >
                      The urban environment and leisure physical activity during
                      the COVID-19 pandemic: a view from Lagos
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
                    <p>
                      <a
                        href="https://doi.org/10.1080/23748834.2020.1806459"
                        target="_blank"
                      >
                        View Cluster
                      </a>
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[68px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">December 2016</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://doi.org/10.1016/j.jum.2017.01.001"
                      target="_blank"
                    >
                      Assessing smart infrastructure for sustainable urban
                      development in the Lagos metropolis
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
                    <p>
                      <a
                        href="https://doi.org/10.1016/j.jum.2017.01.001"
                        target="_blank"
                      >
                        View Publication
                      </a>
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[68px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">2012</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[15px] leading-[150%]">
                    <a target="_blank" href="10.4314/ejesm.v5i4.9">
                      The Home as Workplace: Investigating Home Based
                      Enterprises in Low Income Settlements of the Lagos
                      Metropolis
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
                    <p>
                      <a href="10.4314/ejesm.v5i4.9" target="_blank">
                        View Publication
                      </a>
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div className="mt-[24px]">
              <p className="mb-4">
                <a
                  href="https://orcid.org/0000-0002-1718-3574"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Orcid Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://scholar.google.com/citations?user=Z2meq_cAAAAJ&hl=en"
                  target="_blank"
                  className="text-[#024B4B] hover:text-[#037171] underline"
                >
                  Google Scholar Link
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.researchgate.net/profile/Muyiwa-Agunbiade"
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
      <section className="my-[80px] bg-white py-[104px] h-[700px]">
        <div className="max-w-[1110px] mx-auto flex justify-between h-[400px]">
          <div className="max-w-[540px] info-box">
            <h3
              className="text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10"
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
                  Global Fellow
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Peace Research Institute, Oslo
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2019
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Edinburgh Catalytic Fellowship
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Centre for African Studies, University of Edinburgh
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2019
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Cadbury Academic Fellowship
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Department of African Studies and Anthropology, University of
                  Birmingham
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2017
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Research Scholarship Award for Academics and Researchers,
                  German Academic Exchange Programme (DAAD)
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Birmingham
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2016
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Fellow: The Rockefeller Foundation
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Bellagio Academic Residency
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2013
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  World Social Science Fellow
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  International Social Science Council
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2012
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Faculty Best Researcher – 1st Position
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Environmental Sciences, University of Lagos, Nigeria
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2011
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Faculty Best Researcher - 1st Position
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Environmental Sciences (LURNet), University of Lagos, Nigeria
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2010
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Faculty Best Researcher – 3rd Position
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Environmental Sciences, University of Lagos, Nigeria
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2009
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Faculty Best Researcher – 2nd Position
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Environmental Sciences, University of Lagos, Nigeria
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2008
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Faculty Best Researcher – Distinguished Researcher
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Environmental Sciences, University of Lagos, Nigeria
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2006
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Faculty Researcher of the Year - Best Researcher
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Environmental Sciences, University of Lagos, Nigeria
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2002
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Chief Peter Nwogu Certificate of Excellence for Best Female
                  Candidate in Professional Planning Practice Registration
                  Examination
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Town Planners Registration Council of Nigeria.
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1993
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  University Scholarship Award for Academic Excellence
                  (200levels) – Federal
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  University of Technology, Akure, Nigeria
                </p>
              </div>
            </article>
            <article className="hidden" ref={refB2}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <p>Urban Management and Governance</p>
                <p>Urban Informality and Sustainable Livelihoods</p>
                <p>Environment and Spatial justice</p>
                <p>Pro-poor Development</p>
              </div>
            </article>
            <article className="hidden" ref={refB3}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <p>Photography</p>
                <p>Running</p>
              </div>
            </article>
          </div>
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
              <div className="border-[#1B1B1B] border-[1px] rounded-[2px] px-6 py-2 flex items-center gap-x-2">
                <span>
                  <PhoneOutlinedIcon htmlColor="black" />
                </span>
                <span className="text-[14px]">Call Professor Lawanson</span>
              </div>
              <div className="bg-[#1B1B1B] rounded-[2px] px-6 py-2 flex items-center gap-x-2">
                <span>
                  <MarkunreadOutlinedIcon htmlColor="white" />
                </span>
                <span className="text-[#FDFFFD] text-[14px] underline hover:animate-pulse">
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

export default Taibat;
