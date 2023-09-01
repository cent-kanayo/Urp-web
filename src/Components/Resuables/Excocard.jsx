import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Excocard = ({ image, role, name, link }) => {
  return (
    <article className="exco">
      {/* <img
        src={image}
        alt="Executives"
        className="absolute w-[100%] h-[100%]"
      /> */}
      <header className="flex flex-col p-5">
        <div className="flex justify-between items-center w-[100%]">
          <h3 className="capitalize font-medium text-[1rem]">{name}</h3>
          <span>
            <a href="#" className="block">
              <CallOutlinedIcon />
            </a>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="capitalize">{role}</h3>
          <span>
            <a href={link}>
              <EmailOutlinedIcon />
            </a>
          </span>
        </div>
      </header>
    </article>
  );
};

export default Excocard;
