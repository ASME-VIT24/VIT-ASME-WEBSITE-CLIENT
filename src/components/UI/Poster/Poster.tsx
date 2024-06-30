import "./Poster.css";
interface IPosterProps {
  src: string;
}
const Poster: React.FC<IPosterProps> = ({ src }) => {
  return (
    <div className="poster">
      <div className="posterImg">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default Poster;
