import React from 'react'

function Hello() {
  const age = 21
  const name = "Lakshya"

  return (
    <>
      <div>
        <h1 id="id" className="cn">
          Hello, {name}. You are {age} years old.
        </h1>
      </div>
    </>
  )
}

export default Hello
