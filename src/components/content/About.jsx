import React from 'react'

const techstackData = [
    {
        src: 'images/tech/typescript.png',
        description: 'typescript',
    },
    {
        src: 'images/tech/react.png',
        description: 'react',
    },
    {
        src: 'images/tech/python.png',
        description: 'python',
    },
        {
        src: 'images/tech/nodejs.png',
        description: 'nodejs',
    },
    {
        src: 'images/tech/golang.png',
        description: 'golang',
    },
    
]
const About = () => {
    const render_techstack = () => {
        const children = []
        techstackData.map((item, key) => (
          children.push(
            <div className="tech" key={key}>
            <img  className="tech-icon" src={item.src} alt={item.description} />
        </div>
          )
          ))
        return(<div className='techstack'>{children}</div>)
      }

    return (<section id="about">
        <div className='open-to-work'><h2>Open to Opportunities</h2><p>Assistant/Associate Engineering Manager | Sr Tech Lead</p></div>
        <p align="center">Preferred Techstack</p>{render_techstack()}
        <h2>About me</h2>
        <p>Technical Lead, vivid learner and a vesatile coder with 6.6+ years with a strong record of building an efficient team.</p>
        <p>Currently working at Healthplix, a health-tech startup. Empowering the team driven by the values of growth, diversity and balance.</p>
        <p>Proficient in handling architectural changes, following Agile methodology and polishing code quality of the team.</p>
        <p>BTech from JNTU University, PG Diploma in Datascience from Carnegie Mellon University[INSOFE]</p>
        <p>Volunteer and speaker at WomenWhoCode organisation(NGO) | Craft Artist by hobby.</p>
        <h5>My Skillset</h5>
        <ul>
            <li>React JS, Electron JS, TypeScript, Javascript, Next JS, React native</li>
            <li>Python(Flask, Django), Node JS, GoLang, PHP(core, Laravel)</li>
            <li>MySQL, PostgreSQL, MongoDB, JSONLD</li>
            <li>Pytest, Jest, Prometheus, Swagger, Postman</li>
            <li>SAAS, SSO, JWT, Websocket, Restful, gRPC, PubSub, Okta, Casbin</li>
            <li>Dialogflow, NLP, ML, Tensorflow, IoT, Etherium network</li>
            <li>Docker, Jenkins, AWS CodePipeline</li>
            <li>SAP(UI5, HANA, IoT), AWS(S3, Cloudfront, Route53, EC2, Lambda, API Gateway, Cloudwatch), GCP(Firestore, DataStore)</li>
        </ul>
        <p>Exploring ErLang and Flutter in my free time</p>
</section>)
}

export default About