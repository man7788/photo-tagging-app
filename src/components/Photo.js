import '../styles/Photo.css';

const Photo = ({ photo, peguin, style }) => {
  return (
    <div className="Photo" style={style}>
      <img src={photo} alt={peguin} />
      {peguin}
    </div>
  );
};
export default Photo;
