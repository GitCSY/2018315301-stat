#!/usr/bin/env node
const lib = require("./lib");

//console.log(process.argv); 
// 입력: node main.js sum 1 2 3 
//argv[0]: 노드 경로 argv[1]: main.js 경로 argv[2]: sum argv[3~length]: 1 2 3 

if(process.argv.length <= 3)
{
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length) //argv 배열에서 3번째부터 끝에 있는 요소 값까지 배열을 자른다.
    .map((n) => parseFloat(n)); //map이라는 메서드를 통해서 ['3', '4', '5'] => [3, 4, 5] 문자열이었던 요소값을 float타입으로 변환해서 저장시킨다.

if(numbers.some((n) => isNaN(n))) // 배열 안에 있는 몇몇 값이 not a number(isNaN = 1)이면 body에 있는 코드를 실행.
{
    console.log("Some arguments are not numbers!");
    process.exit(1); //에러 반환
}

let result;
switch(command)
{
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1); //exit(0) = ended with no errors,  exit(1) = error
}

console.log(result);