import Journal from '../../assets/journals.png';

import Exco1 from '../../assets/Excos/exco1.png';
import Exco2 from '../../assets/Excos/exco2.png';
import Exco3 from '../../assets/Excos/exco3.png';
import Exco4 from '../../assets/Excos/exco4.png';
import Exco5 from '../../assets/Excos/exco5.png';
import Exco6 from '../../assets/Excos/exco6.png';
import Jet from '../../assets/jet.png';
import Bg from '../../assets/staff1.png';
import Bg1 from '../../assets/staff2.png';
import Bg2 from '../../assets/staff3.png';
import Bg3 from '../../assets/staff4.png';

import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import Excocard from '../Resuables/Excocard';
import Cta from '../Resuables/Cta';
import Contact from '../Resuables/Contact';

import GetHelp from '../Resuables/GetHelp';
const StaffPage = () => {
  return (
    <main>
      <section className="hero-bg text-center py-[204.5px] mb-[80px]">
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
      <section className="mt-[160px] px-4 lg:px-0">
        <div className="flex justify-center mb-[60px] items-center relative">
          <h2 className="text-center text-[2.5rem] text-black font-medium capitalize ">
            administrators
          </h2>
        </div>
        <div className="flex justify-center flex-wrap gap-5 max-w-[1249px] mx-auto">
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco1} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco2} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco3} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco4} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco5} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
        </div>
        <div className="flex items-center justify-center mt-10 lg:hidden">
          <span className="text-[1rem]text-[#010A09] font-medium capitalize ">
            see all
          </span>
          <span>
            <ArrowForwardIosOutlinedIcon htmlColor="#934B00" fontSize="small" />
          </span>
        </div>
      </section>
      <section className="py-[80px] h-[680px] relative mt-[180px] flex flex-col justify-center">
        <div className="abs h-[520px] bg-[#934B00] w-[497px] mx-auto rounded-br-[50%] rounded-bl-[50%] flex flex-col items-center py-[46px] px-[56px]">
          <div className="mb-[46px]">
            <img src={Jet} alt="Jet icon" />
          </div>
          <h3 className="text-[#F0FFF1] text-[32px] font-[600] leading-[150%] mb-6 text-center capitalize">
            The forefront of urban and regional planning
          </h3>
          <p className="text-[#F0FFF1] text-[20px] mb-6">
            URP research clusters
          </p>
          <p className="text-[#F0FFF1] text-[14px] mb-6">
            Ongoing and completed
          </p>
        </div>
        <div className="h-[320px] grid grid-cols-4">
          <img src={Bg} alt="" className="w-[100%] h-[320px] block" />
          <img src={Bg1} alt="" className="w-[100%] h-[320px] block" />
          <img src={Bg2} alt="" className="w-[100%] h-[320px] block" />
          <img src={Bg3} alt="" className="w-[100%] h-[320px] block" />
        </div>
      </section>
      <section className="mt-[160px] h-[404px] bg-[#5B5756] flex items-center">
        <div className="flex-1 h-[100%]">
          <img src={Journal} alt="" className="block h-[100%]" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="w-[564px] flex flex-col gap-6">
            <h2 className="text-[#F5FFF6] text-[40px] font-bold">
              Access previous projects
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
                Get Access
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[180px] mb-[80px] px-4 lg:px-0">
        <GetHelp
          h2="Get help, reach out to us and contribute to our growth"
          p="Experience seamless interaction wpresident effortlessly through quick links. With just a tap of a button, accessing everything has never been easier."
          text1="share your story"
          text2="student Hub"
          text3="requests"
          text4="make a donation"
          text5="Suggestions"
        />
      </section>

      <section className="h-[680px] bg-[#010A09] py-[68px] mt-[160px]">
        <div>
          <h3 className="text-center text-[#FDFFFD] text-[32px] font-[600] capitalize mb-[40px]">
            upcoming events
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex justify-center items-center gap-x-[24px]">
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[260px] h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
            </div>
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
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default StaffPage;
