import './App.css';
import Header from './component/Header';
import Day from './component/Day';
import DayList from './component/DayList';
import NotFoundPage from './component/NotFoundPage';
/* 리액트 라우팅 기능을 위한 설정. 
   리액트 라우팅 : URL 요청에 별 다른 컴포넌트를 보여 주는 기능*/
import { BrowserRouter,Routes,Route } from 'react-router-dom'; //npm install react-router-dom
function App() {
  return (
    <BrowserRouter> {/*최상위 라우팅 컴포넌트.  */}
    <div className="App">
      <Header />
      <Routes> {/* Route 컴포턴트의 부모 컴포넌트 */}
      <Route path="/" element={<DayList />} /> {/* / 요청시 DayList 컴포넌트 조회. 홈 */}
      <Route path="/day/:day" element={<Day />} /> {/* :day라는 동적 변수에 따라 Day화면 출력 */}
      <Route path="*" element={<NotFoundPage />} /> {/* 페이지가 없는 경우 보여지는 페이지 출력.
                                                       가장 아래쪽에 구현 해야 함 */}
      </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App;
