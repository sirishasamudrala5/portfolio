import React from 'react'
import '../../styles/TimeLine.css'
const TimeLine = (props) => {
  const renderItems = () => {
    const children = []
    if(props.ProfJourney){
      props.ProfJourney.map((item, key) => {
      children.push(<div className="card">
      <div className="info">
        <h3 className="title">{item.title}</h3>
        <span className="subtitle">{item.journey}</span>
        <h5>{item.role}</h5>
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
    {/* <div className="outer">
      <div className="card">
        <div className="info">
          <h3 className="title">Title 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className="card">
        <div className="info">
          <h3 className="title">Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className="card">
        <div className="info">
          <h3 className="title">Title 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className="card">
        <div className="info">
          <h3 className="title">Title 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className="card">
        <div className="info">
          <h3 className="title">Title 5</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
    </div> */}
    {renderItems()}
  </div>)
}

export default TimeLine