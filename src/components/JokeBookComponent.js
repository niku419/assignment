import React from 'react'

function JokeBookComponent( {jokes}) {
  const handleClick = (key) => {
    jokes[key].visible = !jokes[key].visible
  }
  return (
    <div>
      <div>
        <h1>Joke Book</h1>
      </div>
      <div>
      {jokes.length>0 && jokes.map((eachJoke, index) => (
        <div key={index}>
          <div><h3>{eachJoke.joke}</h3></div>
          <button type='button' className='btn btn-primary' onClick={(e) => handleClick(index)}>View Punchline</button>
          <div>{eachJoke.visible ? eachJoke.punchLine : ""}</div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default JokeBookComponent