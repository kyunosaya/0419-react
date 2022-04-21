import React from 'react';
import ReactDOM from 'react-dom/client';
// import Sample01 from './component/sample01'
// import Sample02 from './component/sample02'
// import Sample03 from './component/sample03'
// import Sample04 from './component/sample04'
// import Effect01 from './effect/effect01'
// import Effect02 from './effect/effect02'
// import Effect03 from './effect/effect03'
import Effect04 from './effect/effect04'

function App(){
  return (
    <div>
      {/* <Sample01 />
      <Sample02 />
      <Sample03 />
      <Sample04 />
      <Effect01 />
      <Effect02 />
      <Effect03 /> */}
      <Effect04 />
    </div>
  )
}

const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)