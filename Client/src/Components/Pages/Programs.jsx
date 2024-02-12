import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useEffect, useRef, useState } from 'react';

const Programs = () => {
  const [arrowUp1, setArrowUp1] = useState(false);
  const [arrowUp2, setArrowUp2] = useState(false);
  const [arrowUp3, setArrowUp3] = useState(false);
  const [arrowUp4, setArrowUp4] = useState(false);
  const [arrowUp5, setArrowUp5] = useState(false);
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
      setArrowUp2((prev) => !prev);
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
      ref4.current.classList.remove('programs-show');
      ref5.current.classList.remove('programs-show');
      ref7.current.classList.remove('programs-show');
      ref2.current.classList.remove('programs-show');
      setArrowUp6((prev) => !prev);
      setArrowUp1(false);
      setArrowUp3(false);
      setArrowUp4(false);
      setArrowUp5(false);
      setArrowU7(false);
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
      setArrowUp6((prev) => !prev);
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
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[80px] programs-bg">
        <div className="flex-1"></div>
      </section>
      <section className="max-w-[800px] mx-auto px-6 lg:px-0">
        <h3 className="text-center text-[32px] lg:text-[40px] font-[600] mb-6">
          Programmes
        </h3>
        <div className="text-[12px] lg:text-[18px] leading-[150%] flex flex-col gap-6">
          <p>
            Urban and Regional Planning is concerned with variety of activities
            aimed at shaping the pattern of human settlements. The art of
            planning is concerned with making choices about future options,
            taking into account probabilities and values of what may be achieved
            and then securing the implementation of the chosen option. The main
            challenge facing planning education in Nigeria today is the
            non-availability of deeper insight into the nature of the
            increasingly complex environmental problems. This will require
            training within the urban environment which can only best be
            achieved through postgraduate studies.
          </p>
          <p>
            There is a need to explore new ideas, concepts and paradigms based
            on our local environment and experience. The knowledge required to
            deal with the magnitude of our urban and regional planning problems
            require deeper understanding of the nature of these problems. The
            solution is the training of Nigerian at the graduate level. The
            professional masters programme is therefore committed to the
            training and research at higher levels than the knowledge required
            at undergraduate level.
          </p>
          <p>
            The ever-increasing rates of both rural and urban development have
            necessitated the provisions of basic infrastructure and other
            facilities to alleviate the problems of urbanization.
          </p>
          <p>
            The increasing pressure for planning and development has resulted
            into shortage of qualified planners to cope with the framework of
            the general and specific concern of the urban and regional planning.
            This programme is therefore designed to give full training in the
            areas of theory, research and practice. The programme is also
            planned to meet the needs of students intending to become
            effectively and efficiently involved in the planning profession.
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
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
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
              {arrowUp1 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref1} className="programs-hide max-w-[750px] mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B] mb-6">
              The discipline of Urban and Regional Planning faces increasingly
              complex challenges. Addressing these issues requires a profound
              understanding of theoretical and conceptual aspects, achievable
              through advanced research, particularly in a Doctor of Philosophy
              (Ph.D.) program. The philosophy of this program is to deepen
              insights into Urban and Regional Planning research, aiming to
              tackle intricate planning problems globally, including in Nigeria.
            </p>
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Essentially, the program's purpose is to cultivate high-caliber
              professionals in planning research and teaching. Graduates will
              adeptly handle local and international challenges in Urban and
              Regional Planning, emphasizing learning, character, ethics, and
              leadership for the advancement of knowledge and research in the
              field.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('2')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
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
              {arrowUp2 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref2} className="programs-hide max-w-[750px] mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              The field of Urban and Regional Planning faces increasingly
              complex challenges. To address these issues, a comprehensive
              understanding of theoretical and conceptual aspects is essential.
              The Master of Philosophy (M.Phil.) program is designed to offer
              advanced research opportunities, aiming to deepen insights into
              Urban and Regional Planning. The program's philosophy is centered
              on equipping individuals to tackle intricate planning problems in
              Nigeria and globally. Its objective is to cultivate high-caliber
              professionals proficient in planning research and teaching,
              capable of addressing both local and international challenges in
              the field. Graduates are expected to exhibit a strong focus on
              continuous learning, ethical conduct, and leadership in advancing
              knowledge and research within Urban and Regional Planning.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('3')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
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
              {arrowUp3 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref3} className="programs-hide max-w-[750px] mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Rapid rural and urban development demands increased infrastructure
              and facilities to address urbanization challenges. However, the
              shortage of qualified planners poses a challenge in meeting
              planning and development needs. This program offers comprehensive
              training in theory, research, and practice to equip students for
              effective participation in the planning profession. The philosophy
              emphasizes a profound understanding of urban and regional planning
              phenomena, aiming to produce graduates highly skilled in research,
              theory application, and leading advancements in planning education
              and practice. Graduates are expected to embody excellence in
              learning, character, ethics, and a strong commitment to serving
              humanity.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('4')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
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
              {arrowUp4 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref4} className="programs-hide max-w-[750px] mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B] mb-6">
              Urban and Regional Planning involves shaping human settlements by
              making informed choices about future options and ensuring the
              implementation of chosen plans. In Nigeria, planning education
              faces a challenge due to a lack of in-depth understanding of
              complex environmental issues, emphasizing the need for
              postgraduate studies within the urban environment.
            </p>
            <p className="max-w-[900px] text-[14px] text-[#050202] mb-6">
              To address this, the professional master's program focuses on
              exploring new ideas rooted in the local context, aiming to deepen
              the understanding of urban and regional planning problems. The
              solution lies in graduate-level training, providing the knowledge
              necessary to tackle these challenges effectively.
            </p>
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Graduates of the program receive recognition from the Nigerian
              Institute of Town Planners and the Town Planners Registration
              Council of Nigeria. The Master's program's philosophy is to
              produce highly skilled town planners capable of solving
              contemporary planning and development problems, adapting their
              knowledge to both local and international contexts. Graduates are
              expected to excel in learning, character, and ethics, with a
              strong sense of service to humanity.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('5')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
                Master of Urban Logistics and Transport Policy (MULT)
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Postgraduate, Part-time
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Postgraduate, Part-time
              </span>
              {arrowUp5 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref5} className="programs-hide max-w-[750px] mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B] mb-6">
              The discipline of Urban and Regional Planning faces increasingly
              complex challenges. Addressing these issues requires a profound
              understanding of theoretical and conceptual aspects, achievable
              through advanced research, particularly in a Doctor of Philosophy
              (Ph.D.) program. The philosophy of this program is to deepen
              insights into Urban and Regional Planning research, aiming to
              tackle intricate planning problems globally, including in Nigeria.
            </p>
            <p className="max-w-[900px] text-[14px] text-[#050202] mb-6">
              Essentially, the program's purpose is to cultivate high-caliber
              professionals in planning research and teaching. Graduates will
              adeptly handle local and international challenges in Urban and
              Regional Planning, emphasizing learning, character, ethics, and
              leadership for the advancement of knowledge and research in the
              field.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('6')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
                Master in Urban Management (MUM)
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Postgraduate, Part-time
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Postgraduate, Part-time
              </span>
              {arrowUp6 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref6} className="programs-hide max-w-[750px] mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              The challenges faced by Urban and Regional Planning are becoming
              more intricate, demanding a heightened understanding of
              theoretical and conceptual issues. To address these complexities,
              our Master of Philosophy (M.Phil.) and Doctor of Philosophy
              (Ph.D.) programs are designed to facilitate advanced research. The
              philosophy behind these programs is to deepen insights into Urban
              and Regional Planning research, ultimately contributing to
              solutions for the increasingly complex planning issues in Nigeria
              and globally.
            </p>
          </div>
        </div>
        <div
          className="mb-6 py-3 px-6 bg-[#FAFAFA]"
          role="button"
          onClick={() => onDropdownClicked('7')}
        >
          <div className="flex justify-between items-center">
            <span className="flex flex-col">
              <span className="text-[20px] text-[#1B1B1B]">
                Bachelor of science in Urban and Regional Planning
              </span>
              <span className="text-[12px] text-[#5B5756] lg:hidden">
                Degree, Undergraduate
              </span>
            </span>

            <span className="flex items-center space-x-6">
              <span className="text-[14px] text-[#5B5756] hidden lg:block">
                Degree, Undergraduate
              </span>
              {arrowUp7 ? (
                <KeyboardArrowUpOutlinedIcon htmlColor="#5b5756" />
              ) : (
                <KeyboardArrowDownOutlinedIcon htmlColor="#5b5756" />
              )}
            </span>
          </div>
          <div ref={ref7} className="programs-hide max-w-[750px] mt-6">
            <p className="max-w-[900px] text-[14px] text-[#1B1B1B]">
              Urban and Regional Planning faces complex challenges, requiring a
              deep understanding of theoretical aspects. The BSc program aims to
              provide advanced research skills for tackling global planning
              problems, with a focus on Nigeria. It trains professionals to
              address local and international issues, fostering commitment to
              learning, ethics, and leadership in Urban and Regional Planning
              research.
            </p>
          </div>
        </div>
      </section>
      <section className="grid place-items-center px-2 lg:px-0 my-[80px] bg-[#CDE3E3] text-[#1B1B1B]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[529px] mx-auto mb-4">
            Send us a mail filler text is a great way to show the size you want
            to have
          </p>
          <button className="px-6 py-2 bg-[#03312E] text-white text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md">
            contact us
          </button>
          <div className="flex justify-center gap-x-5 lg:gap-x-10 lg:px-0">
            <span className="lg:hidden">
              <EmailIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <EmailIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span className="lg:hidden">
              <FacebookIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <FacebookIcon htmlColor="#934B00" fontSize="large" />
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
            <span className="lg:hidden">
              <LinkedInIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <LinkedInIcon htmlColor="#934B00" fontSize="large" />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;
