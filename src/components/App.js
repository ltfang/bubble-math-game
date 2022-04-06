import '../App.css';
import Problem from './Problem';
import Score from './Score';
import Controls from './Controls';
import { useState, useEffect } from 'react'

const App = (props) => {
  const [problem, setProblem] = useState({
    operand1: null,
    operand2: null,
    operator: "+",
    answer: null
  })

  const [score, setScore] = useState(0)

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

  useEffect(() => {
    createProblem()
  }, [])

  return (
    <div>
      <h1 className="heading">Math Bubbles!</h1>
      <div className="bubbleboard">
        <Problem problem={problem}/>
      </div>
      <Score score={score} />
      <Controls problem={problem} />
    </div>
  );
}

export default App;
