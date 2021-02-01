import React from 'react'
import '../styles/Wheather.css'
// import Menu from'./Menu'
import sun from '../images/sun.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faCloudShowersHeavy, faSnowman } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
 

const callApi = async () => await axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=3418e4d33e1d68afaadbb4a700f37d38")

//http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=3418e4d33e1d68afaadbb4a700f37d38

//http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=3418e4d33e1d68afaadbb4a700f37d38
class Wheather extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      today: {},
      tomorrow: {},
      todayMain: ""
    }
  }

  componentDidMount(){
    callApi().then(result => {this.setState({
        today: result.data.list[0].main,
        tomorrow : result.data.list[8].main,
        todayMain : result.data.list[0].weather[0].main
      })
      console.log(result.data.list[0].weather[0].main)
    })
  }
  render(){

    
    console.log(this.state)
    return <div className="container">
    
    <header>
      <h1 style={{color:'#FF9436'}}>산책 전 날씨 체크!</h1>
      <p>오늘도 댕댕이와 함께 즐거운시간~!</p>
    </header>
    
    <div>
      {this.state.todayMain === "Clouds" ?  <FontAwesomeIcon icon={faCloud} style={{width: 200, height:200, color: '#aeaeae'}} /> :
      <FontAwesomeIcon icon={faSun} style={{width: 200, height:200, color: 'yellow'}} />}
      </div>
    <div><h4 className="today_temp">오늘 온도</h4>
    <p className="temp1" >{(this.state.today.temp_max - 273.15).toFixed(0)}{"℃"} / {(this.state.today.temp_min - 273.15).toFixed(0)}{"℃"} </p></div>
    <div><h4 className="tomorrow_temp">내일 온도</h4>
    <p className="temp2">{(this.state.tomorrow.temp_max - 273.15).toFixed(0)}{"℃"} / {(this.state.tomorrow.temp_min - 273.15).toFixed(0)}{"℃"}</p></div>    

    
    </div>
  }
}

export default Wheather

// http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=3418e4d33e1d68afaadbb4a700f37d38