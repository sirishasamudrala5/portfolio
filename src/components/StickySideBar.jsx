import * as React from 'react'
import '../styles/StickySideBar.css'

const StickeySideBar = () => {
  return (<div className='sticky-sidebar'><div id="wrapper">
			<div id="bg"></div>
			<div id="overlay"></div>
			<div id="main">
					<header id="header">
						<h1>Sirisha Samudrala</h1>
						<p>Technical Lead &nbsp;&bull;&nbsp; Certified Data Scientist</p>
						
					</header>

					<footer id="footer">
            <nav>
							<ul>
								<li><a href="https://www.linkedin.com/in/samudralasirisha/?originalSubdomain=in" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
								<li><a href="https://github.com/sirishasamudrala5" class="icon brands fa-github"><span class="label">Github</span></a></li>
								<li><a href="mailto:sirisha.samudrala15@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
                <li><a href="tel:9398991565" class="icon solid fa-phone"><span class="label">Mobile</span></a></li>
							</ul>
						</nav>
						<div class="copyright"><a href="" class="icon solid fa-map-marker"><span class="label">Location</span></a> &nbsp;Bangalore, Karnataka, India</div>
					</footer>
          </div>
			</div>
		</div>)
}

export default StickeySideBar