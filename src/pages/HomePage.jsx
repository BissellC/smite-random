import React from 'react'
import { Link } from 'react-router-dom'
import fill from '../images/fill.jpg'

const HomePage = () => {
  return (
    <>
      <header>
        <h1>Smite Pick</h1>
      </header>
      <main className="homepage-main">
        <Link to="/roles">
          <section>
            <p className="section-header">Role Picker</p>
            <img className="homepage-image" src={fill}></img>
            <p>Random roles for you and your teammates</p>
          </section>
        </Link>
      </main>
    </>
  )
}

export default HomePage
