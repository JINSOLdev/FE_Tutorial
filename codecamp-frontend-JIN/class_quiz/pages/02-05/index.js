import { useState } from 'react';
import {
    Container,
    Wrapper,
    LogoWrapper,
    LogoImg,
    LogoTitle,
    InputWrapper,
    EmailInputWrapper,
    EmailInput,
    EmailError,
    PasswordInputWrapper,
    PasswordInput,
    PasswordError,
    LoginButton,
    LoginButtonTitle,
    EtcButton,
    EtcItem,
    SocialLoginButton,
    SocialLoginButtonImg,
    SocialLoginButtonTitle,
} from '../../styles/ItsRoadPage.js';

export default function ItsRoadPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // 이메일 검증
    function onChangeEmail(event) {
        setEmail(event.target.value);
        if (!email.includes('@')) {
            setEmailError('이메일 주소를 다시 확인해주세요❗');
        } else {
            setEmailError('');
        }
    }

    // 비밀번호 검증
    function onChangePassword(event) {
        setPassword(event.target.value);
        if (password.length >= 8 && password.length <= 16) {
            setPasswordError('');
        } else {
            setPasswordError('8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다❗');
        }
    }

    // 로그인
    function onClickLogin() {
        if (emailError === '' && passwordError === '') {
            alert('환영합니다🎉');
        }
    }

    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <LogoImg src="/img/favicon.ico"></LogoImg>
                    <LogoTitle>잇츠로드</LogoTitle>
                </LogoWrapper>
                <InputWrapper>
                    <EmailInputWrapper>
                        <EmailInput type="text" placeholder="이메일을 입력해주세요." onChange={onChangeEmail} />
                        {/* <div>이메일 주소를 다시 확인해주세요.</div> */}
                        <EmailError>{emailError}</EmailError>
                    </EmailInputWrapper>
                    <PasswordInputWrapper>
                        <PasswordInput type="password" placeholder="비밀번호를 입력해주세요" onChange={onChangePassword} />
                        {/* <div>8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.</div> */}
                        <PasswordError>{passwordError}</PasswordError>
                    </PasswordInputWrapper>
                </InputWrapper>
                <LoginButton onClick={onClickLogin}>
                    <LoginButtonTitle>로그인</LoginButtonTitle>
                </LoginButton>
                <EtcButton>
                    <EtcItem>이메일 찾기</EtcItem>
                    <EtcItem>|</EtcItem>
                    <EtcItem>비밀번호 찾기</EtcItem>
                    <EtcItem>|</EtcItem>
                    <EtcItem>회원가입</EtcItem>
                </EtcButton>
                <SocialLoginButton>
                    <SocialLoginButtonImg src="/public/kakao.png"></SocialLoginButtonImg>
                    <SocialLoginButtonTitle>카카오톡으로 로그인</SocialLoginButtonTitle>
                </SocialLoginButton>
            </Wrapper>
        </Container>
    );
}
