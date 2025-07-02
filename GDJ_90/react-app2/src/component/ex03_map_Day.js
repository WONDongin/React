import data from "../db/data.json"
// map 함수 : 반복문
export default function Day() {
    const day = 3
    //(word.day(json객체의키값)===day(변수명))
    //wordlist : 일자별 목록
    const wordlist = data.words.filter(word=>(word.day===day))
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