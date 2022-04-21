import React,{useState} from 'react';

function Sample03(){
//  useState => count
//  useState => {count : 0}
const [state,setState] = useState({count:0});
return (
  <div>
    <h1>state 방식: 객체화 방법</h1>
    <p>sample02 : {state.count}</p>
    <button onClick={click}>click</button>
  </div>
)

 function click(){
 setState({count:state.count+ 1})
}

}

export default Sample03