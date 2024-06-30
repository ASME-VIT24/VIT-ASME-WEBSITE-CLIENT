import TeamCard from "../UI/TeamCard/TeamCard";
import "./TeamSection.css";
const dummyTeamData = [
  {
    name: "John Doe",
    role: "CEO",
  },
  {
    name: "Jane Doe",
    role: "CTO",
  },
  {
    name: "John Doe",
    role: "CEO",
  },
  {
    name: "Jane Doe",
    role: "CTO",
  },
  {
    name: "Jenil Gandhi",
    role: "Media Head",
  },
  {
    name: "Dhruv Shah",
    role: "Public Relations Head",
  },
];
const TeamSection = () => {
  return (
    <>
      <section className="team-section">
        <div className="team-section-container">
          <h1 id="team-h1">Meet Our Team</h1>
          <div className="team-grid">
            {dummyTeamData.map((teamMember, index) => {
              return (
                <TeamCard
                  key={index}
                  name={teamMember.name}
                  role={teamMember.role}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default TeamSection;
