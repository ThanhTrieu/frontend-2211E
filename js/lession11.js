class A {
    // dinh nghia class
    // thuoc tinh va phuong thuc
    // thuoc tinh(bien): mieu ta dac diem tinh chat cua doi tuong thuoc vao class
    // phuong thuc(ham): hanh dong cua doi tuong thuoc vao class

    // 1 - khai bao thuoc tinh
    // khong dung tu khoa khai bao bien hay hang so (var, let, const)
    name = 'teo'; 
    // thuoc tinh - pham vi hoat dong la public(su dung duoc trong va ngoai class)
    age = 20;
    email = 'teo@gmail.com';

    // 2 - khai bao phuong thuc
    // coi no nhu la 1 function
    getName(){
        return this.name;
    }
    getAge = () => {
        // this : class dang thao tac (A) (chinh la doi tuong cua class)
        return this.age
    }
    static getEmail(){
        //console.log(this);
        return (new A).email;
    }
}
// khoi tao doi tuong thuoc vao class
const a = new A; // tao 1 object
// truy cap vao thuoc trong class
//console.log(a.name, a.age, a.email);
// truy cap vao phuong thuc trong class
//console.log(a.getName(), a.getAge());
// truy cap vao method getEmail
// vi phuong thuc dang la static nen ko dung doi tuong cua class de truy cap vao, dung truc tiep class truy cap
//console.log(A.getEmail());

class GiaiPTBH {
    // a = 0;
    // b = 0;
    // c = 0;
    constructor(a, b, c){
        // ham khoi tao
        // ham nay se tu dong chay dau tien khi khoi tao doi tuong cho class
        // trong ham nay chung  ta co the dinh nghia thuoc tinh
        this.hsa = a;
        this.hsb = b;
        this.hsc = c;
        // hsa, hsb, hsc : la thuoc tinh(property);
        // a, b, c tham so truyen vao
    }

    delta = () => {
        return (this.hsb*this.hsb) - (4*this.hsa*this.hsc);
    }
    result = () => {
        const resDelta = this.delta();
        if(resDelta < 0){
            return false;
        } else if(resDelta === 0){
            return (-this.hsb)/(2*this.hsa);
        } else {
            const x1 = ((-this.hsb) + Math.sqrt(resDelta))/(2*this.hsa);
            const x2 = ((-this.hsb) - Math.sqrt(resDelta))/(2*this.hsa);
            return [x1, x2];
        }
    }
}
const pt = new GiaiPTBH(1,2,-3); // tham so ma constructor nhan dc trong class
//console.log(pt.result());

class Person  {
    name = 'Teo';
    age = 20;

    constructor(){
        console.log('constructor of class Person');
    }

    getName(){
        return this.name
    }

    static getAge(){
        return (new Person).age;
    }
}

class Student extends Person {

    constructor(){
        super(); // chay constructor class Person
        console.log('constructor of class Student');  
    }
    // ke thua
    getName(){
        // override
        return 'Ty';
    }

    getMyName(){
        //return this.getName(); // Student ??? muon goi phuong thuc cua class Person
        return super.getName();
    }
}
const student = new Student;
//console.log(student.name, student.getName(), Student.getAge());
console.log(student.getMyName());