// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const[txt,settxt] = useState('abc')
//   const[txtlist,settxtlist] = useState([])
//   return (

//     <div className="App">
//       <p>{txt}</p>
//       <input type="text" onChange={(inp)=>{
//         settxt(inp.target.value)
//       }} />
//     </div>
//   );

// }

// export default App;



import React from "react";
import logo from "./logo.svg";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Quizscreen from "./pages/Quiz";


function App() {
  return(
    <div className="mn">
      <Quizscreen />
    
    </div>
  )

}

export default App;
