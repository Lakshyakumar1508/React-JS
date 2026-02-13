import React, {useState} from 'react'

const Form = () => {


  const [title, settitle] = useState('LKS');

    const submitHandler=(e)=>{
      e.preventDefault()
      console.log("Form Submitted by", title)

      settitle(' ')
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
        type="text" 
        placeholder='ENter your name'
        value={title}
        onChange={(e)=>{settitle(e.target.value)}}  />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
