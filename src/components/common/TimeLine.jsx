import React from 'react'
import '../../styles/TimeLine.css'
import CollapsableCard from './CollapsableCard'


const TimeLine = (props) => {
  const renderItems = () => {
    const children = []
    if(props.ProfJourney){
      props.ProfJourney.map((item, key) => (
      children.push( 
        <div className="card" key={key}>
      <div className="info">
        <h2 className="title">{item.title}</h2>
          <p className="role">{item.role}</p>
        <p className="subtitle">[{item.journey}]</p>
        <br />
       <CollapsableCard content={item.content} key={key} />
       <br />
      </div>
    </div>)
      ))
    }
    return(<div className="outer">
      {children}
      </div>)
  }

  return (<div className="timeline">
    {renderItems()}
  </div>)
}

export default TimeLine