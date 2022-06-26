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
    ]
} 
const Certifications = (props) => {

  const render_cert = () => {
    const children = []
    certificationsData.images.map((item, key) => (
      children.push(
        <div key={key}>
        <img src={item.src} alt={item.description} />
        <p className="legend">{item.description}</p>
    </div>
      )
      ))
    return(<Carousel showArrows={true} autoPlay={true}>{children}</Carousel>)
  }

    return (<section id="certifications">
           {render_cert()}
        <h2>My Certifications</h2>
        <div className='c-info'>
            <ul>
            <li>Aug 2019 : From AWS : Machine Learning on AWS</li>
            <li>Nov 2019 : From AWS : AWS Technical Professional</li>
            <li>Nov 2019 : From INSOFE : Post-graduate Gertificate in DataScience</li>
            <li>May 2022 : From Udemy : The Complete Developers Guide [GoLang]</li>
            <li>May 2022 : From Udemy : gRPC [GoLang] Master Class</li>
            </ul>
        </div>
     </section>)
}

export default Certifications