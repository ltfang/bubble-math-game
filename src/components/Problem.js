import React from 'react'

const Problem = ({ problem }) => {

  return (
    <div className="problem-container">
      <div className="operand">{problem.operand1}</div>
      <div className="operator">{problem.operator}</div>
      <div className="operand">{problem.operand2}</div>
    </div>
  )
}

export default Problem