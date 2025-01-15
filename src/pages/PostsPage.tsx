// як можемо винести інформіцію із PostsPage це за допомоги useParams()дає завжди стрінгу
//держати інформацю тут не потрібно все що в const PostsPage перенести в PostsComponent
import {useParams} from "react-router-dom";
import PostsComponent from "../components/posts/postsComponent.tsx";


const PostsPage = () => {
    const {userId} = useParams();


    return (
        <div>
            {userId && <PostsComponent userId={userId}/>}
        </div>
    );
};

export default PostsPage;
// може бути андифайном то пишемо так  {userId && <PostsComponent userId={userId}/>}