import { useState } from 'react';

export default function StatePage() {
    const [button, setButton] = useState('안녕하세요😀');
    function onClickHello() {
        // document.getElementById('button').innerText = '반갑습니다.';
        setButton('반갑습니다👋');
    }
    return (
        <div>
            <button id="button" onClick={onClickHello}>
                {button}
            </button>
        </div>
    );
}
