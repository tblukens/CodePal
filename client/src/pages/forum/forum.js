import React from 'react';
import axios from 'axios';
import Thread from '../../components/forum/thread';
import ThreadView from '../../components/forum/threadview';

let address;

if (process.env.NODE_ENV === 'production') {
  address = 'http://codepal-plm.herokuapp.com';
} else {
  address = 'http://localhost:3001';
}

export default class Forum extends React.Component {
  state = {
    threads: [],
    currentThread: null
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
    return this.state.threads.map(thread => <Thread thread={thread} key={thread._id} setThread={this.setThread} />);
  };
  setThread = id => { 
    axios
    .get(`${address}/api/thread/get/${id}`)
    .then(res => {
      this.setState({ currentThread: res.data })
    })
    // .then(thread => <ThreadView thread={thread} />)
    .catch(err => console.log(err))
    
  };
  clearCurrentThread = () => {
    this.setState({currentThread: null})
  }
  loadThread = (thread) => {
    return <ThreadView info={thread} key={thread._id} goBack={this.clearCurrentThread}/>
  }
  render() {
    return <div>{this.state.currentThread !== null ? this.loadThread(this.state.currentThread) : this.renderThreads()}</div>;
  }
}
