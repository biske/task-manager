import React, { Component } from 'react';

import Task from '../tasks/Task';
import './SingleGroup.scss';

class SingleGroup extends Component {
    render(){
        return (
            <div className="singleGroup">
                <div className="singleGroup__header">
                    <h3>{this.props.group.name}</h3>
                </div>
                <ul>
                    {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
                    {!this.props.tasks.length && <span className="singleGroup__noTasks">This group have no tasks added!</span>}
                </ul>
            </div>
        )
    }
}

export default SingleGroup;