import React from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(todo.id)
  }

  const handleDelete = () => {
    onDelete(todo.id)
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div 
        className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
        onClick={handleToggle}
      >
        {todo.completed && '✓'}
      </div>
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button 
        className="delete-button"
        onClick={handleDelete}
        title="Delete todo"
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
