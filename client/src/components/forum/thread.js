import React from 'react';
import Moment from 'react-moment';
import { Card } from 'react-bootstrap';
// import './assets/styles.css'
import NavbarForum from './component/navbar'
// import { Button } from 'react-bootstrap';


const Thread = props => {
 

 
    const { title, posts, updatedAt, user, _id } = props.thread;
     
    return (
   
   <div>

<NavbarForum />


       <Card style={{width: '70%', margin: '3% 2% 5% 2%' }}>
 
  <Card.Body>
    <Card.Title><a href="false" onClick={(e) => {e.preventDefault(); props.setThread(_id)}}><h3>{title}</h3></a></Card.Title>
    <Card.Text>
      Created by: {user}
    </Card.Text>
       <Card.Text>
      Number of posts: {posts.length}
    </Card.Text>
       <Card.Text>
      Last Updated: <Moment format="DD-MM-YY hh:mm a">{updatedAt}</Moment>
    </Card.Text>
    
  </Card.Body>
</Card>
 

</div>

    )
}

export default Thread;