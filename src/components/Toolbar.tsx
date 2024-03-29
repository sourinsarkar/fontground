import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";
import { HexColorPicker } from "react-colorful";
import { increment, decrement } from "../slices/font/fontSize";
import { toggleBold } from "../slices/font/bold";
import { toggleItalic } from "../slices/font/italic";
import { RootState } from "../store/store";
import { toggleUnderline } from "../slices/font/underline";
import { alignLeft, alignCenter, alignRight } from "../slices/font/textAlign";
import { setColor } from "../slices/font/fontColor";
import { setFont } from "../slices/font/fontUnique";

const allFonts = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Inter'];

const Toolbar: React.FC = () => {
  const fontSize = useSelector((state: RootState) => state.fontSize.value);
  const fontColor = useSelector((state: RootState) => state.fontColor.value);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFontList, setIsOpenFontList] = useState(false);

  const handleFontColorChange = (newColor: string) => {
    dispatch(setColor(newColor));
  }

  const handleFontChange = (event: any) => {
    const selectedFont = event.currentTarget.textContent;
    dispatch(setFont(selectedFont));
  }

  return (
    <div className="flex items-center justify-center toolbar-items">
        <i className="ri-font-color ri-sm relaive" onClick={() => setIsOpen(!isOpen)}>
          {isOpen && (
            <div className="absolute top-20">
              <HexColorPicker color={fontColor} onChange={handleFontColorChange} />
            </div>
          )}
        </i>
        <i className="ri-bold ri-sm" onClick={() => dispatch(toggleBold())}></i>
        <i className="ri-italic ri-sm" onClick={() => dispatch(toggleItalic())}></i>
        <i className="ri-underline ri-sm" onClick={() => dispatch(toggleUnderline())}></i>

        <button onClick={() => setIsOpenFontList(!isOpenFontList)} className="relative flex items-center justify-center mx-2 p-5 bg-teal-100 rounded-2xl shadow-shdw-1 leading-none gap-1">
            <div className="primary-font text-sm font-medium">Cormorant</div>
            <i className="ri-arrow-down-s-line ri-sm"></i>
            {isOpenFontList && (
              <div className="absolute top-20">
                <ul>
                  {allFonts.map((font) => (
                    <li onClick={handleFontChange}>{font}</li>
                  ))}
                </ul>
              </div>
            )}
        </button>

        <div className="flex items-center justify-center mx-px">
            <i className="ri-add-line ri-sm" onClick={() => dispatch(increment())}></i>
            <div className="bg-teal-100 leading-none p-1.5 rounded-md unselectable text-sm font-medium primary-font">{fontSize}</div>
            <i className="ri-subtract-line ri-sm" onClick={() => dispatch(decrement())}></i>
        </div>

        <i className="ri-align-left ri-sm" onClick={() => dispatch(alignLeft())}></i>
        <i className="ri-align-center ri-sm" onClick={() => dispatch(alignCenter())}></i>
        <i className="ri-align-right ri-sm" onClick={() => dispatch(alignRight())}></i>
    </div>
  );
};

export default Toolbar;
