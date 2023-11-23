const Toolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-center toolbar-items">
        <i className="ri-font-color"></i>
        <i className="ri-bold"></i>
        <i className="ri-italic"></i>
        <i className="ri-underline"></i>
        <div className="flex items-center justify-center">
            <div>Cormorant</div>
            <i className="ri-arrow-down-s-line"></i>
        </div>
        <div className="flex items-center justify-center">
            <i className="ri-add-line"></i>
            <div>50</div>
            <i className="ri-subtract-line"></i>
        </div>
        <i className="ri-align-left"></i>
        <i className="ri-align-center"></i>
        <i className="ri-align-right"></i>
    </div>
  );
};

export default Toolbar;
