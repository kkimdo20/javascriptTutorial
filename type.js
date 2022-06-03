// number

let n = 123;
n = 12.345;

Infinity // 특수 숫자값
-Infinity // 특수 숫자값
NaN // 특수 숫자값


// BigInt

const bigInt = 1231232984903284902834902n // 길이에 상관없이 정수를 나타냄. IE에선 지원 X

// string

let str = "Hello";
let str2 = 'single quotes are ok too';
let phrase = `can embed another ${str}`;

// 백틱은 ${변수}의 형태로 문자열 중간에 삽입가능

console.log(phrase);

// Bolean

let a = true; // checked
let b = false; // not checked

// 비교결과를 사용할 때 사용하는 자료형

// null

let age = null // 어느 자료형에도 속하지 않는 값.

// 자바스크립트의 null은 다른 언어의 null과 성격이 다르다. 자바스크립트의 null은 존재하지 않는 값 알수 없는 값, 비어있는 값 등을 나타낸다.

// undefined

let q;

console.log(q); // undefined 출력 undefined는 변수에 값이 할당되지 않은 것을 뜻한다.

// object와 symbol

// object는 특수한 자료형이다 원시 자료형이 아닌 복잡한 개체를 표현할 때 사용합니다.

// symbol은 고유한 식별자를 만들 때 사용됩니다.

// typeof

typeof X; // 두가지 문법 지원
typeof(y); // 인수의 자료형을 나타내는 문자열을 반환.
