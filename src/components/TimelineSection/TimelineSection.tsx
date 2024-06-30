import "./TimelineSection.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import queue from "../../assets/images/Queue-amico.png";
import closed from "../../assets/images/Closed sign-pana.png";
import EventListCard from "../UI/EventListCard/EventListCard";
const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <div className="timeline-section-container">
        <h1 id="timeline-h1">Timeline</h1>
        <VerticalTimeline animate={true} lineColor="#1e1c1c">
          <VerticalTimelineElement
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
          </VerticalTimelineElement>
          <VerticalTimelineElement
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
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="9th July 2024"
            contentStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            iconStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            icon={<i className="bi bi-1-circle-fill" />}
          >
            <h2
              className="vertical-timeline-element-title"
              style={{
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              Day 1
            </h2>
            <div className="events-preview-box">
              <EventListCard
                eventName="Aerodash"
                eventTime="11:30 am - 6:30 pm"
              />
              <EventListCard
                eventName="Mech-A-Thon"
                eventTime="10:00 am - 11:59 pm"
              />
              <EventListCard
                eventName="Ornithopter"
                eventTime="02:30 pm - 06:30 pm"
              />
              <EventListCard
                eventName="Telescope"
                eventTime="11:30 am - 06:00 pm"
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="10th July 2024"
            contentStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            iconStyle={{ background: "#f79c53", color: "#1e1c1c" }}
            icon={<i className="bi bi-2-circle-fill" />}
          >
            <h2
              className="vertical-timeline-element-title"
              style={{
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              Day 2
            </h2>
            <div className="events-preview-box">
              <EventListCard
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
              />
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimelineSection;
