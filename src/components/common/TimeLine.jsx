import React from 'react'
import '../../styles/TimeLine.css'
const TimeLine = (props) => {
  const renderItems = () => {
    const children = []
    if(props.ProfJourney){
      props.ProfJourney.map((item, key) => {
      children.push(<div className="card">
      <div className="info">
        <h2 className="title">{item.title}</h2>
        
        <p className="role">{item.role} <span className="subtitle">[{item.journey}]</span></p>
        <p>{item.content}</p>
      </div>
    </div>)
      })
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