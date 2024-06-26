import React, { useEffect, useState } from "react";
import NumberBox from "../Resuables/NumberBox";
import HODDark from "../../assets/mainDesktop/DrAD.webp";
import HODLight from "../../assets/mainDesktop/Dr Agunbiade.jpg";
import Journal from "../../assets/journals.png";

import Spotlight from "../Resuables/Spotlight";
import Events from "../Resuables/Events";
import Cta from "../Resuables/Cta";
import Contact from "../Resuables/Contact";

import Hod from "../../assets/mainMobile/hod.png";
import Book from "../../assets/mainMobile/bookbg.png";

import Bg1 from "../../assets/mainDesktop/homebg1.webp";
import Bg2 from "../../assets/mainDesktop/homebg2.webp";
import Bg3 from "../../assets/mainDesktop/homebg3.webp";
import Bg4 from "../../assets/mainDesktop/homebg4.webp";
import Bg5 from "../../assets/mainDesktop/homebg5.webp";


import { Link } from "react-router-dom";
import { getPosts } from "../../../sanity";
import { useGlobalContext } from "../../Context/AppContext";

const BGS = [Bg1, Bg2, Bg3, Bg4, Bg5];

const Home = () => {
	const [bgs, setBgs] = useState(BGS);
	const [index, setIndex] = useState(0);
	const { posts, students, isLoading } = useGlobalContext();

	useEffect(() => {
		const lastIndex = BGS.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, BGS]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);
	useEffect(() => {
		getPosts();
	}, []);
	return (
		<main>
			<section className="hero-bg text-center">
				<div className="h-full w-full bg-black opacity-50 absolute -z-10"></div>
				{BGS.map((pic, picIndex) => {
					let position = "nextSlide";
					if (picIndex === index) {
						position = "activeSlide";
					}
					if (
						picIndex === index - 1 ||
						(index === 0 && picIndex === BGS.length - 1)
					) {
						position = "lastSlide";
					}

					return (
						<div className={`bgSlide ${position}`} key={picIndex}>
							<img
								src={pic}
								alt="Background carousel 1"
								className="w-full h-full object-cover"
							/>
						</div>
					);
				})}

				<div>
					<div className="flex justify-center items-center gap-x-2 lg:gap-x-[126px] lg:px-0">
						{/* <span
              className="border-[2px] border-[#F0C808] p-[2px] lg:p-2 hover:bg-[#F0C808]"
              role="button"
              onClick={() => handleClick('prev')}
            >
              <ArrowBackIosNewOutlinedIcon htmlColor="white" fontSize="small" />
            </span> */}
						<div className="flex-1 lg:flex-none   px-3 lg:px-10 items-center relative z-10">
							<h1 className="text-[24px] md:text-[32px] lg:text-[64px] font-semibold text-[#F5FFF6] max-w-3xl">
								Welcome to the Department of Urban and Regional Planning
							</h1>
							<p className="text-[12px] md:text-[16px] text-[#F0C808] font-medium leading-[150%] mb-4 max-w-[470px] mx-auto">
								Reshaping the future of human settlements.
							</p>
						</div>
						{/* <span
              className="border-[2px] border-[#F0C808] p-[2px] lg:p-2 hover:bg-[#F0C808]"
              role="button"
              onClick={() => handleClick('next')}
            >
              <ArrowForwardIosOutlinedIcon htmlColor="white" fontSize="small" />
            </span> */}
					</div>
				</div>
			</section>
			<section className="lg:flex flex-col justify-center bg-white">
				<div>
					<h3 className="text-[14px] md:text-[20px] text-center text-[#03312E] my-[80px] leading-[150%] max-w-[713px] mx-auto">
						Home of designers, planners, researchers committed to the growth and
						<br />
						development of liveable and habitable cities.
					</h3>
					<div className="flex flex-col gap-[64px] lg:gap-0 justify-center items-center lg:flex-row lg:justify-between max-w-[1120px] mx-auto">
						<NumberBox
							text="Programmes"
							heading="7"
							sub="Number of degree programmes offered in the department."
							color="green"
						/>
						<NumberBox
							text="Excellence"
							heading="5"
							sub="First Class students currently in the Department."
							color="yellow"
						/>
						<NumberBox
							text="Enrollment"
							heading="200"
							sub="Number of students currently enrolled in the Department."
							color="orange"
						/>
						{/* <NumberBox
              text="diverse"
              heading="1142"
              sub="Number of total students enrolled since inception of the Department"
              color="red"
            /> */}
					</div>
				</div>
			</section>
			<section className="my-[64px] py-6 lg:py-[80px]">
				<div className="relative h-[400px] pb-4 md:h-[600px] lg:h-[800px] flex items-end justify-center">
					<div className="hidden lg:block absolute h-[100%] left-0 lg:w-[50%] -z-10">
						<img
							src={HODLight}
							alt=""
							className="block w-[100%] h-[100%] object-cover object-top"
						/>
					</div>
					<div className="hidden lg:block lg:absolute h-[100%] right-0 w-[50%]">
						<img
							src={HODDark}
							alt=""
							className="block w-[100%] h-[100%] object-cover object-center"
						/>
					</div>
					<div className="lg:hidden absolute h-[100%] w-full">
						<img
							src={HODLight}
							alt=""
							className="block w-[100%] h-[100%] object-cover object-center md:object-top absolute lg:hidden"
						/>
					</div>
					<div className="h-[220px] lg:h-auto w-full  lg:mx-0  lg:max-w-none">
						<div className="bg-[#FDFFFD] relative z-30 px-4 lg:px-10 py-3 lg:py-6 lg:absolute lg:left-[48%] mx-4 lg:top-[251px] md:w-[540px] md:mx-auto gap-4 lg:gap-6  flex flex-col border-l-[4px] border-[#5B5756] rounded-[4px]">
							<div className="flex items-end gap-x-4">
								<h2 className="text-[#011717] text-[24px] lg:text-[36px] font-bold capitalize underline underline-offset-[10px]">
									Dr. Agunbiade
								</h2>
								<p className="translate-y-2">HOD</p>
							</div>
							<p className="text-[14px] leading-[150%] hidden lg:block">
								Founded in 1980, the Department of Urban and Regional Planning
								at the University of Lagos is a leading academic department at
								the forefront of advancing urban and regional planning research
								and practice in Nigeria. We aim to promote urban and regional
								planning practices by providing a conducive environment for
								teaching, training, and developing town planners who can apply
								theoretical, analytical, and design thinking skills to solve
								contemporary complex urban and development challenges. 
							</p>
							<p className="text-[12px] leading-[150%] lg:hidden">
								Founded in 1980, the Department of Urban and Regional Planning
								at the University of Lagos is a leading academic department at
								the forefront of advancing urban and regional planning research
								and practice in Nigeria.
							</p>
							<div>
								<Link
									to="/about"
									className="bg-[#5B5756] text-[14px] px-6 py-2 rounded-[2px] text-[#F5FFF6] hover:bg-[#353939]">
									Read more
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Spotlight student={students} />
			<section className="mt-[64px] lg:mt-[160px] h-[404px] lg:bg-[#011717] flex items-end lg:items-center  relative">
				<div className="absolute -z-10 lg:static lg:z-10 flex-1 h-[100%] w-full">
					<img src={Journal} alt="" className="hidden lg:block h-[100%]" />
					<img src={Book} alt="" className="lg:hidden h-[100%] w-full" />
				</div>
				<div className="lg:flex-1 flex flex-col bg-[#011717] mx-4 md:mx-auto md:max-w-[684px] py-6 lg:py-0 px-4 lg:px-0 mb-[25px] lg:mb-0">
					<div className="md:w-[564px] flex flex-col gap-4 lg:gap-6">
						<h2 className="text-[#F5FFF6] text-[24px] lg:text-[40px] font-bold">
							Introducing The Journal
						</h2>
						
						<p className="text-[#FDFFFD] text-[12px] lg:text-[14px] leading-[150%]">
							The Urban and Regional Planning Review (URPR) is a
							multidisciplinary journal devoted to increasing the knowledge and
							practice of contemporary urban and regional planning and is
							directed towards an audience that includes practitioners,
							policymakers, scholars and students.
						</p>
						<div>
							<Link
								to="/urp-journal"
								className="bg-[#F5FFF6] text-[#010A09] rounded-[2px] px-8 py-2 text-[14px] hover:animate-pulse">
								Go to page
							</Link>
						</div>
					</div>
				</div>
			</section>

			{!posts?.length ? (
				<div className="h-[200px]">
					<h2 className="text-center text-[24px] lg:text-[2.5rem] font-[600] capitalize mt-40 lg:mb-[60px]">
						News & events
					</h2>
				</div>
			) : (
				<Events posts={posts} />
			)}
			<section className="mt-[80px] h-[404px] lg:bg-[#5B5756] flex items-end lg:items-center relative">
				<div className="absolute w-full -z-10 lg:static lg:z-10 flex-1 h-[100%]">
					<img src={Journal} alt="" className="hidden lg:block h-[100%]" />
					<img src={Book} alt="" className="lg:hidden h-[100%] w-full" />
				</div>
				<div className="lg:flex-1 flex flex-col bg-[#5B5756] mx-4  md:mx-auto md:w-[564px] py-6 lg:py-0 px-4 lg:px-0 mb-[25px] lg:mb-0">
					<div className="lg:w-[564px] flex flex-col gap-6">
						<h2 className="text-[#F5FFF6] text-[24px] lg:text-[40px] font-bold">
							Innovative research hubs
						</h2>
						<p className="text-[#FDFFFD] text-[12px] lg:text-[14px] leading-[150%]">
							At the Department of Urban and Regional Planning, we are driven by
							the profound belief in the transformative power of collaborative
							research. We recognize that the collective intelligence of diverse
							minds working together has the capacity to transcend conventional
							limits, opening new frontiers of knowledge and expanding the
							practice of Urban and Regional Planning.
						</p>
						
						<div>
							<Link
								to="/research-cluster"
								className="capitalize bg-[#F5FFF6] text-[#010A09] rounded-[2px] px-8 py-2 text-[14px] hover:animate-pulse">
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Contact h2="For more enquiries" />
		</main>
	);
};

export default Home;
