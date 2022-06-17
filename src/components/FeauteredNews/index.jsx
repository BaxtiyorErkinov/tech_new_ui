import React from 'react';

import { Grid } from '@mui/material'
import CircularProgressBar from '../CircularProgressBar/'

import { GoZap } from 'react-icons/go'


import "./feauterednews.scss";

const FeauteredNews = () => {
	return (
		<div className="feautered__container">
			<Grid container spacing={1}>
				<Grid item md={6} sm={12} xs={12}>
					<div className="feautered__item-main">
						<img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/gallery-5-780x470.jpg" alt="" />
						<div className="bg">						
							<div className="category">Cars</div>
							<div className="content">	
								<div className="date"><span><GoZap /></span> Dec 12, 2016</div>
								<h1 className="title">Of course Uber is working on a flying car project</h1>
								<p className="desc">Apple Watch review: Design For a slightly more opinionated version of the video review above,…</p>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item md={6} sm={12} xs={12}>
					<div className="feautered__item-second">
						<img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1473520844623-167ad716dcae-780x470.jpeg" alt="" />
							<div className="category">Laptops</div>
							<div className="progressbar">	
								<CircularProgressBar percentage={77}/>
							</div>
							<div className="bg">							
								<div className="content">	
									<div className="date">Dec 12, 2016</div>
									<h1 className="title">Pay for the power, not for the design</h1>
									<p className="desc">Apple Watch review: Design For a slightly more opinionated version of the video review above,…</p>
								</div>
							</div>
					</div>	
					<div className="feautered__item-container">					
						<div className="feautered__item-third">
								<img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/pexels-photo-780x470.jpg" alt="" />
								<div className="category">Headphones</div>
								<div className="progressbar">	
									<CircularProgressBar percentage={88}/>
								</div>
								<div className="bg">								
									<div className="content">	
										<div className="date">Dec 12, 2016</div>
										<h1 className="title">Sync by 50 wireless headphones review</h1>
										<p className="desc">Apple Watch review: Design For a slightly more opinionated version of the video review above,…</p>
									</div>
								</div>
						</div>
						<div className="feautered__item-last">					
								<img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/YAR_MY15_0009_V003-780x470.jpg" alt="" />
								<div className="category">Cars</div>
								<div className="bg">								
									<div className="content">	
										<div className="date">Dec 12, 2016</div>
										<h1 className="title">Honda teases electric concept car with AI-powered emotions</h1>
										<p className="desc">Apple Watch review: Design For a slightly more opinionated version of the video review above,…</p>
									</div>
								</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default FeauteredNews;