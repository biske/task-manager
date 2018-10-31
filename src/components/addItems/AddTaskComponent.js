import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import taskService from '../../service/taskService';
import slackService from '../../service/slackService';

import { formatNewTaskMessage } from '../../utils/slackMessageFormatter';
import { taskObjectMaker } from '../../utils/taskObjectMaker';

import { AddTask } from '../../actions';

import './AddComponents.scss';

class AddTaskComponent extends PureComponent {
    constructor(){
        super();

        this.state = {
            text: '',
            group: '',
        }
    }

    onSubmit = () => {
        const { text, group } = this.state;
        taskService.addTask(taskObjectMaker(text, group))
            .then(res => {
                const task = res.data;
                this.props.AddTask(task);
            });

        slackService.addTaskToSlack(formatNewTaskMessage(text))
            .catch(err => console.log(err.data));

        this.setState({ text: ''})
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div className="addComponent addComponent--addTask">
                <input name="text" type="text" value={this.state.text} onChange={this.onChange} />
                <select name="group" defaultValue={-1} onChange={this.onChange}>
                    <option disabled value={-1}> -- select a group -- </option>
                    {this.props.groups.map(group => <option key={group.name} value={group.id}>{group.name}</option>)}
                </select>
                <button className="addTask__button addButton" onClick={this.onSubmit} disabled={!this.state.text || !this.state.group}>Add Task</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        groups: state.groupsReducer.groups
    }
};

const mapDispatchToProps = dispatch => {
    return {
        AddTask: (task) => dispatch(AddTask(task)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskComponent);