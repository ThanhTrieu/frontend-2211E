import { api } from './services/api.mjs';

const result = api.getDataUserById(1);
/*
result.then(user => {
    const u = user.data;
    //console.log(u);
    api.getDataCartByUser(u.id).then(cart => {
        console.log(cart.data);
        // goi tiep api nua o day
    })
})*/
// tranh roi vao promise hell dung ky thuat chaning
result.then(users => {
    return api.getDataCartByUser(users.data.id);
}).then(cart => {
    console.log(cart.data);
}).catch(err => {
    console.log(err);
})