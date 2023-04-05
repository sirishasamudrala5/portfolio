import React, { useState } from "react"
import Collapsible from 'react-collapsible'

const CollapsableCard = (props) => {
    return <Collapsible trigger={[props.data.title, <span className="icon solid fa-caret-down"></span>]} triggerTagName={"h2"} open={props.data.title == "Healthplix" ?  true : false} easing="ease-in-out" transitionTime={600}>
        <h2 className="title">{props.data.title}</h2>
          <p className="role">{props.data.role}</p>
        <p className="subtitle">[{props.data.journey}]</p>
        <br />
    <p>{props.data.content}</p>
    <br />
    </Collapsible>
}

export default CollapsableCard