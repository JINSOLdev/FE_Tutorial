// 데이터 타입, 연산자 실습

1 + 1;
// 2
1 + "1";
// '11'
1 + "만원";
// '1만원'
1 - "1";
// 0
"코드" + "캠프";
// '코드캠프'
"123" == 123;
// true
"123" === 123;
// false
true && true;
// true
true && false;
// false
false || true;
// true
!true;
// false
!false;

// 조건문 실습 1
if (1 + 1 === 2) {
    console.log("정답입니다");
} else {
    console.log("nope");
}
// VM2117:2 정답입니다
undefined;
if (true) {
    console.log("정답입니다");
} else {
    console.log("nope");
}
// VM2130:2 정답입니다
undefined;
if (!true) {
    console.log("정답입니다");
} else {
    console.log("nope");
}
// VM2135:4 nope

// 조건문 실습 2
const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교",
};
// undefined

if (profile.age >= 20) {
    console.log("성인입니다.");
} else if (8 <= profile.age <= 19) {
    console.log("학생입니다");
} else {
    console.log("어린이입니다.");
}

// VM2554:4 학생입니다
if (profile.age >= 20) {
    console.log("성인입니다.");
} else if (profile.age >= 8) {
    console.log("학생입니다");
} else if (profile.age > 0) {
    console.log("어린이입니다.");
} else {
    console.log("잘못입력하셨습니다.");
}

// VM2643:4 학생입니다
