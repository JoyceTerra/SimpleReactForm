import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <form className="App">
        <div><label>Name: <input name="name" /></label></div>
        <div><label>Date of birth: <input name="dateofbirth" type="date" /></label></div>
        <div>
          <label>Gender: 
            <select name="gender">
              <option label="-" value=""/>
              <option label="male" value="m"/>
              <option label="female" value="f"/>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
