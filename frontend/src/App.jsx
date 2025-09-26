import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoStats from './components/TodoStats'

const API_BASE_URL = 'http://localhost:5000/api'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch todos from API
  const fetchTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get(`${API_BASE_URL}/todos`)
      setTodos(response.data)
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend server is running.')
      console.error('Error fetching todos:', err)
    } finally {
      setLoading(false)
    }
  }

  // Add new todo
  const addTodo = async (text) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, { text })
      setTodos([...todos, response.data])
    } catch (err) {
      setError('Failed to add todo')
      console.error('Error adding todo:', err)
    }
  }

  // Toggle todo completion
  const toggleTodo = async (id) => {
    try {
      const todo = todos.find(t => t.id === id)
      const response = await axios.put(`${API_BASE_URL}/todos/${id}`, {
        completed: !todo.completed
      })
      setTodos(todos.map(t => t.id === id ? response.data : t))
    } catch (err) {
      setError('Failed to update todo')
      console.error('Error updating todo:', err)
    }
  }

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`)
      setTodos(todos.filter(t => t.id !== id))
    } catch (err) {
      setError('Failed to delete todo')
      console.error('Error deleting todo:', err)
    }
  }

  // Clear completed todos
  const clearCompleted = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/clear-completed`)
      setTodos(todos.filter(t => !t.completed))
    } catch (err) {
      setError('Failed to clear completed todos')
      console.error('Error clearing completed todos:', err)
    }
  }

  // Load todos on component mount
  useEffect(() => {
    fetchTodos()
  }, [])

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="container">
      <div className="header">
        <h1>📝 Todo App</h1>
        <p>Stay organized and get things done</p>
      </div>

      {error && (
        <div className="error">
          {error}
          <button 
            onClick={() => setError(null)}
            style={{ marginLeft: '10px', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>
      )}

      <TodoForm onAddTodo={addTodo} />

      {loading ? (
        <div className="loading">Loading todos...</div>
      ) : (
        <>
          <TodoStats 
            total={totalCount} 
            completed={completedCount} 
            onClearCompleted={clearCompleted}
          />
          <TodoList 
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
        </>
      )}
    </div>
  )
}

export default App
