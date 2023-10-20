import { Search } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link, NavLink, useLocation } from 'react-router-dom';
import UrpLogo from '../Resuables/UrpLogo';
import { useEffect, useState } from 'react';

import { Popover } from '@headlessui/react';

const Header = () => {
  const [circle, setCircle] = useState(false);
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
  return (
    <nav className="h-[80px]  py-3 bg-[#F5FFF6] w-full">
      <section className="px-6  xl:px-0 h-[100%]">
        <header className="lg:flex lg:justify-center items-center gap-x-[130.79px]">
          <div className="w-[169.213px]">
            <Link to="/">
              <UrpLogo type="green" />
            </Link>
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

                  <Popover.Panel className="absolute z-10 -left-10 top-6 bg-white w-[228px] py-4">
                    <div className="flex flex-col">
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

                  <Popover.Panel className="absolute z-10 -left-10 bg-white w-[228px] py-4">
                    <div className="flex flex-col">
                      <Link to="/research-cluster">
                        <Popover.Button className="popup">
                          Research Clusters
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
                    students
                    <ExpandMoreIcon fontSize="small" className="ml-2" />
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -left-10 bg-white w-[228px] py-4">
                    <div className="flex flex-col">
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

                  <Popover.Panel className="absolute z-10 -left-10 bg-white w-[228px] py-4">
                    <div className="flex flex-col">
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

                  <Popover.Panel className="absolute z-10 -left-10 bg-white w-[228px] py-4">
                    <div className="flex flex-col">
                      <Link to="#">
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
              <span>
                <Popover className="relative">
                  <Popover.Button className="capitalize focus:outline-none">
                    <Search htmlColor="#011717" />
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -left-20 bg-white w-[228px] py-4">
                    <div className="flex flex-col">
                      <article className="px-4">
                        <div className="border-[#ADABAB] border-[0.5px] rounded-[2px] px-4 py-2 flex items-center w-full space-x-4 mb-4">
                          <Search htmlColor="#ADABAB" />
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            placeholder="Search keyword"
                          />
                        </div>
                      </article>
                      <Link to="#">
                        <Popover.Button className="popup">
                          Student Spotlight
                        </Popover.Button>
                      </Link>
                      <Link to="#">
                        <Popover.Button className="popup">
                          Student Spotlight
                        </Popover.Button>
                      </Link>
                      <Link to="#">
                        <Popover.Button className="popup">
                          Student Spotlight
                        </Popover.Button>
                      </Link>
                    </div>
                  </Popover.Panel>
                </Popover>
              </span>
              <Link
                to="/urp-journal"
                className="px-6 py-3 flex justify-center items-center bg-[#037171] hover:bg-[#03312E] rounded-[4px] text-white"
              >
                <span className="whitespace-nowrap">Download Journal</span>
              </Link>
            </div>
          </div>
        </header>
      </section>
    </nav>
  );
};

export default Header;
