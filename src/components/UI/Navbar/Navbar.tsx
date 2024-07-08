import "./Navbar.css";
import asmeLogo from "../../../assets/images/ASME_VIT logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{
        height: isOpen ? "100vh" : "",
      }}
    >
      <img src={asmeLogo} alt="" className="asme-logo" />
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => navigate("/")}>
            <p>Home</p>
          </li>
          <li>
            <ScrollLink to="about-section" smooth={true} duration={1000}>
              <p>About</p>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="wb-footer" smooth={true} duration={1000}>
              <p>Contact</p>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="events-preview-box" smooth={true} duration={1000}>
              <p>Events</p>
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="burger" onClick={handleToggle}>
        <i className={isOpen ? "bi bi-x-circle-fill" : "bi bi-list"} />
      </div>
    </nav>
  );
};

export default Navbar;
