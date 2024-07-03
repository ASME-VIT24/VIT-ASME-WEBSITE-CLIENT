import "./AboutSection.css";
import aboutImg from "../../assets/images/Innovation-amico.png";
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-section-container">
        <div className="about-text">
          <h1 id="about-h1">What is Mechnovate?</h1>
          <p>
            Mechnovate is the largest and widely recognized 3 day symposium
            conducted by ASME-VIT. It focuses on innovation and advancements in
            the field of mechanical engineering. It has successfully gathered
            inquisitive and talented minds from all over India. Our motto is to
            attain insights from our predecessors on the conduction of events
            and reinventing ourselves while implementing future technology in
            Mechnovate 2024. It includes workshops, keynote sessions and
            competitions to foster collaboration and exchange of ideas among
            students, researchers, and professionals in the domain of mechanical
            engineering. Mechnovate takes place over the course of 3 days packed
            with premium events.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
