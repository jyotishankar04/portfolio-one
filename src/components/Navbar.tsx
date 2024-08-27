import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [status, setStatus] = useState<boolean>(false);

  const toggleStatus = () => {
    setStatus((prev) => !prev);
  };
  return (
    <div className="w-full bg-white  gap-10 items-center  sticky top-0 z-10 shadow-md">
      <div className="flex justify-between">
        <Link
          to={"/"}
          className="flex justify-center items-center md:px-10 px-3 py-3"
        >
          <div className="md:w-16 md:h-16 w-10 h-10 rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/C8sv2s1/profile-pic.png"
            />
          </div>
          <h1 className="uppercase md:text-xl text-lg font-bold text-gray-800 opacity-90 tracking-wide hover:text-purple-600 cursor-pointer">
            SUVAM
          </h1>
        </Link>

        <div className="md:w-4/12 w-auto flex items-center md:mr-16 mr-5">
          <div className="block md:hidden">
            <MenuIcon status={status} toggleStatus={toggleStatus} />
          </div>

          <div className=" justify-evenly  w-full items-center    uppercase font-semibold  hidden md:flex ">
            <a href="/#home" className=" hover:text-purple-600">
              Home
            </a>
            <a href="/#about" className="hover:text-purple-600">
              About
            </a>
            <a href="/#projects" className="hover:text-purple-600">
              Projects
            </a>

            <Link
              to="/repos"
              onClick={toggleStatus}
              className={`  hover:text-purple-600`}
            >
              Repos
            </Link>

            <Link
              to="/projects"
              onClick={toggleStatus}
              className={`  hover:text-purple-600`}
            >
              All projects
            </Link>
            <a href="/#contact" className="hover:text-purple-600">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="relative ">
        <div
          className={`flex-col items-center text-2xl gap-6 py-5 juce uppercase font-semibold absolute   md:hidden flex ${
            status ? " block" : " hidden"
          }  left-0 top-0 w-full h-[calc(100vh-5rem)]  bg-white  `}
        >
          <a
            href="/#home"
            onClick={toggleStatus}
            className={`  hover:text-purple-600`}
          >
            Home
          </a>
          <a
            href="/#about"
            onClick={toggleStatus}
            className="hover:text-purple-600"
          >
            About
          </a>
          <a
            href="/#projects"
            onClick={toggleStatus}
            className="hover:text-purple-600"
          >
            Projects
          </a>
          <Link
            to="/repos"
            onClick={toggleStatus}
            className={`  hover:text-purple-600`}
          >
            Repos
          </Link>

          <Link
            to="/projects"
            onClick={toggleStatus}
            className={`  hover:text-purple-600`}
          >
            All projects
          </Link>
          <a
            href="/#contact"
            onClick={toggleStatus}
            className="hover:text-purple-600"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

function MenuIcon({
  status,
  toggleStatus,
}: {
  status: boolean;
  toggleStatus: () => void;
}) {
  return (
    <div className="relative cursor-pointer" onClick={toggleStatus}>
      {status && status ? (
        <div className=" flex  flex-col md:mr-10 mr-8 gap-0 relative duration-200">
          <div className="w-8 h-1 p-[1px] absolute rotate-45 duration-300 bg-gray-900"></div>
          <div className="w-8 h-1 p-[1px] absolute rotate-[135deg] duration-500 bg-gray-900"></div>
          <div className="w-8 h-1 p-[1px] absolute rotate-[45deg] duration-800 bg-gray-900"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 ">
          <div className="w-8 h-1 p-[1px] bg-gray-900 duration-300"></div>
          <div className="w-8 h-1 p-[1px] bg-gray-900 duration-300"></div>
          <div className="w-8 h-1 p-[1px] bg-gray-900 duration-300"></div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
