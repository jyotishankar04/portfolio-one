
function Button({title,link}:{title:string, link:string}) {
  return (
    <a href={link} className="">
        <button className="bg-purple-700 text-white md:text-2xl md:px-16 md:py-3 text-xl px-10 py-3  rounded-md hover:scale-110 duration-150 ">
            {title}
        </button>
    </a>
       
  )
}

export default Button