import { useState, useEffect } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Target from './components/Target';
import Photo from './components/Photo';
import { peter, sam, eric } from './images/album';

const App = () => {
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const [display, setDisplay] = useState('none');
  const [pop, setPop] = useState(true);
  const [cursor, setCursor] = useState('pointer');
  const [target, setTarget] = useState('placeholder');
  const [hide, setHide] = useState('block');
  const [score, setScore] = useState({
    peter: 'darkcyan',
    sam: 'darkcyan',
    eric: 'darkcyan',
  });

  const clickPicture = (e) => {
    setLeft(e.pageX);
    setTop(e.pageY);
    setDisplay('block');
    setPop(false);
    setCursor('default');
    setTarget('quit');
    if (hide === 'block') {
      setHide('none');
    } else if (hide === 'none') {
      setHide('block');
    }
  };

  const clickMenu = (e) => {
    setDisplay('none');
    setPop(true);
    setCursor('pointer');
    setHide('block');

    const re = new RegExp(`^${target}$`, 'i');

    if (re.test(e.target.innerText)) {
      setTarget('found: ' + target);
      const newObj = { ...score };
      newObj[target] = 'grey';
      setScore(newObj);
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
      <div className="title">Where're They?</div>
      <div className="frame">
        <Photo photo={peter} peguin="Peter" />
        <Photo photo={sam} peguin="Sam" />
        <Photo photo={eric} peguin="Eric" />
      </div>
      <Dropdown clickMenu={clickMenu} styles={styles} />
      <Target
        id="peter"
        clickTarget={clickTarget}
        clickPicture={clickPicture}
        pop={pop}
        hide={hide}
      />
      <Target
        id="sam"
        clickTarget={clickTarget}
        clickPicture={clickPicture}
        pop={pop}
        hide={hide}
      />
      <Target
        id="eric"
        clickTarget={clickTarget}
        clickPicture={clickPicture}
        pop={pop}
        hide={hide}
      />
      {/* <div id="p-score" style={{ color: score.peter }}>
        Peter
      </div>
      <div id="s-score" style={{ color: score.sam }}>
        Sam
      </div>
      <div id="e-score" style={{ color: score.eric }}>
        Eric
      </div> */}
    </div>
  );
};

export default App;

// Things to create:
// 1. Target Box
// 2. Dropdown Menu

// Put an invisible div over the right target
