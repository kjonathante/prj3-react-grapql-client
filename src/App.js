import React, { Component } from 'react';

import './App.css';

import Books from './components/Books'
import CreateBook from './components/CreateBook'

class App extends Component {
  render() {
    return (
      <div>
        <Books />
        <CreateBook />
      </div>
    );
  }
}

export default App;
