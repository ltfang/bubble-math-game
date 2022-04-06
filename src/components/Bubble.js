import React from 'react'

const Bubble = ({ bubble, handleClick }) => {
  const bubbleClass = "bubble"
  return(
    <div 
      className={bubbleClass}
      style={{left: `${bubble.left}px`, bottom: `${bubble.bottom}px`}}
      onClick={handleClick}
    >
      {bubble.number}
    </div>
  )
}

export default Bubble