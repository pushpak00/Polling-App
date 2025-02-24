import React, { useState } from 'react'
import { que } from './Data.jsx'
import InputQue from './InputQue'

const option = que[0].vote

function App() {
  const [votes, setVotes] = useState(option)

  const handleVote = (option) => {
    const newVotes = { ...votes }
    newVotes[option] += 1
    setVotes(newVotes)

  };

  return (

    <div className="App">


      <h1>{que[0].question}</h1>
      <div>
        <button onClick={() => handleVote(0)}> {que[0].options[0]}  - {votes[0]}</button><br/>
        <button onClick={() => handleVote(1)}> {que[0].options[1]}  - {votes[1]}</button><br/>
        <button onClick={() => handleVote(2)}> {que[0].options[2]}  - {votes[2]}</button><br/>
        <button onClick={() => handleVote(3)}> {que[0].options[3]}  - {votes[3]}</button>
      </div>

      {/* <div className="results">
        <h2>Results:</h2>
        <p>{que[0].options[0]}: {votes[0]} votes</p>
        <p>{que[0].options[1]}: {votes[1]} votes</p>
        <p>{que[0].options[2]}: {votes[2]} votes</p>
        <p>{que[0].options[3]}: {votes[3]} votes</p>
      </div> */}
    </div>
  );
}

export default App;