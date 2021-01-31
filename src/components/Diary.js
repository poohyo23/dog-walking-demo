import React from 'react'

class Daiary extends React.Component{
  
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
    return<div>
    <h1>할일 목록</h1>
    <input type="text" onChange={e => this.setState({currentText: e.target.value })}/>
    <button onClick={this.handleBtnClick}>추가</button>
    <ul>
      {this.state.toDos.map((toDo, index) => {
        return <li key={index}>{toDo.todo}</li>
      })}
    </ul>

    </div>
  }
}

export default Daiary;
