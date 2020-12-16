// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    updateClick = () => {
        this.setState(prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.updateClick}>{this.state.timesClicked}</button>
        )
    }
}