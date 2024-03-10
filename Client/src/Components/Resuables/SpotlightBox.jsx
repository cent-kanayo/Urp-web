import { Link } from 'react-router-dom';
import Arrow from '../../assets/icons/arrow-right.png';
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
          className="block h-[100%] w-[100%] object-left-top object-cover"
        />
      </div>
      <div className="py-[24px] lg:w-[310px] mx-auto px-4 lg:px-0">
        <h2 className="inter mb-2 whitespace-nowrap capitalize">{h2}</h2>
        <p className="mb-2">{p}</p>
        <div className="px-0">
          <p className="hover:animate-pulse flex items-center gap-x-2 capitalize">
            <span className="text-[12px] lg:text-[14px] underline underline-offset-4">
              {btn}
            </span>
            <span>
              <img src={Arrow} alt="Arrow Right Icon" width="24" />
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SpotlightBox;
