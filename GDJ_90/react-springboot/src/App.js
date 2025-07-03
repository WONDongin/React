import './App.css';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
// npm install react-router-dom

import Head from './components/Head'
import BoardList from './components/board/BoardList'
import BoardForm from './components/board/BoardForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Head />
        <Routes>
          <Route path="/board/boardList/:boardid" element={<BoardList />} />
          <Route path="/board/boardForm/:boardid" element={<BoardForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;