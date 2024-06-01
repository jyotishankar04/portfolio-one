import {
  FaBootstrap,
  FaCloudflare,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import Button from "./Button";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiPrisma,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCpp, TbBrandMysql } from "react-icons/tb";
import { IoLogoJavascript, IoMdMail } from "react-icons/io";
import { VscVscodeInsiders } from "react-icons/vsc";
import { DiResponsive } from "react-icons/di";
import Icons from "./Icons";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
function About() {
  return (
    <div className="flex flex-col items-center bg-white w-full" id="about">
      <div className="py-3 flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl text-gray-600 mt-20 uppercase font-bold ">
          About me
        </h1>
        <div className="bg-purple-600 md:p-1 p-[2px] rounded-md md:mt-5 mt-2 w-20"></div>
      </div>
      <div className="md:text-xl text-sm w-10/12 text-center text-gray-500 normal-case font-semibold md:mb-20 mb-10">
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms <br /> of programming and technology
        </p>
      </div>
      <div className="flex items-start md:flex-row flex-col w-full md:w-10/12 p-5 md:p-0">
        <div className="flex flex-col items-center text-center md:text-start md:items-start mb-9 w-full md:w-6/12">
          <h1 className="md:text-3xl text-2xl text-gray-700 font-semibold">
            Get to know me!
          </h1>
          <p className="md:text-xl text-sm text-gray-600 leading-6 md:leading-8 mt-10 w-10/12">
            I'm Jyotishankar Patra, a Web Developer skilled in both Frontend and
            Backend development. I build and manage complete Websites and Web
            Applications to ensure product success. Check out my work in the
            Projects section.
            <br />
            <br />I love sharing what I've learned in Web Development to help
            the Dev Community. Connect or follow me on LinkedIn and Instagram
            for useful content on Web Development and Programming.
            <br />
            <br />
            I'm passionate about creating efficient, scalable, and user-friendly
            web solutions. I'm open to job opportunities where I can contribute,
            learn, and grow. If you have a suitable opportunity, please contact
            me.
          </p>

          <div className="flex gap-3">
            <Icons
              icon={FaLinkedin}
              link="https://www.linkedin.com/in/jyotishankar-patra"
              bgColor="bg-white"
              color="text-gray-700"
              size="md:text-2xl"
            />
            <Icons
              icon={FaSquareXTwitter}
              link="https://x.com/JYOTISHANKARP20"
              bgColor="bg-white"
              color="text-gray-700"
              size="md:text-2xl"
            />
            <Icons
              icon={FaGithub}
              link="https://github.com/jyotishankar04"
              bgColor="bg-white"
              color="text-gray-700"
              size="md:text-2xl"
            />
            <Icons
              icon={IoMdMail}
              link="mailto:patrajyotishankar@gmail.com"
              bgColor="bg-white"
              color="text-gray-700"
              size="md:text-2xl"
            />
            <Icons
              icon={GrInstagram}
              link="https://instagram.com/suvam.io"
              bgColor="bg-white"
              color="text-gray-700"
              size="md:text-2xl"
            />
          </div>
          <div className="my-8">
            <Button title={"Contact"} link={"#"} />
          </div>
        </div>
        <div className="flex flex-col md:items-start md:w-6/12 w-full items-center  mb-10 ">
          <h1 className="md:text-3xl text-2xl text-gray-800 font-bold ">
            My Skills
          </h1>
          <div className="flex flex-col md:items-start items-center gap-5 ">
            <div className="w-full">
              <h3 className="text-xl md:text-2xl text-center md:text-start font-semibold mt-2 text-gray-600">
                Frontend
              </h3>
              <div className="md:flex flex-wrap mt-2 md:justify-start items-start gap-5 grid-cols-2 grid">
                <Skills title="HTML" icon={FaHtml5} />
                <Skills title="CSS" icon={FaCss3} />
                <Skills title="TAILWINDCSS" icon={RiTailwindCssFill} />
                <Skills title="REACT" icon={FaReact} />
                <Skills title="NEXT.JS" icon={RiNextjsFill} />
                <Skills title="REDUX" icon={SiRedux} />
                <Skills title="MATERIAL UI" icon={SiMui} />
                <Skills title="Bootstrap" icon={FaBootstrap} />
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-xl md:text-2xl text-center md:text-start font-semibold mt-2 text-gray-600">
                Backend
              </h3>
              <div className="md:flex flex-wrap mt-2 md:justify-start items-start gap-5 grid-cols-2 grid">
                <Skills title="NODE.JS" icon={FaNodeJs} />
                <Skills title="EXPRESS" icon={SiExpress} />
                <Skills title="Postgres Sql" icon={BiLogoPostgresql} />
                <Skills title="my sql" icon={TbBrandMysql} />
                <Skills title="mongo db" icon={SiMongodb} />
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-xl md:text-2xl text-center md:text-start font-semibold mt-2 text-gray-600">
                Languages
              </h3>
              <div className="md:flex flex-wrap mt-2 md:justify-start items-start gap-5 grid-cols-2 grid">
                <Skills title="C++" icon={TbBrandCpp} />
                <Skills title="Javascript" icon={IoLogoJavascript} />
                <Skills title="Typescript" icon={SiTypescript} />
              </div>
            </div>
            <div className="text-xl md:text-2xl text-center md:text-start font-semibold mt-2 text-gray-600">
              <h3 className="text-2xl font-semibold mt-2 text-gray-600">
                Other Tools
              </h3>
              <div className="md:flex flex-wrap mt-2 md:justify-start items-start gap-5 grid-cols-2 grid">
                <Skills title="Git" icon={FaGitAlt} />
                <Skills title="Github" icon={FaGithub} />
                <Skills title="Prisma" icon={SiPrisma} />
                <Skills title="vs code" icon={VscVscodeInsiders} />
                <Skills title="Responsive Website" icon={DiResponsive} />
                <Skills title="Cloudflare" icon={FaCloudflare} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type SkillsProps = {
  title: string;
  icon: React.ElementType;
};

const Skills: React.FC<SkillsProps> = ({ title, icon: Icon }) => {
  return (
    <div className="group bg-gray-200 font-semibold text-gray-500 md:text-lg text-sm rounded-sm px-3 md:px-8 md:py-3 py-1 uppercase flex gap-2 items-center hover:scale-105 cursor-pointer duration-150">
      <Icon className=" group-hover:scale-150 duration-150 text-purple-600 " />
      <h1 className=" duration-150">{title}</h1>
    </div>
  );
};
export default About;
