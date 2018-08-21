import React, { Component } from 'react';

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

class App extends Component {
  state = {
    names: ["Arien", "Mimi", "Rein"]
  }

  componentDidMount() {
    this.interval = setInterval(()=>{this.setState({names: shuffle(this.state.names)})}, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="App" onClick={this.loadNew}>
        {this.state.names.map(name => <div><label>Name: <input value={name}/></label></div>)}
      </div>
    );
  }
}

export default App;
