import './App.css';

function App() { 
  const handleClick = () => {
    console.log("안녕하세요")
  }
  const handleChange = (e)=> {
    console.log(e.target.value);
  } 
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
     <button onClick={handleClick}>1. 인사하기</button><br/>      
     <button onClick={()=> console.log("두번째 인사")}>2.인사하기</button>
     <br/>
     <input type="text" onChange={handleChange} />
    </div>
  );
}
export default App;