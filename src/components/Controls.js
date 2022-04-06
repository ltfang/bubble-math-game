import React from 'react'

const Controls = ({ problem, speed, setProblem, setSpeed }) => {

  const selectSpeed = (event) => {
    const selectedSpeed = event.currentTarget.textContent
    setSpeed(selectedSpeed)
  }

  const selectOperator = (event) => {
    const selectedOperator = event.currentTarget.textContent
    let answer
    selectedOperator === "+" ? (answer = problem.operand1+problem.operand2)
      : (answer = problem.operand1*problem.operand2)
    setProblem({
      ...problem,
      operator: selectedOperator,
      answer: answer
    })
  }

  const speedOptions = ["Slow", "Medium", "Fast"]
  const speedControls = speedOptions.map(speedOption => {
    let speedClass = "speed control"
    if (speedOption===speed) {
      speedClass += " selected"
    }
    return(
      <div 
        key={speedOption} 
        className={speedClass}
        onClick={selectSpeed}
      >
        {speedOption}
      </div>
    )
  })

  const operatorOptions = ["+", "x"]
  const operatorControls = operatorOptions.map(operatorOption => {
    let operatorClass = "control"
    if (problem.operator===operatorOption) {
      operatorClass += " selected"
    }
    return(
      <div 
        key={operatorOption} 
        className={operatorClass}
        onClick={selectOperator}
      >
        {operatorOption}
      </div>
    )
  })

  return (
    <div className="controls">
      <div className="speed-control">
        {speedControls}
      </div>
      <div className="operator-panel">
        {operatorControls}
      </div>
    </div>
  )
}

export default Controls