import React, { PureComponent } from 'react';
import groupService from '../../service/groupService';
import { connect } from 'react-redux'
import { AddGroup } from '../../actions';

import './AddComponents.scss';

class AddGroupComponent extends PureComponent {
    constructor(){
        super();

        this.state = {
            groupName: '',
        }
    }

    onSubmit = () => {
        groupService.addGroup({
            "name": this.state.groupName
        })
            .then(res => {
                const group = res.data;
                this.props.AddGroup(group);
            });

        this.setState({ groupName: ''})
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div className="addComponent addComponent--group">
                <input name="groupName" type="text" value={this.state.groupName} onChange={this.onChange} />
                <button className="addGroup__button addButton" onClick={this.onSubmit} disabled={!this.state.groupName}>Add Group</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddGroup: (group) => dispatch(AddGroup(group)),
   };
};

export default connect(null, mapDispatchToProps)(AddGroupComponent);