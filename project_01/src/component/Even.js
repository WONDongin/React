import { useEffect } from "react";

function Even() {
   useEffect(() =>{
        return() => {
            console.log("Even 컴포넌트 언마운트");
        };
   }, []);
   return <div>짝수 입니다.</div>
}

export default Even;