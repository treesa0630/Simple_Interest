import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  
  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest, setInterest] = useState("0")
  const [isPrinciple, setIsPrinciple] = useState("true")
  const [isRate, setIsRate] = useState("true")
  const [isYear, setIsYear] = useState("true")



  const validate = (e)=>{

    console.log(e.target.name);
    console.log(e.target.value);

    // regular expression
    // ^[0-9a-zA-Z@]*{MIN, MAX}$
    console.log(!!e.target.value.match('^[0-9]*$'));
    
    if(!!e.target.value.match('^[0-9.]*$')){
      if(e.target.name =='principle'){
        setPrinciple(e.target.value)
        setIsPrinciple(true)
      }
      else if(e.target.name =='rate'){
        setRate(e.target.value)
        setIsRate(true)
      }
      else{
        setYear(e.target.value)
        setIsYear(true)
      }
      
    }
    else{
      if(e.target.name =='principle'){
        setPrinciple(e.target.value)
        setIsPrinciple(false)
      }
      else if(e.target.name =='rate'){
        setRate(e.target.value)
        setIsRate(false)
      }
      else{
        setYear(e.target.value)
        setIsYear(false)
      }
    }

  }



  const reset =()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest("0")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }



  const calculate =()=>{
    setInterest((principle*rate*year) / 100)
  }



  return (
    <>
      <div style={{height:'100vh', backgroundColor:'black'}} className='bg-dark w-100 d-flex justify-content-center align-items-center'>
        <div style={{width:'600px'}} className='p-5 bg-light rounded-4'>
          <h1 style={{fontSize:'55px'}}>Simple Interest App</h1>
          <h5>Calculate your simple interest Easily</h5>
          <div style={{height:'150px'}}className='bg-success  d-flex justify-content-center align-items-center flex-column rounded-4 mt-4 '>
            <h1 className='text-light'>₹ {interest}</h1>
            <p className='text-light'>Total Simple Interest</p>
          </div>
          <div className="mb-3 mt-4">
          <TextField id="outlined-basic" value={principle} name='principle' label="₹ Principle Interest" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
            {!isPrinciple && <span className='text-danger'>*invalid input</span>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" value={rate} name='rate' label="Rate (p.a)%" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
          {!isRate && <span className='text-danger'>*invalid input</span>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" value={year} name='year' label="Year (Yr)" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
          {!isYear && <span className='text-danger'>*invalid input</span>}
          </div>
          <div className="mb-3 d-flex justify-content-between">
          <Button style={{width:'190px', height:'60px'}} variant="contained" color="success" onClick={calculate} disabled={isPrinciple && isRate && isYear? false:true}>Calculate</Button>
          <Button style={{width:'190px', height:'60px'}} onClick={reset} variant="outlined" color="success">Reset</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
