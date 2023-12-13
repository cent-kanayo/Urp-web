import Timi from '../../assets/Excos/timi.webp';

import Excocard from '../Resuables/Excocard';
import Contact from '../Resuables/Contact';

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
          <Excocard name="Oreoluwa Jeffery" role="president" image={Timi} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Timi} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Timi} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Timi} />
          <Excocard name="Oreoluwa Jeffery" role="president" image={Timi} />
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
