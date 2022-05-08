import React from 'react'
import PropTypes from 'prop-types'

import './NavBar.css'

function NavBar({ hrefs }) {
	const tabs = [];
	var tempTabs = [];

	hrefs.map(e => {
		if(typeof e.href == 'string') {
			tabs.push(<>
				<div className='NavSeperator' />
				<a href={e.href} className="NavItem">{e.name}</a>
			</>)
		} else {
			e.href.map(f => {
				tempTabs.push(
					<li className="SubNavItemItem Navitem"><a href={f.href}>{f.name}</a></li>
				)
			})

			tabs.push(<>
				<div className='NavSeperator' />
				<div>

					<div className="SubNavContainer">
					<a href="#" className="NavItem SubNavItem">{e.name}</a>
						<ul>
							{tempTabs}
						</ul>
					</div>
				</div>
			</>)

			tempTabs = [];
		}
	})
	return (
		<>
			<div class='NavBar'>
				{tabs}
				<div className='NavSeperator' />
			</div>
		</>
	)
}

NavBar.propTypes = {}

export default NavBar
