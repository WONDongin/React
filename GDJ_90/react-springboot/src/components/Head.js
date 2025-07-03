function Head() {
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <img src="/logo192.png" width="10%"/>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="dropdown-item" href="/board/boardList/1">공지사항</a>
                    </li>
                    <li className="nav-item">
                        <a className="dropdown-item" href="/board/boardList/2">자유게시판</a>
                    </li>
                    <li className="nav-item">
                        <a className="dropdown-item" href="/board/boardList/3">QnA</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Head;