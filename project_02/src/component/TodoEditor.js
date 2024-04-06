import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>💡 새로운 Todo 작성하기</h4>
            <div className="editor_wrapper">
                <input onKeyDown={onKeyDown} ref={inputRef} onChange={onChangeContent} value={content} placeholder="새로운 Todo.."></input>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>  
    );
};
export default TodoEditor;