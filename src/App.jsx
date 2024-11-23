import { useRef, useState } from 'react'
import './App.css'
import './bmiresult.css'
import Error from './error'
import './erro.css'
function App() {
  const[curhei,chnagehei]=useState()
  const[curwei,chnagewei]=useState()
  const[curbmi,newbmi]=useState()
  let meter;
  let sqr;
  const reff=useRef()
  let result=document.querySelector(".content")
  let errorr=document.querySelector(".error")
  const findbmi=(height,weight)=>{
    if(height===''|| weight==='' || height===''&& weight===''){
      result.style.display ="none"
      errorr.style.display ="block"
    }else{
      errorr.style.display ="none"
      result.style.display ="block"
      meter=Number(height/100)
      sqr=Math.pow(meter,2)
      newbmi(weight/sqr.toFixed(2))
      console.log(height,weight,meter,sqr);
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
          <p>Your BMI is: {Number(curbmi.toFixed(2))}</p>
          {curbmi<18.5?<p>Underweight</p>:curbmi>18.5&&curbmi<24.9?<p>Normal weight</p>:curbmi>24.9&&curbmi<29.9?<p>Overweight</p>:curbmi>29.9&&curbmi<34.9?<p>Class 1 Moderate Obesity</p>:curbmi>34.9&&curbmi<39.9?<p>Class 2 Severe Obesity</p>:curbmi>39.9?<p>Class 3 Very severe or morbid Obesity</p>:console.log("be fitter")
          }
        </div>
      </div>
    </div>
  )
}

export default App
