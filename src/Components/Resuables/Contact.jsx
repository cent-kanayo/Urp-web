import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = ({ h2 }) => {
  return (
    <section className="grid place-items-center my-[64px] lg:my-[80px] bg-white">
      <div className="capitalize text-center max-w-[844px] mx-auto py-[40px] px-6 lg:px-0  lg:py-[80px] lg:bg-inherit">
        <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
          {h2}
        </h2>
        <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#010a09] max-w-[529px] mx-auto mb-4">
          Send us a mail filler text is a great way to show the size you want to
          have
        </p>
        <button className="px-6 py-2 bg-[#03312E] text-white  text-[14px] lg:text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[40px] lg:mb-[60px] shadow-md">
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
  );
};

export default Contact;
