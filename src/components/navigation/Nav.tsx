import SourinIcon from "/images/sourin-icon.png";
import {
  NavArrowDown,
  FillColor,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  EditPencil,
  Minus,
  Plus,
} from "iconoir-react/regular";
import ToolbarIcons from "../Toolbar/ToolbarIcons";

function Nav_Webview() {
  return (
    <>
      <div className="mt-2">
        <div className="flex-generic">
          {/* Logo Section */}
          <div className="w-1/5">
            <div className="flex-generic">
              <div className="flex-generic">
                <img src={SourinIcon} alt="Sourin" height={24} width={24} />
                <div>
                  <ToolbarIcons><NavArrowDown /></ToolbarIcons>
                </div>
              </div>
              <div>
                <div>
                  <p className="primary-font">Fontground</p>
                </div>
              </div>
            </div>
          </div>

          {/* Toolbar Section */}
          <div className="w-4/5">
            <div className="flex-generic ele-margin">
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <ToolbarIcons><FillColor /></ToolbarIcons>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <ToolbarIcons><Bold /></ToolbarIcons>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <ToolbarIcons><Italic /></ToolbarIcons>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <ToolbarIcons><Underline /></ToolbarIcons>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F0FF] shadow-navDropdownShadow">
                <div className="flex-generic">
                  <p className="primary-font">Cormorant</p>
                  <div>
                    <ToolbarIcons><NavArrowDown /></ToolbarIcons>
                  </div>
                </div>
              </div>
              <div className="flex-generic">
                <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                  <ToolbarIcons><Minus /></ToolbarIcons>
                </div>
                <div>78</div>
                <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                  <ToolbarIcons><Plus /></ToolbarIcons>
                </div>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <ToolbarIcons><AlignLeft /></ToolbarIcons>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <ToolbarIcons><AlignCenter /></ToolbarIcons>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <ToolbarIcons><AlignRight /></ToolbarIcons>
              </div>
            </div>
          </div>

          {/* Customize Section */}
          <div className="w-1/5">
            <div className="flex-generic">
              <div>
                <ToolbarIcons><EditPencil /></ToolbarIcons>
              </div>
              <p className="primary-font">Customize</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav_Webview;
