function tinhDTHT(a, b, h){
    function tongHaiDay(){
        return a + b;
    }
    function tongHaiDayVoiChieuCao(){
        return tongHaiDay()*h;
    }
    function phepChia(){
        return tongHaiDayVoiChieuCao()/2;
    }
    return phepChia;
}
//nest function and closure function js
let kq = tinhDTHT(10,20,5)();
//console.log(kq);
const a = [1,2,3];
const b = [...a,5,6,7,8]; //spread operator
console.log(b, a);
const fruits = ['cam','quyt','mit'];
fruits[3] = 'Tao';
console.log(fruits);

function test(){
    return ['meo', 'cho', 'chuoi'];
}
const t = test();
//console.log(test()[0]);
function tinhTongNamNhuan(...year){
    function kiemTraNamNhuan(n){
        if(n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0)){
            return true;
        }
        return false;
    }
    function tinhTong(){
        const count = year.length;
        let sum = 0;
        for(let i=0; i< count; i++){
            if(kiemTraNamNhuan(year[i])){
                sum += year[i];
            }
        }
        return sum;
    }
    return tinhTong();
}
tinhTongNamNhuan(1,2,3,4,5,6);