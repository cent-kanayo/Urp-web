import Journal from '../../assets/journals.png';

import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';

import Excocard from '../Resuables/Excocard';
import Cta from '../Resuables/Cta';
import Contact from '../Resuables/Contact';

import GetHelp from '../Resuables/GetHelp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import rsbg from '../../assets/mainDesktop/rsbg.png';
import BookCover from '../../assets/mainDesktop/bookCover.png';

const ResearchCluster = () => {
  return (
    <main>
      <section className="flex mb-[80px] rs-bg">
        <div className="flex-1">
          <img src={rsbg} alt="" className="w-full absolute -z-10" />
          <div className="max-w-[1122px] mx-auto text-[#FDFFFD] py-[147px]">
            <div className="flex items-center space-x-2">
              <article className="w-[24px] h-[2px] bg-white"></article>
              <article>
                <p className="mb-6">August 8, 2023</p>
              </article>
            </div>
            <div className="max-w-[598px]">
              <div>
                <h1 className="text-[2.5rem] font-bold mb-4 leading-[150%]">
                  A Treatise on the Importance of Urban Planning In Modern Day
                </h1>
                <p className="text-[20px] max-w-[491px]">
                  Launch of new bureau advances U.S. global health mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px]">
        <div className="text-[#090302]">
          <h5 className="mb-4 text-[20px]">Cluster Name</h5>
          <div className="flex items-center gap-x-6">
            <p className="text-[14px]">1st July,2023</p>
            <CreateNewFolderOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div className="flex justify-center gap-x-6 lg:px-0">
          <span>
            <FacebookIcon htmlColor="#090302" fontSize="medium" />
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/muyiwa-a-52a67734/"
              target="_blank"
              aria-label="Link to LinkedIn"
            >
              <LinkedInIcon
                fontSize="medium"
                className="text-[#090302] hover:text-[#192C69]"
              />
            </a>
          </span>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-center text-[32px] font-[500] mb-6">
          A Treatise on the Importance of Urban Planning In Modern Day
        </h3>
        <div className="text-[20px] leading-[150%] flex flex-col gap-6">
          <p>
            Our lecturer extraordinaire, Ms. Damilola Odekunle, is a
            trailblazing rockstar of academia, with revolutionary ideas that
            shake up the very foundations of traditional teaching methods. Her
            contagious enthusiasm and exceptional ability to engage students
            have made her a true legend among her peers.
          </p>
          <p>
            Ms. Odekunle holds a Ph.D. in Urban and Regional Planning from a
            renowned international university, where her groundbreaking research
            focused on innovative approaches to urban renewal and
            community-based development. During her graduate studies, she
            received several accolades for her exceptional academic performance
            and was recognized as a promising researcher in the field of urban
            planning.
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 flex-wrap mt-[80px]">
          <div className="w-[123px] h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
            <p className="text-[#57A0A0] text-[20px]">Tags</p>
          </div>
          <div className="w-[123px] h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
            <p className="text-[#57A0A0] text-[20px]">Tags</p>
          </div>
          <div className="w-[123px] h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
            <p className="text-[#57A0A0] text-[20px]">Tags</p>
          </div>
          <div className="w-[123px] h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
            <p className="text-[#57A0A0] text-[20px]">Tags</p>
          </div>
          <div className="w-[123px] h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
            <p className="text-[#57A0A0] text-[20px]">Tags</p>
          </div>
          <div className="w-[123px] h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
            <p className="text-[#57A0A0] text-[20px]">Tags</p>
          </div>
          <div className="w-[123px] h-[64px] bg-[#CDE3E3] rounded-[2px] flex justify-center items-center">
            <p className="text-[#57A0A0] text-[20px]">Tags</p>
          </div>
        </div>
      </section>
      <section className="h-[684px] bg-[#03312E] mt-[80px] py-6">
        <h2 className="text-center text-white text-[2.5rem] font-bold mb-[80px]">
          Cluster Team
        </h2>
        <div className="flex justify-center space-x-6 text-[#FDFFFD]">
          <div className="max-w-[548px] flex-1">
            <article className="flex justify-between items-center py-4 px-6 border-y-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
            <article className="flex justify-between items-center py-4 px-6 border-b-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
            <article className="flex justify-between items-center py-4 px-6 border-b-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
            <article className="flex justify-between items-center py-4 px-6 border-b-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
            <article className="flex justify-between items-center py-4 px-6 border-b-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
          </div>
          <div className="max-w-[548px] flex-1">
            <article className="flex justify-between items-center py-4 px-6 border-y-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
            <article className="flex justify-between items-center py-4 px-6 border-b-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
            <article className="flex justify-between items-center py-4 px-6 border-b-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
            <article className="flex justify-between items-center py-4 px-6 border-b-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
            <article className="flex justify-between items-center py-4 px-6 border-b-[0.5px] border-[#FDFFFD]">
              <div>
                <p>Dr. O Olubode</p>
                <p>Head of Department</p>
              </div>
              <div className="flex flex-col gap-2">
                <PhoneOutlinedIcon />
                <EmailIcon />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="h-[680px] bg-[#1B1B1B] py-[52px] my-[80px]">
        <div>
          <h3 className="text-center text-[#FDFFFD] text-[2.5rem] font-[600] capitalize mb-[40px]">
            Other Research Clusters
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex justify-center items-center gap-x-[24px]">
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[74px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">May 2015</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://www.ceeol.com/search/article-detail?id=330196"
                      target="_blank"
                    >
                      Mandarin Research group 3
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
                    <p className="flex justify-center items-center space-x-2">
                      <a
                        href="https://doi.org/10.1016/j.compenvurbsys.2018.06.009"
                        target="_blank"
                      >
                        View Cluster
                      </a>
                      <EastOutlinedIcon />
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[74px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">2011</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://ir.unilag.edu.ng/handle/123456789/7764"
                      target="_blank"
                    >
                      Mandarin Research group 3
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
                    <p className="flex justify-center items-center space-x-2">
                      <a
                        href="https://doi.org/10.1016/j.jum.2018.03.001"
                        target="_blank"
                      >
                        View Cluster
                      </a>
                      <EastOutlinedIcon />
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[74px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">2009</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px]">
                    <a
                      href="https://doi.org/10.1080/23792949.2017.1399804"
                      target="_blank"
                    >
                      Mandarin Research group 3
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
                    <p className="flex justify-center items-center space-x-2">
                      <a
                        href="https://doi.org/10.1080/23792949.2017.1399804"
                        target="_blank"
                      >
                        View Cluster
                      </a>
                      <EastOutlinedIcon />
                    </p>
                  </article>
                </div>
              </div>
              <div className="relative w-[260px] h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute top-[74px] max-w-[174px] pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px]">December 1998</p>
                  <h3 className="text-[#1B1B1B] font-bold text-[16px] leading-[150%]">
                    <a
                      target="_blank"
                      href="https://doi.org/10.1080/23792949.2017.1399804"
                    >
                      Mandarin Research group 3
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-white py-[18px] px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-6">
                    <p className="flex justify-center items-center space-x-2">
                      <a
                        href="https://doi.org/10.1080/23792949.2017.1399804"
                        target="_blank"
                      >
                        View Cluster
                      </a>
                      <EastOutlinedIcon />
                    </p>
                  </article>
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

      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default ResearchCluster;
