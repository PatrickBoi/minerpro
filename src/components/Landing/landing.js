// import styles from "./styles.module.css";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from "react-router-dom";

import React from "react";
import { useEffect } from "react";

  import style from "./landing.css"

const Main = () => {

	useEffect = ()  =>{
		const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
	}

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div >
		
		<div id={style.wrapper}>

{/* <!-- Main --> */}
  <div id={style.main}>
	{/* <!-- Header --> */}
  
{/* <!-- Started Desktop Hashrates --> */}
<div className="container-fluid top_stats hide_hashrates"><div classNameName={style.row}> 
		   
		  <div className="col-md-8 col-sm-12">
			  <span>Network: </span>
			  <span>Pool: </span>
			  <span>You: </span>
			  <span>XMR: </span></div>  
		  <div className="col-md-4 col-sm-12">
			  <a href="getting-started.html" className="btn_blue">Getting Started</a> 
			  <a href="login.html" className="btn_orange" ng-if="!isLoggedIn()">Login</a>
			  <a href="login.html" className="btn_orange" ng-if="isLoggedIn()">Logout</a>
		  </div> 
		  </div> </div>
{/* <!-- Ended Desktop Hashrates -->				 */}
		  
{/* <!-- Started Mobile Hashrates --> */}
<div className="container-fluid top_stats show_hashrates"><div classNameName={style.row}> 
		   
		  <div className="col-sm-6">
			   <div classNameName={style.logo}>
		  <a href="index.html"> <img src="assets/images/logo.jpg" alt=""/></a>
		</div>
			   </div>  
		  <div className="col-sm-5"><a href="getting-started.html" className="btn_blue">Getting Started</a> <a href="login.html" classNameName={style.btn_orange}>Login</a></div> 
	   
		  
		  </div> </div>
{/* <!-- Ended Mobile Hashrates --> */}

{/* <!-- Desktop Banner --> */}
	  <section className="main-banner hide_slider">
	  
		<div className="container-fluid">
		  <div className="row">
			<div className="col-md-12">
		 
				{/* <!-- start slider --> */}

				<section class="slider-wrapper">
  <button class="slide-arrow" id="slide-arrow-prev">
    &#8249;
  </button>
  <button class="slide-arrow" id="slide-arrow-next">
    &#8250;
  </button>
  <ul class="slides-container" id="slides-container">
    <li class="slide"></li>
    <li class="slide"></li>
    <li class="slide"></li>
    <li class="slide"></li>
  </ul>
</section>
				
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
<div className="content_wrapper slider1"><h1>Why you should </h1><h2>mine Monero?</h2><ul><li>No expensive graphic cards required, CPUs are enough.</li><li>Established and big community since 2014</li></ul></div>

</div>
</div>
</div>
</div> 


<div className="carousel-item">
<div className="container-fluid">
<div className="row"> 

<div className="col-12"> 
<div className="content_wrapper slider2"><ul><li>Earning points for voucher codes</li><li>Auto-Payment (Hourly)</li><li>Low Payout-Limit with 0.01 XMR</li><li>Low Pool Fee 0.5%</li></ul></div>

</div>
</div>
</div>

</div>   

<div className="carousel-item">
<div className="container-fluid">
<div className="row"> 

<div className="col-12">
<div className="content_wrapper slider3">
<div className="content_slide3"><img src="assets/images/icon1.png"/><span>Redeem your points</span><p>in numerous online-shops</p></div>
<div className="content_slide3"><img src="assets/images/icon2.png"/><span>Boost your hashrate </span><p>And Buy new hardware with your voucher</p></div>
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
			<div><h1>Why you should</h1><h2>Mine Monero?</h2><p>No expensive graphic cards required, CPUs are enough.
Established and big community since 2014</p></div>

			</div>
			</div>
			</div>
			
			
			 <div className="container-fluid hashrates">
		  <div className="row">
			<div className="col-md-12">
			
<table>
<tr>
<td><div className="values"><span>Network:</span></div></td>
<td><div className="values"><span>Pool: </span></div></td>
<td><div className="values"><span>You:</span></div></td>
<td><div className="values"><span>XMR: </span></div>	</td>
</tr></table>
			</div>
		  </div>  
			
			</div> 
			
	  </section>
			
{/* <!-- End mobile Banner -->			   */}
	  
<div className="inner">
	  
	  {/* <!-- Benefits --> */}
	  <section className="container-fluid">
  <div className="row">
	  <div className="col-12 headings">	
	  <sup>xmrminerpro</sup><h2>Benefits</h2><p>The easiest, most affordable and best mining platform</p>
	  </div>
  </div>
  </section>
	  <section className="services">
		<div className="container-fluid">
		  <div className="row">
			<div className="col-md-4">
			  <div className="service-item first-item">
				<div className=""><img src="assets/images/hardware.png" alt=""/></div>
				<h4>Mining hardware is ready</h4>
				<p>Worldwide Servers. Low latency, calculating more jobs</p>
			  </div>
			</div>
			<div className="col-md-4">
			  <div className="service-item second-item">
				<div className=""><img src="assets/images/cryp_currency.png" alt=""/></div>
				<h4>ALTERNATIVE CRYPTOCURRENCIES</h4>
				<p>exchange in your favourite currency after withdrawal</p>
			  </div>
			</div>
			<div className="col-md-4">
			  <div className="service-item third-item">
				<div className=""><img src="assets/images/wallet.png" alt=""/></div>
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
	  <div className="col-md-6 col-sm-12"><sup>What is crypto ?</sup><p>Monero is one of the established cryptocurrencies, which has a focus on secure and private transactions.</p>
	  <p></p></div>
	  <div className="col-md-6 col-sm-12"><img src="assets/images/cryp_currency_collage.jpg" alt=""/></div>
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
	 
		<div className="logo hide_logo">
		  <a href="index.html"> <img src="assets/images/logo.jpg" alt=""/></a>
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
	</div></div>
  </div>
</div>

		</div>
	);
};

export default Main;