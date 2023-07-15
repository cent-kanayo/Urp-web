import LogoGreen from '../../assets/green.svg';
import LogoWhite from '../../assets/white.svg';

const UrpLogo = ({ type }) => {
  if (type === 'green') {
    return <img src={LogoGreen} alt="The official Logo of the Department" />;
  }

  return <img src={LogoWhite} alt="The official Logo of the Department" />;
};

export default UrpLogo;
