import React, { Component } from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react';

class Footer extends Component {
	render() {
		return (
			<div>
				<Grid>
					<GridRow centered style={{ background: 'rgba(14,39,81,1)', color: 'white', padding: '40px 0' }}>
						<GridColumn computer={3} tablet={7} mobile={12}>
							logo
					</GridColumn>
						<GridColumn computer={3} tablet={7} mobile={12}>
							<h4 style={{ textAlign: 'center' }}>REGISTERED OFFICE</h4>
							<p>Beogradska 114a<br />
								11277 Belgrade (Ugrinovci)<br />
								Serbia</p>
						</GridColumn>
						<GridColumn computer={3} tablet={7} mobile={12}>
							<h4 style={{ textAlign: 'center' }}>BRANCH OFFICE</h4>
							<p>BRANCH OFFICE<br />
								Praska 36/8<br />
								11131 Beograd (Čukarica)
								Serbia
							</p>
						</GridColumn>
						<GridColumn computer={3} tablet={7} mobile={12}>
							<h4 style={{ textAlign: 'center' }}>CONTACT US</h4>
							<p>Phone: +381 11 405 1672<br /><br />
								office@reves-holding.com
							</p>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}
export default Footer;
