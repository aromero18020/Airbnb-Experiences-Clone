import React from 'react'
import Navbar from "./assets/components/Navbar"
import Hero from "./assets/components/Hero"
import Card from "./assets/components/Card"
import './index.css'
import data from "./data"


function App() {
  const cards = data.map(item => {
    return <Card 
    key={item.id}
    {...item}
    />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </div>
  )
}

export default App
