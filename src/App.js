import React from 'react';
import './App.css';
import DrumDisplay from './components/DrumDisplay.js'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "Press a key or click a pad to play a sound"
    }
  }

  /**
   * This method changes the state when one of the DrumPad comp are triggered
   */
  handleDisplay = (newDisplay) => {
    this.setState({
      display: newDisplay
    })
  }

  render() {
    return (
      <div id="drum-machine" className="App">
      <h3>
      This drum machine will respond to either keystrokes or clicks. 
      <br/>
      To see the code and my other work, visit my github page.
      <br/>
      <a href="https://github.com/chrisbakeraugie" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" href="www.chrisbakeraugie.github.io"></FontAwesomeIcon></a>
      </h3>
      
      
        <DrumDisplay id="display" bankOne={bankOne} display={this.state.display} handleDisplay={this.handleDisplay}></DrumDisplay>
        <br/>
        <footer>
          Made by Chris Baker
          </footer>

      </div>
    )
  }
}


export default App;
