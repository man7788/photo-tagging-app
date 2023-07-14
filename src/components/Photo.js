import '../styles/Photo.css';

const Photo = ({ photo, peguin }) => {
  return (
    <div className="Photo">
      <img src={photo} alt="Peguin" />
      {peguin}
    </div>
  );
};
export default Photo;
