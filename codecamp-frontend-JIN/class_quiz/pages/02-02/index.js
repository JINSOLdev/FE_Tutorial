import { useState } from 'react';

export default function CountPage() {
    const [countUp, setCountUp] = useState(0);

    function onClickCountUp() {
        // const result = Number(document.getElementById('count').innerText) + 1;
        // document.getElementById('count').innerText = result;
        setCountUp(countUp + 1);
    }

    return (
        <div>
            <div id="count">{countUp}</div>
            <button onClick={onClickCountUp}>카운트증가</button>
        </div>
    );
}
