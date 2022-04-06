import React from 'react'

const Controls = props => {
  return (
    <div className="controls">
      <div className="speed-control">
        <div className="speed control slow">Slow</div>
        <div className="speed control medium">Medium</div>
        <div className="speed control fast">Fast</div>
      </div>
      <div className="operator-panel">
        <div className="plus control">+</div>
        <div className="times control">x</div>
      </div>
    </div>
  )
}

export default Controls