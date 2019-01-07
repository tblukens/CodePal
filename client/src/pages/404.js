import React from 'react';

class PageNotFound extends React.Component {
  render() {
      document.body.classList.remove('inner-page');
  	return (
        <section className="p-0">
            <div className="auth-page error-main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <h2 className="error-font">4<span>0</span>4</h2>
                                <h2 className="f-bold">
                                    Oops! Error 404 not found.
                                </h2>
                                <div className="col-lg-8 offset-lg-2 col-12">
                                    <h4>The page you were looking for doesn't exist. We think the page may have moved. </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animation-circle-inverse">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="animation-circle absolute">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        </section>
  	);
  }
}


export default PageNotFound;