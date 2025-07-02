import {useState} from "react"
// 1. props 변수에 age 값을 가져옴.
// 2. props의 값의 변경 불가
// 3. 값을 변경하고 싶은 경우 useState을 사용해야 함
// 4. {age} : props 객체의 age 값만 저장
export default function Hello ({age}) {
    //props.age = 11  불가
    //이름 변경을 위한 설정
    const [name,setName] = useState("Mike")
    //나이 변경을 위한 설정
    const [newage,setAge] = useState(age)
    let newage1 = age+1
    //18세보다 크면 성인입니다, 미성년입니다. 출력하기
    const msg = newage >= 18? "성인입니다.":"미성년입니다."
    return (
        <div>
            <h2>{name}:{newage1}살({msg})</h2>
            <button onClick={()=>{
                setName(name === "Mike" ? "Tom" : "Mike")
                setAge(newage + 1);
            }}>이름/나이변경</button>
        </div>
    )
}