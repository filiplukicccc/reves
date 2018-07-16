import React from 'react';
import SidebarHol from './Sidebar';
import Footer from './Footer';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

const AboutHolding = () => (
	<div>
		<SidebarHol />
		<Grid>
			<GridRow centered>
				<GridColumn computer={5} tablet={7} mobile={14}>
					<h2>ABOUT US</h2>
					<p>REVES Holding is a leading investment holding company based in Belgrade, Serbia. Our long-term goals are to further diversify our holding portfolio and to help companies realising their growth potential by providing them with patient capital and outstanding operational support.</p>
				</GridColumn>
				<GridColumn computer={5} tablet={7} mobile={14}>
					<h2>OUR VISION</h2>
					<p>Our strategic emphasis is on identifying the most promising business opportunities to invest and realize value from undervalued assets. We have a profound understanding of a variety of sectors, including finance, trading, commerce, real estate and gastronomy. Our strong network across Central and Eastern European Countries is key to our success and stimulates continuous business development and diversification.</p>
				</GridColumn>
			</GridRow>
		</Grid>
		<Footer />
	</div>
)

export default AboutHolding;
