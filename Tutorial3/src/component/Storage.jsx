import React from 'react'

const Storage = () => {
    // sessionStorage.clear()
  // localStorage.clear()

  // localStorage.setItem('Name','Lakshya')

  // const user=localStorage.getItem('Name')

  // localStorage.removeItem('Name')

  const user={
    name:'Lakshya',
    age:20,
  }

  localStorage.setItem('user',JSON.stringify(user))
  return (
    <div>
      
    </div>
  )
}

export default Storage
