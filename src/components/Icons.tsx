type IconsProps = {
    link:string;
    bgColor?:string;
    color?:string;
    size?:string
    icon: React.ElementType;
  };
  
   const Icons: React.FC<IconsProps> = ({ link,bgColor,color,size ,icon: Icon }) => {
    return (
      <div className={`cursor-pointer ${bgColor+" "+ color} hover:bg-gray-300  text-white md:p-3 p-2 rounded-md`}> 
        <a href={link} target="_blank">
            <Icon  className={`text-xl ${size}`} />
        </a>
      </div>
    );
  };
  
  export default Icons;