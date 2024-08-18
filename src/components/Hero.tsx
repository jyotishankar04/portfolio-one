import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import Button from "./Button";
import Icons from "./Icons";
export default function Hero() {
  return (
    <div className=" w-full h-full  " id="home">
      <div className="w-full h-full flex items-center flex-col justify-center  uppercase font-semibold bg-[url('https://i.ibb.co/TW9hqY7/benner-1.webp')] relative bg-cover gap-20 bg-center  top-0 ">
        <h1 className="md:text-7xl text-center text-gray-800 text-3xl font-bold">
          Hey, i'm <br className="md:hidden" /> Jyotishankar Patra
        </h1>
        <p className="md:text-2xl text-sm w-6/12 text-gray-500 text-center normal-case">
          Delivering High-Performance Websites and Applications for Your Success
        </p>
        <Button title={"Projects"} link={"#projects"} />
        <div className="absolute left-0 top-[50%] -translate-y-[50%] p-1 bg-purple-600  rounded-r-lg">
          <Icons
            icon={FaLinkedin}
            link="https://www.linkedin.com/in/jyotishankar-patra"
            bgColor="bg-purple-600"
            color="text-white"
            size="md:text-3xl"
          />
          <Icons
            icon={FaSquareXTwitter}
            link="https://x.com/JYOTISHANKARP20"
            bgColor="bg-purple-600"
            color="text-white"
            size="md:text-3xl"
          />
          <Icons
            icon={FaGithub}
            link="https://github.com/jyotishankar04"
            bgColor="bg-purple-600"
            color="text-white"
            size="md:text-3xl"
          />
          <Icons
            icon={IoMdMail}
            link="mailto:patrajyotishankar@gmail.com"
            bgColor="bg-purple-600"
            color="text-white"
            size="md:text-3xl"
          />
          <Icons
            icon={GrInstagram}
            link="https://instagram.com/dev.suvam"
            bgColor="bg-purple-600"
            color="text-white"
            size="md:text-3xl"
          />
        </div>
      </div>
    </div>
  );
}
