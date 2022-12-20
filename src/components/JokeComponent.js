import React, { useState } from 'react'
import JokeBookComponent from './JokeBookComponent'
import JokeFormComponent from './JokeFormComponent'

function JokeComponent() {
  const [joke, setJoke] = useState("")
  const [punchLine, setPunchLine] = useState("")
  const [jokes, setJokes] = useState([])
  return (
    <div>
      <JokeFormComponent joke={joke} setJoke={setJoke} jokes={jokes} setJokes={setJokes} punchLine={punchLine} setPunchLine={setPunchLine} />
      <JokeBookComponent joke={joke} setJoke={setJoke} jokes={jokes} setJokes={setJokes} punchLine={punchLine} setPunchLine={setPunchLine} />
    </div>
  )
}

export default JokeComponent