import React ,{useState}from 'react'
import axios from 'axios'

// npm i axios

const APIcalls = () => {

    // Method 1
    /*async function getData(){
      const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    console.log(response)
    }

    //Method 2 
    const getdata= async () => {     
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/4')
        const data=await response.json()
        console.log(data)
    }


    //Method 3
    const axiosGetData =async ()=>{
        const {response} = await axios.get('https://jsonplaceholder.typicode.com/todos/4')
        console.log(response)
    }*/

   const [data, setData] = useState([]);

    //Method 4
    const getData=async ()=>{
        const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        setData(response.data)
        console.log(response.data)
    }


  return (
    <div>
    <button onClick={getData}>Get Data </button>U
    <div>
        {data.map(function(elem,idx){
            return <h3>Hello, {elem.title}{idx}</h3>
        })}
    </div>

    </div>
  )
}

export default APIcalls
