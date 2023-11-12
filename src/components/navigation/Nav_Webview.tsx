import SourinIcon from "../../assets/images/sourin-icon.png";
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
  //   Check,
} from "iconoir-react/regular";
// import Test from "./Test";

import { IconoirProvider } from "iconoir-react";

function Nav_Webview() {
  return (
    <>
      <IconoirProvider
        iconProps={{
          color: "#AAAAAA",
          strokeWidth: 1,
          width: "1.5em",
          height: "1.5em",
        }}
      >
        <EditPencil />
      </IconoirProvider>
      <div>
        <div>
          {/* Logo Section */}
          <div>
            <div>
              <div>
                <img src={SourinIcon} alt="Sourin" height={24} width={24} />
                <div>
                  <NavArrowDown />
                </div>
              </div>
              <div>
                <div>
                  <p>Fontground</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <div>
              <div>
                <FillColor />
              </div>
              <div>
                <Bold />
              </div>
              <div>
                <Italic />
              </div>
              <div>
                <Underline />
              </div>
              <div>
                <div>
                  <p>Cormorant</p>
                  <div>
                    <NavArrowDown />
                  </div>
                </div>
              </div>
              <div> </div>
              <div>
                <AlignLeft />
              </div>
              <div>
                <AlignCenter />
              </div>
              <div>
                <AlignRight />
              </div>
            </div>
          </div>

          {/* Customize Section */}
          <div>
            <div>
              <div>
                <div>
                  <EditPencil />
                </div>
                <p>Customize</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav_Webview;
