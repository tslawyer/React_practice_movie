import { useState } from "react";

const BoxComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default BoxComponent;
