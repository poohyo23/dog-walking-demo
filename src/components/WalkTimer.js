import React from 'react'
import '../styles/WalkTimer.css'

class WalkTimer extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        currentTime : 0,
        isChecked : false,
        isGoing: false
      }
      this.intervalId = 0;
    }

    timeOnOff = () => {
      if(!this.state.isGoing){
        this.setState({
          currentTime: 0 
        })
        this.intervalId = setInterval(() => {
          this.setState({
            currentTime: this.state.currentTime + 1,
            isGoing: true
          })
        }, 1000)
      }else{
        this.setState({
          isGoing: false,
          isChecked : true
        })
        console.log("끝내자")
        clearInterval(this.intervalId)
      }
    }

    convertTimer = (seconds) => {
      const hour = Number.parseInt(seconds / 3600)
      const min = Number.parseInt(((seconds % 3600) / 60))
      const sec = Number.parseInt((seconds % 60))
      return `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`
    }


    render() {
        return<div id="container">
            <h1 className="walk_title">산책 타이머</h1>    
            <p>얼마나 산책했는지 시간을 체크해보세요</p>

            <div className="timer">
              <h2>{this.convertTimer(this.state.currentTime)}</h2>
              {this.state.isChecked ? 
              <button className="walk_end" onClick={this.timeOnOff}>{this.state.isGoing ? "STOP" : "START"}</button> :
              <button className="walk_start" onClick={this.timeOnOff}>
                {this.state.isGoing ? "STOP" : "START"}
                </button>}
            </div>

            {this.state.isChecked && !this.state.isGoing ? <div className="walk_after">
              <h2>오늘도 즐거운 산책이었나요?</h2>
              <h4>산책 후 마무리까지 완벽하게 체크해보세요!</h4>
              <ul>
                <li>댕댕이와 매너있는 산책을 위해 배변봉투는 <br/>길거리에 버리지 마시고 <mark>집에 챙겨가기!</mark></li>
                <li>털에 묻은 먼지는 <mark>털어주고</mark> 발바닥 닦고 <br/>잘 <mark>건조시켜주기!</mark></li>
                <li>산책 후 충분한 <mark>수분보충</mark>과 간단한 <mark>간식</mark>으로 <br/>체력관리!</li>
              </ul>
            </div> : <div className="walk_list">
                <h2>산책 체크리스트!</h2>
                <p>안전한 산책을 위해 준비사항을 확인해보세요!</p>    
              <ul>
                <li>- 배변봉투</li>  
                <li>- 배변 수거용 봉투</li>  
                <li>- 휴지 or 물티슈</li>  
                <li>- 수분 보충을 위한 물!</li>
                <li>* <mark>산책 시간만을 채우기보단 댕댕이와의 시간 즐기기</mark> *</li>
              </ul>                    
            </div> }
            

                     
            
        </div>
    }
}

export default WalkTimer