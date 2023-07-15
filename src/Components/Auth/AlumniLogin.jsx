import { Link, useNavigate } from 'react-router-dom';
import UrpLogo from '../Resuables/UrpLogo';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useState } from 'react';

const AlumniLogin = () => {
  const [type, setType] = useState('password');
  const navigate = useNavigate();
  document.title = 'Alumni Login';

  const onVisibilityToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };
  const onSubmitClicked = (e) => {
    e.preventDefault();
    navigate('/alumni');
  };
  return (
    <section className="h-[100hv] flex gap-6">
      <div className="flex-1 py-[40px] pl-4 pr-4 lg:pr-0 xl:pl-[240px]">
        <Link to="/">
          <UrpLogo type="green" />
        </Link>
        <div className="max-w-[560px] w-[100%]  mt-[116px]">
          <div className="mb-[40px] flex flex-col gap-1">
            <h1 className="login-h1">Login to your alumni account</h1>
            <q className="login-q text-[#090302]">
              Networking, updates, and seamless event registration. Join now!
            </q>
          </div>
          <form>
            <p></p>
            <div className="flex flex-col gap-1 mb-[40px]">
              <label htmlFor="E-mail" className="login-q text-[#5B5756]">
                Email
              </label>
              <div className="flex form-control">
                <input
                  type="email"
                  id="E-mail"
                  placeholder="example@email.com"
                  className="flex-1 focus:outline-none"
                />
                <EmailOutlinedIcon htmlColor="#02211F" />
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-[40px]">
              <label htmlFor="password" className="login-q text-[#5B5756]">
                Password
              </label>
              <div className="flex form-control">
                <input
                  type={type}
                  id="password"
                  placeholder="*********"
                  className="flex-1 focus:outline-none"
                />
                <div onClick={onVisibilityToggle} role="button">
                  {type === 'password' ? (
                    <VisibilityOffOutlinedIcon htmlColor="#02211F" />
                  ) : (
                    <VisibilityOutlinedIcon htmlColor="#02211F" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center mb-[40px] gap-2">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <div className="login-btn">
              <button
                type="submit"
                className="w-[100%]"
                onClick={onSubmitClicked}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block flex-1 login-bg"></div>
    </section>
  );
};

export default AlumniLogin;
