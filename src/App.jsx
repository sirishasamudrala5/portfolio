import React, {useState} from 'react'
import StickeySideBar from './components/StickySideBar'
import ContentArea from './components/ContentArea'
import './styles/App.css'

const App = () => {
  const [curPage, setCurPage] = useState('about')
  return (<div className='App'>
  <StickeySideBar setCurPage={setCurPage} />
  <ContentArea curPage={curPage} />
  </div>
  )
}

export default App