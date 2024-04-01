import { useEffect, useRef } from 'react';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

import Contact from '../Resuables/Contact';
import Alarm from '../../assets/alarm.png';

const Journal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[80px] journal-bg">
        <div className="journal-welcome flex-1">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            The URP Journal V9
          </h1>
        </div>
      </section>
      <div className="lg:flex flex-col lg:flex-row lg:gap-[80px] xl:pl-[7%] px-6 lg:px-0">
        <section className=" lg:max-w-[358px] mx-auto lg:mx-0">
          <div className="bg-[#934B00] py-10 px-6 lg:px-10 mb-10">
            <div className=" flex justify-between items-start mb-[32px]">
              <p className="text-[#FDFFFD]">2023</p>
              <img src={Alarm} alt="" />
            </div>
            <div>
              <h2 className="text-[#FDFFFD] text-[32px] lg:text-[2.5rem] font-bold mb-[106px] lg:mb-[32px]">
                The <br /> Journal
              </h2>
              <p className="text-[#FDFFFD] mb-[109px]">VOLUME 9, NO 1</p>
              <p className="text-[#FDFFFD] text-[14px] lg:text-[16px]">
                The Department of Urban and Regional Planning
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[297px] mb-10">
            <button className="bg-[#03312E] text-[#FDFFFD] text-[20px] rounded-[2px] py-4 px-[46px] flex items-center space-x-2">
              <span>
                <VerticalAlignBottomIcon fontSize="small" />
              </span>
              <span>Download Full PDF</span>
            </button>
          </div>
          <div className="w-[297px] h-[527px] overflow-y-scroll">
            <p className="mb-6 text-[#1B1B1B] text-[20px]">Contributors</p>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">Muyiwa Agunbiade</h3>
                <p className="text-[14px] text-[#5B5756]">
                  Spatial Planning and Land Administration Issues in the Lagos
                  Megacity
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Adeyemi, Sesan Adeniyi, Onifade, Victor Abimbola Jimoh, Haruna
                  Olayiwola, Akindeju Foluyele
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Development Control as a Tool for Urban Sustainability in
                  South-Western Nigeria
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Suleiman, A. R., Abdulraheem, M.O, Adelabu, J.K.
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Impact of Urbanisation on Residents’ Quality of Life in
                  Lokoja, Kogi State, Nigeria
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Abdullateef Iyanda BAKO, Femi Adekunle BALOGUN
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  A Review of Emerging Issues on Urban Land Management Policy in
                  Nigeria
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Emmanuel, A.A, Adigun, T. O.
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Livelihood Correlate of Urban Agriculture in Ogbomoso, Nigeria
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">Babalola, A. J.</h3>
                <p className="text-[14px] text-[#5B5756]">
                  Influence of Macroeconomic Variables on Construction Material
                  Prices in Lagos State: An Auto-Regressive Distributed Lagos
                  Approach Contributors: Gbemiga Bolade Faniran
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Sunday Kazahshii Habila
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Assessing Households’ Sanitation and Sewage Management
                  Practices in Kaduna Metropolis, Kaduna State Nigeria
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Abiodun, Oludayo Emmanuel, Salami Tosin
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Land Use Dynamics of Urban Change in the Lagos-Ogun Urban
                  Fringe, Southwest Nigeria
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[800px] px-6 lg:px-0 mt-[64px] lg:mt-0">
          <h2 className="text-center text-[24px] lg:text-[32px] font-bold mb-6">
            About The Journal
          </h2>
          <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col">
            <p className="mb-6">
              Urban and Regional Planning Review (URPR) is a multidisciplinary
              journal devoted to articles that address contemporary urban and
              regional issues and is directed towards an audience that includes
              practitioners, policymakers, scholars and students.
            </p>
            <p className="mb-6">
              Urban and Regional Planning Review (URPR) is a multidisciplinary
              journal devoted to articles that address contemporary urban and
              regional issues and is directed towards an audience that includes
              practitioners, policymakers, scholars and students.
            </p>
            <p className="mb-6">
              Other areas of emphasis include the relationship of Urban and
              Regional Planning to environmental management, architecture,
              building and construction management, estate management, landscape
              architecture, engineering, pure and applied sciences, arts, law
              and humanities.
            </p>
            <p className="mb-6">
              Urban and Regional Planning Review (URPR) is published annually by
              the Department of Urban and Regional Planning of the University of
              Lagos, Akoka, Yaba, Lagos, Nigeria.
            </p>
            <p className="mb-6">The editors seek manuscripts that:</p>
            <p className="mb-6">
              <ul className="list-disc pl-10">
                <li>
                  Develop theoretical, conceptual, or methodological approaches
                  to metropolitan and community problems;
                </li>
                <li>
                  Present results of empirical research that advance the
                  understanding of the environment;
                </li>
                <li>
                  Describe and evaluate strategies for social change in the
                  urban milieu;
                </li>
                <li>
                  Explore innovative policies and programs that have clear
                  implications for future action; and
                </li>
                <li>
                  Analyze issues of current interest to those who work in and
                  study the urban and regional environment.
                </li>
              </ul>
            </p>
          </div>
          <div className="lg:max-w-none flex items-center gap-3 lg:gap-6 flex-wrap mt-[80px] justify-center lg:justify-start py-10">
            <div className="flex flex-wrap gap-x-4 gap-y-6 text-[#1B1B1B] py-4 px-3">
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Spatial Planning
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Land Administration
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Sustainable Development
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Population
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Urban Planning
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Development Control
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Settlement
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Urban Growth
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Urbanism
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Infrastructure
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Land Policy
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Urban Land Management
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Urban expansion
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Sustainable Development Goals
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Livelihood
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Open Defecation
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Containment
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Domestic Sewage
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Land use
              </p>
            </div>
          </div>
        </section>
      </div>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default Journal;
