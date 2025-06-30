import React from 'react'
import './Home.css'
import temple from '../assets/temple.avif'

function Home() {
  return (
    <div className="home-page">
      <p>This is Home Page</p>
      <img src={temple} alt="temple" style={{ width: '150px', borderRadius: '12px' }} />
    </div>
  )
}

export default Home