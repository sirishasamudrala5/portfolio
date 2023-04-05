import React from 'react'
import ReactCardCarousel from 'react-card-carousel';

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
        <div key={key} className='carousal-card'>
        <img src={item.src} alt={item.description} />
    </div>
      )
      ))
    return( <ReactCardCarousel autoplay={ true } autoplay_speed={ 1500 }>{children}</ReactCardCarousel>)
  }

    return (<section id="certifications">
      <div className='cert-container'>{render_cert()}</div>
     </section>)
}

export default Certifications