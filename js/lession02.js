// goi ham ra su sung
let result = sumNumber(1,1);
console.log(result);

function sumNumber(a, b = 3){
    return a + b;
    // function: tu khoa
    // sumNumber: ten ham
    // a, b: tham so
    // return : tra ket qua ve cho ham (thoat khoi ham)
    // mac dinh trong js neu ko return ket qua gi ve - luon luon co gia tri undefine tra ve
}



let kiemTraChanLe = function(n){
    return n % 2 === 0;
}

console.log(kiemTraChanLe(10));

let kiemTraChanLe2 = (n, m) => n % 2 === 0;
console.log(kiemTraChanLe2(10, 4));
// viet ham cho biet tu 1 -100 co bao nhieu so nguyen to

let kiemTraSoNT = (n) => {
    if(n <= 1){
        return false;
    }
    let flag = true;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            flag = false;
            break;
        }
    }
    return flag;
}

let demSoNT = (u, v) => {
    let count = 0;
    for(let i = u; i<= v; i++){
        if(kiemTraSoNT(i)){
            count++;
        }
    }
    return count;
}

function demo(...p){
    // ...p : rest param
    console.log(p);
}
demo(1,2,3,'a','b', false, true);

let time = '22h:00';
let string = `Toi nay ${time} co bong da`;
let newStr = string.toUpperCase();
console.log(string, newStr);

let s = "dang hoc js";
let pos = s.lastIndexOf('js');
console.log(pos);