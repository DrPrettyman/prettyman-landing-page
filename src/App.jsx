import { useState } from 'react'

import joshua from './assets/joshua.png'
import ruben from './assets/ruben.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="cards-grid">

        <div className="card">
          <a href="https://joshua.prettyman.me" target="_blank">
            <img src={joshua} className="logo" alt="Joshua" />
          </a>
          <h3>Joshua</h3>
        </div>
        
        <div className="card">
          <a href="#" target="_blank">
            <img src={ruben} className="logo" alt="Name" />
          </a>
          <h3>Ruben</h3>
        </div>

      </div>
      <h1>prettyman.me</h1>
    </>
  )
}

export default App
