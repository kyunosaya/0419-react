import React from 'react'

export default class Sample01 extends React.Component{
state = {
  count : 0
}
//  render
render(){
  return (
    <div>
      <h1>기존의 class 방식</h1>
      <p>sample01 : {this.state.count}</p>
      <button onClick={this.click}>click</button>
    </div>
  )
}
//  매서드
click = ()=>{
  this.setState({
    count : this.state.count + 1
  })
}
}