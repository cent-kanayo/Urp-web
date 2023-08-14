import LogoGreen from '../../assets/green.svg';
import LogoWhite from '../../assets/white.svg';

const UrpLogo = ({ type }) => {
  if (type === 'green') {
    return (
      <img
        src={LogoGreen}
        alt="The official Logo of the Department"
        className="block h-[56px] w-[169.213px]"
      />
    );
  }

  return (
    <img
      src={LogoWhite}
      alt="The official Logo of the Department py-3"
      className="block"
    />
  );
};

export default UrpLogo;
