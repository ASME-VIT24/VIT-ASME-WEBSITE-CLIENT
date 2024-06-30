import { useParams } from "react-router";
import Poster from "../../components/UI/Poster/Poster";
import "./EventPage.css";
import { events } from "../../events";
const EventPage = () => {
  const { eventName } = useParams();

  const identifiedEvent = events.find((event) => event.name === eventName);
  return (
    <div className="event-page">
      <div className="event-page-container">
        {identifiedEvent ? (
          <>
            <div className="event-description">
              <h1>{identifiedEvent.name}</h1>
              <p>{identifiedEvent.description}</p>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {identifiedEvent.dates.map((date) => (
                    <tr>
                      <td>{date.date}</td>
                      <td>{date.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => {
                  window.location.href =
                    "https://events.vit.ac.in/events/ASME/";
                }}
                style={{
                  marginTop: "1rem",
                }}
              >
                Register
              </button>
            </div>
            <div className="poster-container">
              <Poster src="https://media.licdn.com/dms/image/C4D22AQHec7OTNjqh4Q/feedshare-shrink_800/0/1677943930483?e=2147483647&v=beta&t=dlUlhW1sAl8fQEb-_vvIK0jeJ2ppiiuJBlqep6nr5Sg" />
            </div>
          </>
        ) : (
          <>
            <h2
              style={{
                textAlign: "center",
                color: "#f79c53",
                fontSize: "2rem",
                fontWeight: "bolder",
              }}
            >
              Event Not Found
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default EventPage;
