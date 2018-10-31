import { combineReducers } from 'redux';

import tasksReducer from './tasksReducer';
import groupsReducer from './groupsReducer';

const rootReducer = combineReducers({
    tasksReducer,
    groupsReducer
});

export default rootReducer;