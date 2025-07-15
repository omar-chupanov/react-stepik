import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingCart from './ShoppingCart'
import PauseableTimer from './PauseableTimer'
import SortableList from './SortableList'
import DelayedUpdateCounter from './DelayedUpdateCounter'

function App() {

  return (
    <>
    <SortableList />
    <PauseableTimer />
      <ShoppingCart />
      <DelayedUpdateCounter />
    </>
  )
}

export default App
