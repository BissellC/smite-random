import React, { useState } from 'react'

import midImage from '../images/mid.png'
import soloImage from '../images/solo.png'
import supportImage from '../images/support.jpg'
import carryImage from '../images/carry.png'
import jungleImage from '../images/jungle.png'

const RolesPage = () => {
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [player3, setPlayer3] = useState({})
  const [player4, setPlayer4] = useState({})
  const [player5, setPlayer5] = useState({})

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

  const randomizeRoles = () => {
    let roles = [mid, solo, support, carry, jungle]

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
    }

    shuffleArray(roles)
    setPlayer1(roles[0])
    setPlayer2(roles[1])
    setPlayer3(roles[2])
    setPlayer4(roles[3])
    setPlayer5(roles[4])
  }
  return (
    <>
      <header>
        <h1>Smite Pick</h1>
        <p>Role Picker</p>
      </header>
      <main>
        <section>
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
        <button onClick={randomizeRoles}>Randomize Roles</button>
      </main>
    </>
  )
}

export default RolesPage
