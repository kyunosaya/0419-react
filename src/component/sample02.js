import React,{useState} from 'react';

function Sample02(){
// const [count,setCount] = React.useState(0);
const [count,setCount] = useState(0);
return (
  <div>
    <h1>기본함수방식</h1>
    <p>sample02 : {count}</p>
    <button onClick={click}>click</button>
  </div>
)

 function click(){
  setCount(count + 1);
}

}

export default Sample02