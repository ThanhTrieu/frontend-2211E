import { getDataPostsById, getAllCommentByPostId } from './services/api-v2.mjs';

const getData = async () => {
    const data = await getDataPostsById(1);
    const allComments = await getAllCommentByPostId(data.id);
    //console.log(data);
    console.log(allComments);
}
getData();