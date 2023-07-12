import SpotlightBox from './SpotlightBox';

import Pen from '../../assets/pen.png';
import Student from '../../assets/student.png';
import City from '../../assets/city.png';

const Spotlight = () => {
  return (
    <section className="mt-[200px]">
      <h2 className="text-center text-[2.5rem] font-[600] capitalize mb-[64px]">
        student spotlight
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-[20px]">
        <SpotlightBox
          image={Pen}
          h2="The Planner’s pen"
          p="I would like to express my pride of belonging to the Department of Urban and Regional Planning, Faculty of Environmental Science, University of Lagos."
          btn="open planner’s pen"
        />
        <SpotlightBox
          image={Student}
          h2="Student of the month"
          p="I would like to express my pride of belonging to the Department of Urban and Regional Planning, Faculty of Environmental Science, University of Lagos."
          btn="View student"
        />
        <SpotlightBox
          image={City}
          h2="final year projects"
          p="I would like to express my pride of belonging to the Department of Urban and Regional Planning, Faculty of Environmental Science, University of Lagos."
          btn="View projects"
        />
      </div>
    </section>
  );
};

export default Spotlight;
