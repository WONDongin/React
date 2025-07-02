import './App.css';
// 이름을 매개변수로 받아 출력하는 클릭 핸들러를 만들어보세요.
function App() { 
const greet = (name) => {
    document.getElementById('msg').innerText = `${name}님, 안녕하세요!`;
  };
  return (
   <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={() => greet('주니맘')}>주니맘 인사하기</button>
      <button onClick={() => greet('홍길동')}>홍길동 인사하기</button>
      <p id="msg"></p>
    </div>  );
}
export default App;