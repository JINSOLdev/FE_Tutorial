import styled from '@emotion/styled';
import { useState } from 'react';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
`;
export const Wrapper = styled.div`
    width: 640px;
    padding: 0 50px 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/img/pizza.png')
    background-color: rgba(0, 0, 0, 0.55);
    border: 1px solid gray;
`;

export const TitleImg = styled.div`
    width: 100px;
    height: 100px;
`;

export const Title = styled.div`
    font-size: 60px;
    font-weight: bold;
    color: black;
    padding-top: 30px;
`;

export const WriterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 250px;
`;

export const Email = styled.input`
    width: 540px;
    margin-top: 365px;
    border: 1px solid #7d7d7d;
`;

export const Password = styled.input`
    width: 540px;
    margin-top: 50px;
    left: -255px;
    border: 1px solid #7d7d7d;
`;

export const LoginWrapper = styled.div`
    margin-top: 50px;
`;

export const LoginButton = styled.button`
    width: 540px;
    height: 76px;
    border-radius: 38px;
    border: 1px solid #ff1b6d;
`;

export const OptionalWrapper = styled.div`
    margin-top: 50px;
    justify-content: space-between;
`;

export const EmailButton = styled.button`
    font: Noto sans KR;
    weight: 700;
    size: 20px;
    line height: 28.96px;
    color: #ffffff;
`;

export const PasswordButton = styled.button`
    font: Noto sans KR;
    weight: 700;
    size: 20px;
    line height: 28.96px;
    color: #ffffff;`;

export const RegisterButton = styled.button`
    font: Noto sans KR;
    weight: 700;
    size: 20px;
    line height: 28.96px;
    color: #ffffff;`;

export const SocialLoginWrapper = styled.div`
    margin-top: 30px;
`;

export const KakaoTalkButton = styled.button`
    width: 540px;
    height: 76px;
    border: 2px solid #fae100;
    border-radius: 38px;
    opacity: 60%;
`;
