import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faClipboard, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import "../styles/Menu.css"


class Menu extends React.Component{
  render(){
    return <nav>
    <ul>
    <li onClick={() => this.props.changeMenu(0)}><FontAwesomeIcon icon={faCloudSun} style={{width: 55, height:55, color: '#aeaeae'}} /></li>    
    <li onClick={() => this.props.changeMenu(1)}><FontAwesomeIcon icon={faHourglassHalf} style={{width: 55, height:55, color: '#aeaeae'}} /></li>
    <li onClick={() => this.props.changeMenu(2)}><FontAwesomeIcon icon={faClipboard} style={{width: 55, height:55, color: '#aeaeae'}} /></li>        
    </ul>
</nav>
  }
}

export default Menu


