import React from 'react';
import axios from 'axios';
import Post from '../../components/forum/thread';

let address;

if (process.env.NODE_ENV === 'production') {
    address = 'http://codepal-plm.herokuapp.com';
} else {
    address = 'http://localhost:3001';
}

export default class ThreadView extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        console.log("WTF")
        this.loadThreads();
    }
    loadThreads() {
        console.log(`${address}/api/thread/get/${this.props.match.params.id}`);
        axios
            .get(`${address}/api/thread/get/all`)
            .then(res => this.setState({ threads: res.data }))
            .catch(err => console.log(err));
    }
    renderThreads = () => {
        return this.state.threads.map(thread => <Post thread={thread} key={thread._id} link={`${address}/api/thread/get/${thread._id}`} />);
    };
    loadThread = id => { };
    render() {
        return <div>{this.renderThreads()}</div>;
    }
}
