// FizzBuzz

// サンプル: "1" という文字列を出力
//console.log("1");

// サンプル: "FizzBuzz" という文字列を出力
// (process.stdout.write で改行なしの出力ができる)
//process.stdout.write("Fizz");
//process.stdout.write("Buzz");
//console.log();

for (let num = 1 ; num <= 15; num ++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0 && num % 5 !== 0) {
        console.log("Fizz");
    }
    else if (num % 3 !== 0 && num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }
}