import { useEffect, useRef } from 'react';
import RQ from '../../assets/quoteR.png';
import LQ from '../../assets/quoteL.png';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Nwa from '../../assets/lecturers/Ldeju.png';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import BookCover from '../../assets/mainDesktop/bookCover.png';
const Deju = () => {
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
            src={Nwa}
            alt="Our HOD"
            className="h-[600px] w-[100%] object-cover"
          />
        </div>
        <div className="flex-1 bg-[#7F554C] flex justify-center items-center">
          <div className="w-[525px] mx-auto">
            <div className="flex">
              <img src={LQ} alt="" />
            </div>
            <p className="text-white text-[20px] leading-[150%] my-[59px]">
              Professor Leke Oduwaye is well-known for his deep appreciation of
              knowledge sharing and his unwavering commitment to fostering an
              environment of mutual respect among colleagues and peers
            </p>
            <div className="flex justify-end">
              <img src={RQ} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px]">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[20px]">Prof. Immaculata I.C. NWOKORO</h5>
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
                  <p className="text-[#7C8A83] mb-[28px]">May 2015</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://www.ceeol.com/search/article-detail?id=330196"
                      target="_blank"
                    >
                      Urban Sprawl and Loss of Agricultural Land in Peri-urban
                      Areas of Lagos
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
                  <p className="text-[#7C8A83] mb-[28px]">2011</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://ir.unilag.edu.ng/handle/123456789/7764"
                      target="_blank"
                    >
                      Factors influencing the quality of rail transport services
                      in metropolitan Lagos
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
                  <p className="text-[#7C8A83] mb-[28px]">2009</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://doi.org/10.1080/23792949.2017.1399804"
                      target="_blank"
                    >
                      Challenges of sustainable physical planning and
                      development in metropolitan Lagos
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
                  <p className="text-[#7C8A83] mb-[28px]">December 1998</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px] leading-[150%]">
                    <a
                      target="_blank"
                      href="https://doi.org/10.1080/23792949.2017.1399804"
                    >
                      Urban landscape planning experience in Nigeria
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
                <span className="text-[14px]">Call Professor Nwokoro</span>
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

export default Deju;
