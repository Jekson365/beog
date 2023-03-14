import { useState } from 'react'
import Navbar from './components/Navbar'
import './main.scss'
import { Sec_1 } from './sections/Sec_1'
import { Sec_2 } from './sections/Sec_2'
import { Sec_3 } from './sections/Sec_3'

function App() {

  return (
    <>
      <Navbar/>
      <Sec_1/>
      <Sec_2/>
      <Sec_3/>
    </>
  )
}

export default App
