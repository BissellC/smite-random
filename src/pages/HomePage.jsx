import React from 'react'
import { Link } from 'react-router-dom'
import fill from '../images/fill.jpg'

const HomePage = () => {
  return (
    <>
      <header>
        <h1>Smite Pick</h1>
      </header>
      <main>
        <Link to="/roles">
          <section>
            <p className="section-header">Role Picker</p>
            <img src={fill}></img>
            <p>Random roles for you and your teammates in conquest</p>
          </section>
        </Link>
      </main>
    </>
  )
}

export default HomePage
