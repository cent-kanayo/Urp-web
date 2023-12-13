import { Link } from 'react-router-dom';
import UrpLogo from '../Resuables/UrpLogo';

const Footer = () => {
  return (
    <footer className="flex flex-col footer">
      <section className="bg-[#010A09] text-white flex-1 pt-10 lg:pt-[96px] px-4 md:px-8 pb-[62px] lg:pb-0">
        <header className="flex flex-col lg:flex-row justify-center  gap-x-[314px]">
          <div className="mb-[53px] lg:mb-0">
            <UrpLogo type="white" />
          </div>
          <div className="flex lg:flex-row justify-center gap-[35px] lg:gap-[40px]">
            <div className="flex flex-col lg:flex-row justify-center gap-[35px] lg:gap-[40px]">
              <div className="capitalize">
                <h3 className="text-[14px] lg:text-[20px] font-medium mb-[16px]">
                  Menu
                </h3>
                <ul className="text-[12px] lg:text-[14px] font-[300] text-[#FDFFFD] flex flex-col gap-[8px]">
                  <li className="hover:underline">
                    <Link onClick={() => window.scrollTo({ top: 0 })} to="/">
                      Home
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link
                      to="/about"
                      onClick={() => window.scrollTo({ top: 0 })}
                    >
                      about
                    </Link>
                  </li>
                  <li className="hover:underline">Academics</li>
                  <li className="hover:underline">
                    <Link
                      to="/research-cluster"
                      onClick={() => window.scrollTo({ top: 0 })}
                    >
                      research
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link
                      to="/contact"
                      onClick={() => window.scrollTo({ top: 0 })}
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="capitalize">
                <h3 className="text-[14px] lg:text-[20px] font-medium mb-[16px]">
                  contact
                </h3>
                <ul className="text-[12px] lg:text-[14px] font-[300] text-[#FDFFFD]  flex flex-col gap-[8px] whitespace-nowrap">
                  <li>mail</li>
                  <li>phone number</li>
                </ul>
              </div>
            </div>
            <div className="capitalize">
              <h3 className="text-[14px] lg:text-[20px] font-medium">
                university of lagos
              </h3>
              <p className="text-[14px] font-[300] text-[#FDFFFD]  mb-[8px]">
                faculty of environmental sciences.
              </p>
              <div className="mb-3">
                <p className="text-[12px] lg:text-[14px] font-[300] text-[#FDFFFD]">
                  akoka rd, yaba, lagos nigeria
                </p>
                <p className="text-[12px] lg:text-[14px] font-[300] text-[#FDFFFD]">
                  open monday - friday from 8:00am to 4:00pm
                </p>
              </div>
              <p className="text-[#F0C808] text-[12px] lg:text-[14px]">
                visit university website
              </p>
            </div>
          </div>
        </header>
      </section>
      <section className="h-[75px] flex justify-center items-center bg-[#F5FFF6] shadow-md py-4 lg:py-0">
        <p className="text-center text-[10px] lg:text-[14px]">
          Copyright &copy; {new Date().getFullYear()} department of urban and
          regional planning
        </p>
      </section>
    </footer>
  );
};

export default Footer;
