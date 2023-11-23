const Toolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-center toolbar-items">
        <i className="ri-font-color ri-sm"></i>
        <i className="ri-bold ri-sm"></i>
        <i className="ri-italic ri-sm"></i>
        <i className="ri-underline ri-sm"></i>
        <button className="flex items-center justify-center mx-2 px-4 py-3.5 bg-[#E9F0FF] rounded-2xl shadow-toolbarDropdownShadow">
            <div>Cormorant</div>
            <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="flex items-center justify-center mx-px">
            <i className="ri-add-line ri-sm"></i>
            <div className="bg-black/10 leading-none p-1.5 rounded-md unselectable">50</div>
            <i className="ri-subtract-line ri-sm"></i>
        </div>
        <i className="ri-align-left ri-sm"></i>
        <i className="ri-align-center ri-sm"></i>
        <i className="ri-align-right ri-sm"></i>
    </div>
  );
};

export default Toolbar;
