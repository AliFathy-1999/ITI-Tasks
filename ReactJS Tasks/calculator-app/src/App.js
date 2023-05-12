import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [firstOperand,setFirstOperand] = useState(0);
  const [secondOperand,setSecondOperand] = useState(0);
  const [result,setResult] = useState(0); 
  return (
    <div className="App container">
        <label for="firstOperand" className="">First operand : </label>
        <input type="number" className='form-control' name='firstOperand' id="firstOperand" onChange={(e)=>{setFirstOperand(e.target.value)}} />
        <label for="secondOperand">Second operand : </label>
        <input type="number" name='secondOperand'className='form-control' id="secondOperand" onChange={(e)=>{setSecondOperand(e.target.value)}}/> 
        <div className='mt-5'>
          <button className='btn btn-danger fs-3' onClick={ ()=>{ setResult(+firstOperand + +secondOperand )  }}> + </button>
          <button className='btn btn-warning fs-3' onClick={ ()=>{ setResult(+firstOperand - +secondOperand )  }}> - </button>
          <button className='btn btn-info fs-3' onClick={ ()=>{ setResult(+firstOperand * +secondOperand )  }}> * </button>
          <button className='btn btn-secondary fs-3' onClick={ ()=>{ setResult(+firstOperand / +secondOperand )  }}> / </button>
          <div className="">
    </div>
        </div> 
        <h1 className='m-5'>Result = {result}</h1>
    </div>
  );
}

export default App;
