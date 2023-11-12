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
} from "iconoir-react/regular";
import CustomIconProp from "./CustomIconProp";

function Nav_Webview() {
  return (
    <>
      <div className="mx-1 bg-slate-300">
        <div className="flex-generic">
          {/* Logo Section */}
          <div>
            <div className="flex-generic">
              <div className="flex-generic">
                <img src={SourinIcon} alt="Sourin" height={24} width={24} />
                <div>
                  <CustomIconProp>
                    <NavArrowDown />
                  </CustomIconProp>
                </div>
              </div>
              <div>
                <div>
                  <p className="bg-amber-200">Fontground</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <div className="flex-generic ele-margin">
              <div>
                <CustomIconProp>
                  <FillColor />
                </CustomIconProp>
              </div>
              <div>
                <CustomIconProp>
                  <Bold />
                </CustomIconProp>
              </div>
              <div>
                <CustomIconProp>
                  <Italic />
                </CustomIconProp>
              </div>
              <div>
                <CustomIconProp>
                  <Underline />
                </CustomIconProp>
              </div>
              <div>
                <div className="flex-generic">
                  <p className="bg-amber-200">Cormorant</p>
                  <div>
                    <CustomIconProp>
                      <NavArrowDown />
                    </CustomIconProp>
                  </div>
                </div>
              </div>
              <div> </div>
              <div>
                <CustomIconProp>
                  <AlignLeft />
                </CustomIconProp>
              </div>
              <div>
                <CustomIconProp>
                  <AlignCenter />
                </CustomIconProp>
              </div>
              <div>
                <CustomIconProp>
                  <AlignRight />
                </CustomIconProp>
              </div>
            </div>
          </div>

          {/* Customize Section */}
          <div>
            <div>
              <div className="flex-generic">
                <div>
                  <CustomIconProp>
                    <EditPencil />
                  </CustomIconProp>
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
