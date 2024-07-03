import "./TeamCard.css";
import logo from "../../../assets/images/ASME_VIT logo.png";
interface ITeamCardProps {
  name: string;
  role: string;
  notable?: boolean;
  img?: string;
}

const TeamCard: React.FC<ITeamCardProps> = ({ name, role, notable, img }) => {
  return (
    <div className="team-card">
      {!notable && <img src={logo} alt="" id="asme-logo" />}
      <div className="img-container">
        <img src={img} className="member-img" />
      </div>
      <h1>{name}</h1>
      <p>{role}</p>
    </div>
  );
};

export default TeamCard;
