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
              <Poster src={identifiedEvent.coverImg} />
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
