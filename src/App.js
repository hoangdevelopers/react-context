import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import AppContext from './AppContext';
import Content from './Content';

function App() {
  const [todos, setTodos] = useState([{
    value: 'goto the office',
    completed: true
  }, {
    value: 'learning reactjs',
    completed: false
  }])

  const [colapse, setColapse] = useState(true);
  
  return (
    <div className="App">
      <AppContext.Provider value={{todos : todos, setTodos: setTodos, colapse: colapse, setColapse: setColapse}}>
        <Header/>
        <Content></Content>
      </AppContext.Provider>
    </div>
  );
}

export default App;
