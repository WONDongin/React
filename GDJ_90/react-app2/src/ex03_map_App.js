import './App.css';
import Header from './component/Header';
import Day from './component/Day';
import DayList from './component/DayList';
function App() {
  return (
    <div className="App">
      <Header />
      <DayList />
      <Day />
    </div>
  )
}
export default App;
