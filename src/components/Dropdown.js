import '../styles/Dropdown.css';

const Dropdown = ({ clickMenu, styles }) => {
  const { menuStyle, boxStyle } = styles;

  return (
    <div className="Dropdown">
      <div className="menu" style={menuStyle}>
        <ul onClick={clickMenu}>
          <li>Peter</li>
          <li>Sam</li>
          <li>Eric</li>
        </ul>
      </div>
      <div className="box" style={boxStyle}></div>
    </div>
  );
};
export default Dropdown;
