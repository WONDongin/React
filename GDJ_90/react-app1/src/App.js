import './App.css';
// 버튼클릭을 하면 <div id="msg"></div> 이 영역에 안녕하세요 출력하기
function App() { 
  const handleClick = () => {
    document.getElementById("msg").innerHTML = "안녕하세요"
  }
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
    <button onClick={handleClick}>인사하기</button>
    <div id="msg"></div>
    </div>
  ); //HOOKS : 상태 설정 
}
export default App;