import Toolbar from "../Toolbar/Toolbar";
import Logo from "/images/sourin-icon.svg";

const Nav: React.FC = () => {
  return (
    <div className="flex items-center">
      
      {/* Logo section */}
      <div className="w-full">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-6"/>
          <div className="">Fontground</div>
        </div>
      </div>

      {/* Toolbar section */}
      <div className="w-full">
        <Toolbar />
      </div>

      {/* Customize section */}
      <div className="  w-full">
        <div className="flex items-center justify-end">
          <button className="flex">
            <i className="ri-pencil-fill"></i>
            <div>Customize</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav