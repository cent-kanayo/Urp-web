import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Link } from 'react-router-dom';

const SpotlightBox = ({ image, h2, p, btn, link }) => {
  return (
    <Link
      to={link}
      className="lg:flex flex-col spotlight-box hover:shadow-xl duration-300 transition-all ease-linear"
    >
      <div className="h-[200px] relative">
        <img
          src={image}
          alt="Spotlight avatar"
          className="block h-[100%] w-[100%]"
        />
      </div>
      <div className="py-[24px] lg:w-[310px] mx-auto px-4 lg:px-0">
        <h2 className="mb-4 whitespace-nowrap">{h2}</h2>
        <p className="mb-4">{p}</p>
        <div className="px-0">
          <Link
            to="/student-of-the-month"
            className="hover:animate-pulse flex items-center gap-x-2"
          >
            <span className="text-[12px] lg:text-[14px] underline underline-offset-4">
              {btn}
            </span>
            <span>
              <EastOutlinedIcon htmlColor="#57A0A0" />
            </span>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default SpotlightBox;
