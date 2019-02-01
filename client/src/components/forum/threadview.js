import React from 'react';
import Moment from 'react-moment';
import { Card } from 'react-bootstrap';
// import './assets/styles.css'
import NavbarForum from './component/navbar'
import { Button } from 'react-bootstrap';

const ThreadView = props => {
    const { title } = props.info;
    console.log()
    console.log(props.info.title)
    return (
      /*  <div>
            <button onClick={(e) => {e.preventDefault(); props.goBack()}}>GO BACK</button>
            <h1 style={{color:'black', fontSize: 40}}>{title}</h1>
            <div>{props.info.posts.map(post => (
                <div key={post._id}><span style={{fontSize: 20}}>Posted by: {post.user}</span>
                <p>{post.message}</p>
                </div>
            ))}</div>
        </div> */

 <div>

<NavbarForum />


       <Card style={{ width: '50rem', margin: '10rem 2rem -7rem 2rem' }}>

  <Card.Body>
    {/* <Card.Title><a href="false" onClick={(e) => {e.preventDefault(); props.setThread(_id)}}>{title}</a></Card.Title> */}
    <Card.Text>
    <h3>{title}</h3>
     {props.info.posts.map(post => (
                <div key={post._id}><span style={{fontSize: 20}}>Posted by: {post.user}</span>
                <p>{post.message}</p>
                </div>
            ))}
    </Card.Text>
         
  </Card.Body>
  
</Card>
<Button variant="secondary" style={{margin: '8rem 2rem 0rem 2rem' }} onClick={(e) => {e.preventDefault(); props.goBack()}}>GO BACK</Button>
</div>


    )
}

export default ThreadView;