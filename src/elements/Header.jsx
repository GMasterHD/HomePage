import React from 'react'
import PropTypes from 'prop-types'

import NavBar from '../components/NavBar'
import './Header.css'

function Header(props) {
	return (
		<div className='Header'>
			<a id='start' />
			<div className='BrandLogo'>
				<img className='BrandLogo' src="https://via.placeholder.com/200x75" />
					<NavBar hrefs={[
						{ name: "Games", href: [
							{ name: "Craftmechanics", href: "/" }
						]},
						{ name: "Development", href: [
							{ name: "Road Map", href: "roadmap" },
							{ name: "Changelogs", href: "changelogs" }
						]},
						{ name: "Wiki", href: "games" },
						{ name: "About", href: "games" }
					]}/>
				<img className='RightLogo' src="https://via.placeholder.com/200x75" />
			</div>
		</div>
	)
}

Header.propTypes = {}

export default Header
