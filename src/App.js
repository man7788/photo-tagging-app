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
    peter: { color: 'teal', filter: 'brightness(100%)' },
    sam: { color: 'teal', filter: 'brightness(100%)' },
    eric: { color: 'teal', filter: 'brightness(100%)' },
  });
  // const [clock, setClock] = useState();
  // const [time, setTime] = useState({ s: 0, m: 0, h: 0 });

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
      newObj[target] = { color: 'lightgrey', filter: 'brightness(50%)' };
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

  // const startTime = () => {
  //   const obj = { ...time };

  //   if (time.s < 59) {
  //     obj.s = time.s + 1;
  //   } else if (time.s === 59 && time.m < 59) {
  //     obj.s = 0;
  //     obj.m = time.m + 1;
  //   } else if (time.s === 59 && time.m === 59) {
  //     obj.s = 0;
  //     obj.m = 0;
  //     obj.h = time.h + 1;
  //   }

  //   setTime(obj);
  // };

  // useEffect(() => {
  //   setTimeout(startTime, 1000);
  //   let s = time.s;
  //   let m = time.m;
  //   let h = time.h;

  //   if (time.s < 10) {
  //     s = '0' + time.s;
  //   }

  //   if (time.m < 10) {
  //     m = '0' + time.m;
  //   }

  //   if (time.h < 10) {
  //     h = '0' + time.h;
  //   }

  //   const newClock = `${h}:${m}:${s}`;
  //   setClock(newClock);
  // }, [time]);

  return (
    <div
      className="App"
      onClick={pop ? clickPicture : clickMenu}
      style={{ cursor: cursor }}
    >
      <div className="title">Where're They?</div>
      <div className="frame">
        <Photo photo={peter} peguin="Peter" style={score.peter} />
        <Photo photo={sam} peguin="Sam" style={score.sam} />
        <Photo photo={eric} peguin="Eric" style={score.eric} />
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
      {/* <div>{clock}</div> */}
    </div>
  );
};

export default App;

// Things to create:
// 1. Target Box
// 2. Dropdown Menu

// Put an invisible div over the right target
