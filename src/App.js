import React, { Component } from 'react';

class App extends Component {
  state = {
    imageUrl: ''
  }

  componentDidMount() {
    this.loadNew()
  }

  loadNew = () => {
    this.setState({ imageUrl: '' })
    fetch('https://aws.random.cat/meow').then(r => r.json()).then(({ file }) => {
      this.setState({ imageUrl: file })
    })
  }

  render() {
    return (
      <div className="App" onClick={this.loadNew}>
        {!this.state.imageUrl && <div>Loading...</div>}
        {this.state.imageUrl &&
          <img
            src={this.state.imageUrl}
            style={{ maxWidth: '300px', cursor: 'pointer' }}
            alt="a random cat" />
        }
      </div>
    );
  }
}

export default App;
