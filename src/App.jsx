import * as React from 'react'
import {StickeySideBar, ContentArea} from './components'
import './styles/App.css'

const App = () => {
  return (<div className='App'>
  <StickeySideBar />
  <ContentArea />
  </div>
  )
}

export default App