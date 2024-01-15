import { useState } from 'react';

export default function CertificateNumPage() {
    const [number, setNumber] = useState('000000');

    // 1. 인증번호 생성
    function getToken() {
        const randomNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
        console.log(randomNumber);

        setNumber(randomNumber);
    }

    return (
        <div>
            <div>인증번호: {number}</div>
            <button onClick={getToken}>인증번호 전송</button>
        </div>
    );
}
