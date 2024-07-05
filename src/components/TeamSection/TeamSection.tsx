import TeamCard from "../UI/TeamCard/TeamCard";
import "./TeamSection.css";
import fc from "../../assets/images/meet our team.jpg";
import cp1 from "../../assets/images/Picture2.jpg";
import cp2 from "../../assets/images/cp2.png";
import sc from "../../assets/images/Picture4.png";
import advisor from "../../assets/images/Picture5.jpg";
import convenor from "../../assets/images/Picture6.png";
import coConvenor from "../../assets/images/Picture7.png";
import student1 from "../../assets/images/Picture8.jpg";
import student2 from "../../assets/images/Picture9.jpg";
import student3 from "../../assets/images/Picture10.jpg";
const dummyTeamData = [
  {
    name: "Viksit Jain",
    role: "Organiser",
    img: student1,
  },
  {
    name: "Juee Patil",
    role: "Organiser",
    img: student2,
  },
  {
    name: "Yash Sonak",
    role: "Organiser",
    img: student3,
  },
];
const TeamSection = () => {
  return (
    <>
      <section className="team-section">
        <div className="team-section-container">
          <h1 id="team-h1">Meet Our Team</h1>
          <div className="grid-rows">
            <h2>Chief Patron</h2>
            <div className="team-grid">
              <TeamCard
                name="Dr. G. Viswanathan"
                role="Founder & Chancellor, VIT"
                notable
                img={fc}
              />
            </div>
            <h2>Co-Patron</h2>
            <div className="team-grid">
              <TeamCard
                name="Dr. VS Kanchana Bhaskaran"
                role="Vice Chancellor, VIT"
                notable
                img={cp1}
              />
              <TeamCard
                name="Dr. Paratha Sarathi Mallick"
                role="Pro Vice Chancellor, VIT"
                notable
                img={cp2}
              />
            </div>
            <h2>Symposium Chair</h2>
            <div className="team-grid">
              <TeamCard
                name="DR.K. Devendranath Ramkumar"
                role="Dean, School of Mechanical Engineering"
                notable
                img={sc}
              />
            </div>
            <h2>ASME-VIT Advisor</h2>
            <div className="team-grid">
              <TeamCard
                name="Dr. Anthony Xavior M"
                role="Dean, Academics"
                notable
                img={advisor}
              />
            </div>
            <h2>Convenor</h2>
            <div className="team-grid">
              <TeamCard
                name="Dr. Jeyapandiarajan P"
                role="Associate Professor, School of Mechanical Engineering"
                notable
                img={convenor}
              />
            </div>
            <h2>Co-Convenor</h2>
            <div className="team-grid">
              <TeamCard
                name="Dr. Joel J"
                role="Associate Professor Senior, School of Mechanical Engineering"
                notable
                img={coConvenor}
              />
            </div>
            <h2>Organisers</h2>
            <div className="team-grid">
              {dummyTeamData.map((teamMember, index) => {
                return (
                  <TeamCard
                    key={index}
                    name={teamMember.name}
                    role={teamMember.role}
                    img={teamMember.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TeamSection;
