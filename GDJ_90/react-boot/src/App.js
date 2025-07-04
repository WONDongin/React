import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
//npm install react-router-dom
import { useCookies } from 'react-cookie' //npm install react-cookie --save
import Head from "./components/Head"
import BoardList from "./components/board/BoardList"
import BoardForm from "./components/board/BoardForm"
import BoardInfo from "./components/board/BoardInfo"
import BoardUpdateForm from "./components/board/BoardUpdateForm"
import Login from "./components/member/Login"
import Join from "./components/member/Join"
function App() {
   const [cookies] = useCookies(['id'])
  return (
     <BrowserRouter>
     <Head cook={cookies.id}/>
     <Routes>
        <Route path="/board/boardList/:boardid" element={<BoardList />} />
        <Route path="/board/boardForm/:boardid" element={<BoardForm />} />
        <Route path="/board/boardInfo/:bnum" element={<BoardInfo />} />
        <Route path="/board/boardUpdateForm/:bnum" element={<BoardUpdateForm />} />
        <Route path="/member/join" element={<Join />} />
        <Route path="/member/login" element={<Login />} />
     </Routes>
     </BrowserRouter>
  );
}
export default App;
