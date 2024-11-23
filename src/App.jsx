import { useRef, useState } from 'react'
import './App.css'
import './bmiresult.css'
import Error from './error'
import './erro.css'
function App() {
  const[curhei,chnagehei]=useState()
  const[curwei,chnagewei]=useState()
  let meter;
  let sqr;
  let bmi;
  const reff=useRef()
  let result=document.querySelector(".content")
  let errorr=document.querySelector(".error")
  const findbmi=(height,weight)=>{
    if(height===''|| weight==='' || height===''&& weight===''){
      result.style.display ="none"
      errorr.style.display ="block"
    }else{
      meter=Number(curhei/100)
      sqr=Math.pow(meter,2)
      bmi=curwei/sqr.toFixed(2)
      errorr.style.display ="none"
      result.style.display ="block"
      console.log(height,weight);
    }
  }

  const clearall=()=>{
    chnagehei('')
    chnagewei('')
    result.style.display ="none"
  }


  return (
    <div className='flex'>
      <div className='image'>
        <img src="images/muscle.png" alt="" />
      </div>
      <div className='input'>
        <p>BMI Calculator</p>
        <label htmlFor="height">Height(cm):</label>
        <input type="number" ref={reff} placeholder='Height' id='height' value={curhei} onChange={(e)=>chnagehei(Number(e.target.value))}/>
        <label htmlFor="Weight">Weight(kg):</label>
        <input type="number" placeholder='Weight' id='Weight' value={curwei} onChange={(e)=>chnagewei(Number(e.target.value))}/>
        <div className='btn'>
          <button type='button' className='calcbtn' onClick={()=>findbmi(curhei,curwei)}>Calculate BMI</button>
          <button type='button' className='clrbtn' onClick={()=>{clearall();reff.current.focus()}}>Clear All</button>
        </div>
        <div className='error'>
          <Error/>
        </div>
        <div className='content'>
          <p>Your BMI is: {bmi.toFixed(2)}</p>
          {bmi<18.5?<p>Underweight</p>:bmi>18.5&&bmi<24.9?<p>Normal weight</p>:bmi>24.9&&bmi<29.9?<p>Overweight</p>:bmi>29.9&&bmi<34.9?<p>Class 1 Moderate Obesity</p>:bmi>34.9&&bmi<39.9?<p>Class 2 Severe Obesity</p>:bmi>39.9?<p>Class 3 Very severe or morbid Obesity</p>:console.log("be fitter")
          }
        </div>
      </div>
    </div>
  )
}

export default App
