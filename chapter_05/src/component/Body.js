import React from "react";
import "./Body.css";
import { useRef, useState } from "react";

function Body() {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };  
    const handleOnClick = () =>{
       if (text.length < 5){
            textRef.current.focus();
       }else{
            alert(text);
            setText('5자리 이상');
       }
    };
    return(
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange}></input>
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}
export default Body;

