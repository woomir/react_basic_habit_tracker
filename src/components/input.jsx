import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <input placeholder="Habit"></input>
                <button id="add">Add</button>
            </div>
        );
    }
}

export default Input;