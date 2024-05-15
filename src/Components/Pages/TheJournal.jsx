import Contact from '../Resuables/Contact';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
const TheJournal = () => {
  return (
    <main>
      <section className="flex mb-[80px] journal-bg">
        <div className="journal-welcome flex-1">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            The URP Journal
          </h1>
        </div>
      </section>
      <div className="px-6 lg:px-0">
        <section className="max-w-[800px] mx-auto px-6 lg:px-0 mt-[64px] lg:mt-0">
          <h2 className="text-center text-[24px] lg:text-[32px] font-bold mb-6">
            Urban and Regional Planning Review
          </h2>
          <div className="text-[12px] lg:text-[16px] leading-[150%] flex flex-col">
            <p className="mb-6">
              Urban and Regional Planning Review (URPR) is a multidisciplinary
              journal devoted to articles that address contemporary urban and
              regional issues and is directed towards an audience that includes
              practitioners, policymakers, scholars and students.
            </p>
            <p className="mb-6">
              The Journal aspires to contribute to the body of substantive and
              methodological knowledge concerning public policies, programs, and
              administration. It particularly seeks to promote scholarship and
              research in urban planning, development and management.
            </p>
            <p className="mb-6">
              Other areas of emphasis include the relationship of Urban and
              Regional Planning to environmental management, architecture,
              building and construction management, estate management, landscape
              architecture, engineering, pure and applied sciences, arts, law
              and humanities.
            </p>
            <p className="">
              Urban and Regional Planning Review (URPR) is published annually by
              the Department of Urban and Regional Planning of the University of
              Lagos, Akoka, Yaba, Lagos, Nigeria.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:justify-center gap-6 mt-20">
            <a href='http://urpr.unilag.edu.ng/issue/archive' target='_blank' className="lg:w-[345px] pen-box">
              <article className="bg-[#934B00] px-[17px] py-6 h-[241px] text-[#FDFFFD]">
                <p className="mb-6">2023</p>
                <h3 className="mb-6 font-bold text-[24px]">The Journal</h3>
                <p className="mb-6">VOLUME 9, NO 1</p>
                <div className="border-[1px] border-[#FDFFFD] rounded-[2px] px-6 py-2 inline-flex gap-2 text-[#FDFFFD]">
                  <span>View Journal</span>
                  <span>
                    <EastOutlinedIcon htmlColor="#FDFFFD" />
                  </span>
                </div>
              </article>
              <div className="flex flex-wrap gap-2 text-[#1B1B1B] py-4 px-3">
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Spatial Planning
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Land Administration
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Sustainable Development
                </p>
              </div>
            </a>
            <a href="http://urpr.unilag.edu.ng/issue/view/269" target='_blank' className="lg:w-[345px] pen-box">
              <article className="bg-[#934B00] px-[17px] py-6 h-[241px] text-[#FDFFFD]">
                <p className="mb-6">2022</p>
                <h3 className="mb-6 font-bold text-[24px]">The Journal</h3>
                <p className="mb-6">VOLUME 8, NO 1</p>
                <div className="border-[1px] border-[#FDFFFD] rounded-[2px] px-6 py-2 inline-flex gap-2 text-[#FDFFFD]">
                  <span>View Journal</span>
                  <span>
                    <EastOutlinedIcon htmlColor="#FDFFFD" />
                  </span>
                </div>
              </article>
              <div className="flex flex-wrap gap-2 text-[#1B1B1B] py-4 px-3">
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Sanitary Facilities
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Solid Waste
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Waste Segregation
                </p>
                <p className="bg-[#F7F7F7] rounded-[4px] px-4 py-2 text-center text-[10px]">
                  Land Use
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default TheJournal;
