import React from 'react';

function Sample04(){
//  useState => count
//  useState => {count : 0}
const [state,setState] = React.useState({count:0});
return (
  <div>
    <h1>함수방식으로 매서드 가져오기</h1>
    <p>sample02 : {state.count}</p>
    <button onClick={click}>click</button>
  </div>
)

 function click(){
 setState(() => ({count: state.count + 1}) )
}

}

export default Sample04