import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingCart from './ShoppingCart'
import PauseableTimer from './PauseableTimer'
import SortableList from './SortableList'
import DelayedUpdateCounter from './DelayedUpdateCounter'
import AutoCountdown from './AutoCountdown'

function App() {

  return (
    <>
    <AutoCountdown/>
    {/* <SortableList /> */}
    <PauseableTimer />
      <ShoppingCart />
      <DelayedUpdateCounter />
    </>
  )
}

export default App
