import React from 'react';
import Countdown from "react-countdown-now";
import Footer from "../components/footer";

class ComingSoon extends React.Component {
  render() {
      document.body.classList.remove('inner-page');
    // Random component
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({
      total,
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
      completed
    }) => {
      if (completed) {
        // Render a complete state
        return <Completionist />;
      } else {
        // Render a countdown
        return (
            <div id="clockdiv">
              <div>
                  <span className="days">{days}</span>
                  <div className="smalltext">Days</div>
                  </div>
                  <div>
                  <span className="hours">{hours}</span>
                  <div className="smalltext">Hours</div>
                  </div>
                  <div>
                  <span className="minutes">{minutes}</span>
                  <div className="smalltext">Minutes</div>
                  </div>
                  <div>
                  <span className="seconds">{seconds}</span>
                  <div className="smalltext">Seconds</div>
              </div>
            </div>
        );
      }
    };
     
  	return (
  		<div>
        {/*home section*/}
            <section className="auth-page">

                <div className="animation-circle-inverse">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="animation-circle">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>

                <div className="container cooming-soon">
                    <div className="row mb-50">
                        <div className="col-md-6 left">
                            <div className="clock-box">
                                <div>
                                    <div className="mb-4">
                                        <h2>We Are Launching Soon</h2>
                                        <img src="assets/images/title-line.png" alt="" className="img-fluid"/>
                                    </div>
                                    <Countdown date={new Date(1564231136000)} renderer={renderer} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-right">
                                <div className="animation-circle-inverse">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                                <div className="mobile-slid">
                                    <img src="assets/images/top-mobile.png" alt="top1" className="img-fluid"/>
                                </div>
                                <div className="profile-msg">
                                    <img src="assets/images/top2.png" alt="top2" className="img-fluid"/>
                                </div>
                                <div className="awesome">
                                    <img src="assets/images/top3.png" alt="top3" className="img-fluid"/>
                                </div>
                                <div className="profile-1">
                                    <img src="assets/images/top4.png" alt="top4" className="img-fluid"/>
                                </div>
                                <div className="emoji">
                                    <img src="assets/images/top5.png" alt="top5" className="img-fluid"/>
                                </div>
                                <div className="profile-2">
                                    <img src="assets/images/top1.png" alt="top1" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/*home section end*/}

            <section className="subscribe-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4">
                            <div className="subscribe">
                                <h3>Subscribe to Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-8">
                            <div className="email-box">
                                <form>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
                                        <button type="submit" className="btn btn-email">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        {/*Footer Section start*/}
        <Footer />
        {/*Footer Section End*/}
      </div>
  	);
  }
}


export default ComingSoon;