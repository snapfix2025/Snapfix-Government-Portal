import React from 'react'

const TodoStats = ({ total, completed, onClearCompleted }) => {
  const remaining = total - completed

  return (
    <div className="stats">
      <div className="stats-text">
        {remaining} of {total} remaining
      </div>
      {completed > 0 && (
        <button 
          className="clear-button"
          onClick={onClearCompleted}
        >
          Clear Completed ({completed})
        </button>
      )}
    </div>
  )
}

export default TodoStats
