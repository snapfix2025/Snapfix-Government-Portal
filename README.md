# Todo Application

A full-stack todo application with a React + Vite frontend and Flask backend.

## 🚀 Features

- **Frontend**: Modern React application with Vite
- **Backend**: Flask REST API with CORS support
- **Real-time**: Live updates between frontend and backend
- **Responsive**: Mobile-friendly design
- **Persistent**: Data persistence with JSON file storage
- **Modern UI**: Beautiful gradients and smooth animations

## 📁 Project Structure

```
├── backend/           # Flask API server
│   ├── app.py        # Main Flask application
│   ├── requirements.txt
│   └── README.md
├── frontend/         # React + Vite application
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
└── README.md
```

## 🛠️ Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Run the Flask server:
```bash
python app.py
```

The backend API will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🎯 Usage

1. Start both the backend and frontend servers
2. Open your browser to `http://localhost:3000`
3. Add, complete, and delete todos
4. View your progress with the built-in statistics

## 🔧 API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/<id>` - Update a todo
- `DELETE /api/todos/<id>` - Delete a todo
- `DELETE /api/todos/clear-completed` - Clear all completed todos

## 🎨 Features

- **Add Todos**: Type and press Enter or click Add Todo
- **Complete Todos**: Click the circle to mark as complete
- **Delete Todos**: Click the Delete button to remove a todo
- **Clear Completed**: Remove all completed todos at once
- **Statistics**: See how many todos remain
- **Responsive Design**: Works on desktop and mobile

## 🛡️ Error Handling

The application includes comprehensive error handling for:
- Network connectivity issues
- API failures
- Invalid data input
- Server unavailability

## 🔄 Data Persistence

Todos are automatically saved to a JSON file (`todos.json`) in the backend directory, ensuring your data persists between server restarts.

## 🚀 Deployment

For production deployment:

1. **Backend**: Deploy the Flask app to a service like Heroku, Railway, or DigitalOcean
2. **Frontend**: Build the React app (`npm run build`) and deploy to Vercel, Netlify, or similar
3. **Environment**: Update the API URL in the frontend to point to your production backend

## 📝 License

This project is open source and available under the MIT License.
# sample-project
