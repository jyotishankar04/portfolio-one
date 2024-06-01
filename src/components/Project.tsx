

function Project({title, description,github, live, image}:{title:string, description:string,github:string, live:string, image:string}) {
  return (
    <div className="cursor-pointer flex flex-col gap-5 bg-purple-50 bg-cover bg-center border-2 shadow-md hover:shadow-lg duration-200 hover:scale-[103%] p-5 rounded-lg">
      <div className={`w-full   rounded-md `} >

      <img src={image} className="aspect-[16/9]" alt="" />
      </div>
      <h1 className="text-3xl font-semibold text-gray-700">{title}</h1>
      <p className="text-xl text-gray-500">{description}</p>
      <div className="flex justify-evenly items-center">
        <a href={live} target="_blank"  className="xl:text-2xl text-lg bg-purple-600 duration-200 text-white w-4/12 text-center py-2 rounded-md hover:text-purple-600 hover:bg-white hover:scale-110">View Live</a>
        <a href={github} target="_blank"  className="xl:text-2xl text-lg duration-200 text-purple-600 w-4/12 text-center bg-white  py-2 rounded-md hover:bg-purple-600 hover:text-white hover:scale-110">Source </a>
      </div>
    </div>
  )
}

export default Project