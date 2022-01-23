import React, { useState } from 'react';
import './App.css'




export default function Body(props) {

    const [style, setStyle] = useState("dot");
    const [OnOff,setOnOff] = useState("OFF")
  
     const changeStyle = () => {
        console.log("you just clicked");
        setStyle(style === "dot" ? "dotOn" : "dot");
        setOnOff(OnOff === "OFF" ? "ON" : "OFF");
        console.log(props)
     }

     const [style1, setStyle1] = useState("dot");
     const [OnOff1,setOnOff1] = useState("OFF")
   
      const changeStyle1 = () => {
         console.log("you just clicked");
         setStyle1(style1 === "dot" ? "dotOn" : "dot");
         setOnOff1(OnOff1 === "OFF" ? "ON" : "OFF");
      }

  return <><div className='header'><h1>LIGHT APP</h1></div>
  <div class="grid-container">
  <div class="grid-item"><div className={style}></div></div>
  <div class="grid-item"><div className={style1}></div></div>
  <div class="grid-item"><button className='button' onClick={changeStyle}>{OnOff}</button></div>
  <div class="grid-item"><button className='button' onClick={changeStyle1}>{OnOff1}</button></div>
  

</div>
</>
}
