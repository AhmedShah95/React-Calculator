import React, { useState } from 'react'




const Calculat = () => {
const [calculate, setcalculate] = useState('')

const handleClick = (value)=>{
    setcalculate(calculate + value)
}

const handleclear = ()=>{
    setcalculate("")
}

const handleDelete = ()=>{
    setcalculate(calculate.slice(0 , -1))
}

const handleEqual = ()=>{
    try {
        setcalculate(eval(calculate).toString())
    } catch{
        setcalculate('Error')
        
    }
}



  return (
    <div className='cal'>
        <div className="container">
      <form action="">
        <input value={calculate} type="text" />
        <div className="col">
            <button type='button' onClick={handleclear}>Ac</button>
            <button type='button' onClick={handleDelete}>DE</button>
            <button type='button' onClick={() =>handleClick(".")}>.</button>
            <button type='button' onClick={() =>handleClick( '/' )}>/</button>
        </div>
        <div className="col">
            <button type='button' onClick={() =>handleClick("7")}>7</button>
            <button type='button' onClick={() =>handleClick("8")}>8</button>
            <button type='button' onClick={() =>handleClick("9")}> 9 </button>
            <button type='button' onClick={() =>handleClick("*")}> * </button>
        </div>
        <div className="col">
            <button type='button' onClick={() =>handleClick("4")}>4</button>
            <button type='button' onClick={() =>handleClick("5")}>5</button>
            <button type='button' onClick={() =>handleClick("6")}>6</button>
            <button type='button' onClick={() =>handleClick("+")}>+</button>
        </div>
        <div className="col">
            <button type='button' onClick={() =>handleClick("1")}>1</button>
            <button type='button' onClick={() =>handleClick("2")}>2</button>
            <button type='button' onClick={() =>handleClick("3")}>3</button>
            <button type='button' onClick={() =>handleClick("4")}>4</button>
        </div>
        <div className="col">
            <button type='button' onClick={() =>handleClick("00")}>00</button>
            <button type='button' onClick={() =>handleClick("0")}>0</button>
            <button className=' ' type='button' onClick={handleEqual}>=</button>
            
        </div>

      </form>
      </div>
    </div>
  )
}

export default Calculat
