import './App.css';
import Hello from './component/Hello';
function App() {
  return (
    <div className="App">
      <h3>props : Properties, 속성</h3>
      <Hello age="10"/> {/* age 속성의 값의 자료형 문자열임 */}
      <Hello age={20} />  {/* age 속성의 값의 자료형을 숫자형으로 전달 */}
      <Hello age={30} />
    </div>
  );
}

export default App;
