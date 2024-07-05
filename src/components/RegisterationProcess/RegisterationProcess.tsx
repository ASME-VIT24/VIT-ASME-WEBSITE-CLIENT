import { useEffect, useState } from "react";
import regbg from "../../assets/images/reg-process.png";
import regbgMobile from "../../assets/images/reg-process-mobile-view.png";
import "./RegisterationProcess.css";

const RegisterationProcess = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1080) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);
  return (
    <section id="registeration-process-section">
      {/* <h1>How to Register</h1> */}
      <div className="registeration-process-container">
        <img src={isMobile ? regbgMobile : regbg} alt="" />
      </div>
    </section>
  );
};

export default RegisterationProcess;
