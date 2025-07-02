import logo from './logo.svg';
import './App.css';

function App() { //함수형 컴포넌트
    {/*주석 : JSX 
        - <태그> ... </태그> : 시작태그 종료태그 필수
        - className : HTML class 속성임. 자바스크립트에서  class가 예약어임
    */}
    const name = "Tom"
    const naver = {
      name : "네이버",
      url : "https://www.naver.com"
    }
  return (
    <div className="App">
      <h1 style={{color : "red",
                  backgroundColor : "green" }}>
      Hello, {name}<p>{2+3}</p></h1>
      <a href={naver.url} target="_blank" rel="noreferrer">
        {naver.name}
      </a>
    </div>
  );
}
export default App;
