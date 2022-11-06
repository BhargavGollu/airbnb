import React from 'react'
import Header from "./components/Header"
import Banner from "./components/Banner"
import Card from "./components/Card"
import "./App.css"


const App = () => {
  return (
    <div className='app-container'>
      <Header/>
      <Banner/>
      <Card/>
      
    </div>
  )
}

export default App
