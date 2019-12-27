import React from 'react';


const DrumKey = (props) => (
    <div id={props.id} className="drum-pad">
        {props.id}
        <audio src={props.audioClip} id={props.id} className={props.clip}></audio>

    </div>
)

export default DrumKey;