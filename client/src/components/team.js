import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './card';
import axios from 'axios';

class Team extends React.Component {

    state = {
        currentUser: null,
        allUsers: {}
    }
    componentWillMount() {
        this.populateUsers()
    }
    populateUsers(val) {
        axios({
            url: '/api/users/allusers/',
            method: 'get',
        })
            .then((response) => {

                this.setState({ allUsers: response.data,
                currentUser: val })
                // map((detail,i)=>{
                //    console.log(detail);
                // })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    exitHandler(self) {
        self.setState({ "currentUser": null })
    }

    profileClick(val) {
        this.populateUsers(val)
    }
    render() {
        if(isEmpty(this.state.allUsers)){return false}
        // OwlCarousel Option for Team Members
        const options = {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 12
            },
            600: {
                items: 2
            },
            767: {
                items: 2
            },
            768: {
                items: 2,
                margin: 15
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        };

        // Dynamic Team Members Easy to Update
        let data = [
            {
                "firstName": "Michael",
                "lastName": "Benefiel",
                "designation": "Front End Developer",
                "photo": "mike.jpg",
                "facebook": "https://www.facebook.com/",
                "twitter": "https://twitter.com/",
                "linkedIn": "https://linkedin.com/",
                "gitHub": "https://github.com/",
                "portfolio": "https://mjbenefiel.github.io",
                "shortBio": "Coding ninja, skilled in the art and craft of guruing and slicing fruit",
                "mongo": "https://www.mongodb.com/",
                "express": "https://expressjs.com/",
                "react": "https://reactjs.org/",
                "node": "https://nodejs.org/en/",
                "javascript": "https://www.javascript.com/"
            },
            {
                "firstName": "Spencer",
                "lastName": "Knoll",
                "designation": "Front End Developer",
                "photo": "spencer.jpg",
                "facebook": "https://www.facebook.com/",
                "twitter": "https://twitter.com/",
                "linkedIn": "https://linkedin.com/",
                "gitHub": "https://github.com/",
                "portfolio": "https://github.com/sp-knoll-86",
                "shortBio": "Coding ninja, skilled in the art and craft of guruing and slicing fruit",
                "mongo": "https://www.mongodb.com/",
                "express": "https://expressjs.com/",
                "react": "https://reactjs.org/",
                "node": "https://nodejs.org/en/",
                "javascript": "https://www.javascript.com/"
            },
            {
                "firstName": "Dustin",
                "lastName": "Watkins",
                "designation": "Back End Developer",
                "photo": "dustin.jpg",
                "facebook": "https://www.facebook.com/",
                "twitter": "https://twitter.com/",
                "linkedIn": "https://linkedin.com/",
                "gitHub": "https://github.com/",
                "portfolio": "https://watkins656.github.io/",
                "shortBio": "Coding ninja, skilled in the art and craft of guruing and slicing fruit",
                "mongo": "https://www.mongodb.com/",
                "express": "https://expressjs.com/",
                "react": "https://reactjs.org/",
                "node": "https://nodejs.org/en/",
                "javascript": "https://www.javascript.com/"
            },
            {
                "firstName": "Tim",
                "lastName": "Lukens",
                "designation": "Back End Developer",
                "photo": "tim.jpg",
                "facebook": "https://www.facebook.com/",
                "twitter": "https://twitter.com/",
                "linkedIn": "https://linkedin.com/",
                "gitHub": "https://github.com/",
                "portfolio": "https://timlukens.com/",
                "shortBio": "Coding ninja, skilled in the art and craft of guruing and slicing fruit",
                "mongo": "https://www.mongodb.com/",
                "express": "https://expressjs.com/",
                "react": "https://reactjs.org/",
                "node": "https://nodejs.org/en/",
                "javascript": "https://www.javascript.com/"
            },
            {
                "firstName": "Pirate",
                "lastName": "Dude",
                "designation": "Captain",
                "photo": "4.jpg",
                "facebook": "https://www.facebook.com/",
                "twitter": "https://twitter.com/",
                "linkedIn": "https://linkedin.com/",
                "gitHub": "https://github.com/",
                "shortBio": "Coding ninja, skilled in the art and craft of guruing and slicing fruit",
                "mongo": "https://www.mongodb.com/",
                "express": "https://expressjs.com/",
                "react": "https://reactjs.org/",
                "node": "https://nodejs.org/en/",
                "javascript": "https://www.javascript.com/"
            },
            {
                "firstName": "Black Hat",
                "lastName": "Ninja",
                "designation": "Backroom Dealer",
                "photo": "3.jpg",
                "facebook": "https://www.facebook.com/",
                "twitter": "https://twitter.com/",
                "linkedIn": "https://linkedin.com/",
                "gitHub": "https://github.com/",
                "shortBio": "Coding ninja, skilled in the art and craft of guruing and slicing fruit",
                "mongo": "https://www.mongodb.com/",
                "express": "https://expressjs.com/",
                "react": "https://reactjs.org/",
                "node": "https://nodejs.org/en/",
                "javascript": "https://www.javascript.com/"
            }
        ]

        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        if (!isEmpty(this.state.allUsers)) {
            console.log(this.state.allUsers);
            data = (this.state.allUsers)
        }
        // Dynamic Team Members Data Loop
        let DataList = data.map((val, i) => {
            return (
                <div className="item" key={i}>
                    <div className="team-box">
                        <div className="team-under-box">
                            <div className="team-under-box-button text-white" onClick={() => this.profileClick(val)}>
                                <i className="fa fa-plus" aria-hidden="true" data-firstName={val.firstName}></i>
                            </div>
                            <img src={`assets/images/${val.photo}`} alt="1" className="img-fluid" />
                            <div className="team-overlay">
                                <div className="social-icon">
                                    <ul>
                                        <li><a href={val.mongo} dangerouslySetInnerHTML={{ __html: '<i class="devicon-mongodb-plain-wordmark" style="font-size: 1.5em;"></i>' }}></a></li>
                                        <li><a href={val.express} dangerouslySetInnerHTML={{ __html: '<i class="devicon-express-original" style="font-size: 1.5em;"></i>' }}></a></li>
                                        <li><a href={val.react} dangerouslySetInnerHTML={{ __html: '<i class="devicon-react-original-wordmark" style="font-size: 1.5em;"></i>' }}></a></li>
                                        <li><a href={val.node} dangerouslySetInnerHTML={{ __html: '<i class="devicon-nodejs-plain-wordmark" style="font-size: 1.5em;"></i>' }}></a></li>
                                        <li><a href={val.javascript} dangerouslySetInnerHTML={{ __html: '<i class="devicon-javascript-plain" style="font-size: 1.5em;"></i>' }}></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <section className="team-bg" id="team">
                <div className="animation-circle-inverse">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="coders-nearby">Coders Nearby</h2>
                                {/* <img src="assets/images/title-line.png" alt="title-line" className="img-fluid"/> */}
                            </div>
                        </div>
                        <div className="col-md-12">
                            {this.state.currentUser ?
                                <Card currentUser={this.state.currentUser} self={this} exitHandler={this.exitHandler}>

                                </Card>
                                :
                                <OwlCarousel
                                    className="team-slider-rtl owl-carousel owl-theme"
                                    loop={true}
                                    margin={30}
                                    nav={false}
                                    dots={false}
                                    responsive={options}
                                    info={true}

                                >
                                    {DataList}
                                </OwlCarousel>
                            }
                        </div>
                    </div>
                </div>
            </section>
        );


        // ENTER NEW INNERDATA BELOW HERE






    }
}


export default Team;