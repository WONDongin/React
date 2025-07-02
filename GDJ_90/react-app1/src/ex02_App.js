import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello"
import Welcome from "./components/Welcome"
function App() { //함수형 컴포넌트
  return (
    <div>
      <Hello />
      <Welcome /> 
      <Hello />
      <Welcome /> 
      <Hello />
      <Welcome /> 
      <div className="box">Hello</div>     
    </div>
  );
}
export default App;