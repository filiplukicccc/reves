import React, { Component } from 'react'
import AboutTechnologies from './AboutTechnologies';
import ContactTechnologies from './ContactTechnologies';
import TeamTechnologies from './TeamTechnologies';
import SidebarTech from './Sidebar';
import { Grid, GridRow } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import './styleTech.css';

configureAnchors({ offset: -60, scrollDuration: 800 })



class HomeTechnologies extends Component {
	render() {
		return (
			<div>
				<SidebarTech />
				<div className='divBack'>
					<div style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', background: 'rgba(0,53,113,0.52)' }}>
					</div>
					<h1 style={{ textAlign: 'center' }}>Some quote about reves technologies</h1>
				</div>
				<ScrollableAnchor id={'about'}>
					<AboutTechnologies />
				</ScrollableAnchor>
				<ScrollableAnchor id={'team'}>
					<TeamTechnologies />
				</ScrollableAnchor>
				<ScrollableAnchor id={'contact'}>
					<ContactTechnologies />
				</ScrollableAnchor>
			</div>
		)
	}
}
export default HomeTechnologies;