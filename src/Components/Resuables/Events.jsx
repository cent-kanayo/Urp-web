import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import EventCard from './EventCard';

const Events = () => {
  return (
    <section className="mt-[200px] px-[8px] lg:px-0">
      <h2 className="text-center text-[2.5rem] font-[600] capitalize mb-[64px]">
        News & events
      </h2>
      <div className="grid place-items-center">
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <div className="h-[440px] lg:w-[614px] relative mb-4">
              <img
                src="https://media.istockphoto.com/id/1414024629/photo/teacher-reading-lecture-at-university.webp?b=1&s=170667a&w=0&k=20&c=_uGbnxBofRGnJDN08N-PIvkQV0INrXVcdKRYlL2SasE="
                alt=""
                className="block w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="max-w-[614px]">
              <p className="text-[#934B00] text-[1rem] capitalize mb-3">
                June, 2023
              </p>
              <h3 className="typo-3 text-[#010A09] leading-8 mb-3">
                Professor KYC is being congratulated for his meritorious deeds
                and actions in combating the decay of education
              </h3>
              <p className="text-[1rem] text-[#010A09] mb-6">
                Ph.D. student and affiliate faculty member in African American
                studies connects research and community, amplifying marginalized
                voices in the process.
              </p>
            </div>
            <div>
              <span>
                <a href="#" className="text-[1rem] text-[#010A09] capitalize">
                  read more
                </a>
              </span>
              <ChevronRightOutlinedIcon htmlColor="#934B00" />
            </div>
          </div>
          <div className="flex flex-col gap-[20px] px-2 lg:px-0">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
