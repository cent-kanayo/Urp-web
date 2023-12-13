import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Popover } from '@headlessui/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
const Sidebar = ({ setSidebar }) => {
  return (
    <aside className="fixed top-0 w-full h-[100vh] overflow-y-scroll bg-[#090302] z-50 lg:hidden px-6 py-5">
      <div>
        <div className="flex justify-end mb-[28px]">
          <button aria-label="close icon" onClick={() => setSidebar(false)}>
            <CloseIcon htmlColor="#FFFFFF" />
          </button>
        </div>
        <div className="text-[#FDFFFD] py-6 flex flex-col gap-4">
          <div className="flex justify-between items-center px-2 text-[18px]">
            <Popover className="relative w-full">
              <Popover.Button className="text-[#FDFFFD] capitalize focus:outline-none flex justify-between items-center w-full">
                <p>academics</p>
                <ExpandMoreIcon fontSize="small" />
              </Popover.Button>

              <Popover.Panel className="p-4">
                <div className="flex flex-col gap-4">
                  <Link
                    to="/staff"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Administrative Staff</Popover.Button>
                  </Link>
                  <Link
                    to="/students"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Student Executives</Popover.Button>
                  </Link>
                  {/* <Link to="/alumni">
                    <Popover.Button >Alumni</Popover.Button>
                  </Link> */}
                </div>
              </Popover.Panel>
            </Popover>
          </div>
          <div className="flex justify-between items-center px-2">
            <Popover className="relative w-full">
              <Popover.Button className="text-[#FDFFFD] capitalize focus:outline-none flex justify-between items-center w-full">
                <p> Research</p>
                <ExpandMoreIcon fontSize="small" />
              </Popover.Button>

              <Popover.Panel className="p-4">
                <div className="flex flex-col gap-4">
                  <Link
                    to="/research-cluster"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Research Clusters</Popover.Button>
                  </Link>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
          <div className="flex justify-between items-center px-2">
            <Popover className="relative w-full">
              <Popover.Button className="text-[#FDFFFD] capitalize focus:outline-none flex justify-between items-center w-full">
                <p> students</p>
                <ExpandMoreIcon fontSize="small" />
              </Popover.Button>

              <Popover.Panel className="p-4">
                <div className="flex flex-col gap-4">
                  <Link
                    to="/student-of-the-month"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Student Spotlight</Popover.Button>
                  </Link>
                  <Link
                    to="/honours-list"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Honors list</Popover.Button>
                  </Link>
                  <Link
                    to="/urp-programs"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Programmes</Popover.Button>
                  </Link>
                  <Link
                    to="/projects"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Student Projects</Popover.Button>
                  </Link>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
          <div className="flex justify-between items-center px-2">
            <Popover className="relative w-full">
              <Popover.Button className="text-[#FDFFFD] capitalize focus:outline-none flex justify-between items-center w-full">
                <p>resources</p>
                <ExpandMoreIcon fontSize="small" />
              </Popover.Button>

              <Popover.Panel className="p-4">
                <div className="flex flex-col gap-4">
                  <Link
                    to="urp-journal"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>The URP Journal</Popover.Button>
                  </Link>
                  <Link
                    to="/urp-handbook"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Department Handbook</Popover.Button>
                  </Link>
                  <Link
                    to="/planners-pen"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Planner’s Pen</Popover.Button>
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Contact Us</Popover.Button>
                  </Link>
                  <Link
                    to="/faqs"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>FAQ’s</Popover.Button>
                  </Link>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
          <div className="flex justify-between items-center px-2">
            <Popover className="relative w-full">
              <Popover.Button className="text-[#FDFFFD] capitalize focus:outline-none flex justify-between items-center w-full">
                <p>information</p>
                <ExpandMoreIcon fontSize="small" />
              </Popover.Button>

              <Popover.Panel className="p-4">
                <div className="flex flex-col gap-4">
                  <Link
                    to="#"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>News & Events</Popover.Button>
                  </Link>
                  <Link
                    to="/galleries"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>Gallery</Popover.Button>
                  </Link>
                  <Link
                    to="/it-department"
                    className="bg-[#1B1B1B] flex items-center px-4 rounded-[4px] py-2 text-[#FDFFFD]"
                    onClick={() => setSidebar(false)}
                  >
                    <Popover.Button>IT Team</Popover.Button>
                  </Link>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
        <div className="bg-[#CDE3E3] rounded-[4px] flex justify-center items-center py-3 mt-[48px]">
          <button className="w-full text-[16px">Download Journal</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
