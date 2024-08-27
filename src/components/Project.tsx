/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Link } from "react-router-dom";

interface propType {
  title: string;
  description: string;
  github: string;
  live: string;
  image: string;
  id: string;
}

const Project: React.FC<{ project: propType }> = ({ project }) => {
  return (
    <div className="cursor-pointer flex flex-col gap-5 bg-purple-50 bg-cover bg-center border-2 shadow-md hover:shadow-lg duration-200 hover:scale-[103%] p-5 rounded-lg">
      <div className={`w-full   rounded-md `}>
        <img src={project.image} className="aspect-[16/9]" alt="" />
      </div>
      <h1 className="text-3xl font-semibold text-gray-700">{project.title}</h1>
      <p className="text-xl text-gray-500">{project.description}</p>
      <Link
        to={`/projects/${project.id}`}
        className="flex justify-evenly items-center"
      >
        <button className="btn btn-primary w-full text-xl">View Project</button>
      </Link>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Project);
