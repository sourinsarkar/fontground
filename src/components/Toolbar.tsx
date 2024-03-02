import React from "react";
import "remixicon/fonts/remixicon.css";
import { increment, decrement } from "../slices/font/size";
import { toggleBold } from "../slices/font/bold";
import { toggleItalic } from "../slices/font/italic";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleUnderline } from "../slices/font/underline";

const Toolbar: React.FC = () => {
  const fontSize = useSelector((state: RootState) => state.fontSize.value);
  const dispatch = useDispatch();


  return (
    <div className="flex items-center justify-center toolbar-items">
        <i className="ri-font-color ri-sm"></i>
        <i className="ri-bold ri-sm" onClick={() => dispatch(toggleBold())}></i>
        <i className="ri-italic ri-sm" onClick={() => dispatch(toggleItalic())}></i>
        <i className="ri-underline ri-sm" onClick={() => dispatch(toggleUnderline())}></i>

        <button className="flex items-center justify-center mx-2 p-5 bg-teal-100 rounded-2xl shadow-shdw-1 leading-none gap-1">
            <div className="primary-font text-sm font-medium">Cormorant</div>
            <i className="ri-arrow-down-s-line ri-sm"></i>
        </button>

        <div className="flex items-center justify-center mx-px">
            <i className="ri-add-line ri-sm" onClick={() => dispatch(increment())}></i>
            <div className="bg-teal-100 leading-none p-1.5 rounded-md unselectable text-sm font-medium primary-font">{fontSize}</div>
            <i className="ri-subtract-line ri-sm" onClick={() => dispatch(decrement())}></i>
        </div>

        <i className="ri-align-left ri-sm"></i>
        <i className="ri-align-center ri-sm"></i>
        <i className="ri-align-right ri-sm"></i>
    </div>
  );
};

export default Toolbar;
