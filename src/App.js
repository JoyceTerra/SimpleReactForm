import React, { Component } from 'react';
import './App.css';
import books from './books'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            {books.map(book => <li key={book.isbn}>{book.title}</li>)}
          </ul>
        </nav>
        <main>
          Put the details here...
        </main>
      </div>
    );
  }
}

export default App;
