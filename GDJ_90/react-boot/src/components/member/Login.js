
import { useState} from "react";
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify'; //npm install react-toastify

const Login = () => {
    const navigate = useNavigate()  //redirect
	  const [id, setId] = useState("");
    const [pass, setPass] = useState("");
	const clearForm = () => {
		setId("");
		setPass("");
	};
	/*
	   클라이언트 : 3000 react. 
	   서버 : 8080 스프링부트 쿠키 생성
	     cors : 부라우저가 다른 도메인 의 서버에 요청시 쿠키전송 가능 설정
	*/
	const handleSubmit =  (e) => {
		e.preventDefault();
		try {
			const form = new FormData()
			form.append('id', id)
			form.append('pass', pass)
			//alert(form)
			fetch('http://localhost:8080/member/loginPro', {
			body: form,
			method: 'POST',
			mode : 'cors', //Cross Origin Resource Sharing
			xhrFields: {  //쿠키 포함. 불필요
			 	withCredentials: true
			},
			credentials: 'include',  //쿠키포함
			crossDomain : true,
			})
			.then((res) => res.json())
			.then((json) => {	
//				alert(JSON.stringify(json))
				alert(json.message)
			  if (json.token==="1") {
				navigate("/board/boardList/1");
				} else {
				navigate("/member/login");
				}
			}
			)
		} catch (e) {
			toast.error("오류발생!", {position: "top-center",});
		}
		clearForm();
	}
    return (
        <div ><div className="container">
		<div className="input-form-backgroud row">
			<div className="input-form col-md-12 mx-auto">
				<h4 className="mb-3  center">로그인</h4>
				<form className="validation-form" novalidate  onSubmit={handleSubmit} method="post" >
				
					<div className="row">
						<div className="col-md-6 mb-3">
							<label for="id">아이디</label> <input type="text"
								className="form-control" id="id" 
								onChange={(e) => {
									setId(e.target.value);
								}}
								value={id}
								
								required  name="id"/>
							<div className="invalid-feedback">아이디를 입력해주세요.</div>
						</div>
						<div className="col-md-6 mb-3">
							<label for="pass">비밀번호</label> <input type="password"
								className="form-control" id="pass" 
								onChange={(e) => {
									setPass(e.target.value);
								}}
								value={pass} 
								name="pass"
								required/>
							<div className="invalid-feedback">비밀번호을 입력해주세요.</div>
						</div>
					</div>
					<div className="mb-4"></div>
					<button className="btn btn-primary btn-lg btn-block" type="submit">로그인</button>
					<Link className="btn btn-primary btn-lg btn-block" 
					   to={"/member/join"} >회원가입</Link>
				</form>
			</div>
		</div>
        </div>
</div>
    )
}
export default Login;
