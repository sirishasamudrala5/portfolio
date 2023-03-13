import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const certificationsData = {
    images : [
          {
            src: 'images/certifications/c1.png',
            description: 'Aug 2019: Machine Learning on AWS',
          },
          {
            src: 'images/certifications/c2.png',
            description: 'Nov 2019: AWS Technical Professional',
          },
          {
            src: 'images/certifications/c3.png',
            description: 'Nov 2019: PG Certificate in DataScience',
          },
          {
            src: 'images/certifications/c4.png',
            description: 'May 2022: The Complete Developers Guide [GoLang]',
          },
          {
            src: 'images/certifications/c5.png',
            description: 'May 2022: gRPC [GoLang] Master Class',
          },
          {
            src: 'images/certifications/c6.png',
            description: 'Feb 2023: Geektrust Coding Challenge [ReactJs]',
          },
    ]
} 
const Certifications = (props) => {

  const render_cert = () => {
    const children = []
    certificationsData.images.map((item, key) => (
      children.push(
        <div key={key}>
        <img src={item.src} alt={item.description} />
        {/* <p className="legend">{item.description}</p> */}
    </div>
      )
      ))
    return(<Carousel showArrows={true} autoPlay={true}>{children}</Carousel>)
  }

    return (<section id="certifications">
           {render_cert()}
        <h2>Certifications</h2>
        <div className='c-info'>
          <p>Aug 2019: Machine Learning on AWS</p>
          <p>Nov 2019: AWS Technical Professional</p>
          <p>Nov 2019: PG Diploma in Data Science</p>
          <p>May 2022: The Complete Developers Guide [GoLang]</p>
          <p>May 2022: gRPC [GoLang] Master Class</p>
          <p>Feb 2023: GeekTrust Coding Challenge[React]</p>
        </div>
        <br />
     </section>)
}

export default Certifications