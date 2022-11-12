import React, { useEffect } from 'react'
import "./Landing.css";
import $ from "jquery";
import 'jquery-ui-dist/jquery-ui'
// import '../jsFiles/moment.jsx'

const Landing = () => {

    // useEffect(() => {
    //     'use strict';

    //     // Declare app level module which depends on views, and components
    //     var app = angular.module('poolui', [
    //         'pool.globals',
    //         'ngRoute',
    //         'ngMaterial',
    //         'md.data.table',
    //         'angularMoment',
    //         'ngStorage',
    //         'ngAudio',
    //         'utils.strings',
    //         'utils.services',
    //         'utils.xhr',
    //         'n3-line-chart',
    //         'angular-page-visibility'
    //     ]);

    //     app.controller('AppCtrl', function ($scope, $rootScope, $location, $route, $routeParams, $anchorScroll, $window, $interval, $mdDialog, dataService, timerService, addressService, $mdSidenav, $mdMedia, $localStorage, ngAudio, GLOBALS) {
    //         $scope.GLOBALS = GLOBALS;
    //         //var appCache = window.applicationCache;
    //         $scope.$storage = $localStorage;

    //         $scope.poolList = ["pplns", "pps", "solo"];
    //         $scope.poolStats = {}; // All Pool stats
    //         $scope.addrStats = {}; // All tracked addresses
    //         $scope.lastBlock = {};

    //         // for miner tracking
    //         $scope.yourTotalHashRate = 0;

    //         // Hashrate Alarm
    //         $scope.globalSiren = false;
    //         $scope.sirenAudio = ngAudio.load("assets/ding.wav");

    //         // Update global hashrate and set off alarm if any of the tracked addresses fall below the threshold
    //         var updateHashRate = function (addrStats) {
    //             var totalHashRate = 0;
    //             var siren = false;

    //             _.each(addrStats, function (addr, index) {
    //                 totalHashRate += addr.hash;
    //                 if (addr.alarm && addr.hash < addr.alarmLimit) {
    //                     siren = true;
    //                 }
    //             });

    //             $scope.globalSiren = siren;
    //             $scope.yourTotalHashRate = totalHashRate;
    //         }

    //         var playSiren = function () {
    //             ($scope.globalSiren) ? $scope.sirenAudio.play() : $scope.sirenAudio.stop();
    //         }

    //         // ------- UI HELPERS

    //         $scope.menuOpen = $mdMedia('gt-md');
    //         $scope.$watch(function () { return $mdMedia('gt-md'); }, function (big) {
    //             $scope.menuOpen = $mdMedia('gt-md');
    //         });

    //         $scope.toggleSidenav = function () {
    //             if (!$mdMedia('gt-md')) {
    //                 $mdSidenav('left').toggle();
    //             } else {
    //                 // toggle boolean
    //                 $scope.menuOpen = !$scope.menuOpen;
    //             }
    //         }

    //         // ------- Miner Login and auth
    //         $scope.minerLogin = function (ev) {
    //             $mdDialog.show({
    //                 controller: "LoginCtrl",
    //                 templateUrl: 'user/home/login.html',
    //                 parent: angular.element(document.body),
    //                 targetEvent: ev,
    //                 clickOutsideToClose: true,
    //                 fullscreen: !$scope.menuOpen // Only for -xs, -sm breakpoints.
    //             })
    //                 .then(function (answer) {
    //                     // success callback
    //                 }, function (error) {
    //                     // error callback
    //                 });
    //         }

    //         $scope.minerConsole = function (ev) {
    //             $mdDialog.show({
    //                 locals: $scope.config,
    //                 controller: "ConsoleCtrl",
    //                 templateUrl: 'user/home/console.html',
    //                 parent: angular.element(document.body),
    //                 targetEvent: ev,
    //                 clickOutsideToClose: true,
    //                 fullscreen: !$scope.menuOpen // Only for -xs, -sm breakpoints.
    //             })
    //                 .then(function (answer) {
    //                     if (answer == 'logout') {
    //                         dataService.logout();
    //                     }
    //                 }, function (reason) {
    //                     // console.log(reason);
    //                 });
    //         }

    //         $scope.isLoggedIn = function () {
    //             return dataService.isLoggedIn();
    //         }

    //         // ------- App Update
    //         //var update = function() {
    //         //	if (appCache.status == window.applicationCache.UPDATEREADY) {
    //         //		appCache.swapCache(); 
    //         //		$window.location.reload();
    //         //	}
    //         //}

    //         //appCache.addEventListener("updateready", function(event) {
    //         //	update();
    //         //}, false);

    //         //var updateCache = function () {
    //         //	appCache.update();
    //         //}

    //         // API Requests
    //         var loadData = function () {
    //             dataService.getData("/pool/stats", function (data) {
    //                 $scope.poolList = data.pool_list;
    //                 $scope.poolStats.global = data.pool_statistics;
    //             });

    //             dataService.getData("/network/stats", function (data) {
    //                 $scope.network = data;
    //             });
    //         }

    //         var loadOnce = function () {
    //             dataService.getData("/config", function (data) {
    //                 $scope.config = data;
    //             });
    //         }

    //         // For FAQ
    //         $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
    //             $location.hash($routeParams.scrollTo);
    //             $anchorScroll();
    //         });

    //         // Start doing things
    //         loadOnce();
    //         loadData();
    //         //update();

    //         // Start the timer and register global requests
    //         timerService.startTimer(GLOBALS.api_refresh_interval);
    //         timerService.register(loadData, 'global');
    //         //$interval(updateCache, GLOBALS.app_update_interval); // check for app updates every 5 mins

    //         // Start address tracking servuce after starting timer, only one callback supported at a time
    //         addressService.start(function (addrStats) {
    //             $scope.addrStats = addrStats;
    //             updateHashRate(addrStats);
    //             playSiren();
    //         }
    //         );


    //         // Sponsor
    //         $scope.sponsor_open = false

    //     });

    // }, [])


    return (
        <div ng-cloak layout="column" ng-controller="AppCtrl" >
            <div id="wrapper">

                {/* Main  */}
                <div id="main">
                    {/* <!-- Header --> */}

                    {/* <!-- Started Desktop Hashrates --> */}
                    <div className="container-fluid top_stats hide_hashrates">
                        <div className="row">

                            {/* <div className="col-md-8 col-sm-12">
                                <span>Network: </span>
                                <span>Pool: </span>
                                <span>You: </span>
                                <span>XMR: </span>
                            </div> */}
                            <div className="col-md-4 col-sm-12">
                                <a href="getting-started.html" className="btn_blue">Getting Started</a>
                                <a href="login.html" className="btn_orange" ng-if="!isLoggedIn()">Login</a>
                                <a href="login.html" className="btn_orange" ng-if="isLoggedIn()">Logout</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Ended Desktop Hashrates --> */}

                    {/* <!-- Started Mobile Hashrates --> */}
                    <div className="container-fluid top_stats show_hashrates">
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="logo">
                                    <a href="index.html"> <img src="assets/images/logo.jpg" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-sm-5"><a href="getting-started.html" className="btn_blue">Getting Started</a> <a href="login.html"
                                className="btn_orange">Login</a></div>


                        </div>
                    </div>
                    {/* <!-- Ended Mobile Hashrates --> */}

                    {/* <!-- Desktop Banner --> */}
                    <section className="main-banner hide_slider">

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">

                                    {/* <!-- start slider --> */}

                                    <div id="MiddleCarousel" className="carousel slide UACarousel" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#MiddleCarousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#MiddleCarousel" data-slide-to="1"></li>
                                            <li data-target="#MiddleCarousel" data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner">

                                            <div className="carousel-item active">

                                                <div className="container-fluid">
                                                    <div className="row">

                                                        <div className="col-12">
                                                            <div className="content_wrapper slider1">
                                                                <h1>Why you should </h1>
                                                                <h2>mine Monero?</h2>
                                                                <ul>
                                                                    <li>No expensive graphic cards required, CPUs are enough.</li>
                                                                    <li>Established and big community since 2014</li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="carousel-item">
                                                <div className="container-fluid">
                                                    <div className="row">

                                                        <div className="col-12">
                                                            <div className="content_wrapper slider2">
                                                                <ul>
                                                                    <li>Earning points for voucher codes</li>
                                                                    <li>Auto-Payment (Hourly)</li>
                                                                    <li>Low Payout-Limit with 0.01 XMR</li>
                                                                    <li>Low Pool Fee 0.5%</li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="carousel-item">
                                                <div className="container-fluid">
                                                    <div className="row">

                                                        <div className="col-12">
                                                            <div className="content_wrapper slider3">
                                                                <div className="content_slide3"><img src="assets/images/icon1.png" /><span>Redeem your
                                                                    points</span>
                                                                    <p>in numerous online-shops</p>
                                                                </div>
                                                                <div className="content_slide3"><img src="assets/images/icon2.png" /><span>Boost your hashrate
                                                                </span>
                                                                    <p>And Buy new hardware with your voucher</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                        <a className="carousel-control-prev" href="#MiddleCarousel" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#MiddleCarousel" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>

                                    </div>

                                    {/* <!-- end slider --> */}

                                </div>
                            </div>

                        </div>
                    </section>


                    {/* <!-- Show mobile Banner --> */}
                    <section className="main-banner show_banner">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div>
                                        <h1>Why you should</h1>
                                        <h2>Mine Monero?</h2>
                                        <p>No expensive graphic cards required, CPUs are enough.
                                            Established and big community since 2014</p>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="container-fluid hashrates">
                            <div className="row">
                                <div className="col-md-12">

                                    <table>
                                        <tr>
                                            <td>
                                                <div className="values"><span>Network:</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="values"><span>Pool: </span></div>
                                            </td>
                                            <td>
                                                <div className="values"><span>You:</span></div>
                                            </td>
                                            <td>
                                                <div className="values"><span>XMR: </span></div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </section>

                    {/* <!-- End mobile Banner --> */}

                    <div className="inner">

                        {/* <!-- Benefits --> */}
                        <section className="container-fluid">
                            <div className="row">
                                <div className="col-12 headings">
                                    <sup>xmrminerpro</sup>
                                    <h2>Benefits</h2>
                                    <p>The easiest, most affordable and best mining platform</p>
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
                                    <sup>xmrminerpro</sup>
                                    <h2>Mining Pool</h2>
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
                            <div className="col-md-6 col-sm-12"><sup>What is crypto ?</sup>
                                <p>Monero is one of the established cryptocurrencies, which has a focus on secure and private transactions.
                                </p>
                                <p></p>
                            </div>
                            <div className="col-md-6 col-sm-12"><img src="assets/images/cryp_currency_collage.jpg" alt="" /></div>
                        </div>


                    </div>

                    <div className="inner">

                        {/* <!-- Crypto News --> */}
                        <section className="container-fluid">
                            <div className="row">
                                <div className="col-12 headings">
                                    <sup>xmrminerpro</sup>
                                    <h2>Crypto News</h2>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                </div>
                            </div>
                        </section>
                        <section className="news">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="news-item first-item">

                                            <div className="date_wrapper">
                                                <div className="day">02</div>
                                                <div className="mm">May 2022</div>
                                            </div>
                                            <h4>Chainges Conference</h4>
                                            <p>Join the first world-className quality blockchain and cryptocurrencyconference</p>
                                            <a href="#" className="btn_readmore">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="news-item first-item">

                                            <div className="date_wrapper">
                                                <div className="day">03</div>
                                                <div className="mm">May 2022</div>
                                            </div>
                                            <h4>Chainges Conference</h4>
                                            <p>Join the first world-className quality blockchain and cryptocurrencyconference</p>
                                            <a href="#" className="btn_readmore">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="news-item first-item">

                                            <div className="date_wrapper">
                                                <div className="day">22</div>
                                                <div className="mm">May 2022</div>
                                            </div>
                                            <h4>Chainges Conference</h4>
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

                        <div className="logo hide_logo">
                            <a href="index.html"> <img src="assets/images/logo.jpg" alt="" /></a>
                        </div>

                        {/* <!-- Menu --> */}
                        <div className="fixmenu">
                            <nav id="menu">
                                <ul>
                                    <li><a href="index.html"><span className="material-icons">home</span> Home</a></li>
                                    <li><a href="dashboard.html"><span className="material-icons">dashboard</span>Dashboard</a></li>
                                    <li><a href="getting-started.html"><span className="material-icons">launch</span>Getting Started</a></li>
                                    <li><a href="rewards.html"><span className="material-icons">emoji_events</span>Rewards</a></li>
                                    <li><a href="support.html"><span className="material-icons">group</span>Support</a></li>
                                    <li><a href="faq.html"><span className="material-icons">help_outline</span>FAQ</a></li>
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

export default Landing