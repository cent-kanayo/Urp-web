import React from 'react';
import NumberBox from '../Resuables/NumberBox';
import HODDark from '../../assets/fra.png';
import HODLight from '../../assets/Fram.png';
import Journal from '../../assets/journals.png';

import Spotlight from '../Resuables/Spotlight';
import Events from '../Resuables/Events';
import Cta from '../Resuables/Cta';
import Contact from '../Resuables/Contact';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Home = () => {
  document.title = 'URP UNILAG';
  return (
    <main>
      <section className="hero-bg text-center py-[204.5px]">
        <div className="flex justify-center items-center gap-x-[126px]">
          <span className="border-[2px] border-[#F0C808] p-2">
            <ArrowBackIosNewOutlinedIcon htmlColor="white" fontSize="small" />
          </span>
          <div className="w-[709px] h-143px] bg-[#090302] py-6 px-10 flex flex-col justify-between gap-10 items-center">
            <p className="text-[24px] text-[#F0C808] font-medium leading-[150%]">
              Where Innovation Meets Excellence!
            </p>
            <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[40px] font-bold text-[#F5FFF6]">
              Urban & Regional Planning
            </h1>
          </div>
          <span className="border-[2px] border-[#F0C808] p-2">
            <ArrowForwardIosOutlinedIcon htmlColor="white" fontSize="small" />
          </span>
        </div>
      </section>
      <section className="grid place-items-center">
        <div>
          <h3 className="text-[20px] text-center text-[#03312E] my-[80px] leading-[150%] w-[713px] mx-auto">
            Giving definition to an undefined world, Welcome to URP, <br />
            where standards are created.
          </h3>
          <div className="flex justify-between w-[1120px] mx-auto">
            <NumberBox
              text="urban"
              heading="#1"
              sub="Different spaces designed annually"
              color="green"
            />
            <NumberBox
              text="creative"
              heading="11th"
              sub="Different spaces designed annually "
              color="yellow"
            />
            <NumberBox
              text="innovate"
              heading="16"
              sub="We lead the way with innovation"
              color="orange"
            />
            <NumberBox
              text="diverse"
              heading="320"
              sub="Our students and staff come from diverse communities"
              color="red"
            />
          </div>
        </div>
      </section>
      <section className="my-[80px] py-[80px]">
        <div className="relative h-[800px]">
          <div className="absolute h-[100%] left-0 w-[50%]">
            <img
              src={HODLight}
              alt=""
              className="block w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="absolute h-[100%] right-0 w-[50%]">
            <img
              src={HODDark}
              alt=""
              className="block w-[100%] h-[100%] object-cover"
            />
          </div>
          <div>
            <div className="bg-[#FDFFFD] px-10 py-6 lg:absolute lg:left-[48%] lg:top-[251px] w-[540px] gap-6 flex flex-col border-l-[4px] border-[#57A0A0] rounded-[4px]">
              <div className="flex items-end gap-x-4">
                <h2 className="text-[#011717] text-[36px] font-bold capitalize underline underline-offset-[10px]">
                  Dr. Odunayo
                </h2>
                <p className="translate-y-2">HOD</p>
              </div>
              <p className="text-[14px] leading-[150%]">
                I would like to express my pride of belonging to the Department
                of Urban and Regional Planning, Faculty of Environmental
                Science, University of Lagos. It is taught in a few and highly
                elitist universities in Nigeria, hence the need to meet
                universal standards to master the requisite skills of
                architectural design. Since its foundation....
              </p>
              <div>
                <button className="bg-[#57A0A0] px-6 py-2 rounded-[2px] text-[#F5FFF6]">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Spotlight />
      <section className="mt-[160px] h-[404px] journal flex items-center">
        <div className="flex-1 h-[100%]">
          <img src={Journal} alt="" className="block h-[100%]" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="w-[564px] flex flex-col gap-6">
            <h2 className="text-[#F5FFF6] text-[40px] font-bold">
              Introducing The Journal
            </h2>
            <p className="text-[#FDFFFD] text-[14px] leading-[150%]">
              A compilation of literary works born from years of research and
              placeholder text till our design gets a writer .Faculty of
              Environmental Science, University of Lagos. It is taught in a few
              and highly elitist universities in Nigeria, hence the need to meet
              universal standards to master the requisite skills of
              architectural design. Since its foundation...
            </p>
            <div>
              <button className="capitalize bg-[#F5FFF6] text-[#010A09] rounded-[2px] px-8 py-2 text-[] hover:animate-pulse">
                get access
              </button>
            </div>
          </div>
        </div>
      </section>

      <Events />
      <section className="mt-[80px] h-[404px] bg-[#5B5756] flex items-center">
        <div className="flex-1 h-[100%]">
          <img src={Journal} alt="" className="block h-[100%]" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="w-[564px] flex flex-col gap-6">
            <h2 className="text-[#F5FFF6] text-[40px] font-bold">
              Innovative research hubs
            </h2>
            <p className="text-[#FDFFFD] text-[14px] leading-[150%]">
              A compilation of literary works born from years of research and
              placeholder text till our design gets a writer .Faculty of
              Environmental Science, University of Lagos. It is taught in a few
              and highly elitist universities in Nigeria, hence the need to meet
              universal standards to master the requisite skills of
              architectural design. Since its foundation...
            </p>
            <div>
              <button className="capitalize bg-[#F5FFF6] text-[#010A09] rounded-[2px] px-8 py-2 text-[] hover:animate-pulse">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default Home;
