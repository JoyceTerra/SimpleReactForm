import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ' '}
  
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    alert(`A name was submitted: ${this.state.value}`)
    event.preventDefault();

  }
  
  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <div><label>Name: <input name="name"  value={this.state.value} onChange={this.handleChange}/></label></div>
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
