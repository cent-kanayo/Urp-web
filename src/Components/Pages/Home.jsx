import React from 'react';
import NumberBox from '../Resuables/NumberBox';
import HOD from '../../assets/hod.png';

import SpotlightBox from '../Resuables/SpotlightBox';
import Spotlight from '../Resuables/Spotlight';
import Events from '../Resuables/Events';
import Cta from '../Resuables/Cta';
import Contact from '../Resuables/Contact';

const Home = () => {
  document.title = 'URP UNILAG';
  return (
    <main>
      <section className="hero-bg text-center grid place-items-center">
        <h1 className="home-h1 text-[4rem]">
          Welcome to the department of <br /> urban & regional planning
        </h1>
      </section>
      <section className="grid place-items-center">
        <div>
          <h3 className="typo-3 text-center text-[#03312E] mt-[100px]">
            Giving definition to an undefined world, Welcome to URP, <br />
            where standards are created.
          </h3>
          <div className="flex justify-center gap-16 mt-[100px]">
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
          <div className="about flex relative mt-[200px]">
            <div className="flex-1">
              <img src={HOD} alt="Image of the HOD" />
            </div>
            <div className="about-box -translate-x-[100px] place-self-end">
              <h2 className="text-[#011717] text-[2.5rem] font-bold capitalize underline underline-offset-[10px]">
                About Urp
              </h2>
              <p className="text-[1.25rem] leading-[150%]">
                I would like to express my pride of belonging to the Department
                of Urban and Regional Planning, Faculty of Environmental
                Science, University of Lagos. It is taught in a few and highly
                elitist universities in Nigeria, hence the need to meet
                universal standards to master the requisite skills of
                architectural design. Since its foundation....
              </p>
              <button className="capitalize text-white p-[8px] login-btn shadow-md">
                learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[200px] journal">
        <div className="journal-div text-center">
          <h2 className="h2">Introducing The Journal</h2>
          <p>
            A compilation of literary works born from years of research and
            placeholder text till our design gets a writer .Faculty of
            Environmental Science, University of Lagos. It is taught in a few
            and highly elitist universities in Nigeria, hence the need to meet
            universal standards to master the requisite skills of architectural
            design. Since its foundation...
          </p>
          <button className="capitalize bg-[#F5FFF6] rounded-md px-8 py-2 text-[] hover:animate-pulse">
            get access
          </button>
        </div>
      </section>
      <Spotlight />
      <Events />
      <Cta
        h2="cutting-edge research hubs"
        btn="learn more"
        p="A compilation of literary works born from years of research and placeholder text till our design gets a writer .Faculty of Environmental Science, University of Lagos. It is taught in a few and highly elitist universities in Nigeria, hence the need to meet universal standards to master the requisite skills of architectural design. Since its foundation..."
      />
      <Contact />
    </main>
  );
};

export default Home;
