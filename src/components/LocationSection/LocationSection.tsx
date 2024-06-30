import "./LocationSection.css";
const LocationSection = () => {
  return (
    <section className="location-section">
      <div className="location-section-container">
        <div className="location-text">
          <h1>How to reach VIT?</h1>
          <p>
            VIT Vellore is located in Vellore, Tamil Nadu, India. It is
            accessible by road, rail, and air. The nearest airport is Chennai
            International Airport, which is approximately 130 km away from the
            campus. Other nearby airports include Bengaluru International
            Airport and Tirupati Airport. The nearest railway station is Katpadi
            Junction, which is approximately 3 km away from the campus. The
            campus is well connected by road, with frequent bus services
            available from nearby cities like Chennai, Bengaluru, and Hyderabad.
          </p>
        </div>
        <div className="map-container">
          <iframe
            style={{
              border: 0,
            }}
            width="100%"
            height="100%"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              import.meta.env.VITE_GOOGLE_MAPS_API_KEY
            }&q=VIT+Vellore`}
          />
        </div>
      </div>
    </section>
  );
};
export default LocationSection;
