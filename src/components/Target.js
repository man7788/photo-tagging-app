import '../styles/Target.css';

const Target = (props) => {
  const { id, clickTarget, clickPicture, pop, hide } = props;

  return (
    <div className="Target">
      <div
        id={id}
        onClick={pop ? clickTarget : clickPicture}
        style={{ display: hide }}
      ></div>
    </div>
  );
};
export default Target;
