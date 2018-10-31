import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import taskService from '../../service/taskService';
import slackService from '../../service/slackService';

import { formatCompletedTaskMessage } from '../../utils/slackMessageFormatter';

import { ToggleTask, RemoveTask } from '../../actions';

class Task extends PureComponent {
    changeTaskStatus = (event) => {
        event.stopPropagation();
        const { task } = this.props;
        const newTask = {
            ...task,
            completed: !task.completed
        };

        taskService.updateTask(newTask)
            .then(res => {
                const task = res.data;
                this.props.ToggleTask(task);
            })
            .catch(err => console.log(err));

        if(!task.completed) {
            slackService.setTaskToCompleteSlack(formatCompletedTaskMessage(task.text))
                .catch(err => console.log(err.data));
        }
    };

    removeTask = (event) => {
        event.stopPropagation();
        taskService.removeTask(this.props.task)
            .then(res => {
                const task = res.data;
                this.props.RemoveTask(task);
            })
            .catch(err => console.log(err))
    };

    render(){
        const { text, completed } = this.props.task;
        return(
            <li className="singleGroup__item">
                <p>{text}</p>
                <div>
                    <span onClick={this.changeTaskStatus}><i className={"fas fa-check-circle" + (completed ? " completed" : "")}></i></span>
                    <span onClick={this.removeTask}><i className="fas fa-trash-alt"></i></span>
                </div>
            </li>
            )
        }
}

const mapDispatchToProps = dispatch => {
    return {
        ToggleTask: (task) => dispatch(ToggleTask(task)),
        RemoveTask: (task) => dispatch(RemoveTask(task))
    };
};

export default connect(null, mapDispatchToProps)(Task);