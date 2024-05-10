import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const [arrowUp1, setArrowUp1] = useState(false);
  const [arrowUp2, setArrowUp2] = useState(false);
  const [arrowUp3, setArrowUp3] = useState(false);
  const [arrowUp4, setArrowUp4] = useState(false);
  const [arrowUp5, setArrowUp5] = useState(true);
  const [arrowUp6, setArrowUp6] = useState(false);
  const [arrowUp7, setArrowUp7] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const onDropdownClicked = (tarket) => {
    if (tarket === '1') {
      ref1.current.classList.toggle('programs-show');
      ref2.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      setArrowUp1((prev) => !prev);
      setArrowUp2(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp7(false);
    }
    if (tarket === '2') {
      ref2.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      setArrowUp2((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp7(false);
    }
    if (tarket === '3') {
      ref3.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      setArrowUp3((prev) => !prev);
      setArrowUp1(false);
      setArrowUp2(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp7(false);
    }
    if (tarket === '4') {
      ref4.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      setArrowUp2((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp2(false);
      setArrowUp5(false);
      setArrowUp6(false);
    }
    if (tarket === '5') {
      ref5.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      setArrowUp5((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp2(false);
      setArrowUp6(false);
      setArrowUp7(false);
    }
    if (tarket === '6') {
      ref6.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      setArrowUp6((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp7(false);
      setArrowUp2(false);
    }
    if (tarket === '7') {
      ref7.current.classList.toggle('programs-show');
      ref1.current.classList.remove('programs-show');
      ref3.current.classList.remove('programs-show');
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref6.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      setArrowUp7((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowUp6(false);
      setArrowUp2(false);
    }
  };
  useEffect(() => {
    ref1.current.classList.add('programs-show');
    setArrowUp1(true);
  }, []);
  return (
    <main>
      <section className="flex mb-[80px] programs-bg">
        <div className="flex-1"></div>
      </section>
      <section className="max-w-[800px] mx-auto px-6 lg:px-0">
        <h3 className="text-center text-[32px] lg:text-[40px] font-[600] mb-6">
         Academic Programmes
        </h3>
        <div className="text-[12px] lg:text-[16px] leading-[150%] flex flex-col gap-6">
          <p>
            The Department of Urban and Regional Planning offers seven
            programmes accredited by the Town Planners Registration Council of
            Nigeria. Our programmes aim to produce world-class talents with the
            requisite knowledge and skills for applying foundational planning
            theories to improve the overall quality and efficiency of urban
            areas.
          </p>
          <p>
            Our curriculum is centred around the Planning Studio, practical
            courses aimed at stimulating creativity, deep thinking, and
            collaborations in designing solutions to contemporary and complex
            planning problems in Nigeria, supported by a holistic study of core
            planning concepts of land use, environment, transportation,
            economics and infrastructure which form the underlying framework of
            urban development.  
          </p>
          <p>
            Our teaching style focuses on experiential learning, combining
            classroom activities with field experience. Our courses are designed
            to provide students with opportunities for discussions and reviews
            of real-life case studies and projects, thereby infusing practice
            into the learning structure. Our students emerge as graduates of
            town planning with significant planning and project management
            experience in their portfolios. 
          </p>
          <p>
            Given the large scale of planning projects, our coursework supports
            collaborative study, enabling our students to acquire team-building
            and negotiation skills, which are critical to building successful
            careers in urban planning. We recognise the multidisciplinary nature
            of urban planning, providing a basis for syncretic learning, where
            students can cross-register courses offered by allied departments
            such as architecture, estate management, building, and surveying
            departments. 
          </p>
          <p>
            Graduates of the programme receive recognition from the Nigerian
            Institute of Town Planners, the Town Planners Registration Council
            of Nigeria, and the Young Planners Forum.
          </p>
          <div>
            <p>
              Our degree programmes equip students to shape urban policy and
              urban development in the public and private sectors, pursuing
              careers in areas including:
            </p>
            <ul className="list-disc pl-8 pt-4">
              <li>Consultancy; </li>
              <li>Public Policy;</li>
              <li>Research;</li>
              <li>Non-Governmental Organisations;</li>
              <li>Project Management;</li>
              <li>Urban Development;</li>
              <li>Environmental Protection;</li>
              <li>Urban Renewal.</li>
            </ul>
          </div>
          <p>
            Our students also proceed to advanced studies in reputable
            institutions such as Harvard University, the University of Maryland,
            the University of Melbourne, and Erasmus University, amongst others.
          </p>
        </div>
      </section>
      <section className="max-w-[1248px] mx-auto mt-[80px] px-6 lg:px-0">
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('1')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[14px] lg:text-[20px] text-[#1B1B1B]">
                Bachelor of Science in Urban and Regional Planning
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Undergraduate
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Undergraduate
              </span>
              {arrowUp1 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div
            ref={ref1}
            className="programs-hide max-w-[750px] mt-6 flex flex-col gap-y-4 text-[12px] lg:text-[14px]"
          >
            <p className="max-w-[900px] text-[#1B1B1B] mb-2">
              The Bachelor’s programme in Urban and Regional Planning is
              intended for applicants from a diverse background who are
              passionate about the growth and development of urban areas. This
              degree programme provides a solid foundation for the study of
              urban planning, introducing students to the concept of urban
              development, the intricacies of urban challenges, and the
              interrelationships between humans, nature, and the built
              environment. 
            </p>
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B] mb-2">
              Through studio and course work, students are equipped with an
              understanding of urban areas' physical, economic, social, and
              environmental framework. They are challenged to apply critical
              thinking in problem-solving for the growth and development of
              sustainable, inclusive, and efficient cities. 
            </p>
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              This academic programme combines theory and fieldwork to provide a
              wholesome learning experience that stimulates creativity,
              innovation, and big-picture thinking in addressing urban
              challenges.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('2')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[14px] lg:text-[20px] text-[#1B1B1B]">
                Master of Science in Urban and Regional Planning (MSc)
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Postgraduate, Full-time
              </span>
            </span>
            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Postgraduate, Full-time
              </span>
              {arrowUp2 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div
            ref={ref2}
            className="programs-hide max-w-[750px] mt-6 text-[12px] lg:text-[14px]"
          >
            <p className="max-w-[900px] text-[#1B1B1B]">
              The Master of Science in Urban and Regional Planning is designed
              to provide full training in planning theory, research, and
              practice. Recognising the need for town planners with strong urban
              and regional planning skills to address contemporary urban
              challenges, this programme combines knowledge and skills from
              design practice, urban planning tenets, and infrastructure and
              transportation planning to build graduate town planners at the
              forefront of advancing planning education and practice.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('3')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[14px] lg:text-[20px] text-[#1B1B1B]">
                Master in Urban and Regional Planning (MURP)
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Postgraduate, Part-time
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Postgraduate, Part-time
              </span>
              {arrowUp3 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div
            ref={ref3}
            className="programs-hide max-w-[750px] mt-6 text-[12px] lg:text-[14px]"
          >
            <p className="max-w-[900px] text-[#1B1B1B] mb-6">
              The Master in Urban and Regional Planning emphasises the need for
              graduate-level training to deepen the understanding of urban
              planning and environmental problems within the local context. The
              programme seeks to produce highly skilled town planners capable of
              solving contemporary planning and development problems, adapting
              their knowledge to both local and international contexts. Blending
              integrated lectures, hands-on learning, and experiential practice,
              the MURP Programme enhances an in-depth understanding of complex
              environmental issues and equips students in the exploration and
              design of compatible solutions.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('6')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[14px] lg:text-[20px] text-[#1B1B1B]">
                Master of Urban Logistics and Transport (MULT)
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Postgraduate, Full-time
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Postgraduate, Full-time
              </span>
              {arrowUp6 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div
            ref={ref6}
            className="programs-hide max-w-[750px] mt-6 text-[12px] lg:text-[14px]"
          >
            <p className="max-w-[900px] text-[#1B1B1B] mb-6">
              The Master of Urban Logistics and Transport Policy programme is
              designed to develop capacity in the teaching, practice and
              administration of urban logistics and transport policy in
              Nigeria.  Recognising the crucial role of logistics and transport
              in the economic growth and development of nations, this programme
              is conceptualised to provide knowledge and deepen expertise in the
              field of logistics and transport policy. The program will draw
              from academia, industry practitioners and global practices, home
              and abroad, to provide a platform for research and development in
              the logistics and transport sector aimed at the growth of the
              freight industry in Nigeria and attendant positive impacts on the
              economy.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('7')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[14px] lg:text-[20px] text-[#1B1B1B]">
                Master in Urban Management (MUM)
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Postgraduate, Full-time
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Postgraduate, Full-time
              </span>
              {arrowUp7 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref7} className="programs-hide max-w-[750px] mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B] mb-6">
              The growing recognition of local authorities as an essential
              component of actualising sustainable development has necessitated
              the need for capacity development for stakeholders in public and
              private practice at the municipal scale of development. The Master
              in Urban Management will imbibe graduates with the relevant
              theoretical knowledge, analytical skills and technical experience
              required to understand, address and manage global, national and
              local issues affecting urban communities on behalf of diverse
              urban populations at municipal, regional and global levels.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('4')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[14px] lg:text-[20px] text-[#1B1B1B]">
                Master of Philosophy in Urban and Regional Planning (MPHIL)
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Postgraduate, Full-time
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Postgraduate, Full-time
              </span>
              {arrowUp4 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div
            ref={ref4}
            className="programs-hide max-w-[750px] mt-6 text-[12px] lg:text-[14px]"
          >
            <p className="max-w-[900px] text-[#1B1B1B]">
              The Master of Philosophy (M.Phil.) programme is designed to offer
              advanced research opportunities, aiming to deepen insights into
              Urban and Regional Planning. The programme's philosophy is centred
              on equipping individuals to tackle intricate planning problems in
              Nigeria and globally. Its objective is to cultivate high-calibre
              professionals proficient in planning research and teaching,
              capable of addressing both local and international challenges in
              the field. Graduates can apply continuous learning, ethical
              conduct, and leadership in advancing knowledge and research within
              Urban and Regional Planning.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('5')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[14px] lg:text-[20px] text-[#1B1B1B]">
                Doctor of Philosophy in Urban and Regional Planning (PhD)
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Postgraduate, Full-time
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Postgraduate, Full-time
              </span>
              {arrowUp5 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div
            ref={ref5}
            className="programs-hide max-w-[750px] mt-6 text-[12px] lg:text-[14px]"
          >
            <p className="max-w-[900px] text-[#1B1B1B] mb-6">
              The discipline of Urban and Regional Planning faces increasingly
              complex challenges that require a profound understanding of
              theoretical and conceptual frameworks underlying urban
              development. As metropolitan areas grow and develop over time,
              urban challenges evolve and have become progressively intricate,
              necessitating the need for current and advanced research that
              undertakes a head-on approach to tackling pressing urban
              problems. 
            </p>
            <p className="max-w-[900px] text-[#1B1B1B]">
              The Doctor of Philosophy in Urban and Regional Planning aims to
              increase knowledge and information in Urban and Regional Planning
              research to tackle intricate planning problems globally, including
              Nigeria. It is intended for individuals who have completed a
              postgraduate programme in urban and regional planning and related
              fields and possess strong interests in advancing the practice of
              urban planning through rigorous and contextual academic research.
              The programme aims to cultivate high-calibre professionals
              committed to pursuing knowledge through critical thinking,
              holistic studies, and inferential observations. PhD candidates
              conduct research in several disciplines in Urban and Regional
              Planning, including Planning Infrastructure, Transport Planning,
              GIS, Spatial Data Infrastructure, Urban and Pro-Poor Development,
              etc. 
            </p>
          </div>
        </div>
      </section>
      <section className="grid place-items-center px-4 lg:px-0 my-[80px] bg-[#CDE3E3] text-[#1B1B1B]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[529px] mx-auto mb-4">
          Ready to make a difference and make a meaningful impact?
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-2 bg-[#03312E] text-white text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md"
          >
            contact us
          </Link>
          <div className="flex justify-center gap-x-5 lg:gap-x-10 lg:px-0">
            <span className="lg:hidden">
              <EmailIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <EmailIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span className="lg:hidden">
              <InstagramIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <InstagramIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span className="lg:hidden">
              <TwitterIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <TwitterIcon htmlColor="#934B00" fontSize="large" />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;
