import data from "../db/data.json"
//useParams : 라우터에서 제공되는 파라미터를 조회하는 훅
import { useParams } from "react-router-dom" 
// map 함수 : 반복문
export default function Day() {
    const {day} = useParams(); //파라미터값은 문자열로 저장됨
    // const pa = useParams();
    // console.log(pa)
    //word.day = 숫자 형식
    //day = 문자열 형식
    const wordlist = data.words.filter(word=>(word.day===Number(day)))
    return (
        <>
        <h2>Day{day}</h2>
        <table>
            <tbody>
{/*data : data.json 파일 
  data.words : 배열 객체.
  map : 배열 객체의 요소를 순회함.
  word : data.words 요소 한개
    {
      "id": 6,
      "day": 3,
      "eng": "pencil",
      "kor": "연필",
      "isDone": false
    },
*/}                
                {wordlist.map(word => (
                    <tr>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}