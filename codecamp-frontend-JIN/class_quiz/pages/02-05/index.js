import { useState } from 'react';
import {
    Container,
    Wrapper,
    TitleImg,
    Title,
    WriterWrapper,
    Email,
    Password,
    LoginWrapper,
    LoginButton,
    OptionalWrapper,
    EmailButton,
    PasswordButton,
    RegisterButton,
    SocialLoginWrapper,
    KakaoTalkButton,
} from '../../styles/ItsRoadPage.js';

export default function ItsRoadPage() {
    return (
        <Container>
            <Wrapper>
                <TitleImg src='img/pizza.png'></TitleImg>
                <Title>잇츠로드</Title>
                <WriterWrapper>
                    <Email type="text" placeholder="이메일을 입력해주세요." />
                    {/* <div>이메일 주소를 다시 확인해주세요.</div> */}
                    <Password type="password" placeholder="비밀번호를 입력해주세요" />
                    {/* <div>8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.</div> */}
                </WriterWrapper>
                <LoginWrapper>
                    <LoginButton>로그인</LoginButton>
                </LoginWrapper>
                <OptionalWrapper>
                    <EmailButton>이메일 찾기</EmailButton>
                    <PasswordButton>비밀번호 찾기</PasswordButton>
                    <RegisterButton>회원가입</RegisterButton>
                </OptionalWrapper>
                <SocialLoginWrapper>
                    <KakaoTalkButton>카카오톡으로 로그인</KakaoTalkButton>
                </SocialLoginWrapper>
            </Wrapper>
        </Container>
    );
}
