import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/section1/Section1'
// import Section2 from './components/section2/Section2'

function App() {
  const users = [
    {
      img: 'https://i0.wp.com/addicfashion.com/wp-content/uploads/2019/05/stylish-outfits-ideas-for-professional-women29.jpg?fit=1024%2C1538&ssl=1',
      intro: 'lorem',
      tag: 'Satisfied'
    },
    {
      img: 'https://inspireinlet.com/wp-content/uploads/2024/07/103-inspireinlet-53.webp',
      intro: '',
      tag: 'UnderServed'
    },
    {
      img: 'https://i.pinimg.com/originals/26/76/96/267696c0dff7790b8ff76f2cab15eac2.jpg',
      intro: '',
      tag: 'Underbanked'
    },
  ]
  return (
    <>
      <Section1 users={users} />
      {/* <Section2 /> */}
    </>
  )
}

export default App
