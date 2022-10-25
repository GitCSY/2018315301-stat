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
    numbers.sort(function(a, b) {
        return a - b;
    });
    if(numbers.length === 0) return NaN;
    let center = parseInt(numbers.length / 2);

    if(numbers.length % 2 === 1){
        return numbers[center];
    }
    else{
        return Math.ceil((numbers[center - 1] + numbers[center]) / 2);
    }
}

function iqr(numbers)
{
    numbers.sort(function(a, b) {
        return a - b;
    });
    let center = parseInt(numbers.length / 2);
    let left, right;

    if(numbers.length % 2 === 1){
        left = numbers.slice(0, center);
        right = numbers.slice(center, numbers.length);
        let q1 = med(left);
        let q3 = med(right);
        return Math.abs(q3 - q1);
    }
    else{
        left = numbers.slice(0, center);
        right = numbers.slice(center, numbers.length);
        let q1 = med(left);
        let q3 = med(right);
        return Math.abs(q3 - q1); 
    }
}

function outlier(numbers)
{
    var original = [];

    for(let i = 0; i < numbers.length; i++){
        original.push(numbers[i]);
    }

    var outlier = [];
    var result = [];

    let q1 = 0, q3 = 0;
    numbers.sort(function(a, b) {
        return a - b;
    });

    let center = parseInt(numbers.length / 2);
    let left, right;

    if(numbers.length % 2 === 1){
        left = numbers.slice(0, center);

        right = numbers.slice(center + 1, numbers.length);

        q1 = med(left);

        q3 = med(right);

        let IQR = Math.abs(q3 - q1);
        let RangeLess = q1 - 1.5 * IQR;
        let RangeGreater = q3 + 1.5 *  IQR;

        for (let i = 0; i < numbers.length; i++){
            if(numbers[i] < RangeLess || numbers[i] > RangeGreater){
                outlier.push(numbers[i]); // [100, 101]
            }
        }

        for(let i = 0; i < original.length; i++){
            for(let j = 0; j < outlier.length; j++){
                if(original[i] === outlier[j]){
                    result.push(original[i]);
                }
            }
        }  
    }
    else{
        left = numbers.slice(0, center + 1);
        right = numbers.slice(center, numbers.length);
        q1 = med(left);
        
        q3 = med(right);
        
        let IQR = Math.abs(q3 - q1);
        let RangeLess = q1 - 1.5 * IQR;
        let RangeGreater = q3 + 1.5 *  IQR;
        
        for (let i = 0; i < numbers.length; i++){
            if(numbers[i] < RangeLess || numbers[i] > RangeGreater){
                outlier.push(numbers[i]); // [100, 101]
            }
        } 


        for(let i = 0; i < original.length; i++){
            for(let j =0; j < outlier.length; j++){
                if(original[i] === outlier[j]){
                    result.push(original[i]);
                }
            }
        }
    }
    
    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
    }
}

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier
};

/*
exports.sum = sum;
exports.avg = avg;
exports.max = max;
*/
