// data의 days 키값만 <li>태그로 출력하기
import { Link } from "react-router-dom"
import data from "../db/data.json"
export default function DayList() {
/*
"days": [
    { "id": 1,  "day": 1  },
    { "id": 2,  "day": 2  },
    { "id": 3,  "day": 3  }
  ],
  day : { "id": 1,  "day": 1  }
  day.day : 1

  <li key={day.id}>
   리액트에서 리스트 항목을 출력할때 고유한 값이 필요
   리액트는 Virtual DOM을 사용하므로 변경된 부분만 갱신함. 
   변경(수정,추가,삭제)된부분의 판단을 위해서 key 속성을 사용함
*/    
    return (
        <ul className="list_day">
            {data.days.map(day => (
             <li key={day.id}> 
              <Link to={`/day/${day.day}`}>Day {day.day}</Link>
             </li>
            ))}
        </ul>
    )
}