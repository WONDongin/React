import { Link } from "react-router-dom";
/*
   a 태그 = 앵커태그. 외부링크이동 HTML 기본태그
            브라우저 전체페이지를 새로고침함 = 느림
         
   Link 태그 = 리액트 라우터가 제공하는 리액트 전용 태그
            화면을 새로고침하지 않고 컴포넌트만 바꿈. SPA = 속도가 빠르다.
            리액트 내부의 페이지 이동. 현재 상태 유지 가능
 */
export default function NotFoundPage() {
    return (
        <>
         <h2>잘못된 요청입니다.</h2>
         <Link to="/">돌아가기</Link>
        </>
    )
}