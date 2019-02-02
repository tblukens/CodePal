import React from 'react';
import axios from 'axios';
import Thread from '../../components/forum/thread';
import ThreadView from '../../components/forum/threadview';
import ForumAPI from '../../utility/ForumAPI'

let address;

if (process.env.NODE_ENV === 'production') {
  address = 'http://codepal-plm.herokuapp.com';
} else {
  address = 'http://localhost:3001';
}

export default class Forum extends React.Component {
  state = {
    threads: [],
    currentThread: null,
    user: null,
    newPostMsg: null
  };

  componentWillMount() {
    if (this.props.userInfo) {
      this.setState({ user: this.props.userInfo });
    }
  }

  componentDidMount() {
    this.loadThreads();
  }
  loadThreads() {
    ForumAPI.getThreads()
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
    this.setState({ currentThread: null })
    this.loadThreads()
  }


  loadThread = (thread) => {
    return <ThreadView info={thread} key={thread._id} goBack={this.clearCurrentThread} />
  }
  render() {
    return <div>
      {this.state.currentThread !== null ? this.loadThread(this.state.currentThread) : this.renderThreads()}</div>;
  }
}
