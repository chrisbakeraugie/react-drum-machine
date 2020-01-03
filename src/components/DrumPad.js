import React from 'react';



class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayText: ""
        }
    }

    /**
     * This repesonds to clicks on the screen, plays the audio file, and sends the correct id back to the handleDisplay method in App.js
     */
    handleClick = () => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.padname)

    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    /**
    * This repesonds to keydowns, plays the audio file, and sends the correct id back to the handleDisplay method in App.js
    */
    handleKeyDown = (event) => {
        if (event.keyCode === this.props.keycode) {
            this.audio.play();
            this.audio.currentTime = 0;
            this.setState({ displayText: this.props.padname })
            this.props.handleDisplay(this.props.padname)
        }

    }

    render() {
        return (
            <div id={this.props.id} className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyDown} keycode={this.props.keycode}>
                <h3>{this.props.id}</h3>
                <audio src={this.props.src} id={this.props.id} className="clip" ref={ref => this.audio = ref} ></audio>
            </div>
        );
    }
}




export default DrumPad;