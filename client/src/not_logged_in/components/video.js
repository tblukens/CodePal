import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: "https://app.coverr.co/s3/mp4/Behind-the-screen.mp4"
    };
  }

  render() {
    return (
      <video class="background-video" autoPlay muted>
        <source src={this.state.videoURL} type="video/mp4" />
        <source src={this.state.videoURL} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    );
  }
}

export default Video;
