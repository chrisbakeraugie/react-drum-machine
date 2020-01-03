import React from 'react';
import DrumPad from "./DrumPad.js"




const DrumDisplay = (props) => (
    <div id={props.id}>
        <h2 id="display-text">{props.display}</h2>
        <DrumPad id={props.bankOne[0].keyTrigger} src={props.bankOne[0].url} keycode={props.bankOne[0].keyCode} padname={props.bankOne[0].id} handleDisplay={props.handleDisplay}></DrumPad>
        <DrumPad id={props.bankOne[1].keyTrigger} src={props.bankOne[1].url} keycode={props.bankOne[1].keyCode} padname={props.bankOne[1].id} handleDisplay={props.handleDisplay}></DrumPad>
        <DrumPad id={props.bankOne[2].keyTrigger} src={props.bankOne[2].url} keycode={props.bankOne[2].keyCode} padname={props.bankOne[2].id} handleDisplay={props.handleDisplay}></DrumPad>
        <DrumPad id={props.bankOne[3].keyTrigger} src={props.bankOne[3].url} keycode={props.bankOne[3].keyCode} padname={props.bankOne[3].id} handleDisplay={props.handleDisplay}></DrumPad>
        <DrumPad id={props.bankOne[4].keyTrigger} src={props.bankOne[4].url} keycode={props.bankOne[4].keyCode} padname={props.bankOne[4].id} handleDisplay={props.handleDisplay}></DrumPad>
        <DrumPad id={props.bankOne[5].keyTrigger} src={props.bankOne[5].url} keycode={props.bankOne[5].keyCode} padname={props.bankOne[5].id} handleDisplay={props.handleDisplay}></DrumPad>
        <DrumPad id={props.bankOne[6].keyTrigger} src={props.bankOne[6].url} keycode={props.bankOne[6].keyCode} padname={props.bankOne[6].id} handleDisplay={props.handleDisplay}></DrumPad>
        <DrumPad id={props.bankOne[7].keyTrigger} src={props.bankOne[7].url} keycode={props.bankOne[7].keyCode} padname={props.bankOne[7].id} handleDisplay={props.handleDisplay}></DrumPad>
        <DrumPad id={props.bankOne[8].keyTrigger} src={props.bankOne[8].url} keycode={props.bankOne[8].keyCode} padname={props.bankOne[8].id} handleDisplay={props.handleDisplay}></DrumPad>
    </div>
)


export default DrumDisplay;