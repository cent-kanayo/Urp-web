import Logo from '../../assets/urp-white.png';

const Footer = () => {
  return (
    <footer className="flex flex-col footer">
      <section className="bg-[#010A09] text-white flex-1 pt-[96px] px-[8px] lg:px-0 pb-8 lg:pb-0">
        <header className="max flex flex-col lg:flex-row justify-between lg:items-center gap-[50px]">
          <div>
            <img src={Logo} alt="The official Logo of the Department" />
          </div>
          <div className="h-[1px] w-[80%] mx-auto lg:hidden bg-white"></div>
          <div className="flex flex-col lg:flex-row justify-between gap-[100px]">
            <div className="capitalize">
              <h3 className="typo-3 mb-[16px]">Menu</h3>
              <ul className="typo-p flex flex-col gap-[8px]">
                <li>Home</li>
                <li>about</li>
                <li>Academics</li>
                <li>research</li>
                <li>contact</li>
              </ul>
            </div>
            <div className="capitalize">
              <h3 className="typo-3 mb-[16px]">contact</h3>
              <ul className="typo-p flex flex-col gap-[8px]">
                <li>mail</li>
                <li>phone number</li>
              </ul>
            </div>
            <div className="capitalize">
              <h3 className="typo-3">university of lagos</h3>
              <p className="typo-p mb-[16px]">
                faculty of environmental sciences.
              </p>
              <div className="mb-3">
                <address className="typo-p">
                  akoka rd, yaba, lagos nigeria
                </address>
                <p className="typo-p">
                  open monday - friday from 8:00am to 4:00pm
                </p>
              </div>
              <p className="text-[#EAA966]">visit university website</p>
            </div>
          </div>
        </header>
      </section>
      <section className="h-[75px] flex justify-center items-center bg-white shadow-md py-4 lg:py-0">
        <p>Copyright &copy; 2022 department of urban and regional planning</p>
      </section>
    </footer>
  );
};

export default Footer;
