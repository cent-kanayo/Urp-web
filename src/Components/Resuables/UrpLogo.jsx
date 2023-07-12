import LogoGreen from '../../assets/urp-green.png';
import LogoWhite from '../../assets/urp-white.png';

const UrpLogo = ({ type }) => {
  if (type === 'green') {
    return <img src={LogoGreen} alt="The official Logo of the Department" />;
  }

  return <img src={LogoWhite} alt="The official Logo of the Department" />;
};

export default UrpLogo;
