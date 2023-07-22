import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './contexts/MyProvider';

import Login from './components/LoginComponent';
import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <Login />
        <BrowserRouter >
          <Main />
        </BrowserRouter>
      </MyProvider>
    );
  }
}
export default App;