let value = true;

alert(typeof value);

value = String(value);

alert(typeof value);

alert("6"/ "2"); // 자동으로 숫자형으로 변환된 후 연산 수행 됨

let str = "123";

alert(typeof str);

let num = Number(str);

alert(typeof num);

// undefined를 형변환하면 NaN
// null은 0
// true and false는 1과 0
// string 문자열의 처음과 끝 공백을 제거 공백 제거 후에 문자열이 없으면 0 있으면 문자열에서 숫자 읽음
// 변환 실패시 NaN 반환

// 문자열 "0"은 true!
