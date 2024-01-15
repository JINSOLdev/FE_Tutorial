import { useState } from 'react';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

    function onChangeEmail(event) {
        setEmail(event.target.value);
        setEmailError('');
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
        setPasswordError('');
    }

    function onChangePasswordConfirm(event) {
        setPasswordConfirm(event.target.value);
        setPasswordConfirmError('');
    }

    function onClickSignup() {
        // 조건 검증
        if (email.includes('@') === false) {
            setEmailError('이메일을 확인해주세요❗');
            // setEmailError('');
            return;
        }

        if (password !== passwordConfirm) {
            setPasswordError('비밀번호가 다릅니다❗ ');
            // setPasswordError('');
            // setPasswordConfirmError('비밀번호가 다릅니다❗ 2');
            // setPasswordConfirmError('');
            return;
        }

        // 에러가 없다면 회원가입 축하메시지 출력
        if (!emailError && !passwordError && !passwordConfirmError) {
            alert('회원가입을 축하합니다🎉');
        }
    }

    return (
        <div>
            <div>
                이메일 <input type="text" value={email} onChange={onChangeEmail} />
                <div style={{ color: 'red' }}>{emailError}</div>
                비밀번호 입력 <input type="password" values={password} onChange={onChangePassword} />
                비밀번호 확인 <input type="password" values={passwordConfirm} onChange={onChangePasswordConfirm} />
                <div style={{ color: 'red' }}>{passwordError}</div>
                <div style={{ color: 'red' }}>{passwordConfirmError}</div>
                <button onClick={onClickSignup}>회원가입</button>
            </div>
        </div>
    );
}
