import './App.css';
import Album from './components/Album';
import React from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import { useState } from 'react';
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  function handleLogin(data){
    if(data.username ==='admin' && data.password ==='12345'){
      setUser({ username: data.username})
    }
  }
  function handleRegistration(data){
    setUser({username: data.username})
  }
  return (
    <div className="App">
      {user ? (
        <div className="App">
          <h1>Добро пожаловать, {user.username}</h1>
        </div>
       ) : (<div>
        {isLogin ? (
          <Login onSubmit={handleLogin}/>
        ):(<Registration onSubmit={handleRegistration}/>)}
        <button onClick={()=> setIsLogin(!isLogin)}>{isLogin ? 'Зарегистрироваться':'Войти'}</button>
      </div>)}
  <Album/>
    </div>
  );
}

export default App;
