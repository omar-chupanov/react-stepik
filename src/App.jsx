import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './ClickCounter'
import CountdownTimer from './CountdownTimer'
import Form from './Form'

function App() {

  return (
    <>
      <ClickCounter></ClickCounter>
      <CountdownTimer/>
      <Form></Form>
    </>
  )
}

export default App
