import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ' ',
      dateofbirth: ' ',
      gender: ' ',
      value: ''
    
    }
  
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({[name]:value})
  }

  handleSubmit(event){
    alert(`Some info was submitted: 
      Name: ${this.state.name},
      Date of Birth: ${this.state.dateofbirth},
      Gender: ${this.state.gender}
      `)
    event.preventDefault();
  }
  
  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>

        <div><label>Name: <input name="name"  value={this.state.name} onChange={this.handleChange}/></label></div>

        <div><label>Date of birth: <input name="dateofbirth" type="date"  value={this.state.dateofbirth} onChange={this.handleChange}  /></label></div>
        <div>

          <label>Gender: 
            <select name="gender" value={this.state.gender} onChange={this.handleChange}>
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
