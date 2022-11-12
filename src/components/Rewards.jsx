import React from 'react'
import "./Landing.css";
import { Link } from "react-router-dom"


const Rewards = () => {
    return (
        <div ng-cloak layout="column" ng-controller="AppCtrl">
            {/* <!-- Wrapper --> */}
            <div id="wrapper">
                {/* <!-- Main --> */}
                <div id="main">
                    {/* <!-- Header --> */}
                    <div className="container-fluid top_stats"><div className="row">

                        <div className="col-md-8 col-sm-12">
                            <span>Network: </span>
                            <span>Pool: </span>
                            <span>You:</span>
                            <span>XMR: </span></div>
                        <div className="col-md-4 col-sm-12">
                            <a href="getting-started.html" className="btn_blue">Getting Started</a>
                            <a href="login.html" className="btn_orange" ng-if="!isLoggedIn()">Login</a>
                            {/* <a href="login.html" className="btn_orange" ng-if="isLoggedIn()">Logout</a> */}
                        </div>

                    </div>
                    </div>

                    <div className="inner">

                        <section className="container-fluid">
                            <div className="row">
                                <div className="col-12 headings">
                                    <h1>Rewards</h1>
                                </div>

                                <p><h6><img src="assets\images\voucher\amazon.jpg" alt="Amazon Voucher" title="Amazon Voucher" />
                                    <br />1000000 points</h6></p>

                                <h6><img src="assets\images\voucher\steam.jpg" alt="Steam Voucher" title="Steam Voucher" /><br />
                                    <br />1000000 points</h6>

                                <img src="assets\images\voucher\overstock.jpg" alt="Overstock Voucher" title="Overstock Voucher" /><br />
                                    1000000 points
                            </div>
                        </section>

                    </div>
                </div>

                {/* <!-- Sidebar --> */}
                <div id="sidebar">

                    <div className="">

                        {/* <!-- Logo --> */}

                        <div className="logo">
                            <a href="index.html"> <img src="assets/images/logo.jpg" alt="" /></a>
                        </div>

                        {/* <!-- Menu --> */}
                        <div className="fixmenu">
                            <nav id="menu">
                                <ul>
                                    <li><Link to={`/`}><span className="material-icons">home</span> Home</Link></li>
                                    <li><Link to={`/dashboard`}><span className="material-icons">dashboard</span>Dashboard</Link></li>
                                    <li><Link to={`/gettingstarted`}><span className="material-icons">launch</span>Getting Started</Link></li>
                                    <li><Link to={`/rewards`}><span className="material-icons">emoji_events</span>Rewards</Link></li>
                                    <li><Link to={`/support`}><span className="material-icons">group</span>Support</Link></li>
                                    <li><Link to={`/faq`}><span className="material-icons">help_outline</span>FAQ</Link></li>
                                </ul>
                            </nav>


                            <footer id="footer">
                                <p className="copyright">Copyright &copy; 2021 XMRMINERPRO</p>
                            </footer>

                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default Rewards