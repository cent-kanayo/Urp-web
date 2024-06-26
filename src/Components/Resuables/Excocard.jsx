import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';
const Excocard = ({ image, role, name, link, phone, email }) => {
  if (!link) {
    return (
      <article className="exco">
        <img
          src={image}
          alt="Executives"
          className="absolute w-[100%] h-[100%] object-cover block rounded-[2px]"
        />
        <header className="flex flex-col p-2 lg:p-5">
          <div className="flex justify-between items-center w-[100%]">
            <h3 className="capitalize font-medium text-[12px] lg:text-[1rem]">
              {name}
            </h3>
            <span>
              <a href={`tel:${phone}`} className="block">
                <CallOutlinedIcon fontSize="small" />
              </a>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="capitalize text-[12px]">{role}</h3>
            <span>
              <a href={`mailto:${email}`}>
                <EmailOutlinedIcon fontSize="small" s />
              </a>
            </span>
          </div>
        </header>
      </article>
    );
  }
  if(name === "Dr. M. E. AGUNBIADE"){
    return (
      <Link to={link} className="exco">
        <img
          src={image}
          alt="Executives"
          className="absolute w-[100%] h-[100%] object-cover object-top"
        />
        <header className="flex flex-col p-2 lg:p-5">
          <div className="flex flex-col justify-center items-start lg:items-center w-[100%]">
            <h3 className="capitalize font-medium text-[12px] lg:text-[1rem]">
              {name}
            </h3>
            <h3 className="capitalize text-[12px]">{role}</h3>
          </div>
        </header>
      </Link>
    );
  }
   return (
    <Link to={link} className="exco">
      <img
        src={image}
        alt="Executives"
        className="absolute w-[100%] h-[100%] object-cover object-top-[20px]"
      />
      <header className="flex flex-col p-2 lg:p-5">
        <div className="flex flex-col justify-center items-start lg:items-center w-[100%]">
          <h3 className="capitalize font-medium text-[12px] lg:text-[1rem]">
            {name}
          </h3>
          <h3 className="capitalize text-[12px]">{role}</h3>
        </div>
      </header>
    </Link>
  );
};

export default Excocard;
