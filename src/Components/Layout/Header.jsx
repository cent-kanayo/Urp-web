import { Search } from '@mui/icons-material';
import Logo from '../../assets/urp-green.png';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
const Header = () => {
  return (
    <nav className="h-[140px]">
      <section className="bg-[#011717]">
        <div className="nav-small max">
          <span>
            <a href="/">Staff</a>
          </span>
          <span>
            <a href="/">Students</a>
          </span>
          <span>
            <a href="/">Alumni</a>
          </span>
        </div>
      </section>
      <section className="bg-[#F5FFF6] py-[10px]">
        <header className="flex justify-between items-center max">
          <div>
            <img src={Logo} alt="The official Logo of the Department" />
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
