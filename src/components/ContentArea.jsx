import React from 'react'
import '../styles/ContentArea.css'
import About from './content/About'
import ProfessionalJourney from './content/ProfessionalJourney'
import PersonalProjects from './content/PersonalProjects'
import Certifications from './content/Certifications'
import Blog from './content/Blog'

const ContentArea = (props) => {
  return (<div className='content-area'>
    {props.curPage === 'about' && <About />}
    {props.curPage === 'work' && <ProfessionalJourney />}
    {/* {props.curPage === 'projects' && <PersonalProjects />} */}
    {props.curPage === 'certifications' && <Certifications />}
    {props.curPage === 'blog' && <Blog />}
  </div>
  )
}

export default ContentArea