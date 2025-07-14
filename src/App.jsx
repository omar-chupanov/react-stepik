import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingCart from './ShoppingCart'
import PauseableTimer from './PauseableTimer'

function App() {

  return (
    <>
    <PauseableTimer />
      <ShoppingCart />
    </>
  )
}

export default App
