import { useEffect, useState } from 'react';
import P1 from '../../assets/mainDesktop/p1.png';
import Contact from '../Resuables/Contact';
import LeftIcon from '../../assets/AL.png';
import RightIcon from '../../assets/AR.png';
import { projectImages } from '../data';

const SingleProject = () => {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(projectImages[index]);
  useEffect(() => {
    setImage(projectImages[index]);
  }, [index]);

  return (
    <main>
      <section className="flex mb-[80px] h-[320px] md:h-[600px] bg-[#02211F] justify-center items-center">
        <div className="w-full h-full">
          <img src={P1} alt="" className="w-full h-full object-cover" />
        </div>
      </section>
      <section className="mt-[64px] lg:mt-[120px] max-w-[1119px] mx-auto px-6 lg:px-0">
        <div>
          <h2 className="text-[24px] max-w-[737px] lg:text-[40px] text-[#011717] font-bold mb-6">
            Urban Renewal Project/ Development of University Land
          </h2>
          <p className="text-[12px] lg:text-[20px] mb-[56px] max-w-[877px]">
            Witness the groundbreaking research projects that are shaping the
            world of urban and regional planning. Our passionate team is pushing
            the boundaries of innovation, creating cutting-edge solutions for
            modern cities!
          </p>
        </div>
      </section>
      <section className="mt-[64px] lg:mt-[80px] max-w-[1119px] mx-auto h-[240px] lg:h-[664px] px-6 lg:px-0">
        <div className="w-full h-full">
          <img src={projectImages[4]} alt="" className="w-full h-full" />
        </div>
      </section>
      <section className="mt-[64px] lg:mt-[80px] max-w-[1119px] mx-auto bg-white px-6 lg:px-0">
        <div>
          <article className="flex items-center mb-10">
            <span className="w-[130px] text-[12px] lg:text-[16px]">Title:</span>
            <span className="text-[14px] lg:text-[20px] text-[#090302]">
              URBAN RENEWAL OF ABULE-OJA COMMUNITY
            </span>
          </article>
          <article className="flex items-center mb-10">
            <span className="w-[130px] text-[12px] lg:text-[16px]">
              Land Area:
            </span>
            <span className="text-[14px] lg:text-[20px] text-[#090302]">
              29.72 Hectares
            </span>
          </article>

          <article className="flex items-start mb-10">
            <span className="w-[130px] text-[12px] lg:text-[16px]">
              Lecturers-in-charge:
            </span>
            <span className="text-[14px] lg:text-[20px] text-[#090302]  leading-[150%]">
              MProf. T.I. Lawanson, Dr. V.U Ilechukwu, Dr. S.A Adeyemi, Dr. T.I
              Salau
            </span>
          </article>
          <article className="flex items-start mb-10">
            <span className="w-[130px] text-[12px] lg:text-[16px]">
              Group Members:
            </span>
            <span className="text-[14px] lg:text-[20px] text-[#090302]  leading-[150%]">
              Prof. T.I. Lawanson, Dr. V.U Ilechukwu, Dr. S.A Adeyemi, Dr. T.I
              Salau
            </span>
          </article>
          <article className="flex items-center">
            <span className="w-[130px] text-[12px] lg:text-[16px]">Date:</span>
            <span className="text-[14px] lg:text-[20px] text-[#090302]">
              16-08-2020
            </span>
          </article>
        </div>
      </section>
      <section className="max-w-[1119px] mx-auto bg-white mt-[64px] lg:mt-[80px] px-6 lg:px-0">
        <div>
          <div className="max-w-[1112px] mx-auto bg-white">
            <div className="bg-[#D4CDCD] h-[240px] lg:h-[600px] mb-6">
              <div className="w-full h-full">
                <img src={image} alt="" className="w-full h-full" />
              </div>
            </div>
            <p className="text-[#5B5756] text-[12px] lg:text-[14px]">
              Base Map
            </p>
            <div className="flex justify-between items-center mt-[40px]">
              <span
                role="button"
                onClick={() =>
                  setIndex((prev) =>
                    prev <= 0 ? projectImages.length - 1 : prev - 1
                  )
                }
                className="hover:animate-pulse"
              >
                <img
                  src={LeftIcon}
                  alt="left toggle button"
                  className="w-[32px] lg:w-auto h-[32px] lg:h-auto"
                />
              </span>
              <span
                role="button"
                onClick={() =>
                  setIndex((prev) =>
                    prev >= projectImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="hover:animate-pulse"
              >
                <img
                  src={RightIcon}
                  alt="right toggle button"
                  className="w-[32px] lg:w-auto h-[32px] lg:h-auto"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[64px] lg:mt-[80px] bg-white py-[45px] px-6 lg:px-0">
        <div className="max-w-[877px] mx-auto text-[12px] lg:text-[20px] text-[#1B1B1B] leading-[150%]">
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
      <Contact h2="For more enquiries" />
    </main>
  );
};

export default SingleProject;
