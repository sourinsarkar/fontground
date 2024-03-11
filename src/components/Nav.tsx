import { useState } from "react";
import Toolbar from "./Toolbar";
import Logo from "/images/sourin-icon.svg";
// import { useDispatch } from "react-redux";
  
const Nav: React.FC = () => {
//   const dispatch = useDispatch();
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center bg-white/10 shadow-lg shadow-white/10 px-8 py-2">

      {/* Logo section */}
      <div className="w-full">
        <div className="flex items-center">
          <div className="flex items-center leading-none cursor-pointer">
            <img src={Logo} alt="Logo" className="h-6"/>
            <i className="ri-arrow-down-s-line mx-px"></i>
          </div>
          <div className="mx-2 px-4 py-1 bg-teal-100 rounded-full cursor-pointer mono-font text-sm font-medium">FONTGROUND</div>
        </div>
      </div>

      {/* Toolbar section */}
      <div className="w-full">
        <Toolbar />
      </div>

      {/* Customize section */}
      <div className="w-full">
        <div className="flex items-center justify-end">
          <button className="relative flex items-center justify-center leading-none px-3 py-3.5 bg-teal-100 rounded-2xl shadow-shdw-1" onClick={() => setIsOpen(!isOpen)}>
            <i className="ri-pencil-fill mr-2"></i>
            <div className="text-sm font-medium primary-font">Customize</div>
            {isOpen && (
              <div className="absolute top-20">
                <ul>
                  {/* {allImages.map((image) => (
                    <li>
                      <div className="w-20 h-20" onClick={handlePageBackgroundChange}>{image}</div>
                    </li>
                  ))} */}
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav