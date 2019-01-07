import React from 'react';


class BlogSidebar extends React.Component {
    render() {

        return (
            <div className="col-md-4 col-lg-3 order-md-last list-sidebar">
                <div className="sidebar">
                    <div className="sidebar-space">
                        <h4 className="blog-title">blog Category</h4>
                        <div className="blog-divider"></div>
                        <div className="blog-cat-detail">
                            <ul>
                                <li className="marg-15">
                                    <a href="blog-details.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum is simply
                                    </a>
                                </li>
                                <li className="marg-15">
                                    <a href="blog-details.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> There Are Many Variations
                                    </a>
                                </li>
                                <li className="marg-15">
                                    <a href="blog-details.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> it has survived not five
                                    </a>
                                </li>
                                <li className="marg-15">
                                    <a href="blog-details.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum has been the.
                                    </a>
                                </li>
                                <li className="marg-15">
                                    <a href="blog-details.html">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum is random.
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-space">
                        <h4 className="blog-title">Popular Tag</h4>
                        <div className="blog-divider"></div>
                        <div className="tags marg-20">
                            <a href={null}><span className="badge badge-theme">Responsive design</span></a>
                            <a href={null}><span className="badge badge-theme">Color options</span></a>
                            <a href={null}><span className="badge badge-theme">Multiple demos</span></a>
                            <a href={null}><span className="badge badge-theme">Dedicated support</span></a>
                            <a href={null}><span className="badge badge-theme">Documentation</span></a>
                            <a href={null}><span className="badge badge-theme">PSD is included</span></a>
                            <a href={null}><span className="badge badge-theme">Text</span></a>
                            <a href={null}><span className="badge badge-theme">Support</span></a>
                            <a href={null}><span className="badge badge-theme">Responsive</span></a>
                            <a href={null}><span className="badge badge-theme">Design</span></a>
                        </div>
                    </div>
                    <h4 className="blog-title">Recent Post</h4>
                    <div className="blog-divider"></div>
                    <div className="recent-blog marg-20">
                        <div className="media">
                            <img className="mr-3" src="assets/images/blog/01.jpg" alt="blog"/>
                                <div className="media-body">
                                    <a href="blog-details.html">
                                        <h5 className="mt-0">Lorem Ipsum Is Simply Dummy</h5>
                                    </a>
                                    <p className="m-0">05 March 2011</p>
                                </div>
                        </div>
                        <div className="media">
                            <img className="mr-3" src="assets/images/blog/blog-comment-three.jpg" alt="blog"/>
                                <div className="media-body">
                                    <a href="blog-details.html">
                                        <h5 className="mt-0">Lorem Ipsum has been the</h5>
                                    </a>
                                    <p className="m-0">14 january 2015</p>
                                </div>
                        </div>
                        <div className="media">
                            <img className="mr-3" src="assets/images/blog/3.jpg" alt="blog"/>
                                <div className="media-body">
                                    <a href="blog-details.html">
                                        <h5 className="mt-0">all the Lorem Ipsum Generator</h5>
                                    </a>
                                    <p className="m-0">30 November 2015</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default BlogSidebar;