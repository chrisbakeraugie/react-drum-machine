import React from 'react';
import DrumPad from "/Users/chrisbaker/react-drum-machine/src/components/DrumPad.js"

const DrumDisplay = (props) => (
    <div id={props.id}>
        <DrumPad id="Q"></DrumPad>
        <DrumPad id="W"></DrumPad>
        <DrumPad id="E"></DrumPad>
        <DrumPad id="A"></DrumPad>
        <DrumPad id="S"></DrumPad>
        <DrumPad id="D"></DrumPad>
        <DrumPad id="Z"></DrumPad>
        <DrumPad id="X"></DrumPad>
        <DrumPad id="C"></DrumPad>
    </div>
)

export default DrumDisplay;