import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import books from './books'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
                 {books.map(book => <li key={ book.isbn }>
                  <Link to={`/book/${ book.isbn }`}>
                 { book.title }
              </Link>
              </li>)}
            </ul>
          </nav>
          <main>
            <Route  exact path="/" render = {() => (<h1>Book's list</h1>)} />
            <Route path="/book/:bookIsbn" component={ Books } />
          </main>
        </div>
      </Router>
    );
  }
}

const Books = (props) => {
const book = books.find( book => book.isbn === props.match.params.bookIsbn )
console.log(book)
return (
  <div>
      <h2>Title: { book.title }</h2>
      <h4>Description: { book.description }</h4>
    </div>
)
}

//or to show the isbn(id)
// const Book = ({match}) => (
//   <div>
//     {match.params.bookIsbn}
//   </div>

export default App;
