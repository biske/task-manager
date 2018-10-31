import React, { Component } from 'react';
import GroupList from './components/groups/GroupList';
import AddTaskComponent from './components/addItems/AddTaskComponent';
import AddGroupComponent from './components/addItems/AddGroupComponent';

import './components/addItems/AddComponents.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="addComponents">
              <AddTaskComponent />
              <AddGroupComponent />
          </div>
        <GroupList />
      </div>
    );
  }
}

export default App;
