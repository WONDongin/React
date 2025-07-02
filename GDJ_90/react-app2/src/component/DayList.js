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