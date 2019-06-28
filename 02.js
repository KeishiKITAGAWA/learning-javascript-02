// フィボナッチ数列
// 課題1 ->

let num

function fib(num) {
    if (num == 1) {
        return 1
    } else if (num == 2) {
        return 1
    } else {
        return fib(num-1) + fib(num-2)    // numが3以上ならここから
    }
}

for (let l = 1; l <= 12; l ++) {
    console.log(fib(l));
}

// 課題2 ->

let int

function fib_2(int) {
    let fi = 0,                         // 舞台装置
        se = 1;                         // 初項
    for (let i = 1; i <=int; i++) {
        se = se + fi                    
        fi = se - fi  
    }
    return fi
}

for (let m = 1; m <= 12; m++) {
    console.log(fib_2(m));
}  