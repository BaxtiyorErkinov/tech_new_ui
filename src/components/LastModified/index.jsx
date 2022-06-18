import React from 'react';
import Box from '../../UI/Box/'

//icons
import {IoDocumentTextOutline} from 'react-icons/io5'
import { AiOutlineClockCircle } from "react-icons/ai";


//styles
import  "./lastmodified.scss";

const otherNews = [
	{
		id: 1,
		img: "https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1473520844623-167ad716dcae-220x150.jpeg",
		title: "Pay for the power, not for the design",
		date: "Dec 12, 2016"
	},
	{
		id: 2,
		img: "https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/pexels-photo-220x150.jpg",
		title: "Pay for the power, not for the design",
		date: "Dec 12, 2016"
	},
		{
		id: 3,
		img: "https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/YAR_MY15_0009_V003-220x150.jpg",
		title: "Pay for the power, not for the design",
		date: "Dec 12, 2016"
	},

]


const LastModified = () => {
	return (
		<Box>
			<div className="lastmodified__container">
				<div className="lastmodified__title">
					<div className="title">Last Modified</div>
					<div className="icon"><IoDocumentTextOutline /></div>
				</div>
				<div className="lastmodified__news">
					<div className="main__new">
						<div className="banner">
							<img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/gallery-5-390x220.jpg" alt=""/>
							<div className="category">Cars</div>
						</div>
						<div className="content">
							<div className="title">
								Of course Uber is working on a flying car project
							</div>
							<div className="date"><AiOutlineClockCircle /> Dec 12, 2016</div>
						</div>
					</div>
					<div className="other__news">
					{otherNews.map(el => (						
						<div className="other__news__item" key={el.id}>
							<div className="banner">
								<img src={el.img} alt="" />
							</div>
							<div className="content">
								<p className="title">{el.title}</p>
								<div className="date"><AiOutlineClockCircle />{el.date}</div>
							</div>
						</div>
					))}
					<button className="showmore-btn">Show More</button>
					</div>
				</div>
			</div>
		</Box>
	)
}

export default LastModified;