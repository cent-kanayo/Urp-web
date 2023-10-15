import { useEffect, useRef } from 'react';

import Contact from '../Resuables/Contact';
import LeftIcon from '../../assets/AL.png';
import RightIcon from '../../assets/AR.png';

const SingleProject = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[80px] h-[600px] bg-[#02211F] justify-center items-center">
        <div className="-translate-x-32">
          <h1 className="text-[4rem] font-bold text-white">Project</h1>
          <p className="text-[20px] text-white">By Muyiwa Ibrahim</p>
        </div>
      </section>
      <section className="mt-[120px] max-w-[1119px] mx-auto">
        <div>
          <h2 className="text-[40px] text-[#011717] font-bold mb-6">
            Revolutionary Transport Infrastructure
          </h2>
          <p className="text-[20px] mb-[56px] max-w-[877px]">
            Witness the groundbreaking research projects that are shaping the
            world of urban and regional planning. Our passionate team is pushing
            the boundaries of innovation, creating cutting-edge solutions for
            modern cities!
          </p>
        </div>
      </section>
      <section className="mt-[80px] max-w-[1119px] mx-auto bg-[#D4CDCD] h-[664px]"></section>
      <section className="mt-[80px] max-w-[1119px] mx-auto bg-white">
        <div>
          <article className="flex items-center mb-10">
            <span className="w-[130px] text-[16px]">Title:</span>
            <span className="text-[20px] text-[#090302]">
              Revolutionary Transport Infrastructure
            </span>
          </article>
          <article className="flex items-center mb-10">
            <span className="w-[130px] text-[16px]">Land Area:</span>
            <span className="text-[20px] text-[#090302]">8000 hectares</span>
          </article>
          <article className="flex items-center mb-10">
            <span className="w-[130px] text-[16px]">Land Area:</span>
            <span className="text-[20px] text-[#090302]">8000 hectares</span>
          </article>
          <article className="flex items-start mb-10">
            <span className="w-[130px] text-[16px]">Lecturers-in-charge:</span>
            <span className="text-[20px] text-[#090302] w-[320px] leading-[150%]">
              Muyiwa Ibrahim, Muyiwa Ibrahim, Muyiwa Ibrahim Muyiwa Ibrahim,
            </span>
          </article>
          <article className="flex items-start mb-10">
            <span className="w-[130px] text-[16px]">Group Members:</span>
            <span className="text-[20px] text-[#090302] w-[469px] leading-[150%]">
              Muyiwa Ibrahim, Muyiwa Ibrahim, Muyiwa Ibrahim Muyiwa Ibrahim,
              Muyiwa Ibrahim, Muyiwa Ibrahim
            </span>
          </article>
          <article className="flex items-center">
            <span className="w-[130px] text-[16px]">Date:</span>
            <span className="text-[20px] text-[#090302]">16-08-2020</span>
          </article>
        </div>
      </section>
      <section className="max-w-[1119px] mx-auto bg-white mt-[80px]">
        <div>
          <div className="max-w-[1112px] mx-auto bg-white">
            <div className="bg-[#D4CDCD] h-[600px] mb-6"></div>
            <p className="text-[#5B5756] text-[14px]">Base Map</p>
            <div className="flex justify-between items-center mt-[40px]">
              <span>
                <img src={LeftIcon} alt="left toggle button" />
              </span>
              <span>
                <img src={RightIcon} alt="right toggle button" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[80px] bg-white py-[45px]">
        <div className="max-w-[877px] mx-auto text-[20px] text-[#1B1B1B] leading-[150%]">
          <p className="mb-6">
            As a lecturer, Ms. Odekunle excels in imparting knowledge with
            enthusiasm and dedication. She employs a student-centered approach,
            engaging her students in practical exercises and real-world case
            studies, allowing them to gain a deeper understanding of the complex
            challenges faced by urban environments.
          </p>
          <p>
            Her research interests span a wide range of topics, including
            sustainable urbanization, smart city initiatives, participatory
            planning, and resilient urban design. Driven by a desire to bridge
            the gap between academia and practice, she actively collaborates
            with local authorities, NGOs, and industry professionals to
            implement innovative solutions to urban issues.
          </p>
        </div>
      </section>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default SingleProject;
