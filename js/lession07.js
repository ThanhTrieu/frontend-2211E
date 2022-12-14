/*
console.log('A');
setTimeout(function(){
    console.log('B');
}, 1000);
console.log('C');
*/
// 1 ham de lay all users (A)
// 1 ham de lay chi tiet thong tin user (B)
// Doi tien trinh (A) chay xong ti moi den (B)

function getAllUsers(){
    return new Promise((resolve, reject) => {
        const success = true;
        // xu ly cac logic o day
        // thong thuong la cac tac vu bat dong bo
        setTimeout(function(){
            if(!success) {
                resolve([
                    {id:1, user: 'Teo'},
                    {id: 2, user: 'Ty'}
                ]);
            } else {
                reject({cod: 500, mess: 'Co loi xay ra'})
            }
            
        },1000);
    })
}
const users = getAllUsers();
//console.log(users);
users.then(data => {
    console.log(data);
    //biet dc khi nao tac vu bat dong da xong
    // tien hanh xu ly cac tac vu khac tiep theo o day
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log('Da hoan tat chuong trinh');
})
