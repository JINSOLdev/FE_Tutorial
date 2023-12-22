let classmates = ["철수", "영희", "훈이"];
// undefined
classmates;
// (3) ['철수', '영희', '훈이']
classmates[0];
// '철수'
classmates[1];
// '영희'
classmates[2];
// '훈이'
classmates.includes("훈이");
// true
classmates.includes("맹구");
// false
classmates.length;
// 3
classmates.push("맹구");
// 4
classmates;
// (4) ['철수', '영희', '훈이', '맹구']
classmates.includes("맹구");
// true
classmates.pop();
// '맹구'
classmates.length;
// 3
classmates;
// (3) ['철수', '영희', '훈이']


// 연습문제

let develop = ['워라밸', '연봉', '신분상승', '커리어점프', '개쩌는개발자의명성']
// (5) ['워라밸', '연봉', '신분상승', '커리어점프', '개쩌는개발자의명성']
let dream = ['커리어점프', '성공', '할수있다']
// undefined
develop.push(dream[])
// VM1247:1 Uncaught SyntaxError: Unexpected token ']'
develop.concat(dream)
// (9) ['워라밸', '연봉', '신분상승', '커리어점프', '개쩌는개발자의명성', Array(3), '커리어점프', '성공', '할수있다']
develop.pop(dream)
// (3) ['커리어점프', '성공', '할수있다']
develop
// (5) ['워라밸', '연봉', '신분상승', '커리어점프', '개쩌는개발자의명성']
develop.concat(dream)
// (8) ['워라밸', '연봉', '신분상승', '커리어점프', '개쩌는개발자의명성', '커리어점프', '성공', '할수있다']
let result = develop.concat(dream)
// undefined
result
// (8) ['워라밸', '연봉', '신분상승', '커리어점프', '개쩌는개발자의명성', '커리어점프', '성공', '할수있다']