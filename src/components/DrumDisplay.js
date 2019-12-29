import React from 'react';
import DrumPad from "/Users/chrisbaker/react-drum-machine/src/components/DrumPad.js"

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

  console.log(bankOne[0].keyTrigger);
  
const DrumDisplay = (props) => (
    <div id={props.id}>
        <DrumPad id={bankOne[0].keyTrigger} src={bankOne[0].url} onClick={handleClick}></DrumPad>
        <DrumPad id={bankOne[1].keyTrigger} src={bankOne[1].url}></DrumPad>
        <DrumPad id={bankOne[2].keyTrigger} src={bankOne[2].url}></DrumPad>
        <DrumPad id={bankOne[3].keyTrigger} src={bankOne[3].url}></DrumPad>
        <DrumPad id={bankOne[4].keyTrigger} src={bankOne[4].url}></DrumPad>
        <DrumPad id={bankOne[5].keyTrigger} src={bankOne[5].url}></DrumPad>
        <DrumPad id={bankOne[6].keyTrigger} src={bankOne[6].url}></DrumPad>
        <DrumPad id={bankOne[7].keyTrigger} src={bankOne[7].url}></DrumPad>
        <DrumPad id={bankOne[8].keyTrigger} src={bankOne[8].url}></DrumPad>
    </div>
)

function handleClick() {
    console.log("Clicked");
}

export default DrumDisplay;