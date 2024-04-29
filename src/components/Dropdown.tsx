import { useState } from "react";
import "../styles/Dropdown.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Dropdown = ({ title, content, style }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" style={style}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>{title}</h3>
        <span>
          {isOpen ? (
            <BsChevronDown size={30} stroke-width="1" />
          ) : (
            <BsChevronUp size={30} stroke-width="1" />
          )}
        </span>
      </div>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

export default Dropdown;
