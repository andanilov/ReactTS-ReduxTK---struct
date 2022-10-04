import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';

// import Login from './pages/Login';
// import Calendar from './pages/Calendar';

// const router = createBrowserRouter([
//   { path: '/', element: <Calendar /> },
//   { path: '/login', element: <Login /> },
// ]);

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
