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
			<div className='NavBar'>
			<div className="NavBarCompactReplace">
				</div>
				<div className="NavBarHide">
					{tabs}
					<div className='NavSeperator' />
				</div>
			</div>
			<div className="CompactNavBarButton" onClick={onClick} id='fixed'>	
			</div>
			<div className='NavBarCompact NavBarCompactHandle' id=''>
				<ul>
					<li><a className='CompactNavItemItem' href="">Nav Link A</a></li>
					<li><a className='CompactNavItemItem' href="">Nav Link B</a></li>
					<li><a className='CompactNavItemItem' href="">Sub Nav Link C</a></li>
					<li><a className='CompactNavItemItem' href="">Sub Nav Link D</a></li>
					<li><a className='CompactNavItemItem' href="">Nav Link E</a></li>
				</ul>
			</div>
		</>
	)
}

function onClick() {
	const e = document.getElementsByClassName('NavBarCompactHandle')[0]
	if(e.id == '') {
		e.id = 'hidden'
	} else {
		e.id = ''
	}
}

NavBar.propTypes = {}

export default NavBar
