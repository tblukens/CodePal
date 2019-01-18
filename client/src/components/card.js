import React from "react";

class Card extends React.Component {
  render() {


  let data = [
        {name: 'Michael Benefiel', designation:'Front End Developer', photo:'mike.jpg', mongo:'https://www.mongodb.com/', express:'https://expressjs.com/', react:'https://reactjs.org/', node:'https://nodejs.org/en/', javascript:'https://www.javascript.com/'},
        {name: 'Spencer Knoll', designation:'Front End Developer', photo:'spencer.jpg', mongo:'https://www.mongodb.com/', express:'https://expressjs.com/', react:'https://reactjs.org/', node:'https://nodejs.org/en/', javascript:'https://www.javascript.com/'},
        {name: 'Dustin Watkins', designation:'Back End Developer', photo:'dustin.jpg', mongo:'https://www.mongodb.com/', express:'https://expressjs.com/', react:'https://reactjs.org/', node:'https://nodejs.org/en/', javascript:'https://www.javascript.com/'},
        {name: 'Tim Lukens', designation:'Back End Developer', photo:'tim.jpg', mongo:'https://www.mongodb.com/', express:'https://expressjs.com/', react:'https://reactjs.org/', node:'https://nodejs.org/en/', javascript:'https://www.javascript.com/'},
        {name: 'Pirate Dude', designation:'Captain', photo:'4.jpg', mongo:'https://www.mongodb.com/', express:'https://expressjs.com/', react:'https://reactjs.org/', node:'https://nodejs.org/en/', javascript:'https://www.javascript.com/'},
        {name: 'Black Hat Ninja', designation:'Backroom Dealer', photo:'3.jpg', mongo:'https://www.mongodb.com/', express:'https://expressjs.com/', react:'https://reactjs.org/', node:'https://nodejs.org/en/', javascript:'https://www.javascript.com/'},
        ];

    // Dynamic Team Members Data Loop
    let DataList = data.map((val, i) => {
        return (
            <div className="item" key={i}>
                <div className="team-box">
                    <div className="team-under-box">
                        <div className="team-under-box-button text-white">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <img src={`assets/images/${val.photo}`} alt="1" className="img-fluid"/>
                        <div className="team-overlay">
                                <div className="social-icon">
                                      <ul>
                                      <li><a href={val.mongo}  dangerouslySetInnerHTML={{ __html: '<i class="devicon-mongodb-plain-wordmark" style="font-size: 1.5em;"></i>' }}></a></li>
                                      <li><a href={val.express} dangerouslySetInnerHTML={{ __html: '<i class="devicon-express-original" style="font-size: 1.5em;"></i>' }}></a></li>
                                      <li><a href={val.react}  dangerouslySetInnerHTML={{ __html: '<i class="devicon-react-original-wordmark" style="font-size: 1.5em;"></i>' }}></a></li>
                                      <li><a href={val.node}  dangerouslySetInnerHTML={{ __html: '<i class="devicon-nodejs-plain-wordmark" style="font-size: 1.5em;"></i>' }}></a></li>
                                      <li><a href={val.javascript}  dangerouslySetInnerHTML={{ __html: '<i class="devicon-javascript-plain" style="font-size: 1.5em;"></i>' }}></a></li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    });


    return (
      <div className="col-md-12">
        <div className="team-hover">
          <div className="row">
            <div className="col-md-4">
              <div className="team-profile">
               { <img src="assets/images/1.jpg" alt="1" className="img-fluid" />}
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex-1">
              
                <div className="hover-text">
                {DataList}
                  <div className="team-close-btn">
                    <a
                      dangerouslySetInnerHTML={{
                        __html: '<i class="fa fa-times" aria-hidden="true"></i>'
                      }}
                    />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Card;
