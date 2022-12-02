//console.log('Hello word');
/*
comment tren nhieu dong
*/
// 1 khai bao Bien
// dung tu khoa var hoac let de khai bao

let myName = 'Teo';
// let : tu khoa khai bao bien
// myNam: ten bien
// 'Teo': gia tri cua bien
let myAge = 20;
let address;
// kiem tra kieu du lieu cua bien ???
console.log(typeof(myAge), typeof myName);
// phan biet tu khoa var va tu khoa let

let number = 10;
if(true){
    let number = 20;
    console.log(number); // ??? 20
    if(true){
        let number = 30;
        console.log(number); // 30
    }
    console.log(number);  20
}
console.log(number); // 30
let b = 30;
b = 'trtrtr';

var age = 10;
var age = 20;
console.log(age);

// khai bai hang so :
// gia tri cua hang so ko dc phep thay doi tu luc dc tao ra cho den khi chuong trinh ket thuc
const PI = 3.14;
//PI = 3.15; // sai
//console.log(PI);

for(let i = 1; i <= 10; ++i){
    console.log(i);
}

let u = 10;
let v = 9;
let t = (++u) + (v++) - (--v) + (u--) + (v++) - (u++);
//  t =   11  +   9   -  9    +   11  +   9   -   10; 

let k = 1;
while( k <= 10){
    console.log(k);
    k++;
}
function kiemTraSNT(n) {
    for(i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0 ){
            return false;
        }
    }
    return true;
}

let x = 1;
do {
    if( x > 1){
        // kiem tra snt

    }
    x++
} while(x <= 10);