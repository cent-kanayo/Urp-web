import { useEffect } from 'react';
import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';

import Contact from '../Resuables/Contact';

import GetHelp from '../Resuables/GetHelp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import rsbg from '../../assets/mainDesktop/news.png';
import BookCover from '../../assets/mainDesktop/bookCover.png';

import NewsCover from '../../assets/mainDesktop/newsflash.png';
import Women from '../../assets/mainDesktop/women.png';
import More from '../../assets/mainDesktop/more.png';

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[80px] rs-bg">
        <div className="flex-1">
          <img
            src={rsbg}
            alt=""
            className="w-full absolute -z-10 object-cover"
          />
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
                  “Grand ideas are good, but people need to survive”
                </h1>
                <p className="text-[20px] max-w-[491px]">
                  Professor Lawanson Calls for Human-Centred Urban Development
                  Approach
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
          The Headline Of Alumni News
        </h3>
        <div className="text-[20px] leading-[150%] flex flex-col gap-6">
          <p>
            Professor Lawanson Calls for Human-Centred Urban Development
            Approach
          </p>
          <p>
            With her lecture titled, “Alternative Urbanisms: Beyond Utopian
            Visions of the ‘Emerging’ African City”, the Professor of Urban
            Management and Governance highlighted the important roles that
            African cities play as places of dynamism, creativity, opportunity
            and vulnerability.
          </p>
          <p>
            With her lecture titled, “Alternative Urbanisms: Beyond Utopian
            Visions of the ‘Emerging’ African City”, the Professor of Urban
            Management and Governance highlighted the important roles that
            African cities play as places of dynamism, creativity, opportunity
            and vulnerability.
          </p>
          <p>
            “In many African cities, there is a disjuncture between the
            political aspirations of city leaders and the lived realities of
            majority of the inhabitants. While city governments often have
            utopian visions based on neoliberal ideologies and globalising
            narratives such as ‘Africa Rising’, the lived experience of many
            citizens is dystopian, resulting in a state of conflicting
            rationalities of development”, she submitted.
          </p>
          <div className="my-[56px]">
            <img src={NewsCover} alt="" />
          </div>
          <p>
            Professor Lawanson, therefore called for a revisiting of urban
            visioning in Africa, as well as the fundamentals of African
            development dynamics – including development models, planning
            education, planning practice and knowledge production.
          </p>
          <p>
            Her words: “Efforts that are currently made by African Governments
            to fit in to the ‘Africa Rising’ narrative have resulted in urban
            spaces becoming increasingly expensive, gentrified and out of the
            economic reach of local citizens. What we find at the juncture of
            this paradox is that African urban residents are navigating and
            (re)creating their cities in ways that suit their everyday
            realities, with urban informality lying at the cusp of these urban
            practices. We see, therefore, that the real African city is the one
            that is being built by the actions of everyday people. That reality
            is called Alternative Urbanism”.
          </p>
          <p>
            The Inaugural Lecturer defined Alternative Urbanisms as the
            production of urbanization that is independent of conventional,
            mainstream models of land use classification, administration, and
            utilization; and went on to present evidence of counter-hegemonic
            forms of urban living, urban space reconfigurations, extended urban
            planning practices and hybrid infrastructures by everyday citizens
            in Lagos. She deployed Case Studies drawn from her over twenty-year
            journey as a hands-on scholar.
          </p>
          <p>
            She concluded with recommendations that include: envisioning African
            urban futures that promote cities for all; recognising and
            leveraging the transformative power of people-led practices for
            sustainable urban development; practising urbanisation at scale;
            transiting urban planning from a technical to a social justice
            discipline; universities playing a catalytic role in promoting
            engaged scholarship and transdisciplinarity; and decolonising urban
            studies and praxis.
          </p>
          <p>
            “Grand ideas are good, but people need to survive. It is only by
            dismantling colonial urban planning and design policies that do not
            reflect the present diversity of African people and places, and by
            building new alternative paradigms of creative placemaking that
            includes voices from local communities, that we will ultimately and
            finally transform our cities and public spaces to be truly African
            and indeed sustainable”.
          </p>
          <div className="my-[56px]">
            <img src={Women} alt="" />
          </div>
          <p>
            Professor Taibat Olaitan Lawanson, who delivered the 21st Inaugural
            Lecture of the 2021/2022 Session of the University of Lagos, holds a
            holds a PhD in Urban and Regional Planning from the Federal
            University of Technology Akure (2011). She joined the services of
            the University of Lagos in April 2002 as an Assistant Lecturer in
            the Department of Urban and Regional Planning, was promoted to
            Lecturer II in 2004, Lecturer I in 2008, Senior Lecturer in 2011 and
            Associate Professor in 2015. She was appointed Professor of Urban
            Management and Governance in October 2019.
          </p>
          <p>
            She is a registered Town Planner and a Fellow of the Nigerian
            Institute of Town Planners. She is also a member of the
            International Society for City and Regional Planners and served as
            Vice President of the African Planners Institute (2021 – 2022).
          </p>
        </div>
      </section>

      <section className="h-[896px] bg-[#1B1B1B] py-[52px] my-[80px]">
        <div>
          <h3 className="text-center text-[#FDFFFD] text-[2.5rem] font-[600] capitalize mb-[40px]">
            Other News Articles
          </h3>
          <div className="max-w-[1112px] mx-auto">
            <div className="flex justify-center items-center gap-x-[24px]">
              <div className="relative w-[358px] h-[484px] bg-[#FDFFFD] rounded-[2px] p-4">
                <div>
                  <p className="text-[#934B00] text-[14px] mb-2">June, 2020</p>
                  <h2 className="text-[#1B1B1B] text-[24px] font-medium mb-2">
                    The Headline Of Alumni News
                  </h2>
                  <p className="text-[#5B5756] text-[14px] leading-[150%] mb-10">
                    As a graduate of the Department of Urban and Regional
                    Planning, your journey doesn't have to end here.
                  </p>
                  <div>
                    <img src={More} alt="" />
                  </div>
                </div>
              </div>
              <div className="relative w-[358px] h-[484px] bg-[#FDFFFD] rounded-[2px] p-4">
                <div>
                  <p className="text-[#934B00] text-[14px] mb-2">June, 2020</p>
                  <h2 className="text-[#1B1B1B] text-[24px] font-medium mb-2">
                    The Headline Of Alumni News
                  </h2>
                  <p className="text-[#5B5756] text-[14px] leading-[150%] mb-10">
                    As a graduate of the Department of Urban and Regional
                    Planning, your journey doesn't have to end here.
                  </p>
                  <div>
                    <img src={More} alt="" />
                  </div>
                </div>
              </div>
              <div className="relative w-[358px] h-[484px] bg-[#FDFFFD] rounded-[2px] p-4">
                <div>
                  <p className="text-[#934B00] text-[14px] mb-2">June, 2020</p>
                  <h2 className="text-[#1B1B1B] text-[24px] font-medium mb-2">
                    The Headline Of Alumni News
                  </h2>
                  <p className="text-[#5B5756] text-[14px] leading-[150%] mb-10">
                    As a graduate of the Department of Urban and Regional
                    Planning, your journey doesn't have to end here.
                  </p>
                  <div>
                    <img src={More} alt="" />
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

      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default NewsPage;
