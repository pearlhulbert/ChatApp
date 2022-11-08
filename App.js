import './App.css';
import React, { Component } from 'react';
import UsernameForm from './components/UserNameForm.js';

function App() {
  return (
    <UsernameForm onSubmit={username => alert(username)} />
  );
}

export default App;
