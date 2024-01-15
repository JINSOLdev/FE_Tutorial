export default function CounterLetDocumentPage() {
    function onClickCountUp() {
        const count = Number(document.getElementById('num').innerText) + 1;
        document.getElementById('num').innerText = count;
    }

    function onClickCountDown() {
        const count = Number(document.getElementById('num').innerText) - 1;
        document.getElementById('num').innerText = count;
    }

    return (
        <div>
            <div id="num">0</div>
            <button onClick={onClickCountUp}>카운트 올리기!</button>
            <button onClick={onClickCountDown}>카운트 내리기!</button>
        </div>
    );
}
