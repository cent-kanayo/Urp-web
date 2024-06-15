import { Link } from 'react-router-dom';
import Journal from '../../assets/journals.png';

import AG from '../../assets/mainDesktop/Dr Agunbiade.jpg';
import Vic from '../../assets/admin/victor.webp';
import Odu from '../../assets/admin/odu.webp';
import Law from '../../assets/admin/lawan.webp';
import Nwa from '../../assets/lecturers/Nwaokoro.jpg';
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
import Dami from "../../assets/lecturers/dami.png"
import Richard from "../../assets/lecturers/Richard.png"



import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import Excocard from '../Resuables/Excocard';

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
            image={Dami}
            link={'dami-olalekan'}
          />

          <Excocard
            name="Mr. R.E. ONUIGBOJE"
            role="Graduate Assistant"
            image={Richard}
            link={'richard-onuigboje'}
          />
        </div>
      </section>
      <section className="grid place-items-center px-4 lg:px-0 my-[64px] lg:my-[80px] bg-[#CDE3E3]">
        <div className="text-center max-w-[844px] mx-auto py-[80px]">
        <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
          For more enquiries
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[342px] lg:max-w-[529px] mx-auto mb-4">
          Ready to make a difference and make a meaningful impact?
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-2 bg-[#03312E] text-white text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md"
          >
            contact us
          </Link>
          {/* <div className="flex justify-center gap-x-5 lg:gap-x-10 lg:px-0">
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
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default StaffPage;
