import React from 'react'
import { isMobile } from 'react-device-detect'
import Wheather from './components/Wheather'
import Diary from './components/Diary'
import WalkTimer from './components/WalkTimer'
import Menu from './components/Menu'
import { Route, Switch } from 'react-router-dom'


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
      <Switch>
        <Route path="/weather">
          <Wheather />
          <Menu changeMenu={this.changeMenu}></Menu>
        </Route>
        <Route path="/diary">
          <Diary />
          <Menu changeMenu={this.changeMenu}></Menu>
        </Route>
        <Route path="/walktimer">
          <WalkTimer />
          <Menu changeMenu={this.changeMenu}></Menu>
        </Route>
        <Route path="/">
          <Wheather />
          <Menu changeMenu={this.changeMenu}></Menu>
        </Route>
      </Switch>
    </div>
  }
}

export default App;
