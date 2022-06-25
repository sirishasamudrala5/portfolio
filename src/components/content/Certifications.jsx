import React from 'react'
// import ImageGallery from 'react-image-gallery'

const certificationsData = {
    images : [
          {
            original: 'images/certifications/c1.png',
            thumbnail: 'images/certifications/c1.png',
            description: 'Aug 2019: Machine Learning on AWS',
            thumbnailHeight: "80px"
          },
          {
            original: 'images/certifications/c2.png',
            thumbnail: 'images/certifications/c2.png',
            description: 'Nov 2019: AWS Technical Professional',
            thumbnailHeight: "80px"
          },
          {
            original: 'images/certifications/c3.png',
            thumbnail: 'images/certifications/c3.png',
            description: 'Nov 2019: PG Certificate in DataScience',
            thumbnailHeight: "80px"
          },
          {
            original: 'images/certifications/c4.png',
            thumbnail: 'images/certifications/c4.png',
            description: 'May 2022: The Complete Developers Guide [GoLang]',
            thumbnailHeight: "80px"
          },
          {
            original: 'images/certifications/c5.png',
            thumbnail: 'images/certifications/c5.png',
            description: 'May 2022: gRPC [GoLang] Master Class',
            thumbnailHeight: "80px"
          },
    ]
} 
const Certifications = () => {
    return (<section id="certifications">
        <div className='c-gallery'>
            {/* <ImageGallery 
            items={certificationsData.images}
            showPlayButton={false}
            autoPlay={true}
            showNav={false}
            /> */}
        </div>
        <h2>My Certifications:</h2>
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