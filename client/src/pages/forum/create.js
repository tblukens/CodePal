import React from "react";
import {Redirect} from 'react-router';
import ForumAPI from "../../utility/ForumAPI";
import { Input, TextArea, FormBtn } from "./Form";

export default class CreateThread extends React.Component {
  state = {
    user: null,
    threadTitle: "",
    message: "",
    error: "",
    redirect: false
  };
  componentWillMount() {
    if (this.props.userInfo) {
      this.setState({ user: this.props.userInfo });
    }
  }
  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.threadTitle && this.state.message && this.state.user) {
      ForumAPI.createThread({
        user: this.state.user,
        title: this.state.threadTitle,
        message: this.state.message
      })
      .then(res => this.setState({redirect: true}))
      .catch(err => console.log(err))
    }
  };
  render() {
      if (this.state.redirect){
          return <Redirect to="/forum" />
      }
    return (
      <div style={{ width: "400", height: "500" }}>
        <Input
          value={this.state.threadTitle}
          onChange={this.handleInputChange}
          name="threadTitle"
          placeholder="Title (required)"
        />
        <TextArea
          value={this.state.message}
          onChange={this.handleInputChange}
          name="message"
          placeholder="Message here. (required)"
        />
        {/* {error.length ? <p style={{color: 'red'}}>Please fill out all fields</p> : null} */}
        <FormBtn
          disabled={
            !(this.state.threadTitle && this.state.user && this.state.message)
          }
          onClick={this.handleFormSubmit}
        >
          Submit
        </FormBtn>
      </div>
    );
  }
}
