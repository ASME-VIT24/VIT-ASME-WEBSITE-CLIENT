import "./HeroSection.css";
import mechnovateLogo from "../../assets/images/Mechnovate_Light.png";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import backgroundVideo from "../../assets/videos/robot-arm-1.mp4";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="video-background">
        <video autoPlay loop muted controls={false}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-section__content">
        <img src={mechnovateLogo} alt="Mechnovate Logo" id="mechnovateLogo" />
        <div className="countdown">
          <FlipClockCountdown
            to={new Date("2024-08-08").getTime() + 24 * 3600 * 1000 + 5000}
            digitBlockStyle={{ backgroundColor: "#f79c53" }}
            labelStyle={{ color: "#f79c53", fontWeight: "bold" }}
          />
        </div>
        {/* <div
          className="register-btn"
          onClick={() => {
            window.location.href = "https://events.vit.ac.in/events/ASME/";
          }}
        >
          <button>Register Now</button>
        </div> */}
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
