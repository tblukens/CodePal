import React from "react";

  let data = [
        {id: 1, name: 'Michael Benefiel', designation:'Front End Developer', photo:'mike.jpg', facebook:'https://www.facebook.com/', twitter:'https://twitter.com/', linkedin:'https://linkedin.com/', github:'https://github.com/', desc: 'Coding ninja, skilled in the art and craft of guruing and slicing fruit'},
        {id: 2, name: 'Spencer Knoll', designation:'Front End Developer', photo:'spencer.jpg', facebook:'https://www.facebook.com/', twitter:'https://twitter.com/', linkedin:'https://linkedin.com/', github:'https://github.com/', desc: 'Coding ninja, skilled in the art and craft of guruing and slicing fruit'},
        {id: 3, name: 'Dustin Watkins', designation:'Back End Developer', photo:'dustin.jpg', facebook:'https://www.facebook.com/', twitter:'https://twitter.com/', linkedin:'https://linkedin.com/', github:'https://github.com/', desc: 'Coding ninja, skilled in the art and craft of guruing and slicing fruit'},
        {id: 4, name: 'Tim Lukens', designation:'Back End Developer', photo:'tim.jpg', facebook:'https://www.facebook.com/', twitter:'https://twitter.com/', linkedin:'https://linkedin.com/', github:'https://github.com/', desc: 'Coding ninja, skilled in the art and craft of guruing and slicing fruit'},
        {id: 5, name: 'Pirate Dude', designation:'Captain', photo:'4.jpg', facebook:'https://www.facebook.com/', twitter:'https://twitter.com/', linkedin:'https://linkedin.com/', github:'https://github.com/', desc: 'Coding ninja, skilled in the art and craft of guruing and slicing fruit'},
        {id: 6, name: 'Black Hat Ninja', designation:'Backroom Dealer', photo:'3.jpg', facebook:'https://www.facebook.com/', twitter:'https://twitter.com/', linkedin:'https://linkedin.com/', github:'https://github.com/', desc: 'Coding ninja, skilled in the art and craft of guruing and slicing fruit'},
        ];

class Card extends React.Component {
  render() {
    // Dynamic Team Members Data Loop
    let DataList = data.map((val, i) => {
     if (val.id === 1) {
         
        return (
         
        <div className="col-md-12" key={i}>
                            <div className="team-hover">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div  className="team-profile">
                                            <img src={`assets/images/${val.photo}`} alt="1" className="img-fluid inner-img" height="332" width="450"/>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="d-flex-1">
                                            <div className="hover-text">
                                                <div className="team-close-btn">
                                                    <a dangerouslySetInnerHTML={{ __html: '<i class="fa fa-times" aria-hidden="true"></i>' }}></a>
                                                </div>
                                                <h3>{val.name}</h3>
                                                <h4 className="m-0 text-muted">{val.designation}</h4>
                                                <h3>
                                      
                                      <ul>
                                      <li className="inner-social"><a href={val.facebook}  dangerouslySetInnerHTML={{ __html: '<i class="fa fa-facebook" style="font-size: 1.5em; color: #586082;"></i>' }}></a></li>
                                      <li className="inner-social"><a href={val.twitter} dangerouslySetInnerHTML={{ __html: '<i class="fa fa-twitter" style="font-size: 1.5em; color: #586082;"></i>' }}></a></li>
                                      <li className="inner-social"><a href={val.linkedin}  dangerouslySetInnerHTML={{ __html: '<i class="fa fa-linkedin" style="font-size: 1.5em; color: #586082;"></i>' }}></a></li>
                                      <li className="inner-social"><a href={val.github}  dangerouslySetInnerHTML={{ __html: '<i class="fa fa-github" style="font-size: 1.5em; color: #586082;"></i>' }}></a></li>
                                     
                                    </ul>
                         
                                                </h3>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
        )}  
        
            
    
    });

    return (
        
      <div className="col-md-12">
  {DataList}
            
      </div>
    );
  };
}
export default Card;