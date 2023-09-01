import { Search } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      location.pathname === '/alumni'
    ) {
      setCircle(true);
    } else {
      setCircle(false);
    }
  }, [location.pathname]);
  return (
    <nav className="h-[80px] py-3 bg-[#F5FFF6]">
      <section className="px-2 xl:px-0 h-[100%]">
        <header className="flex justify-center items-center gap-x-[318.29px]">
          <div className="w-[169.213px]">
            <Link to="/">
              <UrpLogo type="green" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex gap-[16px] items-center capitalize text-[14px]">
              <li className="px-2 flex items-center gap-2">
                <span className="relative z-10">academics</span>
                <span>
                  <ExpandMoreIcon fontSize="small" />
                </span>
              </li>
              <li>
                <Link to="/staff" className="px-2 flex items-center gap-2">
                  <span className="">staff</span>
                  <span>
                    <ExpandMoreIcon fontSize="small" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/students" className="px-2 flex items-center gap-2">
                  <span className="">students</span>
                  <span>
                    <ExpandMoreIcon fontSize="small" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="px-2 flex items-center gap-2">
                  <span className="">resources</span>
                  <span>
                    <ExpandMoreIcon fontSize="small" />
                  </span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <span>
                <Search />
              </span>
              <button className="px-6 py-2 flex justify-center items-center gap-2 bg-[#03312E] rounded-[2px] text-white">
                <span>
                  <AccountCircleOutlinedIcon fontSize="small" />
                </span>
                <span className="whitespace-nowrap">Sign in</span>
              </button>
            </div>
          </div>
        </header>
      </section>
    </nav>
  );
};

export default Header;
