import React, { useState } from "react"
import Collapsible from 'react-collapsible'

const CollapsableCard = (props) => {
    const [text, setText] = useState(<span>Read more <span className="icon solid fa-caret-down"></span></span>)

    return <Collapsible trigger={text} onOpening={() => setText(<span>Close <span className="icon solid fa-caret-up"></span></span>)} onClosing={() => setText(<span>Read more <span className="icon solid fa-caret-down"></span></span>)}>
    <br />
    <p>{props.content}</p>
    <br />
    </Collapsible>
}

export default CollapsableCard