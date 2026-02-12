import React ,{useState}from 'react'


const Counter = () => {
    const [num, setnum] = useState(0);

    function increaseNum(){
       setnum(num+1)
    }

    function decreaseNum(){
        setnum(num-1)
    }
    
    function Jump(){
        setnum(num+5)
    }
  return (
    <div>
        <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={Jump}>Jump By 5</button>
    </div>
  )
}

export default Counter
