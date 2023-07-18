import '../styles/Dropdown.css';

const Dropdown = ({ clickMenu, styles }) => {
  const { menuStyle, boxStyle } = styles;

  return (
    <div className="Dropdown">
      <div className="menu" data-testid="menu" style={menuStyle}>
        <ul>
          <li onClick={clickMenu}>Peter</li>
          <li onClick={clickMenu}>Sam</li>
          <li onClick={clickMenu}>Eric</li>
        </ul>
      </div>
      <div className="box" data-testid="box" style={boxStyle}></div>
    </div>
  );
};
export default Dropdown;
