import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './users'
import Friends from './Friends'

function App() {
 
  return (
    <>
<h2>React Core Concept-2</h2>
<Friends></Friends>
<Users></Users>
<Team></Team>
<Counter></Counter>
    </>
  )
}

export default App
