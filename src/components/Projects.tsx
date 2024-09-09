import { Link } from "react-router-dom";
import { projects } from "../data/ProjectData";
import Project from "./Project";
import { IoIosArrowDropright } from "react-icons/io";

function Projects() {
  const Projects = projects;
  return (
    <div
      className="flex flex-col items-center bg-white w-full pb-20"
      id="projects"
    >
      <div className="py-3 flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl text-gray-600 mt-20 uppercase font-bold ">
          Projects
        </h1>
        <div className="bg-purple-600 md:p-1 p-[2px] rounded-md md:mt-5 mt-2 w-20"></div>
      </div>
      <div className="md:text-xl text-sm w-10/12 text-center text-gray-500 normal-case font-semibold md:mb-20 mb-10">
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms <br /> of programming and technology
        </p>
      </div>
      <div className="md:w-10/12 w-full p-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10">
          {Projects.map((project, index) => {
            return index <= 4 && <Project key={index} project={project} />;
          })}
          <div className="flex justify-center items-center">
            <Link
              to="/projects"
              className="flex flex-col items-center border-2 p-10 cursor-pointer hover:bg-gray-200 rounded-lg textgra justify-center gap-4"
            >
              <IoIosArrowDropright className="text-5xl text-gray-700" />
              <h1>Show More</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
