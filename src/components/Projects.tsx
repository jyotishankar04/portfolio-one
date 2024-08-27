import Project from "./Project";
import { IoIosArrowDropright } from "react-icons/io";

function Projects() {
  const projects = [
    {
      title: "Expense Mate",
      description: " A simple expense tracker app using nextjs and postgres",
      github: "https://github.com/jyotishankar04/expensetracker",
      live: "https://expensemate.devsuvam.xyz",
      image:
        "https://res.cloudinary.com/djby1yfko/image/upload/v1724754338/Portfolio/qfzlgq9kjgyoomchhr5e.jpg",
    },
    {
      title: "CodersBook",
      description: "A online library for coders",
      github: "https://github.com/jyotishankar04/elibs-client",
      live: "https://codersbook.devsuvam.xyz",
      image:
        "https://res.cloudinary.com/djby1yfko/image/upload/v1724754303/Portfolio/s4rjpxelefkcbpvp33qm.jpg",
    },
    {
      title: "Bolgging Website",
      description: "A simple bloging website",
      github: "https://github.com/jyotishankar04/medium",
      live: "https://bloogy.devsuvam.xyz/",
      image:
        "https://res.cloudinary.com/djby1yfko/image/upload/v1724754382/Portfolio/u40gsai5zo0o3mn18qu9.jpg",
    },
    {
      title: "Github profile viewer",
      description:
        "A profile viewer project where you can view github profile by putting username",
      github: "https://github.com/jyotishankar04/GithubProfileViewer",
      live: "https://githubprofileviewerapp.netlify.app/",
      image:
        "https://res.cloudinary.com/djby1yfko/image/upload/v1724754486/Portfolio/t23dljycwfiynadtt706.jpg",
    },
    {
      title: "Spotify clone",
      description: "Spotify like music website which play local songs",
      github: "https://github.com/jyotishankar04/Spotify-Colne",
      live: "https://github.com/jyotishankar04/Spotify-Colne",
      image:
        "https://res.cloudinary.com/djby1yfko/image/upload/v1724754521/Portfolio/l1zeaa4bzxvv3kjphtzr.jpg",
    },
  ];
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
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
          <div className="flex justify-center items-center">
            <a
              href="https://github.com/jyotishankar04?tab=repositories"
              target="_blank"
              className="flex flex-col items-center border-2 p-10 cursor-pointer hover:bg-gray-200 rounded-lg textgra justify-center gap-4"
            >
              <IoIosArrowDropright className="text-5xl text-gray-700" />
              <h1>Show More</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
