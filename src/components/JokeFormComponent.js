import React from 'react'

function JokeFormComponent({ jokes, setJokes, joke, setJoke, punchLine, setPunchLine }) {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setJokes([
      ...jokes,
      { joke, punchLine }
    ])
    setJoke("")
    setPunchLine("")
  }

  return (
    <div>
      <div>
        <h1>Add New Joke</h1>
      </div>
      <div>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group mb-3 mx-3">
          <input className="form-control" value={joke} onChange={(e) => setJoke(e.target.value)} type="text" placeholder="Type the Joke..." />
        </div>
        <div className='form-group mb-3 mx-3'>
          <input className="form-control" value={punchLine} onChange={(e) => setPunchLine(e.target.value)} type="text" placeholder="Type the Punchline..." />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default JokeFormComponent