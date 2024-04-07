import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

import Contact from '../Resuables/Contact';
import Alarm from '../../assets/alarm.png';

const Journal1 = () => {
  return (
    <main>
      <section className="flex mb-[80px] journal-bg">
        <div className="journal-welcome flex-1">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            The URP Journal V8
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
              <p className="text-[#FDFFFD] mb-[109px]">VOLUME 8, NO 1</p>
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
                <h3 className="text-[14px] text-[#090302]">
                  Wali Itopa Ibrahim, Peret Patience Danlami
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Assessment of Sanitary Facilities in Primary Schools, Mando
                  Afaka, Igabi LGA, Kaduna, Nigeria
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Balogun, Joseph Olabode
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Assessing the Knowledge of Household Practice and Solid Waste
                  Characterization in Lokoja Metropolis
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Michael Oloyede Alabi, Ayoyimika Esther Agi
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Analyses of Spatio-Temporal Land use Conversion and
                  implication in Akure, Nigeri
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Famutimi, John Taiwo, Olugbamila, Omotayo Ben
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Implications of Living in Harmony with Nature for Urban
                  Sustainability in Post Covid-19 Era
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Farinmade Ademola, Akinyemi Toluwaniyin Inioluwa
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  The Effects of an Inadequate Data Bank System on Real Estate
                  Agency Practice in Lagos Mainland, Nigeria
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Gbemiga Bolade Faniran, Ayobami Phillip Adebayo
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Urban Landuse and Traffic Calming Devices in Ibadan, Nigeria:
                  Implications for Improved Road Safety Contributors: Gbemiga
                  Bolade Faniran
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Alade A. A, Agunloye O. O., Ajakaiye O.O.
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Pupil Pedestrians’ Challenges in High-Density Areas of Lagos
                  Metropolis
                </p>
              </div>
            </div>
            <div className="border-t-[1px] border-[#CECDCC] py-2 px-4 flex items-center space-x-[17px]">
              <div>
                <h3 className="text-[14px] text-[#090302]">
                  Dr. Victor U. Onyebueke, Dr. Akinyinka Akinyoade
                </h3>
                <p className="text-[14px] text-[#5B5756]">
                  Functions and Effects of New Connectivities on Rural-Urban
                  Symbiosis and Integrated Planning in Enugu Metropolis,
                  South-East Nigeria
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
                Sanitary Facilities
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Solid Waste
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Waste Segregation
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Nature
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Land Use
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Urban Growth
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Land Use Conversion
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Covid-19 Pandemic
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Humanity
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Pedestrian
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Community development
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Harmony
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Circular Migration
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                New Connectivities
              </p>
              <p className="bg-[#CDE3E3] rounded-[4px] px-4 py-2 text-center text-[10px]">
                Rural-Urban Symbiosis
              </p>
            </div>
          </div>
        </section>
      </div>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default Journal1;
