import { useState } from 'react'
import Rating from "./Rating"
import './App.css'

function App() {

  return (
    <div className="app">
      <Rating  
        ratingDefaultValue={3}
      />
    </div>
  )
}

export default App
