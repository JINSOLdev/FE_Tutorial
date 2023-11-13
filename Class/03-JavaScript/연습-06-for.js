const children = ["철수", "영희", "훈이"];
// undefined
for (let i = 0; i < 4; i++) {
    console.log(children[i] + "입니다");
}
// VM2914:2 철수입니다
// VM2914:2 영희입니다
// VM2914:2 훈이입니다
// VM2914:2 undefined입니다
// undefined
children.length;
// 3

let persons = [
    { name: "철수", age: 17 },
    { name: "영희", age: 22 },
    { name: "도우너", age: 5 },
    { name: "그루트", age: 65 },
    { name: "도비", age: 3 },
];
// undefined
for (let count = 0; count < persons.length; count++) {
    if (persons[count].age >= 19) {
        console.log("성인입니다");
    } else {
        console.log("미성년자입니다.");
    }
}
// VM3226:5 미성년자입니다.
// VM3226:3 성인입니다
// VM3226:5 미성년자입니다.
// VM3226:3 성인입니다
// VM3226:5 미성년자입니다.
// undefined
for (let count = 0; count < persons.length; count++) {
    if (persons[count].age >= 19) {
        console.log(persons[count].name + "님은 성인입니다.");
    } else {
        console.log(persons[count].name + "님은 미성년자입니다.");
    }
}
// VM3496:5 철수님은 미성년자입니다.
// VM3496:3 영희님은 성인입니다.
// VM3496:5 도우너님은 미성년자입니다.
// VM3496:3 그루트님은 성인입니다.
// VM3496:5 도비님은 미성년자입니다.

//연습문제
const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];
// undefined

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].name + "" + fruits[i].title);
}
// VM3764:2 undefined레드향
// VM3764:2 undefined샤인머스켓
// VM3764:2 undefined산청딸기
// VM3764:2 undefined한라봉
// VM3764:2 undefined사과
// VM3764:2 undefined애플망고
// VM3764:2 undefined딸기
// VM3764:2 undefined천혜향
// VM3764:2 undefined과일선물세트
// VM3764:2 undefined귤
// undefined
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number + "" + fruits[i].title);
}
// VM3774:2 1레드향
// VM3774:2 2샤인머스켓
// VM3774:2 3산청딸기
// VM3774:2 4한라봉
// VM3774:2 5사과
// VM3774:2 6애플망고
// VM3774:2 7딸기
// VM3774:2 8천혜향
// VM3774:2 9과일선물세트
// VM3774:2 10귤
// undefined
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number + " " + fruits[i].title);
}
// VM3783:2 1 레드향
// VM3783:2 2 샤인머스켓
// VM3783:2 3 산청딸기
// VM3783:2 4 한라봉
// VM3783:2 5 사과
// VM3783:2 6 애플망고
// VM3783:2 7 딸기
// VM3783:2 8 천혜향
// VM3783:2 9 과일선물세트
// VM3783:2 10 귤
// undefined
for (let i = 0; i < fruits.length; i++) {
    console.log(`과일 차트 ${fruits[i].number}위는 ${fruits[i].title}입니다.`);
}
// VM3881:2 과일 차트 1위는 레드향입니다.
// VM3881:2 과일 차트 2위는 샤인머스켓입니다.
// VM3881:2 과일 차트 3위는 산청딸기입니다.
// VM3881:2 과일 차트 4위는 한라봉입니다.
// VM3881:2 과일 차트 5위는 사과입니다.
// VM3881:2 과일 차트 6위는 애플망고입니다.
// VM3881:2 과일 차트 7위는 딸기입니다.
// VM3881:2 과일 차트 8위는 천혜향입니다.
// VM3881:2 과일 차트 9위는 과일선물세트입니다.
// VM3881:2 과일 차트 10위는 귤입니다.
// undefined

Math.floor(Math.random() * 1000000);
// 913231
String(Math.floor(Math.random() * 1000000));
// '544148'
String(Math.floor(Math.random() * 1000000));
// '483553'
String(Math.floor(Math.random() * 1000000));
// '376103'
String(Math.floor(Math.random() * 1000000));
// '914022'
String(Math.floor(Math.random() * 1000000));
// '158517'
String(Math.floor(Math.random() * 1000000));
// '578693'
String(Math.floor(Math.random() * 1000000));
// '455992'
String(Math.floor(Math.random() * 1000000));
// '936904'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// '851017'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// '657966'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// '094247'
let result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// undefined
result;
// '293649'
