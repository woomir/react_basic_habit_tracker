import React, { Component } from 'react';
import Habit from './habit';
import HabitAddFform from './habitAddForm';

class Habits extends Component {

    // handleIncrement = habit => {
    //     this.props.onIncrement(habit);
    // };

    // handleDecrement = habit => {
    //     this.props.onDecrement(habit);
    // };

    // handleDelete = habit => {
    //     this.props.onDelete(habit);
    // };

    render() {
        return (
            <div className="habits">
                <HabitAddFform onAdd={this.props.onAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                        />
                    ))} 
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </div>
        );
    }
}

export default Habits;