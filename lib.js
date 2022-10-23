function sum(numbers)
{
    let s = 0;
    for(let i = 0; i < numbers.length; i++){
        s += numbers[i]
    }
    //동일한 기능을 수행하는 코드:
    //numbers.forEach((n) => {s += n;});
    //return numbers.reduce((prev, curr) => prev + curr, 0);
    return s;
}

function avg(numbers)
{
    return sum(numbers) / numbers.length;
}

function max(numbers)
{
    let m = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if(m < numbers[i]){
            m = numbers[i]
        }
    }
    //return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
    return m;
}

function med(numbers)
{
    if(numbers.length === 0) return NaN;
    let center = parseInt(numbers.length / 2);

    if(numbers.length % 2 === 1){
        return numbers[center];
    }
    else{
        return Math.ceil((numbers[center - 1] + numbers[center]) / 2);
    }
}
/*
exports.sum = sum;
exports.avg = avg;
exports.max = max;
*/

module.exports = {
    sum,
    avg,
    max
};