let numbers = [1,2,3,4,5,6,7,8,9];
// truy cap vao 1 phan tu trong mang
// cu phap: NameArray[key];
// lay gia tri 7 ra ????
console.log(numbers[6]); // 7
// duyet qua cac phan tu trong mang
// kiem tra so luong phan tu trong mang
console.log(numbers.length);
// 1 - for
const count = numbers.length;
for(let i = 0; i < count; i++){
    //console.log(numbers[i]);
}
// 2 - forEach
numbers.forEach(function(item, index, array){
    // item: gia tri phan tu
    // index: vi tri
    // array: mang ban dau
    //console.log(item);
});

// 3 - for ... of
for(let i of numbers){
    //console.log(i); // gia tri phan tu
}
let res = numbers.filter(item => item % 2 === 0);
console.log(res);