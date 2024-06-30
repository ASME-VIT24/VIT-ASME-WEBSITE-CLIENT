import "./Footer.css";
import logo from "../../../assets/images/vit_logo.png";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <img
              src={logo}
              alt="logo"
              style={{
                width: "60px",
                height: "60px",
              }}
            />
          </div>
          <div className="media-icons">
            <a href="#">
              <i className="bi bi-facebook" />
            </a>
            <a href="#">
              <i className="bi bi-twitter" />
            </a>
            <a href="#">
              <i className="bi bi-instagram" />
            </a>
            <a href="#">
              <i className="bi bi-linkedin" />
            </a>
            <a href="#">
              <i className="bi bi-youtube" />
            </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Quick Links</li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">ASME</li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Contacts</li>
            <li>
              <a href="#">
                <i className="bi bi-envelope" /> asmeclub@vit.edu
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-telephone" /> +91 1234567890
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-geo-alt" /> VIT, Vellore,Tamil Nadu, India
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2024{" "}
            <a href="#">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                }}
              />
            </a>
            All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
