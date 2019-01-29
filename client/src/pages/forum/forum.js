import React from 'react';
import axios from 'axios';
import Thread from '../../components/forum/thread';

let address;

if (process.env.NODE_ENV === 'production') {
  address = 'http://codepal-plm.herokuapp.com';
} else {
  address = 'http://localhost:3001';
}

export default class Forum extends React.Component {
  state = {
    threads: []
  };

  componentDidMount() {
    this.loadThreads();
  }
  loadThreads() {
    console.log(`${address}/api/thread/get/all`);
    axios
      .get(`${address}/api/thread/get/all`)
      .then(res => this.setState({ threads: res.data }))
      .catch(err => console.log(err));
  }
  renderThreads = () => {
    return this.state.threads.map(thread => <Thread thread={thread} key={thread._id} link={`${address}/api/thread/get/${thread._id}`} />);
  };
  loadThread = id => { };
  render() {
    return <div>{this.renderThreads()}</div>;
  }
}
