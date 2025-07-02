// data의 days 키값만 <li>태그로 출력하기
import data from "../db/data.json"
export default function DayList() {
    return (
        <ul className="list_day">
            {data.days.map(day => (
                <li>Day {day.day}</li>
            ))}
        </ul>
    )
}