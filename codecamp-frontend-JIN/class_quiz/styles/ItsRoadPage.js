import styled from '@emotion/styled';

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
    background-image: url('/public/pizza.png');
    background-color: ivory;
    background-blend-mode: multiply;
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 220px;
    padding-bottom: 160px;
`;

export const LogoImg = styled.img`
    width: 100px;
    height: 100px;
`;

export const LogoTitle = styled.div`
    font-size: 60px;
    font-weight: bold;
    color: gray;
    padding-top: 30px;
`;

export const InputWrapper = styled.div`
    width: 540px;
`;
export const EmailInputWrapper = styled.div`
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
    margin-bottom: 10px;
`;
export const EmailInput = styled.input`
    width: 80%;
    font-size: 24px;
    color: gray;
    border: none;
    background: none;
    outline: none;
`;
export const PasswordInputWrapper = styled.div`
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
    margin-bottom: 10px;
`;
export const PasswordInput = styled.input`
    width: 80%;
    margin-top: 40px;
    font-size: 24px;
    color: gray;
    border: none;
    background: none;
    outline: none;
`;
export const EmailError = styled.div`
    padding-top: 10px;
    font-size: 18pxl
    color: #ff1b6d;
`;
export const PasswordError = styled.div`
    padding-top: 10px;
    font-size: 18pxl
    color: #ff1b6d; 
`;
export const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 76px;
    border-radius: 38px;
    padding: 25px 0;
    background-color: rgba(255, 27, 109, 0.6);
    margin: 20px 0 45px 0;
    cursor: pointer;
`;
export const LoginButtonTitle = styled.div`
    opacity: 1;
    font-size: 26px;
    font-weight: bold;
    color: #fff;
`;
export const EtcButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border: none;
    background: none;
`;
export const EtcItem = styled.div`
    font-size: 20px;
    color: gray;
    cursor: pointer;
`;
export const SocialLoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 76px;
    border-radius: 38px;
    padding: 25px 0;
    background: none;
    color: #fae100;
    border: 2px solid #fea100;
    margin: 60px 0 80px 0;
    cursor: pointer;
`;
export const SocialLoginButtonImg = styled.img`
    width: 32px;
    height: 30px;
    margin-right: 20px;
`;
export const SocialLoginButtonTitle = styled.div`
    opacity: 1;
    font-size: 26px;
    font-weight: bold;
`;
