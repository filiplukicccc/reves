import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import Sidebar from './Sidebar';
import './styleHol.css';
import finance from '../../images/finance.png';
import commerce from '../../images/commerce.png';
import cogwheel from '../../images/cogwheel.png';
import house from '../../images/house.png';
import Footer from './Footer';

class HomeHolding extends Component {
	render() {
		return (
			<div>
				<Sidebar />
				<Grid centered>
					<Grid.Row>
						<div className="homeHolding">
							<div style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', background: 'rgba(0,53,113,0.6)' }}>
							</div>
							<h1>OUR SECRET OF SUCCESS IS ENTHUSIASM</h1>
						</div>
					</Grid.Row>
					<h2>IT’S THE FUEL THAT KEEPS OUR BUSINESSES AFLOAT.</h2>
					<GridRow centered className='homeText'>
						<GridColumn computer={5} tablet={7} mobile={14}>
							REVES Holding is a leading investment holding company investing and operating in Central and Eastern Europe. Our mission is to bring convenience to our clients through innovation, efficient service delivery, competence and flexibility.
						</GridColumn>
						<GridColumn computer={5} tablet={7} mobile={14}>
							We offer customer convenience and customer satisfaction by providing innovative top-quality products and effectively processing high speed and high volume transactions, whilst adhering to principles of integrity, transparency and fairness.
						</GridColumn>
					</GridRow>
					<GridRow centered>
						<GridColumn textAlign='center' className='flatDiv' computer={3} tablet={7} mobile={14}>
							<div className='flatBack'>
								<img src={finance} />
								<h3>FINANCE</h3>
							</div>
						</GridColumn>
						<GridColumn className='flatDiv' textAlign='center' computer={3} tablet={7} mobile={14}>
							<div className='flatBack'>
								<img src={commerce} />
								<h3>COMMERCE</h3>
							</div>
						</GridColumn>
						<GridColumn className='flatDiv' textAlign='center' computer={3} tablet={7} mobile={14}>
							<div className='flatBack'>
								<img src={cogwheel} />
								<h3>SOFTWARE DEVELOPMENT</h3>
							</div>
						</GridColumn>
						<GridColumn className='flatDiv' textAlign='center' computer={3} tablet={7} mobile={14}>
							<div className='flatBack'>
								<img src={house} />
								<h3>REAL ESTATE</h3>
							</div>
						</GridColumn>
					</GridRow>
					<h2>WHAT OUR PARTNERS SAY ABOUT US</h2>
					<GridRow centered>
						<GridColumn textAlign='center' computer={8}>
							<div className='partners'>
								<p>The deep understanding of the sectors in which REVES Holding operates, its extensive business network as well as the proximity to its customers allowed us to speed up our international business expansion and to increase our market share in Central Eastern Europe<br /><br />
									Andre Ringdorfer, B.Sc.<br />
									Finance</p>
							</div>
						</GridColumn>
					</GridRow>
				</Grid>
				<Footer />

			</div>
		)
	}
}

export default HomeHolding;
