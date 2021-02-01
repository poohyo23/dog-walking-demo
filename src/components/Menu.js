import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faClipboard, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import "../styles/Menu.css"


class Menu extends React.Component{
  render(){
    return <nav>
    <ul>
    <li><a href="weather"><FontAwesomeIcon icon={faCloudSun} style={{width: 55, height:55, color: '#aeaeae'}} /></a></li>    
    <li><a href="walktimer"><FontAwesomeIcon icon={faHourglassHalf} style={{width: 55, height:55, color: '#aeaeae'}} /></a></li>
    <li><a href="diary"><FontAwesomeIcon icon={faClipboard} style={{width: 55, height:55, color: '#aeaeae'}} /></a></li>        
    </ul>
</nav>
  }
}

export default Menu


