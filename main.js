#!/usr/bin/env node
const lib = require("./lib");
//console.log(process.argv);
if(process.argv.length <= 3)
{
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length) //argv 배열에서 3번째부터 끝에 있는 요소 값까지 잘라서 새로운 배열을 만든다.
    .map((n) => parseFloat(n)); //map이라는 메서드를 통해서 ['3', '4', '5'] => [3, 4, 5] 문자열이었던 요소값을 float타입으로 변환해서 저장시킨다.

if(numbers.some((n) => isNaN(n)))
{
    console.log("Some arguments are not numbers!");
    process.exit(1);
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
        process.exit(1); //exit(0) = no errors,  exit(1) = error
}

console.log(result);