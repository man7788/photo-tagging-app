import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const [display, setDisplay] = useState('none');
  const [pop, setPop] = useState(true);
  const [cursor, setCursor] = useState('pointer');
  const [target, setTarget] = useState('placeholder');
  const [hide, setHide] = useState('block');

  const clickPicture = (e) => {
    setLeft(e.pageX);
    setTop(e.pageY);
    setDisplay('block');
    setPop(false);
    setCursor('default');
    setTarget('quit');
    setHide('block');
  };

  const clickMenu = (e) => {
    setDisplay('none');
    setPop(true);
    setCursor('pointer');
    setHide('block');

    const re = new RegExp(`^${target}$`, 'i');

    if (re.test(e.target.innerText)) {
      setTarget('found: ' + target);
    }
  };

  const clickTarget = (e) => {
    e.stopPropagation();
    clickPicture(e);
    setTarget(e.target.id);
    setHide('none');
  };

  useEffect(() => {
    console.log(target);
  }, [target]);

  const styles = {
    menuStyle: {
      display,
      top: `${top + 28}px`,
      left: `${left + 28}px`,
    },
    boxStyle: {
      display,
      top: `${top - 25}px`,
      left: `${left - 25}px`,
    },
  };

  return (
    <div
      className="App"
      onClick={pop ? clickPicture : clickMenu}
      style={{ cursor: cursor }}
    >
      <div className="menu" style={styles.menuStyle}>
        <ul onClick={clickMenu}>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
      <div className="box" style={styles.boxStyle}></div>
      <div
        id="one"
        onClick={pop ? clickTarget : clickPicture}
        style={{ display: hide }}
      ></div>
      <div
        id="two"
        onClick={pop ? clickTarget : clickPicture}
        style={{ display: hide }}
      ></div>
      <div
        id="three"
        onClick={pop ? clickTarget : clickPicture}
        style={{ display: hide }}
      ></div>
    </div>
  );
}

export default App;

// Things to create:
// 1. Target Box
// 2. Dropdown Menu

// Put an invisible div over the right target
