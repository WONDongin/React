//useState 훅(Hook)을 조회하기. 
//useState : 컴포넌트 내부에서 state 처리를 위한 기능
import {useState} from "react"

export default function Hello () {
    //초기값으로 Mike 로 설정
    //name : 변수. 상태값
    //setName : 변수값 변경을 위한 함수
    const [name,setName] = useState("Mike")
    return (
        <div>
            <h2>{name}</h2> {/* 상태값 name을 출력 */}
            <button onClick={()=>{
                setName(name === "Mike" ? "Tom" : "Mike")
            }}>이름변경</button>
        </div>
    )
}