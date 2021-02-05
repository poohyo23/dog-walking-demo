import React from 'react'
import '../styles/Wheather.css'
// import Menu from'./Menu'
import sun from '../images/sun.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faCloudShowersHeavy, faSnowflake, faSmog, faCloudRain, faBolt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
 

const callApi = async () => await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=37.5683&lon=126.9778&exclude=current,minutely,hourly&appid=18abf9c775b95cd53ed536d7b357d296")

//https://api.openweathermap.org/data/2.5/onecall?lat=37.5683&lon=126.9778&exclude=current,minutely,hourly&appid=18abf9c775b95cd53ed536d7b357d296
class Wheather extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isThereData: false,
      today: {},
      tomorrow: {},
      todayMain: ""
    }
  }

  componentDidMount(){
    callApi().then(result => {
      this.setState({
        today: {
          min: result.data.daily[0].temp.min,
          max: result.data.daily[0].temp.max
        },tomorrow: {
          min: result.data.daily[1].temp.min,
          max: result.data.daily[1].temp.max
        },
        todayMain:result.data.daily[0].weather[0].main,
        isThereData: true
      })
    })
  }
  render(){

    return <div className="container">
    {this.state.isThereData && <>
    
      <header>
      <h1 style={{color:'#FF9436'}}>HAVE A GOOD DAY~!</h1>
      <p>산책 전 오늘의 날씨 먼저 확인해보세요!</p>
    </header>
    
    <div className="wheather_icon">
      {this.state.todayMain === "Clouds"  &&  <FontAwesomeIcon icon={faCloud} style={{width: 150, height:150, color: '#aeaeae'}} />}
      {this.state.todayMain === "Clear"  &&  <FontAwesomeIcon icon={faSun} style={{width: 150, height:150, color: 'yellow'}} />}
      {this.state.todayMain === "Snow"  &&  <FontAwesomeIcon icon={faSnowflake} style={{width: 150, height:150, color: '#36d0ff'}} />}
      {this.state.todayMain === "Rain"  &&  <FontAwesomeIcon icon={faCloudShowersHeavy} style={{width: 150, height:150, color: '#aeaeae'}} />}
      {this.state.todayMain === "Atmosphere"  &&  <FontAwesomeIcon icon={faSmog} style={{width: 150, height:150, color: '#aeaeae'}} />}
      {this.state.todayMain === "Drizzle"  &&  <FontAwesomeIcon icon={faCloudRain} style={{width: 150, height:150, color: '#aeaeae'}} />}
      {this.state.todayMain === "Thunderstorm"  &&  <FontAwesomeIcon icon={faBolt} style={{width: 150, height:150, color: 'yellow'}} />}

      </div>
    <div><h4 className="today_temp">오늘 온도</h4>
    <p className="temp1" >{(this.state.today.max - 273.15).toFixed(0)}{"℃"} / {(this.state.today.min - 273.15).toFixed(0)}{"℃"} </p></div>
    <div><h4 className="tomorrow_temp">내일 온도</h4>
    <p className="temp2">{(this.state.tomorrow.max - 273.15).toFixed(0)}{"℃"} / {(this.state.tomorrow.min - 273.15).toFixed(0)}{"℃"}</p></div>    

    
    </>}
    
    </div>
  }
}

export default Wheather

// http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=3418e4d33e1d68afaadbb4a700f37d38