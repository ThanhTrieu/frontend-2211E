function* demo(){
    // generator function
    // chi su dung duoi hinh thuc la declare function
    let id = 0;
    while(true){
        yield id++;
    }
}
const genId = demo();
console.log(genId); // object Generator
// console.log(genId.next());
// console.log(genId.next());
// console.log(genId.next());

function* test(){
    let id = 0;
    for(let i = 0; i< 3; i++){
        id++;
        yield i; // dung chuong trinh
    }
    return id;
}

const testId = test();
console.log(testId.next().value);
console.log(testId.next().value);
console.log(testId.next().value);
console.log(testId.next().value);
console.log(testId.next().value);