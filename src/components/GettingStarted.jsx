import React from 'react'
import "./Landing.css";
import { Link } from "react-router-dom"


const GettingStarted = () => {
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
                            <span>You: </span>
                            <span>XMR: </span></div>
                        <div className="col-md-4 col-sm-12">
                            <a href="getting-started.html" className="btn_blue">Getting Started</a>
                            <a href="login.html" className="btn_orange" ng-if="!isLoggedIn()">Login</a>
                            {/* <a href="login.html" className="btn_orange" ng-if="isLoggedIn()">Logout</a> */}
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

                        <section className="container-fluid">
                            <div className="row">
                                <div className="col-12 headings">

                                    <h1>3 Easy Steps to Get Started</h1>
                                </div>
                                <ol>
                                    <h4><li>Setup Wallet</li></h4>
                                    You need a wallet, where you can receive and store your monero coins. There is an official Monero GUI Wallet, which you can download from their official website: <a target="blank" href="https://www.getmonero.org/downloads/">https://www.getmonero.org/downloads</a><br />If you don´t have an XMR address already, click on "receive" button in your wallet software to show your XMR address and copy this in clipboard.

                                    <p></p><h4><li>Mining Software</li></h4>
                                    Download one of the free mining software apps, which fit your needs.<br />
                                    a. <a target="blank" href="https://github.com/xmrig/xmrig/releases">XMRig:</a> for mining on CPU and GPU (Nvidia, AMD)<br />
                                    b. <a target="blank" href="https://github.com/fireice-uk/xmr-stak/releases">XMR-Stak/RX: </a>for mining on CPU only<br />
                                    <p>In case using <strong>XMRig</strong>, extract the files and look for file named &quot;pool_mine_example.cmd&quot; and edit it. Find the line at the end where xmrig.exe is called and replace the string after <strong>-u</strong> with your XMR address from your clipboard. Pool address: xmrminerpro.com:3333<br />
                                        <u>Password:</u> choose a name for your client or type x.<br />
                                        x:test@e-mail.com<br />
                                        (replace with your mail address to get notifications, otherwise don´t provide it. Without notification it is only x or any name).
                                        Then save this file, make a right-click and choose run as Administrator. If Windows wants a reboot, then do this now and run again as Administrator.</p>

                                    <p>In case using <strong>XMR-Stak/RX</strong>, extract the files, look for file named &quot;xmr-stak-rx.exe&quot;. Make a right-click on it and choose run as Administrator. If Windows wants a reboot, then do this now and run again as Administrator. For currency type monero & confirm with Enter key. Pool address: xmrminerpro.com:3333<br /><u>Username:</u> paste your wallet address from clipboard with right-click and Enter.<br /><u>Password:</u> choose a name for your client or type x.<br />
                                        x:test@e-mail.com<br />
                                        (replace with your mail address to get notifications, otherwise don´t provide it. Without notification it is only x or any name).
                                        You´re asked if you want to use simple method, choose Y or simply press Enter key.
                                        You´re asked if pool supports SSL. Press N
                                    </p>
                                    Application connects with our pool and gets plenty of shares with a starting difficulty of 1000. This will recalculate automatically, depending on your hardware performance.<br /><br />
                                    {/* <!-- <h5>Pool Addresses</h5>
                                    <table>
                                        <tr><th>Server</th><th>Port</th></tr>
                                        <tr><td>xmrminerpro.com</td><td>3333</td></tr>
                                    </table>--> */}

                                    <h4><li>Track your earnings</li></h4>To see your earnings, use your wallet address which you provide on the <a href="dashboard.html">Dashboard</a>. There you see your workers and statistics. To differentiate your workers on dashboard, you can give different hostnames - but not here directly. It is provided as <strong>&quot;password&quot;</strong> in your mining config, which is mostly predefined with <strong>&quot;x&quot;</strong>. Change this value on your machines and rerun the application. By the next refresh interval you see the new hostnames.<br />Depending on your hardware, it takes some time until you get your rewards from Monero network.<br />
                                    <div className="row">
                                        <div className="col-12 headings">
                                            <h3>Free Vouchers</h3>
                                        </div></div>

                                    For every earned 0.01 XMR, you are rewarded with <b>100 points</b>. Use them to redeem this in our <a href="rewards.html">Rewards Shop</a>.<br />
                                    This is limited in time, starting 2022-12-01 rewards are 50 points for every 0.01 XMR.
                                </ol><br />
                                Happy Mining !
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
                            <div className="col-md-6 col-sm-12"><sup>Decentralized</sup><h2>Mining Our core focus</h2><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Lorem ipsum dolor sit amet, has at lorem utin mucius, elitro dicam sit malorum. Fugit convenire adhuc putant eam. scripta iudicabit, dicit le persius ponderum id nec.</p>
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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GettingStarted