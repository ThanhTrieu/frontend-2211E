
const person = {
    firstname: "Teo",
    age: 20,
    phone: '323232342',
    sleep: function(){
        return "23h";
    }
};
// truy cap vao thuoc tinh hay phuong thuc trong object
// nameObject.key
// nameObject[key]
console.log(person.age, person['age']);
console.log(person.sleep());
const car = {}; // object rong
// 1- bo sung thuoc tinh - phuong thuc vao object
car.name = 'BMW';
car.drive = function(){
    return 'abc';
}
//console.log(car);
const student = {name: 'teo', age :20};
// destructing
const {name, phone} = student;
console.log(name, phone);
const [a,b] = ['a', 'b'];
console.log(a,b);
// 
const x = {a: 10, b: 20, c: 30}
const y = {a: 20, f: 10, ...x}
console.log(y);
//
const prod = [
    {id: 1, name: 'iphone', money: 200},
    {id: 2, name: 'samsung', money: 300},
    {id: 3, name: 'nokia', money: 30},
    {id: 4, name: 'Bphone', money: 100},
];
const res = prod.filter(item => item.money > 100);
const kq = [];
for(let i = 0; i < prod.length; i++){
    if(prod[i].money > 100){
        kq.push(prod[i])  
    }
}
const cat = {name: 'Tome', color: 'white'};
delete cat.color;
//console.log(cat);
if('color' in cat){
    console.log('oke');
} else {
    console.log('No');
}
if(cat.hasOwnProperty('color')){
    console.log('Y');
} else {
    console.log('N');
}
const dogs = {name: 'abc', age: 2}
for(let i in dogs){
    console.log(i, dogs[i]);
}
console.log(res);
let dataTB = res.map((item, index) => (`
    <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.money}</td>
    </tr>
`));
console.log(dataTB);