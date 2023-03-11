import React from 'react'
import '../../styles/TimeLine.css'
const TimeLine = (props) => {
  const renderItems = () => {
    const children = []
    if(props.ProfJourney){
      props.ProfJourney.map((item, key) => (
      children.push(<div className="card" key={key}>
      <div className="info">
        <h2 className="title">{item.title}</h2>
        
        <p className="role">{item.role}</p>
        <p className="subtitle">[{item.journey}]</p>
        <br />
        <p>{item.content}</p>
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