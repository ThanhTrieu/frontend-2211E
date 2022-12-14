import axios from 'axios';

// ban chat axios no return ve 1 Promise ==> no da la 1 promise

const getDataUserById = (idUser) => {
    const url = `https://fakestoreapi.com/users/${idUser}`; // api cua ben phia backend ma can truy cap de lay data
    // api nay co the truy cap bang method GET (co the truy cap truc tiep tren url browser)
    const response = axios.get(url);
    return response; // return promise
}

const getDataCartByUser = (id) => {
    const url = `https://fakestoreapi.com/carts/user/${id}`;
    const response = axios.get(url);
    return response; // return promise
}

// export object api de su dung o noi khac
export const api = {
    getDataUserById,
    getDataCartByUser
}