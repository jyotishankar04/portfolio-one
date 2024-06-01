import Project from "./Project"
import { IoIosArrowDropright } from "react-icons/io";


function Projects() {
  return (
    <div className="flex flex-col items-center bg-white w-full pb-20" id="projects">
        <div className="py-3 flex flex-col items-center" >
            <h1 className="md:text-5xl text-3xl text-gray-600 mt-20 uppercase font-bold ">Projects</h1>
            <div className="bg-purple-600 md:p-1 p-[2px] rounded-md md:mt-5 mt-2 w-20"></div>
        </div>
        <div className="md:text-xl text-sm w-10/12 text-center text-gray-500 normal-case font-semibold md:mb-20 mb-10">
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms  <br /> of programming and technology</p>
    </div>
        <div  className="md:w-10/12 w-full p-5">
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10">
            <Project title="Bolgging Website" description="A simple bloging website" github="https://github.com/jyotishankar04/medium" live="https://bloogy-eight.vercel.app/" image="https://i.ibb.co/z5Q9THP/blog-concept-illustration-idea-posting-sharing-following-613284-2970.jpg"/>

            <Project title="Github profile Viewer" description="A profile viewer project where you can view github profile by putting username" github="https://github.com/jyotishankar04/GithubProfileViewer" live="https://githubprofileviewerapp.netlify.app/" image="https://i.ibb.co/g9k2zvJ/cute-cat-studio-23-2150932339.jpg"/>

            <Project title="Spotify clone" description="Spotify like music website which play local songs" github="https://github.com/jyotishankar04/Spotify-Colne" live="https://github.com/jyotishankar04/Spotify-Colne" image="https://i.ibb.co/kqjzPrd/headphones-african-american-woman-s-portrait-isolated-dark-studio-background-multicolored-neon-light.jpg"/>


            <Project title="Weather App " description="Get weather details by putting your city" github="https://github.com/jyotishankar04/weather-app" live="https://jyotishankar04.github.io/weather-app/" image="https://i.ibb.co/gmWPdcf/sunset-silhouettes-trees-mountains-generative-ai-169016-29371.jpg"/>


            <Project title="Currency converter" description="Convert currency  according to any country" github="https://github.com/jyotishankar04/currencyConvertor" live="https://main--currency-convertor-bysuvam.netlify.app/" image="https://i.ibb.co/kBZC51N/futuristic-digital-indian-currency-sign-golden-token-background-1017-42531.jpg"/>

            <div className="flex justify-center items-center">
                <a href="https://github.com/jyotishankar04?tab=repositories" target="_blank" className="flex flex-col items-center border-2 p-10 cursor-pointer hover:bg-gray-200 rounded-lg textgra justify-center gap-4">

                    <IoIosArrowDropright className="text-5xl text-gray-700"/>
                    <h1>Show More</h1>
                </a>
            </div>
   
   
            </div>
   
        </div>
    </div>
  )
}

export default Projects