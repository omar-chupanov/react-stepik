import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './ClickCounter'
import CountdownTimer from './CountdownTimer'
import Form from './Form'
import UserProfile from './UserProfile'
import ProductCounter from './ProductCounter'

function App() {

  return (
    <>
      <ClickCounter></ClickCounter>
      <CountdownTimer/>
      <Form></Form>
      <UserProfile></UserProfile>

      <ProductCounter></ProductCounter>
    </>
  )
}

export default App
