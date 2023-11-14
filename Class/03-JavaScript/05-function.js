// 함수선언식

let auth = () => {
    const token = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
    document.getElementById("target").innerText = token;
    document.getElementById("target").style.color = "#" + token;
};

// 화살표 함수

// function auth() {
//     const token = String(
//         Math.floor(Math.random() * 100000)
//     ).padStart(6, "0");
//     document.getElementById("target").innerText = token;
// }
