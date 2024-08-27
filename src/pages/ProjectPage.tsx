import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/ProjectData";

export const ProjectPage = () => {
  const { project } = useParams();
  const projectsList = projects.find((p) => p.id === project);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <div className="container h-full overflow-auto">
        <div className="w-full">
          <img
            src={projectsList?.image}
            className="w-full h-96 object-center object-cover"
          />
        </div>
        <div className="w-full grid grid-cols-1  p-4 gap-5">
          <div className=" gap-5 grid md:grid-cols-2 grid-cols-1">
            <a
              target="_blank"
              href={projectsList?.live}
              className="btn btn-primary text-xl"
            >
              View Live
            </a>
            <a
              target="_blank"
              href={projectsList?.github}
              className="btn btn-outline  text-xl"
            >
              View Source
            </a>
          </div>
          <div>
            <h1 className="text-3xl ">{projectsList?.title}</h1>
            <p>{projectsList?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
