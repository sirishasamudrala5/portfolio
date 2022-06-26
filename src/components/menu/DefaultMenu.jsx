import React from 'react'
import myResume from '../../static/Resume.pdf'

const DefaultMenu = (props) => {
    return(<><menu id="menu">
    <ul>
        <li onClick={() => props.setCurPage('about')}>About</li>
        <li onClick={() => props.setCurPage('work')}>Professional Journey</li>
        {/* <li onClick={() => props.setCurPage('projects')}>Personal Projects</li> */}
        <li onClick={() => props.setCurPage('certifications')}>Certifications</li>
        <li><a href={myResume} download="Sirisha-Resume.pdf">Download CV</a></li>
    </ul>
    </menu>

    <footer id="footer">
        <nav>
            <ul>
                <li><a href="https://www.linkedin.com/in/samudralasirisha/?originalSubdomain=in" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/sirishasamudrala5" className="icon brands fa-github"><span className="label">Github</span></a></li>
                <li><a href="mailto:sirisha.samudrala15@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                <li><a href="tel:9398991565" className="icon solid fa-phone"><span className="label">Mobile</span></a></li>
            </ul>
        </nav>
        <div className="copyright"><span className="icon solid fa-map-marker"><span className="label">Location</span></span> &nbsp;Bangalore, Karnataka, India</div>
    </footer></>)
} 

export default DefaultMenu