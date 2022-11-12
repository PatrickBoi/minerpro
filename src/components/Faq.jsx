import React from 'react'
import "./Landing.css";
import { Link } from "react-router-dom"


const Faq = () => {
    return (
        <div ng-cloak layout="column" ng-controller="AppCtrl">
            {/* <!-- Wrapper --> */}
            <div id="wrapper">
                {/* <!-- Main --> */}
                <div id="main">
                    {/* <!-- Header --> */}
                    <div className="container-fluid top_stats"><div className="row">

                        <div className="col-md-8 col-sm-12">
                            <span>Network: <strong>2788.5 MH/s</strong></span>
                            <span>Pool:<strong> 1 GH/s</strong></span>
                            <span>You: <strong>2.4 MH/s</strong></span>
                            <span>XMR:<strong> 260$</strong></span></div>
                        <div className="col-md-4 col-sm-12">
                            <a href="getting-started.html" className="btn_blue">Getting Started</a>
                            <a href="login.html" className="btn_orange" ng-if="!isLoggedIn()">Login</a>
                            {/* <a href="#" className="btn_orange" ng-click="minerConsole($event)" ng-if="isLoggedIn()">Logout</a> */}
                        </div>
                    </div></div>
                    {/* <!-- Banner --> */}
                    <section className="main-banner">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">



                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="inner">

                        {/* <!-- Benefits --> */}
                        <section className="container-fluid">
                            <div className="row">
                                <div className="col-12 headings">

                                    <sup>FAQ</sup><h2>Security</h2><p>If you don´t have a wallet yet, follow these security considerations</p>
                                </div>
                            </div>
                        </section>
                        <section className="services">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="service-item first-item">
                                            <div className=""><img src="assets/images/hardware.png" alt="" /></div>
                                            <h4>Mining hardware is ready</h4>
                                            <p>Worldwide Servers. Low latency, calculating more jobs</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="service-item second-item">
                                            <div className=""><img src="assets/images/cryp_currency.png" alt="" /></div>
                                            <h4>ALTERNATIVE CRYPTOCURRENCIES</h4>
                                            <p>exchange in your favourite currency after withdrawal</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="service-item third-item">
                                            <div className=""><img src="assets/images/wallet.png" alt="" /></div>
                                            <h4>GET INSTANT WITHDRAWAL</h4>
                                            <p>Don't wait for hours, get your coins after maximum one hour</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* <!-- Mining Pool --> */}
                        <section className="container-fluid">
                            <div className="row">
                                <div className="col-12 headings">
                                    <sup>xmrminerpro</sup><h2>Mining Pool</h2>
                                </div>
                            </div>
                        </section>
                        <section className="mining_pool">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="service-item first-item">

                                            <h4>Pool fee</h4>
                                            <p><strong>0.5%</strong></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="service-item second-item">

                                            <h4>Minimum payout </h4>
                                            <p><strong>0.01 XMR</strong></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="service-item third-item">

                                            <h4>Payout scheme</h4>
                                            <p><strong>PPLNS</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* <!-- About Mining --> */}
                    <div className="container-fluid about_mining">
                        <div className="row">
                            <div className="col-md-6 col-sm-12"><sup>Decentralized</sup><h2>Minning Our core focus</h2><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Lorem ipsum dolor sit amet, has at lorem utin mucius, elitro dicam sit malorum. Fugit convenire adhuc putant eam. scripta iudicabit, dicit le persius ponderum id nec.</p>
                                <p>Lorem ipsum dolor sit amet, has at lorem utin mucius, elitro dicam sit malorum. Fugit convenire adhuc putant eam. scripta iudicabit, dicit le persius ponderum id nec.</p></div>
                            <div className="col-md-6 col-sm-12"><img src="assets/images/cryp_currency_collage.jpg" alt="" /></div>
                        </div>
                    </div>

                    <div className="inner">

                        {/* <!-- Crypto News --> */}
                        <section className="container-fluid">
                            <div className="row">
                                <div className="col-12 headings">
                                    <sup>xmrminerpro</sup><h2>Crypto News</h2><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                </div>
                            </div>
                        </section>
                        <section className="news">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="news-item first-item">

                                            <div className="date_wrapper">
                                                <div className="day">02</div> <div className="mm">May 2022</div></div><h4>Chainges Conference</h4>
                                            <p>Join the first world-className quality blockchain and cryptocurrencyconference</p>
                                            <a href="#" className="btn_readmore">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="news-item first-item">

                                            <div className="date_wrapper">
                                                <div className="day">03</div> <div className="mm">May 2022</div></div><h4>Chainges Conference</h4>
                                            <p>Join the first world-className quality blockchain and cryptocurrencyconference</p>
                                            <a href="#" className="btn_readmore">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="news-item first-item">

                                            <div className="date_wrapper">
                                                <div className="day">22</div> <div className="mm">May 2022</div></div><h4>Chainges Conference</h4>
                                            <p>Join the first world-className quality blockchain and cryptocurrencyconference</p>
                                            <a href="#" className="btn_readmore">Read More</a>
                                        </div>
                                    </div>
                                </div>
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

                            {/* <!-- Footer --> */}
                            <footer id="footer">
                                <p className="copyright">Copyright &copy; 2021 XMRMINERPRO</p>
                            </footer>

                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default Faq