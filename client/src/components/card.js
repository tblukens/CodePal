import React from "react";
const Card = (props) => {


    let val = props.currentUser;
    console.log(val);
    // Dynamic Team Members Data Loop

    return (
        <div className="col-md-12">

            <div className="col-md-12" >
                <div className="team-hover">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="team-profile">
                                <img src={`assets/images/${val.photo}`} alt="1" className="img-fluid inner-img" height="332" width="450" />

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex-1">
                                <div className="hover-text">
                                    <div className="team-close-btn">
                                        <a onClick={() => props.exitHandler(props.self)} dangerouslySetInnerHTML={{ __html: '<i class="fa fa-times" aria-hidden="true"></i>' }}></a>
                                    </div>
                                    <h3>{val.firstName} {val.lastName}</h3>
                                    <h4 className="m-0 text-muted">{val.designation}</h4>
                                    <h3>

                                        <ul>
                                            <li className="inner-social"><a href={val.facebook} dangerouslySetInnerHTML={{ __html: '<i class="fa fa-facebook" style="font-size: 1.5em; color: #586082;"></i>' }}></a></li>
                                            <li className="inner-social"><a href={val.twitter} dangerouslySetInnerHTML={{ __html: '<i class="fa fa-twitter" style="font-size: 1.5em; color: #586082;"></i>' }}></a></li>
                                            <li className="inner-social"><a href={val.linkedIn} dangerouslySetInnerHTML={{ __html: '<i class="fa fa-linkedin" style="font-size: 1.5em; color: #586082;"></i>' }}></a></li>
                                            <li className="inner-social"><a href={val.gitHub} dangerouslySetInnerHTML={{ __html: '<i class="fa fa-github" style="font-size: 1.5em; color: #586082;"></i>' }}></a></li>
                                            <li className="inner-social"><a href={val.portfolio} dangerouslySetInnerHTML={{ __html: '<i class="fa fa-laptop" style="font-size: 1.5em; color: #586082;"></i>' }}></a></li>
                                        </ul>

                                    </h3>
                                    <p>{val.shortBio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card;