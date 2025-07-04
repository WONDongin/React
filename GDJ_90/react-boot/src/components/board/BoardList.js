import {useState, useEffect} from "react"
import {useParams, useLocation} from "react-router-dom"
import dayjs from 'dayjs'  //npm install dayjs

const BoardList = ()=> {
  const [bList, setBList] = useState([]); //게시물 목록
  const [boardCount, setBoardCount] = useState([]); //게시물 등록 건수
  const [start, setStart] = useState(0);  //페이지 시작 번호
  const [end, setEnd] = useState(0);      //페이지 종료 번호
  const [pageInt, setPageInt] = useState([]); //현재 페이지
  const [bottomLine, setBottomLine] = useState([]); 
  const [maxPage, setMaxPage] = useState([]); 
  const [boardName, setBoardName] = useState([]);
  //url 정보에서 :boardid에 해당하는 부분 추출
  const {boardid} = useParams()   
  const location = useLocation(); //URL에서 정보를 추출할 수 있는 객체
  /*
     useLocation : URL 정보
     http://localhost:3000/test?num=10

     search : num=10 부분을 조회
  */
  let queryString = location.search;
  /*
   useEffect : 특정값이 변경될때만 실행하도록 설정 가능함
         빈 배열인 경우 처음 화면 시작될 날때 한번 실행함
   */
  useEffect(()=>{
    getBoardList(); //화면 처음 렌더링시 한번 실행. 
  },[])
  const getBoardList = () => {  // 서버에 리스트+페이징 정보 조회
    if (queryString.length === 0) {
        queryString = "?boardid=" + boardid; //서버 전송시 파라미터값 설정
    }
//http://localhost:8080/board/boardList : BackEnd서버 주소
    fetch("http://localhost:8080/board/boardList" + queryString)
      .then((resp)=> resp.json())
      .then((json) => {
        setBList(json.blist); //useState 함수, 출력할 게시물 목록
        setBoardCount(json.listcount); //게시물 등록 건수
        setStart(json.start)   //시작 페이지 번호
        setEnd(json.end)       //종료 페이지 번호
        setPageInt(json.pageInt) //현재 페이지
        setBottomLine(json.bottomLine) //화면에 보여질 페이지번호의 갯수
        setMaxPage(json.maxPage)  //최대 페이지
        setBoardName(json.boardName) //게시판 이름
      })
  }
  //start 부터 end까지의 값을 배열로 리턴. 현재 화면의 페이지 번호 목록
  function getPage(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  return (
    <div>
      <div className="container">
        <h2 className="text-center">
          {boardName}[{boardCount}]
        </h2>
        <p className="text-right">
          <a className="btn btn-primary" href={`/board/boardForm/${boardid}`}>
            게시판입력
          </a>
        </p>
        <table className="table table-bordered">
          <thead>
            <tr><th>번호</th><th>작성자</th><th>제목</th><th>날짜</th>
              <th>조회수</th><th>파일</th></tr>
          </thead>
          <tbody>
            {/*Array.isArray(bList) : bList 값이 배열?
              bList.length > 0:  배열내에 저장된 요소 존재?
              */}
            {Array.isArray(bList) && bList.length > 0 ? (  //조건연산자 : 참
                //b : board 객체, index : 순서
              bList.map((b, index) => (
                <tr key={index}>
                  <td>{boardCount - (pageInt - 1) * bottomLine - index}</td>
                  <td>{b.name}</td>
                  <td>
                    <a href={"/board/boardInfo/" + b.num}>{b.subject}</a>
                  </td>
                  <td>{dayjs(b.regdate).format("YYYY-MM-DD")}</td>
                  <td>{b.readcnt}</td>
                  <td><img  src={"http://localhost:8080/img/board/" + b.file1} 
                     width="30px"  alt="file" />{b.file1}</td>
                </tr>
              ))) : (
              <tr>
                <td colSpan="6" className="text-center">
                  게시물이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* 페이지 처리 부분 */}
        <ul className="pagination center" style={{ justifyContent: "center" }}>
          <li className={start <= bottomLine ? "page-item disabled" : "page-item"}>
            <a className="page-link" 
               href={"/board/boardList?page=" + (start - bottomLine)}>
              Previous
            </a>
          </li>
          {/* getPage(start, end) : start,end 까지의 배열*/}
          {getPage(start, end).map((p) => (
           <li key={p} className={pageInt == p ? "page-item active" : "page-item"}>
              <a className="page-link" href={"/board/boardList?page=" + p}>
                {p}
              </a>
           </li>
          ))}
          <li className={end >= maxPage ? "page-item disabled" : "page-item"}>
            <a className="page-link" 
               href={"/board/boardList?pageNum=" + (start + bottomLine)}>
              Next </a>
          </li>
        </ul>
      </div></div>
  );
}
export default BoardList;