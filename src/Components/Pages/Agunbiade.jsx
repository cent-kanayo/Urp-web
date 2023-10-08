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

import AG from '../../assets/lecturers/agunbiade.webp';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import BookCover from '../../assets/mainDesktop/bookCover.png';
const Agunbiade = () => {
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
            src={AG}
            alt="Our HOD"
            className="h-[600px] w-[100%] object-cover"
          />
        </div>
        <div className="flex-1 bg-[#192C69] flex justify-center items-center">
          <div className="w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" />
            </div>
            <p className="text-white text-[20px] leading-[150%] my-[59px]">
              Muyiwa Agunbiade is a visionary with a creative and innovative
              approach. He's all about using technology to make our communities
              smarter and more eco-friendly. It's his passion to create
              sustainable human settlements that are both innovative and good
              for the environment.
            </p>
            <div className="flex justify-end">
              <img src={RQ} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px]">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[20px]">Dr. Muyiwa E. AGUNBIADE</h5>
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
            Dr. Agunbiade is a Town Planner and a Geo Spatial Data Specialist.
            He is currently an Associate Professor and the Head of Department
            Urban and Regional Planning at the University of Lagos and Cluster
            Lead, Spatial Data Infrastructure, Centre for Housing and
            Sustainable Development, University of Lagos.
          </p>
          <p>
            He had his first degree in Urban and Regional Planning from OAU Ife,
            and post-graduate degrees in Geographic Information Systems and
            Urban and Regional Planning from Ibadan. He completed his Ph.D. in
            2013 at the University of Melbourne, Australia in Infrastructure
            Engineering specializing in Spatial Data Infrastructure and Land
            Administration. He is a member of NITP and a registered Planner with
            Town Planners Registration Council (TOPREC). He is one of the
            founding members of Global Spatial Data Infrastructure (GSDI).
          </p>
          <p>
            Dr. Agunbiade has worked in various capacities, for three decades,
            with private consulting firms; government establishments in Nigeria,
            United Kingdom, and Australia; as well as corporate organizations
            and development agencies like Partnership for African Social and
            Governance Research (PASGR), DFID, United Nations, the World Bank,
            and Foreign Commonwealth Office - FCO.
          </p>
          <p>
            He has contributed to the body of knowledge in Urban Planning and
            Land Administration through several local and international
            publications in Journals, Newsletters, and Books chapters and has
            visited all the continents of the world attending seminars,
            conferences, and workshops.
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
                <div className="absolute top-[74px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">November 2018</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://doi.org/10.1016/j.compenvurbsys.2018.06.009"
                      target="_blank"
                    >
                      An ontology-based spatial data harmonisation for urban
                      analytics
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
                    <p>
                      <a
                        href="https://doi.org/10.1016/j.compenvurbsys.2018.06.009"
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
                <div className="absolute top-[74px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">November 2018</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://doi.org/10.1016/j.jum.2018.03.001"
                      target="_blank"
                    >
                      The realities of Lagos urban development vision on
                      livelihoods of the urban poor
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
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
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[74px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">November 2018</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://doi.org/10.1080/23792949.2017.1399804"
                      target="_blank"
                    >
                      Land governance and megacity projects in Lagos, Nigeria:
                      the case of Lekki Free Trade Zone
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
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
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[74px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">November 2018</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[15px] leading-[150%]">
                    <a
                      target="_blank"
                      href="https://doi.org/10.1080/23792949.2017.1399804"
                    >
                      Modes of housing production in developing countries: the
                      contemporary role of land, labour, and capital in Lagos,
                      Nigeria
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
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
            <article className="hidden" ref={refB2}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <p>Spatial Data Infrastructure and Land Administration</p>
                <p>Housing</p>
                <p>GIS application</p>
                <p>Urban Analytics</p>
              </div>
            </article>
            <article className="hidden" ref={refB3}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <p>Reading</p>
                <p>Volleyball</p>
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
                <span className="text-[14px]">Call Dr. Agunbiade</span>
              </div>
              <div className="bg-[#1B1B1B] rounded-[2px] px-6 py-2 flex items-center gap-x-2">
                <span>
                  <MarkunreadOutlinedIcon htmlColor="white" />
                </span>
                <span className="text-[#FDFFFD] text-[14px] underline hover:animate-pulse">
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

export default Agunbiade;
