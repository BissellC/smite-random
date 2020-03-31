import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import midImage from '../images/mid.png'
import soloImage from '../images/solo.png'
import supportImage from '../images/support.jpg'
import carryImage from '../images/carry.png'
import jungleImage from '../images/jungle.png'
import joustSupportImage from '../images/JoustSupport.jpg'
import joustPhysicalImage from '../images/JoustPhysical.jpg'
import joustMageImage from '../images/JoustMage.png'

const RolesPage = () => {
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [player3, setPlayer3] = useState({})
  const [player4, setPlayer4] = useState({})
  const [player5, setPlayer5] = useState({})
  const [player1Joust, setPlayer1Joust] = useState({})
  const [player2Joust, setPlayer2Joust] = useState({})
  const [player3Joust, setPlayer3Joust] = useState({})

  const mid = {
    id: 1,
    role: 'Mid',
    image: midImage,
  }
  const solo = {
    id: 2,
    role: 'Solo',
    image: soloImage,
  }
  const support = {
    id: 3,
    role: 'Support',
    image: supportImage,
  }
  const carry = {
    id: 4,
    role: 'Carry',
    image: carryImage,
  }
  const jungle = {
    id: 5,
    role: 'Jungle',
    image: jungleImage,
  }

  const joustSupport = {
    id: 6,
    role: 'Support',
    image: joustSupportImage,
  }
  const joustPhysical = {
    id: 7,
    role: 'Physical',
    image: joustPhysicalImage,
  }
  const joustMage = {
    id: 8,
    role: 'Mage',
    image: joustMageImage,
  }

  const shuffleRoles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  const randomizeRolesConquest = () => {
    let roles = [mid, solo, support, carry, jungle]

    shuffleRoles(roles)
    setPlayer1(roles[0])
    setPlayer2(roles[1])
    setPlayer3(roles[2])
    setPlayer4(roles[3])
    setPlayer5(roles[4])
  }

  const randomizeRolesJoust = () => {
    let roles = [joustSupport, joustMage, joustPhysical]

    shuffleRoles(roles)
    setPlayer1Joust(roles[0])
    setPlayer2Joust(roles[1])
    setPlayer3Joust(roles[2])
  }
  return (
    <>
      <header className="role-picker-header">
        <Link to="/">
          <h1>Smite Pick</h1>
        </Link>
        <p>Role Picker</p>
      </header>

      <main className="roles-main">
        <h1>Conquest</h1>
        <button onClick={randomizeRolesConquest}>Randomize Roles</button>
        <section className="conquest-picker-container">
          <section>
            <input type="text" placeholder="Player 1"></input>
            <img src={player1.image}></img>
            <p>{player1.role}</p>
          </section>
          <section>
            <input type="text" placeholder="Player 2"></input>
            <img src={player2.image}></img>
            <p>{player2.role}</p>
          </section>
          <section>
            <input type="text" placeholder="Player 3"></input>
            <img src={player3.image}></img>
            <p>{player3.role}</p>
          </section>
          <section>
            <input type="text" placeholder="Player 4"></input>
            <img src={player4.image}></img>
            <p>{player4.role}</p>
          </section>
          <section>
            <input type="text" placeholder="Player 5"></input>
            <img src={player5.image}></img>
            <p>{player5.role}</p>
          </section>
        </section>

        <section className="joust-picker-container">
          <h1>Joust</h1>
          <button onClick={randomizeRolesJoust}>Randomize Roles</button>
          <div>
            <section>
              <input type="text" placeholder="Player 1"></input>
              <img src={player1Joust.image}></img>
              <p>{player1Joust.role}</p>
            </section>
            <section>
              <input type="text" placeholder="Player 2"></input>
              <img src={player2Joust.image}></img>
              <p>{player2Joust.role}</p>
            </section>
            <section>
              <input type="text" placeholder="Player 3"></input>
              <img src={player3Joust.image}></img>
              <p>{player3Joust.role}</p>
            </section>
          </div>
        </section>
      </main>
    </>
  )
}

export default RolesPage
