import Journal from '../../assets/journals.png';
import Exco4 from '../../assets/Excos/exco4.png';
import Exco5 from '../../assets/Excos/exco5.png';
import Exco6 from '../../assets/Excos/exco6.png';

import LeftIcon from '../../assets/left.png';
import RightIcon from '../../assets/right.png';

import Excocard from '../Resuables/Excocard';
import Cta from '../Resuables/Cta';
import Contact from '../Resuables/Contact';

import GetHelp from '../Resuables/GetHelp';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useState } from 'react';

const Honours = () => {
  return (
    <main>
      <section className="flex mb-[80px] honours-bg">
        <div className="flex-1"></div>
      </section>
      <section className="max-w-[800px] mx-auto px-6 lg:px-0">
        <h3 className="text-center text-[32px] font-[600] mb-6">
          Message to Honor Listers
        </h3>
        <div className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col gap-6">
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
      </section>
      <section className="mt-[80px] px-4 lg:px-0">
        <div className="flex justify-center flex-wrap gap-5 max-w-[1119px] mx-auto">
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco4} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco5} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Exco6} />
        </div>
        {/* <div className="flex items-center justify-center mt-10 lg:hidden">
          <span className="text-[1rem]text-[#010A09] font-medium capitalize ">
            see all
          </span>
          <span>
            <ArrowForwardIosOutlinedIcon htmlColor="#934B00" fontSize="small" />
          </span>
        </div> */}
      </section>
      <Contact h2="contact us for sponsorship or partnership" />
    </main>
  );
};

export default Honours;
