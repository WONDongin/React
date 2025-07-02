import './App.css';
// <input>에 글자를 입력하면, 입력할 때마다 콘솔에 그 값이 출력되도록 만들어보세요.
function App() { 
  const handleChange = (e)=> {
    console.log(e.target.value);
    document.getElementById("msg").innerHTML = e.target.value
  }
  return (
   <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input type="text" onChange={handleChange} />
      <p id="msg"></p>
    </div>  );
}
export default App;