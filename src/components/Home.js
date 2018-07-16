import React from 'react';
import { Grid, GridRow, GridColumn, Header } from 'semantic-ui-react';
import movie from '../images/Ferris-wheel.mp4';
import '../index.css';

const Home = () => (
	<div>
		<div>
			<div className='videoDiv'>
				<div className='shadowDiv'><h1>HOME REVES GROUP</h1></div>
				<video className='videoCover' autoPlay loop src={movie}>
				</video>
			</div>
		</div>
	</div>
)

export default Home;
