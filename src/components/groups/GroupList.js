import React, { Component } from 'react';
import { connect } from 'react-redux'

import taskService from '../../service/taskService';
import groupService from '../../service/groupService';

import SingleGroup from './SingleGroup';

import './GroupList.scss';

import {
    AddTasks,
    AddGroups
} from '../../actions';

class GroupList extends Component {
    componentDidMount() {
        taskService.getAllTasks()
            .then(res => {
                const tasks = res.data;
                this.props.AddTasks(tasks);
            });
        groupService.getAllGroups()
            .then(res => {
                const groups = res.data;
                this.props.AddGroups(groups)
            })
    }

    render() {
        return (
            <div className="groupList">
                {this.props.groupsWithTasks.map(group =>
                    <SingleGroup key={group.id} tasks={group.tasks} group={group}/>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
   return {
        groupsWithTasks: state.groupsReducer.groups.map(group => ({
            ...group,
            tasks: state.tasksReducer.tasks.filter(task => task.group === group.id)
        }))
   };
};

const mapDispatchToProps = dispatch => {
    return {
        AddTasks: (tasks) =>  dispatch(AddTasks(tasks)),
        AddGroups: (groups) => dispatch(AddGroups(groups))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(GroupList);