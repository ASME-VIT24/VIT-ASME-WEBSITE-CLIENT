import "./Footer.css";
import logo from "../../../assets/images/vit_logo.png";
const Footer: React.FC = () => {
  return (
    <footer id="wb-footer">
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
            <a href="https://www.facebook.com/AsmeVit/">
              <i className="bi bi-facebook" />
            </a>
            <a href="https://x.com/asmevit?lang=en">
              <i className="bi bi-twitter" />
            </a>
            <a href="https://www.instagram.com/asme.vit/">
              <i className="bi bi-instagram" />
            </a>
            <a href="https://www.linkedin.com/company/american-society-of-mechanical-engineers-asme-vit-vellore/?originalSubdomain=in">
              <i className="bi bi-linkedin" />
            </a>
            <a href="https://www.youtube.com/@ASME-VIT">
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
                <i className="bi bi-envelope" /> asme@vit.ac.in
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-envelope" /> official.mechnovate@gmail.com
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-telephone" /> +91 9372946497
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
