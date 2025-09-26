# Todo Backend API

A Flask-based REST API for managing todos.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/<id>` - Update a todo
- `DELETE /api/todos/<id>` - Delete a todo
- `DELETE /api/todos/clear-completed` - Clear all completed todos

## Data Format

Todo object:
```json
{
  "id": 1,
  "text": "Sample todo",
  "completed": false,
  "created_at": "2023-12-01T10:00:00"
}
```
