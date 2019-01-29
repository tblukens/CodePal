import React from 'react';
import Moment from 'react-moment';

const Thread = props => {
    const { title, posts, updatedAt, user, _id } = props.thread;
    return (
        <div>
            <h1 style={{ fontSize: 30 }}><a href={`thread/${_id}`}>{title}</a></h1>
            <h2 style={{ fontSize: 20 }}>{user}</h2>
            <p>Number of posts: {posts.length}</p>
            <p>Last Updated: <Moment format="DD-MM-YY hh:mm a">{updatedAt}</Moment></p>

        </div>
    )
}

export default Thread;