import Toolbar from "../Toolbar/Toolbar";
import Logo from "/images/sourin-icon.svg";

const Nav: React.FC = () => {
  return (
    <div className="flex items-center">
      
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
          <button className="flex items-center justify-center leading-none px-3 py-3.5 bg-teal-100 rounded-lg">
            <i className="ri-pencil-fill mr-2"></i>
            <div className="text-sm font-medium primary-font">Customize</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav