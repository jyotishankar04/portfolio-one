import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div className="w-full h-auto bg-black flex flex-col md:flex-row justify-evenly items-start text-white px-10 py-20 gap-9">
      <div className="md:w-6/12 w-full flex flex-col items-center gap-5">
        <a href="#">
          <h1 className="uppercase text-2xl font-bold">Jyotishankar Patra</h1>
        </a>
        <p className="lg:w-[40%]  w-full md:text-start text-center text-lg font-semibold text-gray-400 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          accusamus doloribus ea placeat, numquam ducimus adipisci et{" "}
        </p>
      </div>
      <div className="flex flex-col gap-3 md:w-6/12 w-full items-center">
        <h1 className="text-xl uppercase font-semibold">Socials</h1>
        <div className="text-2xl flex gap-5">
          <a href="https://github.com/jyotishankar04" target="_blank">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jyotishankar-patra"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/suvam.io" target="_blank">
            <GrInstagram />
          </a>
          <a href="mailto:patrajyotishankar@gmail.com" target="_blank">
            <IoMdMail />
          </a>
          <a href="https://x.com/JYOTISHANKARP20" target="_blank">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
