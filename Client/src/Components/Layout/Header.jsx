import { Search } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

import { Link, NavLink, useLocation } from 'react-router-dom';
import UrpLogo from '../Resuables/UrpLogo';
import { useEffect, useRef, useState } from 'react';

import { Popover } from '@headlessui/react';

const Header = ({ setSidebar }) => {
  const [circle, setCircle] = useState(false);
  const [sticky, setSticky] = useState(false);
  const ref = useRef(null);

  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === '/students' ||
      location.pathname === '/staff' ||
      location.pathname === '/alumni'
    ) {
      setCircle(true);
    } else {
      setCircle(false);
    }
  }, [location.pathname]);
  useEffect(() => {
    const getHeight = window.addEventListener('scroll', () => {
      const windowHeight = window.scrollY;
      const height = ref.current?.getBoundingClientRect().height;
      if (windowHeight > height) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });

    return window.removeEventListener('scroll', getHeight);
  }, [sticky]);

  return (
    <nav
      ref={ref}
      className={`h-[80px]  ${
        sticky && 'fixed'
      }  py-3 bg-[#F5FFF6] w-full relative`}
    >
      <section className="px-6  xl:px-0 h-[100%]">
        <header className="lg:flex lg:justify-center items-center gap-x-[130.79px]">
          <div className="w-full lg:w-auto flex justify-between items-center">
            <div className="w-[169.213px]">
              <Link to="/">
                <UrpLogo type="green" />
              </Link>
            </div>
            <div
              className="lg:hidden"
              role="button"
              onClick={() => setSidebar(true)}
            >
              <MenuIcon htmlColor="#010A09" fontSize="small" />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex gap-[16px] items-center capitalize text-[14px]">
              <li className="px-2 flex items-center gap-2">
                <span className="relative z-10"></span>
                <Popover className="relative">
                  <Popover.Button className="capitalize focus:outline-none">
                    academics
                    <ExpandMoreIcon fontSize="small" className="ml-2" />
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -left-10 top-12 bg-white w-[228px] p-4">
                    <div className="flex flex-col text-[#333231]">
                      <Link to="/staff">
                        <Popover.Button className="popup">
                          Administrative Staff
                        </Popover.Button>
                      </Link>
                      <Link to="/students">
                        <Popover.Button className="popup">
                          Student Executives
                        </Popover.Button>
                      </Link>
                      <Link to="/alumni">
                        <Popover.Button className="popup">
                          Alumni
                        </Popover.Button>
                      </Link>
                    </div>
                  </Popover.Panel>
                </Popover>
              </li>
              <li>
                <Popover className="relative">
                  <Popover.Button className="capitalize focus:outline-none">
                    Research
                    <ExpandMoreIcon fontSize="small" className="ml-2" />
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -left-10 top-12 bg-white w-[228px] p-4">
                    <div className="flex flex-col text-[#333231]">
                      <Link to="/research-cluster">
                        <Popover.Button className="popup">
                          Research Clusters
                        </Popover.Button>
                      </Link>
                    </div>
                  </Popover.Panel>
                </Popover>
              </li>
              <li>
                <Popover className="relative">
                  <Popover.Button className="capitalize focus:outline-none">
                    students
                    <ExpandMoreIcon fontSize="small" className="ml-2" />
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -left-10 top-12 bg-white w-[228px] p-4">
                    <div className="flex flex-col text-[#333231]">
                      <Link to="/student-of-the-month">
                        <Popover.Button className="popup">
                          Student Spotlight
                        </Popover.Button>
                      </Link>
                      <Link to="/honours-list">
                        <Popover.Button className="popup">
                          Honors list
                        </Popover.Button>
                      </Link>
                      <Link to="/urp-programs">
                        <Popover.Button className="popup">
                          Programmes
                        </Popover.Button>
                      </Link>
                      <Link to="/projects">
                        <Popover.Button className="popup">
                          Student Projects
                        </Popover.Button>
                      </Link>
                    </div>
                  </Popover.Panel>
                </Popover>
              </li>
              <li>
                <Popover className="relative">
                  <Popover.Button className="capitalize focus:outline-none">
                    resources
                    <ExpandMoreIcon fontSize="small" className="ml-2" />
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -left-10 top-12 bg-white w-[228px] p-4">
                    <div className="flex flex-col text-[#333231]">
                      <Link to="urp-journal">
                        <Popover.Button className="popup">
                          The URP Journal
                        </Popover.Button>
                      </Link>
                      <Link to="/urp-handbook">
                        <Popover.Button className="popup">
                          Department Handbook
                        </Popover.Button>
                      </Link>
                      <Link to="/planners-pen">
                        <Popover.Button className="popup">
                          Planner’s Pen
                        </Popover.Button>
                      </Link>
                      <Link to="/contact">
                        <Popover.Button className="popup">
                          Contact Us
                        </Popover.Button>
                      </Link>
                      <Link to="/faqs">
                        <Popover.Button className="popup">FAQ’s</Popover.Button>
                      </Link>
                    </div>
                  </Popover.Panel>
                </Popover>
              </li>
              <li>
                <Popover className="relative">
                  <Popover.Button className="capitalize focus:outline-none">
                    information
                    <ExpandMoreIcon fontSize="small" className="ml-2" />
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -left-10 top-12 bg-white w-[228px] p-4">
                    <div className="flex flex-col text-[#333231]">
                      <Link to="/galleries">
                        <Popover.Button className="popup">
                          News & Events
                        </Popover.Button>
                      </Link>
                      <Link to="/galleries">
                        <Popover.Button className="popup">
                          Gallery
                        </Popover.Button>
                      </Link>
                      <Link to="/it-department">
                        <Popover.Button className="popup">
                          IT Team
                        </Popover.Button>
                      </Link>
                    </div>
                  </Popover.Panel>
                </Popover>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link
                to="/urp-journal"
                className="px-6 py-3 flex justify-center items-center bg-[#037171] hover:bg-[#03312E] rounded-[4px] text-white"
              >
                <span className="whitespace-nowrap">The URP Journal</span>
              </Link>
            </div>
          </div>
        </header>
      </section>
    </nav>
  );
};

export default Header;
