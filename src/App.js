import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrumDisplay from './components/DrumDisplay.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div id="drum-machine" className="App">

        <DrumDisplay id="display"></DrumDisplay>

      </div>
    )
  }
}

export default App;
