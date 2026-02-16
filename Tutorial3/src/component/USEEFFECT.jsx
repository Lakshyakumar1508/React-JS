import React, { useEffect, useState } from 'react'

const USEEFFECT = () => {

    // Mounting
    /*
    const [num, setnum] = useState(0);
    useEffect(function () {
        console.log("Hello")
    },)

    // Dependency Array
    const [num, setnum] = useState(0);
    useEffect(function () {
        console.log("Hello")
    },[])

    */

    const [num, setnum] = useState(0);
    const [num2, setnum2] = useState(0);

    //Its depends on the num only doesnot run on the num2 
    useEffect(function () {
        console.log("Hello")
    }, [num])

    return (
        <div>
            <h2>{num}</h2>
            <h2>{num2}</h2>
            <button onClick={() => {
                setnum(num + 1)
            }} onDoubleClick={() => {
                setnum2(num2 + 2)
            }}>
                Submit
            </button>
        </div>
    )
}

export default USEEFFECT
