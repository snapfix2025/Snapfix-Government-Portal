from flask import Flask, request, jsonify
import json
import os
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    resources={r"/api/*": {"origins": "https://snapfix-government-portal.onrender.com"}},
    supports_credentials=True
)
# In-memory storage for simplicity (in production, use a database)
todos = []
next_id = 1

# Load todos from file if it exists
def load_todos():
    global todos, next_id
    if os.path.exists('todos.json'):
        try:
            with open('todos.json', 'r') as f:
                data = json.load(f)
                todos = data.get('todos', [])
                next_id = data.get('next_id', 1)
        except:
            todos = []
            next_id = 1

# Save todos to file
def save_todos():
    with open('todos.json', 'w') as f:
        json.dump({'todos': todos, 'next_id': next_id}, f)

# Load todos on startup
load_todos()

@app.route('/api/todos', methods=['GET'])
def get_todos():
    """Get all todos"""
    return jsonify(todos)

@app.route('/api/todos', methods=['POST'])
def create_todo():
    """Create a new todo"""
    global next_id
    
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'Text is required'}), 400
    
    todo = {
        'id': next_id,
        'text': data['text'],
        'completed': False,
        'created_at': datetime.now().isoformat()
    }
    
    todos.append(todo)
    next_id += 1
    save_todos()
    
    return jsonify(todo), 201

@app.route('/api/todos/<int:todo_id>', methods=['PUT'])
def update_todo(todo_id):
    """Update a todo"""
    todo = next((t for t in todos if t['id'] == todo_id), None)
    if not todo:
        return jsonify({'error': 'Todo not found'}), 404
    
    data = request.get_json()
    if 'text' in data:
        todo['text'] = data['text']
    if 'completed' in data:
        todo['completed'] = data['completed']
    
    save_todos()
    return jsonify(todo)

@app.route('/api/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    """Delete a todo"""
    global todos
    todo = next((t for t in todos if t['id'] == todo_id), None)
    if not todo:
        return jsonify({'error': 'Todo not found'}), 404
    
    todos = [t for t in todos if t['id'] != todo_id]
    save_todos()
    return jsonify({'message': 'Todo deleted successfully'})

@app.route('/api/todos/clear-completed', methods=['DELETE'])
def clear_completed():
    """Clear all completed todos"""
    global todos
    todos = [t for t in todos if not t['completed']]
    save_todos()
    return jsonify({'message': 'Completed todos cleared'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
