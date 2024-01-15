import { useState } from 'react';

export default function SignupStatePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');

    function onChangeEmail(event) {
        console.log(event); // 나의 행동
        console.log(event.target); // 작동된 태그
        console.log(event.target.value); // 작동된 태그에 입력된 값

        setEmail(event.target.value); // 입력할 때마다 매번 입력된 값이 저장된다.
    }

    function onChangePassword(event) {}

    function onClickSignup(event) {
        console.log(email); // 포장이 잘 됐는지 확인해보기_1
        console.log(password); // 포장이 잘 됐는지 확인해보기_2

        // 1. 검증하기
        if (email.includes('@') === false) {
            // alert('이메일이 올바르지 않습니다. @가 없음');
            // document.getElementById('myerror').innerText = '이메일이 올바르지 않습니다. @가 없음'; => 옛날방식
            setEmailError('이메일이 올바르지 않습니다. @가 없음');
        } else {
            // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. 즉, API)
            //    => 나중에

            // 3. 성공 알람 보여주기
            alert('회원가입을 축하합니다🎉');
        }
    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} />
            {/* <div id="myerror"></div> 옛날방식*/}
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    );
}
