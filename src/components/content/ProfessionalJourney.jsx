import React from 'react'
import TimeLine from '../common/TimeLine'

const ProfJourney = [{
    title: `Healthplix`,
    journey: `Aug 2021 - Present`,
    link: `https://healthplix.pro`,
    role: `Technical Lead`, 
    content: `Proposed and working towards Micro FE + Micro Services Architechture | Built EMR Offline MVP, leading the team for features development (ElectronJS, React JS, TypeScript, WatermelonDB, MySQL, MongoDB) | OCR feature in EMR | Doctor Referral Program | React SPA to Download Prescriptions | Product Updates, Release Notes | Initiated Internship program | Technical Hiring`
},{
    title: `JustDial`,
    journey: `MAY 2021 - AUG 2021`,
    link: `https://www.justdial.com`,
    role: `Senior Software Engineer`, 
    content: `Built POC in NextJS, Leaflet, MongoDB | Built features in Hotels module (NextJS)`
},{
    title: `HashedIn By Deloitte`,
    journey: `MAY 2019 - MAY 2021`,
    link: `https://hashedin.com`,
    role: `Senior Software Engineer II`, 
    content: `Honeywell: Migrated Safetysuite codebase to React16, built new features | Adecco: Built mobile application in Reactnative & postgreSQL, plugin for .NetCore | Render Networks: Built a multitenant platform (in python, Okta, Casbin, Fast API), Built React SPA (Typescript, GMaps) | Technical Hiring | Mentor juniors | Hashedin University Volunteer | Organised team bonding activities`
},{
    title: `Inspirisys`,
    journey: `DEC 2018 - FEB 2019`,
    link: `https://www.inspirisys.com`,
    role: `Software Engineer`, 
    content: `Build Chatbot on RASA dailogflow | Built a ReactJS dashboard to feed and train the bot | Built a human chat interface connecting the chatbot | Tehcnical hiring`
},{
    title: `Divum`,
    journey: `JUN 2018 - OCT 2018`,
    link: `https://divum.in`,
    role: `Application Developer (R&D)`,
    content: `Built MVPs: Vehicle tracking (IOT), migration of data from magento to DataStore(Google), multitenant SAAS product | JSONLD library to preprocess invoice data in Etherium blockchain`
},{
    title: `GoBumpr`,
    journey: `DEC 2016 - MAY 2018`,
    link: `https://gobumpr.com/`,
    role: `FullStack Developer`, 
    content: `Build CRM: A multi user platform that manages day to day operations, customet support, derives useful insights for Brand marketing and running campaigns | Built service partner on-boarding portal | Built a Rest API service in GoLang for B2B mobile app called Axle |  Built and deloyed responsive static webapps on demand | Tehcnical hiring`
}]

const ProfessionalJourney = () => {
    return (<section id="work">
        <h2>My Professional Journey</h2>
        <TimeLine ProfJourney={ProfJourney} />
    </section>)
}

export default ProfessionalJourney