import React from 'react'
import Header from './header';
import {useState} from 'react';

function App() {
  const [ageOf, setAge]=useState("19")
  const values1={Name: "Surendira Balaji" ,Age:"19"}
  const values2={Name: "Pavan Adithya", Age:"20"}
  return (
    <React.Fragment>
        <Header attribute={values1}/>
        <Header attribute={values2}/>
        <button onClick={()=>setAge("20")}>Submit</button>
        {ageOf==="20" ? <Header attribute={values1}/> : null}
    </React.Fragment>
  
  )
}

export default App;
