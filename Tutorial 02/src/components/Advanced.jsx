import React,{useState} from 'react'

const Advanced = () => {
  // const [num, setNum] = useState({name:"Lakshya",age:18});
  // const [num1, setNum1] = useState(["Lakshya", 18]);

  // const btnClicked =()=>{
  //   const newNum={...num};
  //   newNum.name="Lakshya Kumar"
  //   newNum.age=19
  //   setNum(newNum)
  // }

  // const arrayClicked=()=>{
  //   const newNum2=[...num1]
  //   newNum2.push("Lakshya Kumar")
  //   setNum1(newNum2)
  // }


  const [num, setnum] = useState({name:"Lakshya",age:20});
  const [state, setstate] = useState(10);
  const btnClicked=()=>{
    setnum(prev=>({...prev,age:21}))

    setstate(prev=>(prev+1))
    setstate(prev=>(prev+1))
    setstate(prev=>(prev+1))
  }




  return (
    <div>
        <h1>{num.name} age is {num.age}</h1>
        <h1>{state}</h1>
        <button onClick={btnClicked}>Submit</button>
        {/* <h1>{num1}</h1> */}
        {/* <button onClick={arrayClicked}>Submit</button> */}
    </div>
  )
}

export default Advanced
