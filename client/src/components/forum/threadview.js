import React from 'react';
// import Moment from 'react-moment';
import { Card } from 'react-bootstrap';
// import './assets/styles.css'
import NavbarForum from './component/navbar'
import { Button } from 'react-bootstrap';
import { TextArea, FormBtn } from '../../pages/forum/Form'
import ForumAPI from '../../utility/ForumAPI'
// import { Redirect } from 'react-router'


export default class ThreadView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: null,
            user: null
        }
    }
    componentWillMount() {
        console.log(this.props)
        this.setState({user: this.props.userInfo})
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.message && this.state.user) {
            ForumAPI.createPost({
                user: this.state.user,
                message: this.state.message,
                _id: this.props.info._id
            })
                .then(res => this.props.goBack())
                // .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }
    };
    render() {
        console.log(this.props)
        // console.log(this.props.info.title)
        return (
            /*  <div>
            <button onClick={(e) => {e.preventDefault(); this.props.goBack()}}>GO BACK</button>
            <h1 style={{color:'black', fontSize: 40}}>{title}</h1>
            <div>{this.props.info.posts.map(post => (
                <div key={post._id}><span style={{fontSize: 20}}>Posted by: {post.user}</span>
                <p>{post.message}</p>
                </div>
                ))}</div>
                </div> */

            <div>

                <NavbarForum />


                <Card style={{ width: '70%', margin: '15% 2% 0rem 2%' }}>

                    <Card.Body>
                        {/* <Card.Title><a href="false" onClick={(e) => {e.preventDefault(); this.props.setThread(_id)}}>{title}</a></Card.Title> */}
                        <Card.Text>
                            <h3>{this.props.info.title}</h3>
                            {this.props.info.posts.map(post => (
                                <div key={post._id}><span style={{ fontSize: 20 }}>Posted by: {post.user}</span>
                                    <p>{post.message}</p>
                                </div>
                            ))}
                        </Card.Text>

                    </Card.Body>

                </Card>

                <TextArea style={{ margin: '2% 2% 0rem 2%', width: '70%', height: '50vh' }}
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    name="message"
                    placeholder="Enter a message to post." />
                <FormBtn style={{ float: 'right' }}
                    disabled={
                        !(this.state.user && this.state.message)
                    }
                    onClick={this.handleFormSubmit}>Post Message</FormBtn>


                <Button variant="secondary" style={{margin: '-1% 2% 1% 2%' }} onClick={(e) => { e.preventDefault(); this.props.goBack() }}>GO BACK</Button>
            
            </div>


        )
    }
}

// export default ThreadView;