import React from 'react'
import { isMobile } from 'react-device-detect'
import Wheather from './components/Wheather'
import Menu from './components/Menu'

class App extends React.Component{
  render(){
    return <div>
      {isMobile ? <div><Wheather />
      <Menu /></div> : <div>노 핸드폰</div>}

    </div>
  }
}

export default App;
