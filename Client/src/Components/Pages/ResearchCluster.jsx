import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';

import Excocard from '../Resuables/Excocard';
import Cta from '../Resuables/Cta';
import Contact from '../Resuables/Contact';

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

import CluterCard from '../Resuables/CluterCard';
import { useEffect } from 'react';

const ResearchCluster = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main>
      <section className="flex mb-[64px] lg:mb-[80px] research-bg px-[60px] lg:px-0">
        <div className="about-welcome flex-1 h-[64px] lg:h-[108px] px-[60px] lg:px-0">
          <h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
            Research clusters
          </h1>
        </div>
      </section>

      <section className="max-w-[800px] mx-auto px-[30px] lg:px-0">
        <h2 className="text-center text-[24px] lg:text-[40px] font-bold text-[#011717] mb-6">
          Spatial Data Infrastructure Cluster (SDI){' '}
        </h2>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col gap-8 lg:gap-6">
          <p>
            The Spatial Data Infrastructure Cluster (SDI) is a vital research
            and innovation hub for the development, optimization, and
            utilization of Spatial Data Infrastructures, crucial for modern
            geospatial data management.
          </p>
          <p>
            SDI, an interdisciplinary cluster combines professionals from
            geography, remote sensing, computer science, and urban planning to
            address spatial data challenges, aiming to create standardized data
            formats, interoperable technologies, and best practices.
          </p>
          <p>
            Join the Spatial Data Infrastructure Cluster to explore geospatial
            data, driving advancements that impact our understanding of the
            world and shaping its future.
          </p>
        </div>
      </section>
      <section className="lg:h-[484px] bg-[#037171] mt-[80px] py-6 px-6 lg:px-0">
        <h2 className="text-center text-white text-[2.5rem] font-bold mb-[80px]">
          Cluster Team
        </h2>
        <div className="max-w-[1112px] mx-auto flex flex-wrap md:justify-center lg:justify-normal flex-col md:flex-row gap-4 text-[#FDFFFD] text-[16px]">
          <CluterCard name="Muyiwa Agunbiade" />
          <CluterCard name="Emeka Nwosu" />
          <CluterCard name="David Adio Moses" />
          <CluterCard name="Harunah Jimoh" />
          <CluterCard name="Oladimeji Obidairo" />
          <CluterCard name="Sesan Adeyemi" />
          <CluterCard name="Sonia Ugwunna" />
          <CluterCard name="Osagie Uyi" />
          <CluterCard name="Oluyemi Akindeju" />
          <CluterCard name="Peter Elias" />
          <CluterCard name="Samuel Dekolo " />
        </div>
      </section>

      <section className="max-w-[800px] mx-auto px-[30px] lg:px-0 mt-[64px] lg:mt-20">
        <h2 className="text-center text-[24px] lg:text-[40px] font-bold text-[#011717] mb-6">
          UNILAG-LISA
        </h2>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col gap-8 lg:gap-6">
          <p>
            UNILAG-LISA, a research cluster at the University of Lagos, is a
            dynamic community of scholars, researchers, and innovators dedicated
            to advancing knowledge in language, information, and systems
            analysis.
          </p>
          <p>
            UNILAG-LISA is a cluster dedicated to tackling contemporary
            challenges in language processing, information retrieval, and
            systems analysis, integrating diverse expertise for practical
            applications.
          </p>
          <p>
            As we navigate the ever-changing landscape of technology and
            communication, UNILAG-LISA stands out as a beacon of innovation,
            trying to make significant contributions to both academic
            scholarship and real-world solutions. Join us as we investigate the
            intersections of language, information, and systems analysis to
            design a future where understanding and technology converge.
          </p>
        </div>
      </section>
      <section className="lg:h-[484px] bg-[#037171] mt-[80px] py-6 px-6 lg:px-0">
        <h2 className="text-center text-white text-[2.5rem] font-bold mb-[80px]">
          Cluster Team
        </h2>
        <div className="max-w-[1112px] mx-auto flex flex-wrap md:justify-center lg:justify-normal flex-col md:flex-row gap-4 text-[#FDFFFD] text-[16px]">
          <CluterCard name="Emeka Nwosu" />
          <CluterCard name="David Adio Moses" />
          <CluterCard name="Harunah Jimoh" />
          <CluterCard name="Oladimeji Obidairo" />
          <CluterCard name="Sesan Adeyemi" />
          <CluterCard name="Sonia Ugwunna" />
          <CluterCard name="Osagie Uyi" />
          <CluterCard name="Oluyemi Akindeju" />
          <CluterCard name="Muyiwa Agunbiade" />
          <CluterCard name="Aliu Soyingbe" />
          <CluterCard name="Wasiu Bello" />
          <CluterCard name="Abdurahman Mohameed" />
        </div>
      </section>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default ResearchCluster;
