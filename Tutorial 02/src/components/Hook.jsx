import React, { useState } from 'react';

const Hook = () => {

    const [num, setNum] = useState(20);
    const [user,setuser] = useState("Lakshya");

    function changeNum() {
        setNum(30);  
        setuser("Lakshya Kumar") 
    }


    return (
        <>
            <div>
                <h1>Value of num is {num}<br/>value of user is {user}</h1>
                <button onClick={changeNum}>Click</button>
            </div>
        </>
    );
}

export default Hook;
