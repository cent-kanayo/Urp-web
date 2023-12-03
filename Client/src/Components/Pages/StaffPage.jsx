import Journal from '../../assets/journals.png';

import AG from '../../assets/admin/agu.png';
import Vic from '../../assets/admin/victor.png';
import Odu from '../../assets/admin/odu.png';
import Law from '../../assets/admin/lawan.png';
import Nwa from '../../assets/admin/nwa.png';
import Loye from '../../assets/admin/loye.png';
import Farin from '../../assets/admin/farin.png';
import jimoh from '../../assets/admin/jimoh.png';
import Kunle from '../../assets/admin/kunle.png';
import Fade from '../../assets/admin/onifade.png';
import Laja from '../../assets/admin/orelaja.png';
import Deju from '../../assets/admin/deju.png';
import Yemi from '../../assets/admin/adeyemi.png';
import Niji from '../../assets/admin/adeniji.png';
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
      <section className="staff-hero text-center mb-10 lg:mb-[80px]"></section>
      <section className="lg:mt-[160px] px-4 lg:px-0">
        <div className="flex justify-center mb-6 lg:mb-[60px] items-center relative">
          <h2 className="text-center text-[24px] md:text-[2.5rem] text[#011717] font-bold capitalize ">
            administrators
          </h2>
        </div>
        <div className="flex justify-center flex-wrap gap-[22px]  lg:gap-6 max-w-[1249px] mx-auto">
          <Excocard
            name="Dr. M. E. AGUNBIADE"
            role="Associate Professor and HOD"
            image={AG}
            link={'muyiwa-agunbiade'}
          />
          <Excocard
            name="Professor L. ODUWAYE"
            role="Professor"
            image={Odu}
            link={'leke-oduwaye'}
          />
          <Excocard
            name="Prof. I.I.C. NWOKORO"
            role="Professor"
            image={Nwa}
            link={'immaculate-nwaokoro'}
          />
          <Excocard
            name="Dr. T. LAWANSON"
            role="Associate Professor"
            image={Law}
            link={'taibat-lawanson'}
          />

          <Excocard
            name="Dr. V.U. ILECHUKWU"
            role="Senior Lecturer"
            image={Vic}
            link={'victor-ilechukwu'}
          />

          <Excocard
            name="Dr. O.O. AGUNLOYE"
            role="Senior Lecturer"
            image={Loye}
            link={'o-agunloye'}
          />
          <Excocard
            name="Dr. A. FARINMADE"
            role="Senior Lecturer"
            image={Farin}
            link={'a-farinmade'}
          />
          <Excocard
            name="Dr S.A. ADEYEMI"
            role="Senior Lecturer"
            image={Yemi}
            link={'a-adeyemi'}
          />
          <Excocard
            name="Dr O.P. ORELAJA"
            role="Senior Lecturer"
            image={Laja}
            link={'p-orelaja'}
          />
          <Excocard
            name="Dr. V.A. ONIFADE"
            role="Senior Lecturer"
            image={Fade}
            link={'a-onifade'}
          />

          <Excocard
            name="Mr. H.O. JIMOH"
            role="Lecturer I"
            image={jimoh}
            link={'h-jimoh'}
          />
          <Excocard
            name="Dr. F.O. AKINDEJU"
            role="Lecturer I"
            image={Deju}
            link={'f-akindeju'}
          />

          <Excocard
            name="Mr. O.A. ADENIJI"
            role="Lecturer II"
            image={Niji}
            link={'a-adeniji'}
          />

          <Excocard
            name="Ms. M.D. ODEKUNLE"
            role="Lecturer II"
            image={Kunle}
            link={'d-odekunle'}
          />
        </div>
      </section>
      <section className="mt-[64px] pt-[60px] lg:pt-0 lg:py-[80px] h-[380px] lg:h-[680px] relative lg:mt-[180px] flex flex-col justify-center">
        <div className="abs h-[320px] lg:h-[520px] bg-[#934B00] w-[240px] lg:w-[497px] mx-auto rounded-br-[50%] rounded-bl-[50%] flex flex-col items-center py-6 lg:py-[46px] lg:px-[56px]">
          <div className="mb-6 lg:mb-[46px]">
            <img src={Jet} alt="Jet icon" className="w-20 lg:w-auto" />
          </div>
          <h3 className="text-[#F0FFF1] text-[20px] lg:text-[32px] font-[600] leading-[150%] mb-[14px] lg:mb-6 text-center capitalize">
            The forefront of urban and regional planning
          </h3>
          <p className="text-[#F0FFF1] text-[14px] lg:text-[20px]  mb-[14px] lg:mb-6">
            URP research clusters
          </p>
          <p className="text-[#F0FFF1] text-[12px] lg:text-[14px]">
            Ongoing and completed
          </p>
        </div>
        <div className="h-[320px] grid grid-cols-3 lg:grid-cols-4">
          <img
            src={Bg}
            alt=""
            className="w-[100%] h-[160px] lg:h-[320px] block"
          />
          <img
            src={Bg1}
            alt=""
            className="w-[100%] h-[160px] lg:h-[320px] block"
          />
          <img
            src={Bg2}
            alt=""
            className="hidden w-[100%] h-[160px] lg:h-[320px] lg:block"
          />
          <img
            src={Bg3}
            alt=""
            className="w-[100%] h-[160px] lg:h-[320px] block"
          />
        </div>
      </section>
      <section className="lg:mt-[180px] mb-[64px] lg:mb-[80px] px-4 lg:px-0">
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

      <section className="lg:h-[680px] bg-[#010A09] py-6 lg:py-[68px] lg:mt-[160px]">
        <div>
          <h3 className="text-center text-[#FDFFFD] text-[32px] font-[600] capitalize mb-[40px]">
            upcoming events
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex justify-center items-center gap-x-[24px]">
              <div className="hidden lg:block w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="hidden lg:block w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
              <div className="w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#FFFFFF] rounded-[2px]"></div>
            </div>
            <div className="max-w-[340px] lg:max-w-none mx-auto flex justify-between items-center mt-6 lg:mt-[40px]">
              <span>
                <img
                  src={LeftIcon}
                  alt="left toggle button"
                  className="w-[32px] lg:w-auto"
                />
              </span>
              <span>
                <img
                  src={RightIcon}
                  alt="right toggle button"
                  className="w-[32px] lg:w-auto"
                />
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
