import React from 'react'
import { isMobile } from 'react-device-detect'
import Wheather from './components/Wheather'
import Menu from './components/Menu'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      currentMenuIdx : 0
    }
  }

  changeMenu = (menu) => {
    this.setState({
      currentMenuIdx : menu
    })
  }

  render(){
    return <div>
      {isMobile ? <div>{this.state.currentMenuIdx === 0 ? <Wheather />: <div>0이 아니다</div>}
      <Menu changeMenu={this.changeMenu}  /></div> : <div>노 핸드폰</div>}

    </div>
  }
}

export default App;
