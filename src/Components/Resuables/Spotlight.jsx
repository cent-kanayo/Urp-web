import SpotlightBox from './SpotlightBox';

import Pen from '../../assets/pen.png';
import Student from '../../assets/student.png';
import City from '../../assets/city.png';

const Spotlight = () => {
  return (
    <section className="px-4 lg:px-0">
      <h2 className="text-center text-[2.5rem] font-[600] capitalize mb-[40px]">
        Urban Planning Hub
      </h2>
      <div className="flex flex-col md:flex-row md:justify-center flex-wrap gap-[20px]">
        <SpotlightBox
          image={City}
          h2="Design Projects"
          p="Request access to past projects."
          btn="View projects"
          link="/projects"
        />
        <SpotlightBox
          image={Pen}
          h2="The Planner’s pen"
          p="Request access to past projects."
          btn="open planner’s pen"
          link="/planners-pen"
        />
        <SpotlightBox
          image={Student}
          h2="Student of the month"
          p="Request access to past projects."
          btn="Open profile"
          link="/student-of-the-month"
        />
      </div>
    </section>
  );
};

export default Spotlight;
