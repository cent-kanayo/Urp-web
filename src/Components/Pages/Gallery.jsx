import Journal from '../../assets/journals.png';

import Fj from '../../assets/Excos/fjs.png';
import John from '../../assets/Excos/john.png';
import Sonia from '../../assets/Excos/sonia.png';
import Pamela from '../../assets/Excos/pamela.png';
import Timi from '../../assets/Excos/timi.png';
import Korede from '../../assets/Excos/korede.png';
import Exco4 from '../../assets/Excos/exco4.png';
import Exco5 from '../../assets/Excos/exco5.png';
import Exco6 from '../../assets/Excos/exco6.png';

import Excocard from '../Resuables/Excocard';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LeftIcon from '../../assets/AL.png';
import RightIcon from '../../assets/AR.png';

import Bg1 from '../../assets/mainDesktop/homebg1.webp';
import Bg2 from '../../assets/mainDesktop/homebg2.webp';
import Bg3 from '../../assets/mainDesktop/homebg3.webp';
import Bg4 from '../../assets/mainDesktop/homebg4.webp';
import Bg5 from '../../assets/mainDesktop/homebg5.webp';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { useEffect, useState } from 'react';
import Comment from '../Resuables/Comment';

import More from '../../assets/mainDesktop/more.png';
import Moore from '../../assets/mainDesktop/Moore.png';
import { Link } from 'react-router-dom';

const BGS = [Bg1, Bg2, Bg3, Bg4, Bg5];
const Gallery = () => {
  const [bgs, setBgs] = useState(BGS);
  const [index, setIndex] = useState(0);

  const handleClick = (type) => {
    if (type === 'next') {
      setIndex((prev) => (prev > BGS?.length - 2 ? 0 : prev + 1));
    } else {
      setIndex((prev) => (prev < 0 ? BGS?.length - 2 : prev - 1));
    }
  };

  useEffect(() => {
    const lastIndex = BGS.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, BGS]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <main>
      <section className="hero-bg text-center mb-20">
        {BGS.map((pic, picIndex) => {
          let position = 'nextSlide';
          if (picIndex === index) {
            position = 'activeSlide';
          }
          if (
            picIndex === index - 1 ||
            (index === 0 && picIndex === BGS.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <div className={`bgSlide ${position}`} key={picIndex}>
              <img
                src={pic}
                alt="Background carousel 1"
                className="w-full h-full"
              />
            </div>
          );
        })}

        <div className="py-[204.5px]">
          <div className="flex justify-center items-center gap-x-[126px]">
            <span
              className="border-[2px] border-[#F0C808] p-2 hover:bg-[#F0C808]"
              role="button"
              onClick={() => handleClick('prev')}
            >
              <ArrowBackIosNewOutlinedIcon htmlColor="white" fontSize="small" />
            </span>
            <div className="w-[709px] h-143px] bg-[#090302] py-6 px-10 flex flex-col justify-between gap-10 items-center">
              <p className="text-[24px] text-[#F0C808] font-medium leading-[150%]">
                Where Innovation Meets Excellence!
              </p>
              <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[40px] font-bold text-[#F5FFF6]">
                Urban & Regional Planning
              </h1>
            </div>
            <span
              className="border-[2px] border-[#F0C808] p-2 hover:bg-[#F0C808]"
              role="button"
              onClick={() => handleClick('next')}
            >
              <ArrowForwardIosOutlinedIcon htmlColor="white" fontSize="small" />
            </span>
          </div>
        </div>
      </section>
      <section className="max-w-[1122px] mx-auto mb-20">
        <div>
          <h3 className="text-[#011717] text-[40px] font-bold capitalize mb-[40px]">
            Folders
          </h3>
          <div className="">
            <div className="flex justify-center items-center gap-x-[24px]">
              <div className="relative w-[358px] h-[530px] bg-[#1B1B1B] rounded-[2px] p-4">
                <div>
                  <p className="text-[#F0C808] text-[14px] mb-2">June, 2020</p>
                  <h2 className="text-[#FDFFFD] text-[24px] font-medium mb-2">
                    Name of Event
                  </h2>
                  <p className="text-[#F7F7F7] text-[14px] leading-[150%] h-[100px] mb-2">
                    As a graduate of the Department of Urban and Regional
                    Planning, your journey doesn't have to end here. Join our
                    thriving alumni community, stay connected
                  </p>
                  <div className="inline-flex items-center  space-x-2 border-[0.5px] border-[#FDFFFD] rounded-[2px]  py-2 px-6 mb-10">
                    <span>
                      <Link
                        to="/news"
                        className="text-[14px] text-[#FDFFFD] capitalize"
                      >
                        Open Folder
                      </Link>
                    </span>
                    <EastOutlinedIcon fontSize="small" htmlColor="#FDFFFD" />
                  </div>
                  <div>
                    <img
                      src={More}
                      alt=""
                      className="h-[240px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[358px] h-[530px] bg-[#1B1B1B] rounded-[2px] p-4">
                <div>
                  <p className="text-[#F0C808] text-[14px] mb-2">June, 2020</p>
                  <h2 className="text-[#FDFFFD] text-[24px] font-medium mb-2">
                    Name of Event
                  </h2>
                  <p className="text-[#F7F7F7] text-[14px] leading-[150%] h-[100px] mb-2">
                    As a graduate of the Department of Urban and Regional
                    Planning, your journey doesn't have to end here. Join our
                    thriving alumni community, stay connected
                  </p>
                  <div className="inline-flex items-center  space-x-2 border-[0.5px] border-[#FDFFFD] rounded-[2px]  py-2 px-6 mb-10">
                    <span>
                      <Link
                        to="/news"
                        className="text-[14px] text-[#FDFFFD] capitalize"
                      >
                        Open Folder
                      </Link>
                    </span>
                    <EastOutlinedIcon fontSize="small" htmlColor="#FDFFFD" />
                  </div>
                  <div>
                    <img
                      src={More}
                      alt=""
                      className="h-[240px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[358px] h-[530px] bg-[#1B1B1B] rounded-[2px] p-4">
                <div>
                  <p className="text-[#F0C808] text-[14px] mb-2">June, 2020</p>
                  <h2 className="text-[#FDFFFD] text-[24px] font-medium mb-2">
                    Name of Event
                  </h2>
                  <p className="text-[#F7F7F7] text-[14px] leading-[150%] h-[100px] mb-2">
                    As a graduate of the Department of Urban and Regional
                    Planning, your journey doesn't have to end here. Join our
                    thriving alumni community, stay connected
                  </p>
                  <div className="inline-flex items-center  space-x-2 border-[0.5px] border-[#FDFFFD] rounded-[2px]  py-2 px-6 mb-10">
                    <span>
                      <Link
                        to="/news"
                        className="text-[14px] text-[#FDFFFD] capitalize"
                      >
                        Open Folder
                      </Link>
                    </span>
                    <EastOutlinedIcon fontSize="small" htmlColor="#FDFFFD" />
                  </div>
                  <div>
                    <img
                      src={More}
                      alt=""
                      className="h-[240px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-[40px]">
              <span>
                <img src={LeftIcon} alt="left toggle button" />
              </span>
              <span>
                <img src={RightIcon} alt="right toggle button" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1122px] mx-auto">
        <div>
          <h3 className="text-[#011717] text-[40px] font-bold capitalize mb-[40px]">
            Event Gallery
          </h3>
          <div className="flex space-x-6">
            <div className="w-[358px] h-[642px] bg-[#1B1B1B] rounded-[2px] p-4">
              <div>
                <p className="text-[#F0C808] text-[14px] mb-2">June, 2020</p>
                <h2 className="text-[#FDFFFD] text-[20px] font-medium">
                  Name of Event
                </h2>
                <h2 className="text-[#FDFFFD] text-[20px] font-medium mb-2">
                  Host
                </h2>
                <p className="text-[#F7F7F7] text-[14px] leading-[150%] h-[65px] mb-10">
                  Professor KYC is being congratulated for his meritorious deeds
                  and actions in combating the decay of education
                </p>

                <div>
                  <img
                    src={Moore}
                    alt=""
                    className="h-[400px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-wrap gap-[24px]">
              <div className=" relative w-[358px] h-[200px] bg-[#D9D9D9] rounded-[2px] p-4"></div>
              <div className=" relative w-[358px] h-[200px] bg-[#D9D9D9] rounded-[2px] p-4"></div>
              <div className=" relative w-[358px] h-[200px] bg-[#D9D9D9] rounded-[2px] p-4"></div>
              <div className=" relative w-[358px] h-[200px] bg-[#D9D9D9] rounded-[2px] p-4"></div>
              <div className=" relative w-[358px] h-[200px] bg-[#D9D9D9] rounded-[2px] p-4"></div>
              <div className=" relative w-[358px] h-[200px] bg-[#D9D9D9] rounded-[2px] p-4"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1122px] mx-auto mt-[160px]">
          <h3 className="text-[32px] font-[600] capitalize mb-6">
            popular shots
          </h3>
          <div>
            <article className="flex justify-center mb-[24px] gap-x-[23px]">
              <span className="bg-[#D9D9D9] h-[200px] w-[739px]"></span>
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
            </article>
            <article className="flex justify-center mb-[24px] gap-x-[23px]">
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
            </article>
            <article className="flex justify-center mb-[24px] gap-x-[23px]">
              <span className="bg-[#D9D9D9] h-[200px] w-[358px]"></span>
              <span className="bg-[#D9D9D9] h-[200px] w-[739px]"></span>
            </article>
          </div>
          <div className="flex justify-between items-center mt-[40px]">
            <span role="button">
              <img src={LeftIcon} alt="left toggle button" />
            </span>
            <span role="button">
              <img src={RightIcon} alt="right toggle button" />
            </span>
          </div>
        </div>
      </section>

      <section className="grid place-items-center px-2 lg:px-0 my-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[14px] leading-[150%] text-[#5B5756] max-w-[529px] mx-auto mb-4">
            Send us a mail filler text is a great way to show the size you want
            to have
          </p>
          <button className="px-6 py-2 bg-[#03312E] text-white text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md">
            contact us
          </button>
          <div className="flex justify-center gap-x-10 lg:px-0">
            <span>
              <EmailIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span>
              <FacebookIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span>
              <InstagramIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span>
              <TwitterIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span>
              <LinkedInIcon htmlColor="#934B00" fontSize="large" />
            </span>
          </div>
        </div>
      </section>
      <Comment />
    </main>
  );
};

export default Gallery;
