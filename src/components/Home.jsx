/* eslint-disable react/no-unescaped-entities */
import HeroImage from "../assets/file.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
    return (
        <div name="home" className="flex md:h-screen  h-[50vh] w-full justify-center items-center bg-gradient-to-b from-black via-black  to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col  h-full items-center justify-center md:px-4 px-4 md:flex-row">
                <div className="lg:ml-4 flex flex-col justify-center md:mt-28 md:pt-0 mt-[3.4rem] md:py-4">
                    <h2 className="text-3xl  sm:text-4xl font-bold text-white start-0 sm:items-start lg:text-center">I'm a Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">I have  years of experience building and desgining software.Currently, I love to work on web application using technologies like React, Tailwind, Next JS and GraphQL.</p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Portfolio <span className="group-hover:rotate-90 duration-500"><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span></Link>
                    </div>
                </div>
                <div className="md:block hidden">
                    <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:h-full" />
                </div>
            </div>
        </div>
    )
}

export default Home