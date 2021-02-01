import React from 'react'
import '../styles/Diary.css'

const todayDate = "2월 1일 "

class Diary extends React.Component{
  
  // 생성자 함수 : 이 컴포넌트가 생성될 때 할 일을 정해주는 함수
  constructor(props){
    super(props)

    this.state = {
      toDos: [], // 할일 목록
      currentText: "", // 현재 인풋에 뭐라고 쓰여있는지
      count: 0
    }
  }  

  // ...this.state.toDos : 기존 투두스 요소들을 여기에 복사한다!
  handleBtnClick = () => {
    this.setState({
      toDos : [
        ...this.state.toDos,
        {
          todo: this.state.currentText,
          id: this.state.count
        }
      ], count : this.state.count + 1
    })
  }
  
  
  render(){
    return <div id="container">
    <h1>하루 한 줄 기록</h1>
    <p style={{marginBottom:'40px'}}>오늘 산책은 어땠는지 하루 한 줄씩 기록해보세요</p>
    
    <span className="today">{todayDate}</span>
    <input className="" type="text" maxlength="17" onChange={e => this.setState({currentText: e.target.value })} placeholder="오늘 산책 어땠어?"/>
    <button className="date_btn" onClick={this.handleBtnClick}>저장</button> 
    
    <ul id="diary_list">          
      {this.state.toDos.map((toDo, index) => {
        return <li key={index}>{todayDate}{toDo.todo}<span className="date_delete">X</span></li>
      })}
    </ul>

    </div>
  }
}

export default Diary;
