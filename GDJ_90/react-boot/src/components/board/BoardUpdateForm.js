import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';

function BoardUpdateForm () {
    const navigate = useNavigate();
    const [num, setNum] = useState("");
    const [gname, setGname] = useState("");
    const [pass, setPass] = useState("");
    const [subject, setSubject] = useState("");  
    const [content, setContent] = useState("");
    const [file1, setFile1] = useState(""); 
    const [boardid, setBoardid] = useState("");    
    const { bnum } = useParams(); //게시물 번호
    const location = useLocation();
    let queryString = location.search; 

    //서버에서 게시물 번호에 해당하는 정보 조회. 수정 전 화면 조회
    const getBoardInfo = () => {
        if (queryString.length === 0) {
           queryString = "?num=" + bnum;
        }
        fetch("http://localhost:8080/board/boardUpdateForm" + queryString)
          .then((resp) => resp.json())
          .then((json) => {  //db의 데이터
            setNum(json.board.num); //게시물 번호
            setGname(json.board.name); //글쓴이
            setSubject(json.board.subject); //제목
            setContent(json.board.content); //내용
            setFile1(json.board.file1); //현재 업로드된 파일 이름
            setBoardid(json.board.boardid) //게시판 종류
        });
    };
  useEffect(() => {
    getBoardInfo();
  }, []);
  // 서버에 수정 요청
  //useCallback
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    let fileinput = document.querySelector("#file");
    try {
      const form = new FormData();
      form.append('num', bnum);
      form.append('name', gname);
      form.append('pass', pass);
      form.append('subject', subject);
      form.append('content', content);
      form.append('file1', file1);
      form.append('file2', fileinput.files[0]);
      form.append('boardid', boardid);
      fetch('http://localhost:8080/board/boardUpdatePro', {
        method: 'POST',
        body: form,
      })
      .then((resp)=>resp.json())
      .then((json)=> {
        alert(json.msg);
        if(json.code === 0) {
           navigate("/board/boardinfo/" +bnum);
        }
      });

    } catch (e) {
      console.error("업데이트 실패:", e);
    }
  }, [gname, pass, subject, content, boardid,navigate]);
  return (
    <div className="container">
      <h4 className="text-center">게시판 수정</h4>
      <form  className="container"  method="post"   encType="multipart/form-data"
        onSubmit={handleSubmit} >
        <input type="hidden" name="num" value={bnum} />
        <input type="hidden" name="file1" value={file1} />
        <div className="form-group">
          <label htmlFor="name">작성자:</label>
          <input type="text" className="form-control"     placeholder="Enter name"
            id="name"    onChange={(e) => setGname(e.target.value)}
            value={gname}   name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">비밀번호:</label>
          <input  type="password"   className="form-control"   placeholder="Enter password"
                  id="pwd"   onChange={(e) => setPass(e.target.value)}  value={pass} name="pass" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">제목:</label>
          <input  type="text"   className="form-control"   placeholder="제목 입력"   id="subject"
            onChange={(e) => setSubject(e.target.value)}   value={subject}          name="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용:</label>
          <textarea      className="form-control"   rows="5"   id="content"
          onChange={(e) => setContent(e.target.value)}       value={content}  name="content"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file">파일:&nbsp;{file1}</label>
          <input type="file" className="form-control"  id="file"
            onChange={(e) => {  setFile1(e.target.value); }}     name="f"  />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> </div>
  );
}
export default BoardUpdateForm;
