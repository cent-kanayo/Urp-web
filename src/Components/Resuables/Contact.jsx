import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
const Contact = ({h2}) => {
  return (
    <section className="grid place-items-center my-[64px] lg:my-[80px] bg-white">
      <div className="text-center max-w-[844px] mx-auto py-[40px] px-6 lg:px-0  lg:py-[80px] lg:bg-inherit">
      <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
         {h2}
          </h2>
        <p className="text-[14px] leading-[150%] text-[#5B5756] max-w-[529px] mx-auto mb-4">
          Ready to make a difference and make a meaningful impact?
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-2 bg-[#03312E] text-white  text-[14px] lg:text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[40px] lg:mb-[60px] shadow-md"
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
  );
};

export default Contact;
