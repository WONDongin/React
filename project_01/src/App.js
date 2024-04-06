import './App.css';
import { useRef, useEffect, useState } from 'react';
import Controller from './component/Controller.js';
import Viewer from './component/Viewer.js';
import Even from './component/Even.js';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  /** 타켓 Value 값 변경*/
  const handleSetText = (e) => {
    setText(e.target.value);
  };
  
  const didMountRef = useRef(false);
 
  useEffect(() => {
    if (!didMountRef.current){
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트!");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

 
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleSetText}></input>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller  handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
