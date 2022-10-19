import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { useTypedDispatch } from './hooks/useTypedDispatch';
import { useTypedSelector } from './hooks/useTypedSelector';
import { checkAuth } from './store/authSlice';
// import { useAuth } from './hooks/useAuth';

function App() {
  // Check if user is loged
  // const { checkAuth, loadingCheckAuth } = useAuth();

  const { user } = useTypedSelector((state) => state.auth);
  const dispatch = useTypedDispatch();
  useEffect(() => { dispatch(checkAuth()); }, []);

  return (
    <div className="App">
      {user !== undefined && <AppRouter />}
    </div>
  );
}

export default App;
