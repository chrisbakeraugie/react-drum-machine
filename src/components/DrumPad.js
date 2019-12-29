import React from 'react';
import { render } from '@testing-library/react';


class DrumPad extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    handleClick = () =>{
        this.audio.play();
        this.audio.currentTime = 0;
    }

    render() {
        return (
            <div id={this.props.id} className="drum-pad" onClick={this.handleClick}>
                {this.props.id}
                <audio src={this.props.src} id={this.props.id} className="clip" ref={ref => this.audio =ref}></audio>
            </div>
        );
    }
}




export default DrumPad;