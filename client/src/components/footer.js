import React from 'react';


class Footer extends React.Component {

    componentWillMount() {
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        // js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
  render() {
		
  	return (
        <div>
        <div id="fb-root"></div>
            <footer className="cpoy-right-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="social-footer">
                                <ul>
                                    <li><a href={null}  dangerouslySetInnerHTML={{ __html: '<i class="fa fa-facebook" aria-hidden="true"></i>' }}></a></li>
                                    <li><a href={null} dangerouslySetInnerHTML={{ __html: '<i class="fa fa-google-plus" aria-hidden="true"></i>' }}></a></li>
                                    <li><a href={null}  dangerouslySetInnerHTML={{ __html: '<i class="fa fa-twitter" aria-hidden="true"></i>' }}></a></li>
                                    <li><a href={null}  dangerouslySetInnerHTML={{ __html: '<i class="fa fa-instagram" aria-hidden="true"></i>' }}></a></li>
                                    <li><a href={null} dangerouslySetInnerHTML={{ __html: '<i class="fa fa-rss" aria-hidden="true"></i>' }}></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <p className="copyright">Copyright © 2018 Pirate Lives Matter and the Coding Ninjas | All Rights Reserved | Designed By Pirate Dude from Dodge Ball</p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*Your customer chat code*/}
            <div className="fb-customerchat"
                page_id="2123438804574660"
                theme_color="#5f57ea"
                logged_in_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?"
                logged_out_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?">
            </div>
        </div>
  	);
  }
}


export default Footer;