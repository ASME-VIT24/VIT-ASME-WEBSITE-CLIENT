import "./TeamCard.css";
import logo from "../../../assets/images/ASME_VIT logo.png";
interface ITeamCardProps {
  name: string;
  role: string;
}

const TeamCard: React.FC<ITeamCardProps> = ({ name, role }) => {
  return (
    <div className="team-card">
      <img src={logo} alt="" id="asme-logo" />
      <div className="img-container">
        <img
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          className="member-img"
        />
      </div>
      <h1>{name}</h1>
      <p>{role}</p>
    </div>
  );
};

export default TeamCard;
