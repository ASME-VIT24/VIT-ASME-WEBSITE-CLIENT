import "./AboutSection.css";
import aboutImg from "../../assets/images/Innovation-amico.png";
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-section-container">
        <div className="about-text">
          <h1 id="about-h1">What is Mechnovate?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            dolor erat, suscipit at metus eu, ultrices rhoncus risus. Vivamus
            venenatis enim quis velit posuere, at finibus nulla volutpat.
            Aliquam porttitor iaculis hendrerit. Integer vitae tortor massa.
            Morbi volutpat arcu eget ipsum aliquet, ac volutpat libero suscipit.
            Nullam eu turpis non diam rhoncus auctor vel sit amet quam. Duis
            vulputate varius mauris eget porttitor. Donec hendrerit turpis quis
            quam lobortis tempor. Morbi viverra arcu eget arcu fringilla
            ullamcorper. Aliquam ac malesuada massa. Quisque at massa in mi
            mollis tempor a nec risus. Cras eu nisl blandit, dignissim ante id,
            vestibulum nisl. Ut maximus lacus nec nunc euismod ullamcorper. In
            eget ipsum ut magna gravida pellentesque nec egestas mi. Vestibulum
            imperdiet cursus lectus, id suscipit arcu ornare ac. Maecenas sed
            egestas lorem. Sed maximus odio nisi, vitae lobortis urna sodales
            quis. Vivamus eu justo id sem pretium fringilla. Ut sed euismod
            ipsum. Vivamus ac risus ante. Cras imperdiet viverra faucibus.
            Vivamus cursus tincidunt libero, et semper diam blandit vitae. Sed
            efficitur, risus non maximus ornare, urna urna laoreet neque, ac
            mattis leo purus et enim.
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
