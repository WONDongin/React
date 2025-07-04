import { useState, useEffect  } from "react";
import { useNavigate } from 'react-router-dom';
function Join() {
    const navigate = useNavigate()
	const [id, setId] = useState("");
	const [gname, setGname] = useState("");
	const [pass, setPass] = useState("");
	const [pass2, setPass2] = useState("");
	const [gender, setGender] = useState("");
    useEffect(() => { setGender(1)}, [gender] )  
	const [email, setEmail] = useState("");
	const [tel, setTel] = useState("");
	const [picture, setPicture] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			const form = new FormData()
			form.append('id', id)
			form.append('pass', pass)
			form.append('name', gname)
			form.append('gender', gender)
			form.append('tel', tel)
			form.append('email', email)
			form.append('picture', picture)
			fetch('http://localhost:8080/member/joinPro', {
				method: 'POST',
				body: form,
				headers: {
					Accept: 'application/json ,text/plain, */*'
				}
			})			
			navigate("/member/login");
		} catch (e) {
            alert("서버 전송 오류");
		}
	}
	return (
	<div className="container">
		<div className="input-form-backgroud row">
			<div className="input-form col-md-12 mx-auto">
				<h4 className="mb-3">회원가입</h4>
				<form className="validation-form" novalidate onSubmit={handleSubmit} 
                      method="post" name="f">
					<input type="hidden" name="picture" />
					<div className="row">
						<div className="col-md-3 mb-3">
							<label for="id">사진</label> <img src="" width="100px" height="120px"
								onChange={(e) => {setPicture(e.target.value);}}
								value={picture}	id="pic" />
				<a className="btn btn-primary  btn-block" href="javascript:win_upload()" >사진업로드</a>
						</div>
						<div className="col-md-9 mb-3">
							<div className="row">
								<div className="col-md-6 mb-3">
									<label >아이디</label> <input type="text" className="form-control"
							onChange={(e) => {	setId(e.target.value);	}}	name="id" value={id} />
ㅇ								</div>
								<div className="col-md-6 mb-3">
									<label for="name">이름</label> <input type="text"
										className="form-control" id="name" placeholder=""
										onChange={(e) => {	setGname(e.target.value); }}
											value={gname}	name="name"	required />
										<div className="invalid-feedback">이름을 입력해주세요.</div>
									</div>
								</div></div></div>

						<div className="row">
							<div className="col-md-6 mb-3">
								<label for="pass">비밀번호</label> <input type="password"
									className="form-control" id="pass" placeholder="아이디" required
									onChange={(e) => {	setPass(e.target.value); }}
									value={pass} name="pass" />
								<div className="invalid-feedback">비밀번호을 입력해주세요.</div>
							</div>
							<div className="col-md-6 mb-3">
								<label for="pass2">비밀번호확인</label> <input type="password"
									className="form-control" id="pass2" placeholder=""
									onChange={(e) => {	setPass2(e.target.value);	}}
									value={pass2}	name="pass2"	required />
								<div className="invalid-feedback">비밀번호확인을 입력해주세요.</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 mb-3">
								<label for="gender">남자</label> <input type="radio"
									onChange={(e) => {	setGender(1);	}}	checked
									required name="gender" />
							</div>
							<div className="col-md-6 mb-3">
								<label for="gender">여자</label> <input type="radio"
									onChange={(e) => {	setGender(2);}}	name="gender" required />
							</div>
						</div>
						<div className="mb-3">
							<label for="email">이메일</label> <input type="email" name="email"
								className="form-control" id="email" placeholder="you@example.com"
								onChange={(e) => {	setEmail(e.target.value);	}}
								value={email}	required />
							<div className="invalid-feedback">이메일을 입력해주세요.</div>
						</div>
						<div className="mb-3">
							<label for="tel">전화번호</label> <input type="text"
								className="form-control" id="tel" placeholder="전화번호"
								onChange={(e) => {	setTel(e.target.value);	}}	value={tel}
								name="tel"	required />
							<div className="invalid-feedback">전화번호를 입력해주세요.</div>
						</div>
				<button className="btn btn-primary btn-lg btn-block" type="submit">가입완료</button>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Join; 