import "./AboutVitSection.css";
import vit_bg from "../../assets/images/vit_bg.jpeg";
const AboutVitSection = () => {
  return (
    <section className="vit-info-section">
      <div className="vit-info-section-container">
        <div className="vit-info-image">
          <img src={vit_bg} alt="" />
        </div>
        <div className="vit-info-text">
          <h1 id="vit-info-h1">About VIT</h1>
          <p>
            We are a vibrant community of aspiring engineers dedicated to
            enhancing our skills and knowledge. Established in 2010 with the
            help of officials from ASME India, we have transpired to be one of
            the largest and the most distinguished student chapters directing
            our focus on stimulating innovation, fostering professional
            development, and networking opportunities. We impart a platform for
            students to explore their passion for mechanical engineering and
            make significant contributions to the field of mechanical
            engineering.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutVitSection;
