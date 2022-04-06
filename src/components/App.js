import '../App.css';
import Problem from './Problem';
import Score from './Score';
import Controls from './Controls';
import Bubble from './Bubble';
import { useState, useEffect } from 'react'

const App = (props) => {
  const numberOfBubbles = 20

  const [problem, setProblem] = useState({
    operand1: null,
    operand2: null,
    operator: "+",
    answer: null
  })

  const [bubbles, setBubbles] = useState([])
  const [score, setScore] = useState(0)
  const [speed, setSpeed] = useState("Medium")

  const generateBubbleNumber = (answer, range) => {
    const max = answer + range
    const min = Math.max(answer-range, 0)
    return Math.floor(Math.random()*(max-min+1))+min
  }

  const checkAnswer = (event) => {
    if (event.currentTarget.textContent === String(problem.answer)) {
       event.target.classList.remove("bubble")
       event.target.classList.add("hidden")
       createProblem()
       setScore(score+1)
    }
  }

  const createProblem = () => {
    const operand1 = Math.floor(Math.random()*11)
    const operand2 = Math.floor(Math.random()*11)
    let answer
    if (problem.operator === "+") {
      answer = operand1 + operand2
    }
    if (problem.operator === "x") {
      answer = operand1 * operand2
    }
    const newProblem = {
      ...problem,
      operand1: operand1,
      operand2: operand2,
      answer: answer
    }
    setProblem(newProblem)
  }

  const createBubbles = () => {
    const newBubbles = []
    for (let i = 0; i < numberOfBubbles; i++) {
      const left = Math.random()*600
      const bottom = i*80
      const number = generateBubbleNumber(problem.answer, 3)
      newBubbles.push(
        <Bubble 
          key={i} 
          bubble={{ number, bottom, left }} 
          handleClick={checkAnswer}
        />
      )
    }
    setBubbles(newBubbles)
  }

 

  useEffect(() => {
    createProblem()
  }, [])

  useEffect(() => {
    createBubbles()
  }, [problem.answer])

  return (
    <div>
      <h1 className="heading">Math Bubbles!</h1>
      <div className="bubbleboard">
        {bubbles}
        <Problem problem={problem}/>
      </div>
      <Score score={score} />
      <Controls 
        problem={problem} 
        speed={speed} 
        setProblem={setProblem}
        setSpeed={setSpeed}
      />
    </div>
  );
}

export default App;
