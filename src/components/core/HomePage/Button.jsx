import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    (active?
    <div>

<Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
        bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] text-white  
         hover:shadow-none hover:scale-105 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>


    </div> :<div>

       <Link to={linkto}>
       <div className="flex justify-center">
          <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-richblack-700 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">{children}</span>
            </span>
          </button>
        </div>
    </Link>
    </div>)
   
  );
};

export default Button;
