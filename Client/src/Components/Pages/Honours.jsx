import Sonia from '../../assets/Excos/sonia.webp';
import Fred from '../../assets/Excos/fred.webp';
import Ay from '../../assets/honours/Ay.webp';
import Kenny from '../../assets/honours/Kenny.webp';
import David from '../../assets/honours/David.webp';

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
            Welcome to the Department of Urban and Regional Planning's
            distinguished page dedicated to showcasing the academic brilliance
            of our First Class Honours students. As we take immense pride in the
            exceptional achievements of our students, this platform serves as a
            testament to the dedication, intellect, and hard work that our
            scholars have put forth throughout their academic journey.
          </p>
          <p>
            In our Department, we are committed to fostering a community of
            forward-thinkers, problem solvers, and leaders. The individuals
            featured on this page have not only met but exceeded the rigorous
            academic standards set by our department. Their achievements reflect
            not only a mastery of the theoretical foundations but also a keen
            understanding of the practical applications of urban planning
            principles.
          </p>
        </div>
      </section>
      <section className="mt-[80px] px-4 lg:px-0">
        <div className="flex justify-center flex-wrap gap-5 max-w-[1119px] mx-auto">
          <Excocard
            name="Ayomide Akinseye"
            role="400 lvl"
            image={Ay}
            link={'/honours-list/#'}
          />

          <Excocard
            name="Kehinde Ajayi"
            role="400 lvl"
            image={Kenny}
            link={'/honours-list/#'}
          />

          <Excocard
            name="Sonia Ugwunna"
            role="400 lvl"
            image={Sonia}
            link={'/honours-list/#'}
          />

          <Excocard
            name="Fredrick Laikpo"
            role="300 lvl"
            image={Fred}
            link={'/honours-list/#'}
          />
          <Excocard
            name="Gbande David"
            role="300 lvl"
            image={David}
            link={'/honours-list/#'}
          />
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
