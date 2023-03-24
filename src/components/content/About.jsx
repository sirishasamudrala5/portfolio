import React from 'react'
import Typewriter from 'typewriter-effect'

const AboutTags =  [ "@code_g00d", "a techie by day.", "driven by passion.", "a startup junkie.", "your best hire!"]

const TechstackData = [
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

const SkillSetData = [{
    title: 'FrontEnd',
    data: 'ReactJs(Redux, Hooks), TypeScript, Javascript, NextJs, ElectronJs, React Native'
},{
    title: 'BackEnd',
    data: 'GoLang(Chi, gRPC), Python(FastAPI, Flask, Django), Node.Js(Express, Loopback3), PHP7(core, Laravel)'
},{
    title: 'Database',
    data: 'MySQL, PostgreSQL, MongoDB, SQLite3, ORMs(SQLAlchemy, MGM, gORM), Websockets'
},{
    title: 'Tests & Docs',
    data: 'Pytest, Jest, Prometheus, Swagger, Postman, Storybook, TailwindCSS, MaterialUI, Ant, Bootstrap3, SCSS'
},{
    title: 'DevOps/Cloud',
    data: 'Docker, Jenkins, Okta, AWS(S3, CloudFront, Route53, EC2, ECS, CodePipelines, Lambda, Cloudwatch), SAAS(SSO, JWT Tokens, Casbin - RBAC)'
},{
    title: 'Others',
    data: 'Dialogflow, NLP, ML, IoT, Tensorflow, Etherium network'

}]

const About = () => {
    const render_techstack = () => {
        const children = []
        TechstackData.map((item, key) => (
          children.push(
            <div className="tech tooltip" key={key}>
            <img  className="tech-icon" src={item.src} alt={item.description} />
            <span className="tooltiptext">{item.description}</span>
        </div>
          )
          ))
        return(<div className='techstack'>{children}</div>)
    }

    const render_skillset = () => {
        const children = []
        SkillSetData.map((item, key) => (
          children.push(
            <div className="card" key={key}>
                <div className="info">
                <h3 className="header">{item.title}</h3>
                <p>{item.data}</p>
            </div>
        </div>
          )
          ))
        return(<div className='skillset'>{children}</div>)
    }

    return (<section id="about">
        <div className='open-to-work'><h2>Open to Opportunities</h2><p>Assistant/Associate Engineering Manager | Sr Tech Lead</p></div>
        <p align="center">Preferred Techstack</p>{render_techstack()}
        <br />
        <div className='about-container'>
            <div className='card about-container-col about-card'>
            <div className='info'>
                <h2 className='title'>I'm <Typewriter options={{ strings: AboutTags, autoStart: true, delay: 75, loop: true}} cursor /></h2>
                <p className='about-content'>With 6.7+ years of experience and a proven track record of developing productive teams, I am a Technical Lead at the health-tech firm Healthplix. In addition to being skilled at managing architectural changes, adhering to Agile principles, and enhancing code quality, I have a strong passion for growth, diversity, and balance. I have a BTech from JNTU University & a PG Diploma in Data science from Carnegie Mellon University. I'm a volunteer and speaker at the WomenWhoCode organisation. In my spare time, I enjoy making crafts.</p>
            </div>
            </div>
            <div className='about-container-col'>{render_skillset()}</div>
        </div>
</section>)
}

export default About