import React from 'react'
import myResume from '../../static/Resume.pdf'

const SmallMenu = (props) => {
    return(
    <div className='menu-small'>
    <h2 className={'menu-bar-opened'}><i className="fa fa-th-large" aria-hidden="true" onClick={() => props.setShowMenu(false)}></i></h2>
    <ul>
        <li className={`${props.curPage === 'about' ? 'activeMenuItem': ''}`} onClick={() => {props.setCurPage('about'); props.setShowMenu(false)} }>About</li>
        <li className={`${props.curPage === 'work' ? 'activeMenuItem': ''}`} onClick={() => {props.setCurPage('work'); props.setShowMenu(false)} }>Work</li>
        {/* <li className={`${props.curPage === 'projects' ? 'activeMenuItem': ''}`} onClick={() => {props.setCurPage('projects') ; props.setShowMenu(false)}}>Personal Projects</li> */}
        <li className={`${props.curPage === 'certifications' ? 'activeMenuItem': ''}`} onClick={() => {props.setCurPage('certifications') ; props.setShowMenu(false)}}>Certifications</li>
        {/* <li className={`${props.curPage === 'casestudies' ? 'activeMenuItem': ''}`} onClick={() => {props.setCurPage('casestudies') ; props.setShowMenu(false)}}>Case Studies</li> */}
        {/* <li onClick={()=> props.setShowMenu(false)}><a href={myResume} download="Sirisha-Resume.pdf" className="downloadBtnSmall">Download CV</a></li> */}
    </ul>
    <a href={myResume} download="Sirisha-Resume.pdf" className="downloadBtnSmall">Download CV</a>

    <footer id="footer-small">
        <nav>
            <ul>
                <li><a href="https://www.linkedin.com/in/samudralasirisha/?originalSubdomain=in" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/sirishasamudrala5" className="icon brands fa-github"><span className="label">Github</span></a></li>
                <li><a href="mailto:sirisha.samudrala15@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                <li><a href="tel:9398991565" className="icon solid fa-phone"><span className="label">Mobile</span></a></li>
            </ul>
           
        </nav>
        <div className="copyright"><span className="icon solid fa-map-marker"><span className="label">Location</span></span> &nbsp;Bangalore, Karnataka, India</div>
    </footer>
    </div>)
} 

export default SmallMenu