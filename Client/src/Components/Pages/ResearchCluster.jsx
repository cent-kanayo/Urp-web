import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import P1 from '../../assets/mainDesktop/stadia.png';
import Email from '../../assets/icons/email.png';

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

      <section className="max-w-[800px] mx-auto px-6 lg:px-0">
        <h2 className="text-center text-[24px] lg:text-[2.5rem] text-[#011717] font-bold mb-6">
          General Introduction
        </h2>
        <div className="text-[12px] lg:text-[18px] leading-[150%] flex flex-col gap-6">
          <p>
            The rapid growth of cities, combined with the increasing
            complexities of urban challenges necessitate the need for designing
            new, resilient and inclusive ways of living in urban areas. The
            Department of Urban and Regional Planning at the University of Lagos
            is at the forefront of urban planning research in Nigeria, advancing
            knowledge and practice of urban governance, urban analytics and
            spatial infrastructural development targeted at improving urban
            resilience and shaping cities of tomorrow.
          </p>
        </div>
      </section>

      <section className="mt-[64px] lg:mt-[80px] max-w-[1120px] mx-auto px-6 lg:px-0">
        <div className="flex flex-col flex-wrap gap-y-6 gap-x-[22px] lg:gap-x-6 mb-6">
          <div className="max-w-[1199px] flex flex-col lg:flex-row gap-[27px] mb-10">
            <img src={P1} alt="" className="w-full mb-4 lg:mb-0" />
            <div>
              <h2 className="text-[14px] lg:text-[40px] text-[#011717] font-bold mb-2">
                Spatial Data Infrastructure Cluster (SDI)
              </h2>

              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                The Spatial Data Infrastructure Cluster (SDI) is a vital
                research and innovation hub for the development, optimization,
                and utilization of Spatial Data Infrastructures, crucial for
                modern geospatial data management.
              </p>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                SDI, an interdisciplinary cluster combines professionals from
                geography, remote sensing, computer science, and urban planning
                to address spatial data challenges, aiming to create
                standardized data formats, interoperable technologies, and best
                practices.
              </p>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                Join the Spatial Data Infrastructure Cluster to explore
                geospatial data, driving advancements that impact our
                understanding of the world and shaping its future.
              </p>
              <div className="flex space-x-4 items-center mt-4">
                <p>For more information</p>
                <a
                  href="mailto:magunbiade@unilag.edu.ng"
                  aria-label="send email"
                >
                  <img
                    src={Email}
                    alt="email icon"
                    className="w-[24px] block mt-2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[1199px] flex flex-col lg:flex-row gap-[27px] mb-10">
            <img src={P1} alt="" className="w-full mb-4" />
            <div>
              <h2 className="text-[14px] lg:text-[40px] text-[#011717] font-bold mb-2">
                UNILAG-LISA{' '}
              </h2>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                University of Lagos Laboratory for Interdisciplinary Statistical
                Analysis (UNILAG-LISA), is a newly accredited statistical
                laboratory of the LISA 2020 network domiciled at the Department
                of Urban and Regional Planning. As a full member of the LISA
                2020 Network, the laboratory intends to promote its core mandate
                of Geo-Spatial and Statistical Analysis, Data Science, and Urban
                Analytics by increasing statistics and data science capacity at
                the University and in the local region.
              </p>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                This research cluster is dedicated to tackling contemporary
                challenges in language processing, information retrieval, and
                systems analysis, integrating diverse expertise for practical
                applications.
              </p>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                As we navigate the ever-changing landscape of technology and
                communication, UNILAG-LISA stands out as a beacon of innovation,
                providing significant contributions to both academic scholarship
                and real-world solutions. Our research focuses on the
                intersections of language, information, and systems analysis to
                design a future where understanding and technology converge.
              </p>
              <div className="flex space-x-4 items-center mt-4">
                <p>For more information</p>
                <a
                  href="mailto:magunbiade@unilag.edu.ng"
                  aria-label="send email"
                >
                  <img
                    src={Email}
                    alt="email icon"
                    className="w-[24px] block mt-2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[1199px] flex flex-col lg:flex-row gap-[27px] mb-10">
            <img src={P1} alt="" className="w-full mb-4" />
            <div>
              <h2 className="text-[14px] lg:text-[40px] text-[#011717] font-bold mb-2">
                Urbanisation and Population Dynamics
              </h2>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                The Sustainable Cities and African Urbanisation Dynamics cluster
                works around issues relating to resilient cities, city
                development policy, environmental changes in cities as outlined
                in Sustainable Development Goal 11, amongst others.  
              </p>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                This cluster leverages on population and rapid urbanisation
                which require immediate attention of policymakers to ensure
                sustainable city development. Understanding the urban growth
                drivers is essential to address effective strategies for
                urbanisation-related challenges. Our focus is to promote
                research and knowledge production on sustainable cities, African
                urbanisation and population dynamics.
              </p>
              <div className="flex space-x-4 items-center mt-4">
                <p>For more information</p>
                <a href="mailto:loduwaye@unilag.edu.ng" aria-label="send email">
                  <img
                    src={Email}
                    alt="email icon"
                    className="w-[24px] block mt-2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[1199px] flex flex-col lg:flex-row gap-[27px] mb-10">
            <img src={P1} alt="" className="w-full mb-4" />
            <div>
              <h2 className="text-[14px] lg:text-[40px] text-[#011717] font-bold mb-2">
                Urban Health and Livability
              </h2>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                Through “multidisciplinary research engagements with focus on
                the unique factors affecting health and well-being of Urban
                dwellers within the immediate research environment (Lagos)
                Nigeria and Africa at large”, the cluster seeks to maximise the
                impact of the original findings and broaden the scope of the
                visibility of its research works and expertise.
              </p>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                The cluster specifically hopes to address the following local
                and global issues (as indicated in the SDGs):
              </p>
              <div className="text-[#090302] text-[12px] lg:text-[16px] mb-2 pl-8">
                <ul className="list-disc">
                  <li>Good Health and Wellbeing (SDG3)</li>
                  <li>Clean Water and Sanitation (SDG6)</li>
                  <li>Sustainable Cities and communities (SDG11)</li>
                  <li>Combating Climate Change Impacts  (SDG13)</li>
                  <li>Spatial Analysis </li>
                  <li>(Health) Data Analytics</li>
                </ul>
              </div>
              <div className="flex space-x-4 items-center mt-4">
                <p>For more information</p>
                <a href="mailto:inwokoro@unilag.edu.ng" aria-label="send email">
                  <img
                    src={Email}
                    alt="email icon"
                    className="w-[24px] block mt-2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[1199px] flex flex-col lg:flex-row gap-[27px] mb-10">
            <img src={P1} alt="" className="w-full mb-4" />
            <div>
              <h2 className="text-[14px] lg:text-[40px] text-[#011717] font-bold mb-2">
                CENTRE FOR HOUSING AND SUSTAINABLE DEVELOPMENT{' '}
              </h2>
              <p className="text-[#090302] text-[12px] lg:text-[16px] mb-2">
                UNILAG-LISA, a research cluster at the University of Lagos, is a
                dynamic community of scholars, researchers, and innovators
                dedicated to advancing knowledge in language, information, and
                systems analysis.
              </p>
              <div className="flex space-x-4 items-center mt-4">
                <p>For more information</p>
                <button className="px-6 py-2 bg-[#03312E] text-white  text-[14px] lg:text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear shadow-md">
                  Visit the CHSD
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid place-items-center px-2 lg:px-0 my-[64px] lg:my-[80px] bg-[#CDE3E3]">
        <div className="capitalize text-center max-w-[844px] mx-auto py-[80px]">
          <h2 className="text-[24px] lg:text-[40px] font-bold leading-[150%] text-[#010a09] mb-4">
            contact us for sponsorship or partnership
          </h2>
          <p className="text-[12px] lg:text-[14px] leading-[150%] text-[#5B5756] max-w-[342px] lg:max-w-[529px] mx-auto mb-4">
            Ready to make a difference? Explore sponsorships and volunteer
            opportunities to create a meaningful impact
          </p>
          <Link
            to="/contact  "
            className="inline-block px-6 py-2 bg-[#03312E] text-white text-[14px] lg:text-[1rem] capitalize rounded-[2px] hover:bg-[#011312] transition-all duration-300 ease-linear mb-[60px] shadow-md"
          >
            contact us
          </Link>
          <div className="flex justify-center gap-x-5 lg:gap-x-10 lg:px-0">
            <span className="lg:hidden">
              <EmailIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <EmailIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span className="lg:hidden">
              <InstagramIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <InstagramIcon htmlColor="#934B00" fontSize="large" />
            </span>
            <span className="lg:hidden">
              <TwitterIcon htmlColor="#934B00" fontSize="medium" />
            </span>
            <span className="hidden lg:block">
              <TwitterIcon htmlColor="#934B00" fontSize="large" />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchCluster;
