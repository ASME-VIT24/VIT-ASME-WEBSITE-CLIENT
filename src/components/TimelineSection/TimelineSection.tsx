import "./TimelineSection.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import aerodash from "../../assets/images/aerodash.png";
import bridgeIt from "../../assets/images/bridgeit.png";
// import doorbin from "../../assets/images/doorbin.png";
import EventListCard from "../UI/EventListCard/EventListCard";
const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <div className="timeline-section-container">
        <h1 id="timeline-h1">Events</h1>
        <VerticalTimeline animate={true} lineColor="#1e1c1c">
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            contentArrowStyle={{ borderRight: "7px solid  #f79c53" }}
            date="20th June 2024"
            iconStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            icon={<i className="bi bi-person-lines-fill" />}
          >
            <h2
              className="vertical-timeline-element-title"
              style={{
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              Registerations Open
            </h2>
            <img src={queue} alt="" />
            <p>
              Registerations for Mechnovate 2024 will open on 20th June 2024.
              Don't miss out!
            </p>
          </VerticalTimelineElement> */}
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="21st June 2024"
            contentStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            iconStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            icon={<i className="bi bi-x-circle-fill" />}
          >
            <h2
              className="vertical-timeline-element-title"
              style={{
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              Registerations Close
            </h2>
            <img src={closed} alt="" />
            <p>
              Registerations for Mechnovate 2024 will close on 1st July 2024.
              Register now!
            </p>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            date="Competitions"
            contentStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            iconStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            icon={<i className="bi bi-award" />}
          >
            <h2
              className="vertical-timeline-element-title"
              style={{
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              Competitions
            </h2>
            <div className="events-preview-box">
              <EventListCard eventName="Aerodash" eventImage={aerodash} />
              <EventListCard eventName="Bridge It" eventImage={bridgeIt} />
              {/* <EventListCard eventName="Mech-A-Thon 3.0" eventImage={doorbin} /> */}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Workshops"
            contentStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            iconStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            icon={<i className="bi bi-gear-wide-connected" />}
          >
            <h2
              className="vertical-timeline-element-title"
              style={{
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              Workshops
            </h2>
            <div className="events-preview-box">
              {/* <EventListCard
                eventName="Aerodash"
                eventTime="09:00 am - 04:00 pm"
              />
              <EventListCard
                eventName="Mech-A-Thon"
                eventTime="12:00 pm - 04:00 pm"
              />
              <EventListCard
                eventName="Ornithopter"
                eventTime="09:00 am - 05:00 pm"
              />
              <EventListCard
                eventName="Telescope"
                eventTime="09:00 pm - 11:00 pm"
              /> */}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Guest Lectures"
            contentStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            iconStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            icon={<i className="bi bi-megaphone-fill" />}
          >
            <h2
              className="vertical-timeline-element-title"
              style={{
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              Sapentia
            </h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Mechnoventure"
            contentStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            iconStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            icon={<i className="bi bi-rocket-takeoff-fill" />}
          >
            <h2
              className="vertical-timeline-element-title"
              style={{
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              Mechnoventure
            </h2>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimelineSection;
