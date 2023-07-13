import { Search } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Link, NavLink, useLocation } from 'react-router-dom';
import UrpLogo from '../Resuables/UrpLogo';
import { useEffect, useState } from 'react';
const Header = () => {
  const [circle, setCircle] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === '/students' ||
      location.pathname === '/staff' ||
      location.pathname === '/alumi'
    ) {
      setCircle(true);
    } else {
      setCircle(false);
    }
  }, [location.pathname]);
  return (
    <nav className="h-[140px]">
      <section className="bg-[#011717]">
        <div className="nav-small max">
          {circle && (
            <span>
              <CircleIcon htmlColor="#ADABAB" fontSize="medium" />
            </span>
          )}
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-[#FDFFFD] border-b border-[#FDFFFD]'
                  : 'text-[#FDFFFD] hover:border-b border-[#FDFFFD]'
              }
              to="/staff-login"
            >
              Staff
            </NavLink>
          </span>
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-[#FDFFFD] border-b border-[#FDFFFD]'
                  : 'text-[#FDFFFD] hover:border-b border-[#FDFFFD]'
              }
              to="/alumni-login"
            >
              Alumni
            </NavLink>
          </span>
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-[#FDFFFD] border-b border-[#FDFFFD]'
                  : 'text-[#FDFFFD] hover:border-b border-[#FDFFFD]'
              }
              to="/student-login"
            >
              Student
            </NavLink>
          </span>
        </div>
      </section>
      <section className="bg-[#F5FFF6] py-[10px] px-[8px] xl:px-0">
        <header className="flex justify-between items-center max">
          <div>
            <Link to="/">
              <UrpLogo type="green" />
            </Link>
          </div>
          <div>
            <ul className="flex gap-[10px] items-center capitalize">
              <li className="btn">
                <p className="relative z-10">research</p>
              </li>
              <li className="btn">
                <p className="relative z-10">projects</p>
              </li>
              <li className="btn">
                <p className="relative z-10">highlights</p>
              </li>
              <li className="btn">
                <p className="relative z-10">executives</p>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 items-center">
            <span>
              <MoreVertOutlinedIcon />
            </span>
            <form>
              <div className="search">
                <Search />
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none bg-transparent w-[100%]"
                />
              </div>
            </form>
          </div>
        </header>
      </section>
    </nav>
  );
};

export default Header;
