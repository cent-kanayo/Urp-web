import Student from '../../assets/smonth.png';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
const StudentPage = () => {
  return (
    <main>
      <section className="about flex gap-5 relative mx-auto pt-[84px]">
        <div className="">
          <img src={Student} alt="Student of the month" />
        </div>
        <div className="pt-14">
          <h1 className="capitalize text-[2.25rem] font-[600] text-[#011717]">
            student of the month
          </h1>
        </div>
        <div className="about-box absolute right-0 bottom-14">
          <div className="flex items-end gap-4 ">
            <h2 className="text-[#011717] text-[2.25rem] font-bold capitalize underline underline-offset-[10px]">
              Cent Kanayo
            </h2>
            <p className="translate-y-2">Year 4</p>
          </div>
          <p className="text-[1.15rem] leading-[150%]">
            I would like to express my pride of belonging to the Department of
            Urban and Regional Planning, Faculty of Environmental Science,
            University of Lagos. It is taught in a few and highly elitist
            universities in Nigeria, hence the need to meet universal standards
            to master the requisite skills of architectural design. Since its
            foundation....
          </p>
          <div className="max-w-[164px] flex justify-between gap-6">
            <span>
              <FacebookIcon htmlColor="#934B00" />
            </span>
            <span>
              <InstagramIcon htmlColor="#934B00" />
            </span>
            <span>
              <EmailIcon htmlColor="#934B00" />
            </span>
            <span>
              <LinkedInIcon htmlColor="#934B00" />
            </span>
          </div>
        </div>
      </section>
      <section className="flex mt-[192px] justify-center items-center gap-10">
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
    </main>
  );
};

export default StudentPage;
