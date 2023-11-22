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
import Nav_Icon_Prop from "./Toolbar/ToolbarIcons";

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
                  <Nav_Icon_Prop><NavArrowDown /></Nav_Icon_Prop>
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
                <Nav_Icon_Prop><FillColor /></Nav_Icon_Prop>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <Nav_Icon_Prop><Bold /></Nav_Icon_Prop>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <Nav_Icon_Prop><Italic /></Nav_Icon_Prop>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <Nav_Icon_Prop><Underline /></Nav_Icon_Prop>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F0FF] shadow-navDropdownShadow">
                <div className="flex-generic">
                  <p className="primary-font">Cormorant</p>
                  <div>
                    <Nav_Icon_Prop><NavArrowDown /></Nav_Icon_Prop>
                  </div>
                </div>
              </div>
              <div className="flex-generic">
                <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                  <Nav_Icon_Prop><Minus /></Nav_Icon_Prop>
                </div>
                <div>78</div>
                <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                  <Nav_Icon_Prop><Plus /></Nav_Icon_Prop>
                </div>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <Nav_Icon_Prop><AlignLeft /></Nav_Icon_Prop>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <Nav_Icon_Prop><AlignCenter /></Nav_Icon_Prop>
              </div>
              <div className="hover:bg-[#EEF0F2] rounded-full p-2.5">
                <Nav_Icon_Prop><AlignRight /></Nav_Icon_Prop>
              </div>
            </div>
          </div>

          {/* Customize Section */}
          <div className="w-1/5">
            <div className="flex-generic">
              <div>
                <Nav_Icon_Prop><EditPencil /></Nav_Icon_Prop>
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
