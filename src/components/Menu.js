import React from 'react'

class Menu extends React.Component{
  render(){
    return <nav style={{
        width:'100%', height:100, position:'fixed', bottom: 0, background: 'cyan'
    }}>
    <ul className="nav">
    <li><a href="">날씨정보</a></li>
    <li><a href="">주변지도</a></li>
    <li><a href="">산책시간</a></li>
    <li><a href="">다이어리</a></li>        
    </ul>
</nav>
  }
}

export default Menu


