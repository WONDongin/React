import {Link} from "react-router-dom";
import { useCookies } from 'react-cookie'; //쿠키관련 훅. 쿠키 제공훅
function Head(props) {
    const [, , removeCookie] = useCookies(); //의미없는 쿠키 제거
    const logout = () => {  
     removeCookie("id", { path: '/' }); // 쿠키 제거
     window.location.href = '/member/login';
    }
    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <img src="/logo192.png"  width="10%"/>
        <div className="navbar-nav container d-flex justify-content-between">
          <ul className="navbar-nav">
            {props.cook == null &&
            <li className="nav-item">
                <Link to="/member/join" className="nav-link">회원가입</Link>
            </li> }
            {props.cook == null &&
            <li className="nav-item">
                <Link to="/member/login" className="nav-link">로그인</Link>
            </li> }
            {props.cook != null &&
            <li className="nav-item">
                <Link to="#" className="nav-link" 
                onClick={logout}>&nbsp;로그아웃&nbsp;</Link>[{props.cook}]
            </li>
            }</ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="dropdown-item" href="/board/boardList/1">공지사항</a>
            </li>    
            <li className="nav-item">
              <a className="dropdown-item" href="/board/boardList/2">자유게시판</a>
            </li>    
            <li className="nav-item">
              <a className="dropdown-item" href="/board/boardList/3">QnA</a>
            </li></ul>
        </div>          
          </nav></div>
    );
  }
  export default Head;