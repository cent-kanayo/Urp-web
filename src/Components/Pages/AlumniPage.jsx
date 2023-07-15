import Image1 from '../../assets/Students/1.png';
import Image2 from '../../assets/Students/2.png';
import Image3 from '../../assets/Students/3.png';
import Image4 from '../../assets/Students/4.png';
import Image5 from '../../assets/Students/5.png';
import Image6 from '../../assets/Students/6.png';
import Image7 from '../../assets/Students/7.png';
import Image8 from '../../assets/Students/8.png';
import Image9 from '../../assets/Students/9.png';
import Image10 from '../../assets/Students/10.png';
import Image11 from '../../assets/Students/11.png';
import Image12 from '../../assets/Students/12.png';
import Image13 from '../../assets/Students/13.png';

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import Student from '../../assets/smonth.png';
import EventBox from '../Resuables/EventBox';
import GetHelp from '../Resuables/GetHelp';

const AlumniPage = () => {
  return (
    <>
      <section className="about flex flex-col lg:flex-row gap-5 relative mx-auto pt-[84px] px-4 lg:px-0">
        <div className="">
          <img alt="Student of the month" src={Student} />
        </div>
        <div className="pt-14 hidden lg:invisible">
          <h1 className="capitalize text-[2.25rem] font-[600] text-[#011717]">
            student of the month
          </h1>
        </div>
        <div className="about-box lg:absolute right-0 bottom-8">
          <div className="flex items-end gap-4 ">
            <h2 className="text-[#011717] text-[2.25rem] font-bold capitalize underline underline-offset-[10px]">
              Check out our Alumni Directory
            </h2>
          </div>
          <p className="text-[1.15rem] leading-[150%]">
            As a graduate of the Department of Urban and Regional Planning, your
            journey doesn't have to end here. Join our thriving alumni
            community, stay connected, and benefit from career programs,
            networking opportunities, events, and volunteer options that support
            you no matter where life takes you.
          </p>
        </div>
      </section>
      <section className="flex mt-[192px] justify-center items-center gap-10 -rotate-180">
        <div className="flex gap-5 h-[760px]">
          <div className="w-[508px] flex flex-col gap-5">
            <div>
              <img src={Image1} alt="" />
            </div>
            <div className="flex gap-5">
              <img src={Image2} alt="" />
              <img src={Image3} alt="" />
            </div>
            <div className="flex gap-5">
              <img src={Image4} alt="" />
              <img src={Image5} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <img src={Image6} alt="" />
            </div>
            <div className="w-[297px] h-[140px] flex items-center justify-center text-center">
              <h2 className="capitalize text-[2.25rem] font-bold leading-[150%]">
                special highlights
              </h2>
            </div>
            <div>
              <img src={Image11} alt="" />
            </div>
          </div>
          <div className="urp flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <img src={Image7} alt="" />
              <img src={Image8} alt="" />
            </div>
            <div className="flex items-start gap-5">
              <img src={Image9} alt="" />
              <img src={Image10} alt="" />
            </div>
            <div className="flex items-start gap-5">
              <img src={Image12} alt="" />
              <img
                src={Image13}
                alt=""
                className="-translate-y-[115px] rounded-br-3xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ArrowCircleRightOutlinedIcon fontSize="large" />
          <p className="capitalize text-[1rem] font-[500]">see more</p>
        </div>
      </section>
      <section className="mt-[139px] px-4 lg:px-0">
        <h2 className="text-center text-[2.5rem] font-medium capitalize">
          Upcoming Events
        </h2>
        <div className="flex justify-center flex-wrap gap-5">
          <EventBox quote="EnigmaQuest: The Great Academic Adventure" />
          <EventBox quote="EnigmaQuest: The Great Academic Adventure" />
          <EventBox quote="EnigmaQuest: The Great Academic Adventure" />
        </div>
      </section>
      <section className="mt-[122px] mb-[170px] max-w-[1249px] mx-auto px-2 pt-[80px]">
        <GetHelp
          h2="Get help, reach out to us and contribute to our growth"
          p="Experience seamless interaction with the department effortlessly through quick links. With just a tap of a button, accessing everything has never been easier."
          text1="share your story"
          text2="Alumni Hub"
          text3="requests"
          text4="make a donation"
          text5="Suggestions"
        />
      </section>
    </>
  );
};

export default AlumniPage;
