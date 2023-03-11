import React from 'react'
import { useState } from 'react'
import '../styles/StickySideBar.css'

import DefaultMenu from './menu/DefaultMenu'
import SmallMenu from './menu/SmallMenu'
import CountUp from 'react-countup'

var mql = ''
var mql_landscape = ''


if (typeof window !== "undefined") { 
    mql = window.matchMedia('(max-width: 800px)');
	mql_landscape = window.matchMedia('(max-height: 600px)') 
}
let mobileView = mql.matches || mql_landscape.matches;

const StickeySideBar = (props) => {
	const [showMenu, setShowMenu] = useState(false)
	return (<div className='sticky-sidebar'>
			<div id="wrapper">
			<div id="bg"></div>
			<div id="main">
				<header id="header">
				{mobileView && <h2 className={showMenu ? 'menu-bar-opened' : 'menu-bar'}><i className="fa fa-th-large" aria-hidden="true" onClick={() => setShowMenu(!showMenu)}></i></h2>}
					<img src="avatar.png" alt="Avatar" className="avatar"/>
					<h1>Sirisha Samudrala</h1>
					<div className='experience'><span id='exp-yrs'>
						<CountUp
						start={0.0}
						end={6.7}
						duration={3}
						separator=" "
						decimals={1}
						decimal="."
						/> Years</span>
						<span id='exp-title'>EXPERIENCE</span></div>
					<p>Technical Lead &nbsp;&bull;&nbsp; Certified Data Scientist</p>
				</header>
				{!mobileView && <DefaultMenu {...props} />}
				{showMenu &&<SmallMenu {...props} setShowMenu={setShowMenu} />}
			</div>
			</div>
	</div>)
}

export default StickeySideBar