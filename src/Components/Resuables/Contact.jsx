import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = ({ h2 }) => {
  return (
    <section className="grid place-items-center px-2 lg:px-0">
      <div className="capitalize text-center max-w-[668px] mx-auto py-[100px] lg:my-[200px]">
        <h2 className="text-[2rem] font-[600] leading-[150%] text-[#010a09] mb-4">
          {h2}
        </h2>
        <p className="text-[1.25rem] leading-[150%] text-[#010a09] max-w-[529px] mx-auto mb-4">
          Send us a mail filler text is a great way to show the size you want to
          have
        </p>
        <button className="px-6 py-2 bg-[#03312E] text-white text-[1rem] capitalize rounded-[4px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[64px] shadow-md">
          contact us
        </button>
        <div className="max-w-[584px] mx-auto flex justify-between px-5 lg:px-0">
          <span>
            <EmailIcon htmlColor="#934B00" fontSize="large" />
          </span>
          <span>
            <FacebookIcon htmlColor="#934B00" fontSize="large" />
          </span>
          <span>
            <InstagramIcon htmlColor="#934B00" fontSize="large" />
          </span>
          <span>
            <TwitterIcon htmlColor="#934B00" fontSize="large" />
          </span>
          <span>
            <LinkedInIcon htmlColor="#934B00" fontSize="large" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
