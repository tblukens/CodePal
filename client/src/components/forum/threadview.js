import React from 'react';
import Moment from 'react-moment';

const ThreadView = props => {
    const { title } = props.info;
    console.log()
    console.log(props.info.title)
    return (
        <div>
            <button onClick={(e) => {e.preventDefault(); props.goBack()}}>GO BACK</button>
            <h1 style={{color:'black', fontSize: 40}}>{title}</h1>
            <div>{props.info.posts.map(post => (
                <div key={post._id}><span style={{fontSize: 20}}>Posted by: {post.user}</span>
                <p>{post.message}</p>
                </div>
            ))}</div>
        </div>
    )
}

export default ThreadView;