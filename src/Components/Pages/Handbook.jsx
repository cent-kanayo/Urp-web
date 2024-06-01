import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import Contact from "../Resuables/Contact";
import Alarm from "../../assets/alarm.png";

const Handbook = () => {

	return (
		<main>
			<section className="flex mb-[80px] journal-bg">
				<div className="journal-welcome flex-1">
					<h1 className="text-[24px] lg:text-[2.5rem] font-bold text-center text-white">
						The Handbook
					</h1>
				</div>
			</section>
			<div className="flex flex-col lg:flex-row gap-[80px] xl:pl-[7%]">
				<section className="max-w-[320px] lg:max-w-[358px] mx-auto lg:mx-0">
					<div className="bg-[#934B00] p-10 mb-10">
						<div className=" flex justify-between items-start mb-[32px]">
							<p className="text-[#FDFFFD]">2023</p>
							<img src={Alarm} alt="" />
						</div>
						<div>
							<h2 className="text-[#FDFFFD] text-[2.5rem] font-bold mb-[141px]">
								The <br /> Department Handbook
							</h2>
							<p className="text-[#FDFFFD] text-[16px]">
								The Department of Urban and Regional Planning
							</p>
						</div>
					</div>
					<div className="flex flex-col w-[297px] mb-10">
						<a
							href="http://urp.unilag.edu.ng/assets/URPStudentHandbook2023-2024.pdf"
							target="_blank"
							className="bg-[#03312E] text-[#FDFFFD] text-[20px] rounded-[2px] py-4 px-[46px] flex items-center space-x-2">
							<span>
								<VerticalAlignBottomIcon fontSize="small" />
							</span>
							<span>Download Full PDF</span>
						</a>
					</div>
				</section>

				<section className="max-w-[800px] px-6 lg:px-0">
					<h2 className="text-center text-[24px] lg:text-[32px] font-bold mb-6">
						Welcome to the Department of Urban and Regional Planning,
						University of Lagos
					</h2>
					<div className="text-[12px] lg:text-[16px] leading-[150%] flex flex-col">
						<p className="mb-12">
							As the Head of Department, it is my utmost pleasure to extend a
							warm welcome to both our new and existing students. You have
							chosen a field that is at the forefront of shaping sustainable and
							vibrant communities. This student handbook has been specially
							crafted to serve as your compass, providing you with the essential
							information and resources needed to navigate your academic journey
							with confidence and success.
						</p>
						<p className="mb-12">
							Within the pages of this handbook, you will find detailed
							information about our programs, courses, faculty members, research
							opportunities, and support services. It will be your trusted
							companion, answering your questions and providing you with
							valuable insights into the field of urban and regional planning.
							We believe in a holistic approach to education, combining
							theoretical knowledge with practical experiences. As such, you
							will find information about internships, fieldwork, and
							collaborative projects that will allow you to apply your learning
							in real-world scenarios
						</p>
					</div>
				</section>
			</div>
			<Contact h2="For more enquiries" />
		</main>
	);
};

export default Handbook;
