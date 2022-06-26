import React from 'react'
import { useState } from 'react'
import '../styles/StickySideBar.css'

import DefaultMenu from './menu/DefaultMenu'
import SmallMenu from './menu/SmallMenu'

var mql = ''

if (typeof window !== "undefined") { 
    mql = window.matchMedia('(max-width: 800px)'); 
}
let mobileView = mql.matches;
console.log("mobileView", mobileView)

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
					<p>Technical Lead &nbsp;&bull;&nbsp; Certified Data Scientist</p>
				</header>
				{!mobileView && <DefaultMenu {...props} />}
				{showMenu &&<SmallMenu {...props} setShowMenu={setShowMenu} />}
			</div>
			</div>
	</div>)
}

export default StickeySideBar