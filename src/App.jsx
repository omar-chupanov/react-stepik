import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './ClickCounter'
import CountdownTimer from './CountdownTimer'
import Form from './Form'
import UserProfile from './UserProfile'
import ProductCounter from './ProductCounter'
import VisibilityToggle from './VisibilityToggle'
import Tabs from './Tabs'

function App() {

  return (
    <>
      <ClickCounter></ClickCounter>
      <CountdownTimer/>
      <Form></Form>
      <UserProfile></UserProfile>

      <ProductCounter></ProductCounter>

      <VisibilityToggle/>

      < Tabs/>
    </>
  )
}

export default App
