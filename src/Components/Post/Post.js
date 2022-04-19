import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post;
    const navigate = useNavigate();
    const showComments = id =>{
        const url = `post/${id}`;
        navigate(url);

    }

    return (
        <div>
            <h3><strong>id {id}: </strong>{title}</h3>
            <p>{body}</p>

            <button onClick={()=> showComments(id)}>Comments</button>
        </div>
    );
};

export default Post;