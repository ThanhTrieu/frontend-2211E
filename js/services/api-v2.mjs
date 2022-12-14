import axios from "axios";

export const getDataPostsById = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}

export const getAllCommentByPostId = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    const response = await axios.get(url,{ 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    });
    const result = response.status === 200 ? response.data : [];
    return result;
}