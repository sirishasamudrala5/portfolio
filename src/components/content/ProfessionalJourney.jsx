import React from 'react'
import TimeLine from '../common/TimeLine'

const ProfJourney = [{
    title: `Healthplix`,
    journey: `Aug 2021 - Present`,
    link: `https://healthplix.pro`,
    role: `Technical Lead`, 
    content: `Successfully initiated, designed and executing the core product revamp with cutting edge tech [Micro FrontEnds + Micro Services] | Responsible for weekly releases, DB operation requests, Sprint planning, Resource management | Successfully delivered new features to improve user experience and reduce the consultation time [OCR, prescription in SMS, Knowledge repo] | Mentoring Engineering team to up-skill in Go, Python, Typescript, ORMs, micro-front-ends, storybooks UI, TailwindCSS, NodeJs | Successfully designed, executed and delivered doctor referral program which increased lead generation & a multi platform desktop application to increase the throughput of users with limited internet facility | Complete project ownership whilst handling the team of FE and BE engineers and devOps following Agile Methodologies | Perform code reviews to improve code quality and logical thinking of team | Organised team building activities and brown bag sessions to boost our work culture | Crafted Internship programs | Actively aided Technical Hiring`
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
    content: `Grabbed the onsite work opportunity with one of our biggest client's - Honeywell, migrated Safety Suite Product code from React15 to React16 | Built a mobile application [in React Native, NodeJs, Loopback3 & PostgreSQL], provided a plugin [in .NetCore] for our client - Adecco | Built a multi-tenant web application [in Python, Okta (SSO), Casbin, FastAPI, React.js, TypeScript.js, GMaps] for our Australian client - Render Networks | Actively aided technical hiring, team bonding activities and in-house training program called HashedIn university to train and mentor newly onboarded & junior developers`
},{
    title: `Inspirisys`,
    journey: `DEC 2018 - FEB 2019`,
    link: `https://www.inspirisys.com`,
    role: `Software Engineer`, 
    content: `Independently built a chatbot management dashboard [in React.js, NodeJs, Python & PostgreSQL, GraphQL, MongoDB to feed/train a chatbot] | Improved the dialog flow functionality of chatbot widget | Actively aided Technical Hiring- Independently built a chatbot management dashboard [in React.js, NodeJs, Python & PostgreSQL, GraphQL, MongoDB to feed/train a chatbot] - Improved the dialog flow functionality of chatbot widget - Actively aided Technical Hiring
    `
},{
    title: `Divum`,
    journey: `JUN 2018 - OCT 2018`,
    link: `https://divum.in`,
    role: `Application Developer (R&D)`,
    content: `Analysed different cloud technologies [GCP, AWS, Oracle and SAP] to suggest right one based on client's requirements | Lead a team of two on building BE service [in Flask(Python)] for a multi-tenant SASS product | Developed POCs on SAP IoT that connects SAPUI5 to HANA, cross platform integration [Magento with Google datastore] | Contributed in building an open source library to generate jsonLD using Python (for param.io)`
},{
    title: `GoBumpr`,
    journey: `DEC 2016 - MAY 2018`,
    link: `https://gobumpr.com/`,
    role: `FullStack Developer`, 
    content: `Independently developed company's first internal CRM [in core PHP7, Javascript & MySQLi, HTML, CSS, jQuery, Ajax] massively moved the customer engagement activities from excel sheets to dynamic website thus saved 60% of time for customer support team & BDMs | Built Admin panels to monitor conversion rate using Heat-maps, and other metrics | Built complementary static websites for the garage partners in an interactive way | Written RESTFul APIs [in GoLang] for Axle App | Actively aided in hiring interns- Built complementary static websites for the garage partners in an interactive way | Written RESTFul APIs [in GoLang] for Axle App | Actively aided in hiring interns`
}]

const ProfessionalJourney = () => {
    return (<section id="work">
        <h2>My Professional Journey</h2>
        <TimeLine ProfJourney={ProfJourney} />
    </section>)
}

export default ProfessionalJourney