import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/ProjectData";

interface propType {
  title: string;
  description: string;
  github: string;
  live: string;
  image: string;
  id: string;
}
const ListProject = () => {
  const projectsList = projects;
  return (
    <div className="w-full h-screen  flex flex-col items-center">
      <Navbar />
      <div className="container overflow-auto  px-5 ">
        <h1 className="text-3xl text-base-content p-3 bg-primary  font-semibold mt-0">
          All Projects
        </h1>

        <div className="grid py-5 grid-cols-1 md:grid-cols-2 gap-10">
          {projectsList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: propType }> = ({ project }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4  p-4 rounded-md bg-base-200">
      <div>
        <img
          src={project.image}
          className="h-56 w-full object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-700">
          {project.title}
        </h1>
        <p className="text-xl text-gray-500">{project.description}</p>

        <Link to={`/projects/${project.id}`} className="btn btn-primary mt-5">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ListProject;
