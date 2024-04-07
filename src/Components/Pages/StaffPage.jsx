import { Link } from 'react-router-dom';
import Journal from '../../assets/journals.png';

import AG from '../../assets/admin/agu.webp';
import Vic from '../../assets/admin/victor.webp';
import Odu from '../../assets/admin/odu.webp';
import Law from '../../assets/admin/lawan.webp';
import Nwa from '../../assets/admin/nwa.webp';
import Loye from '../../assets/admin/loye.webp';
import Farin from '../../assets/admin/farin.webp';
import jimoh from '../../assets/admin/jimoh.webp';
import Kunle from '../../assets/admin/kunle.webp';
import Fade from '../../assets/admin/onifade.webp';
import Laja from '../../assets/admin/orelaja.webp';
import Deju from '../../assets/admin/deju.webp';
import Yemi from '../../assets/admin/adeyemi.webp';
import Niji from '../../assets/admin/adeniji.webp';
import Alade from '../../assets/lecturers/Alade.png';
import Salau from '../../assets/lecturers/Salau.png';
import Icon from '../../assets/lecturers/Icon.png';
import Jet from '../../assets/jet.png';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Excocard from '../Resuables/Excocard';

import GetHelp from '../Resuables/GetHelp';
const StaffPage = () => {
  return (
    <main>
      <section className="staff-hero text-center mb-10 lg:mb-[80px]"></section>
      <section className="lg:mt-[160px] px-4 lg:px-0">
        <div className="flex justify-center mb-6 lg:mb-[60px] items-center relative">
          <h2 className="text-center text-[24px] md:text-[2.5rem] text[#011717] font-bold">
            Academic staff
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-[22px]  lg:gap-6 max-w-[1249px] mx-auto">
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
            role="Professor"
            image={Law}
            link={'taibat-lawanson'}
          />
          <Excocard
            name="Dr. A.A. ALADE"
            role="Associate Professor"
            image={Alade}
            link={'adewale-alade'}
          />

          <Excocard
            name="Dr. V.U. ILECHUKWU"
            role="Associate Professor"
            image={Vic}
            link={'victor-ilechukwu'}
          />

          <Excocard
            name="Dr. T.I. SALAU"
            role="Senior Lecturer"
            image={Salau}
            link={'taofik-salau'}
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

          <Excocard
            name="Mrs. M.D. OLALEKAN"
            role="Graduate Assistant"
            image={Icon}
            link={'dami-olalekan'}
          />

          <Excocard
            name="Mr. R.E. ONUIGBOJE"
            role="Graduate Assistant"
            image={Icon}
            link={'richard-onuigboje'}
          />
        </div>
      </section>
      {/* <section className="mt-[64px] pt-[60px] lg:pt-0 lg:py-[80px] h-[380px] lg:h-[680px] relative lg:mt-[180px] flex flex-col justify-center">
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
      </section> */}
      {/* <section className="lg:mt-[180px] mb-[64px] lg:mb-[80px] px-4 lg:px-0">
        <GetHelp
          h2="Get help, reach out to us and contribute to our growth"
          p="Experience seamless interaction with the department effortlessly through quick links. With just a tap of a button, accessing everything has never been easier."
          text1="share your story"
          text2="student Hub"
          text3="requests"
          text4="make a donation"
          text5="Suggestions"
        />
      </section> */}
      <section className="grid place-items-center px-2 lg:px-0 my-[64px] lg:my-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[342px] lg:max-w-[529px] mx-auto mb-4">
            Send us a mail filler text is a great way to show the size you want
            to have
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

export default StaffPage;
