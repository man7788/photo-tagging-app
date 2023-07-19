import { useState } from 'react';
import '../styles/Popup.css';

const Popup = ({ style, score }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    setName('');
  };

  return (
    <div className="Popup" style={{ display: style }}>
      <div className="header">
        <div>Congraulations!</div>
        <div>Your Finish Time:</div>
        <div>{score}</div>
      </div>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input onChange={handleChange} value={name} type="text" id="name" />
        <button type="submit" onClick={onSubmitTask}>
          Sumbit Your Score
        </button>
      </form>
    </div>
  );
};

export default Popup;
