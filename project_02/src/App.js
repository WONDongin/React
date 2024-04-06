import { useState, useRef } from 'react';
import './App.css';
import Header from "./component/Header.js";
import TodoEditor from './component/TodoEditor.js';
import TodoList from './component/TodoList.js';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "회사 출근하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => { 
    setTodo(
      todo.map((it) => 
        it.id === targetId ? {...it, isDone: !it.isDone} : it
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
       <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
export default App;
