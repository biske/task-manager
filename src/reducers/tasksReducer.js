import {
    ADD_TASKS,
    ADD_TASK,
    TOGGLE_TASK,
    REMOVE_TASK
} from '../actions';

const defaultState = {
    tasks: [],
};

function tasksReducer(state = defaultState, action) {
    switch(action.type) {
        case ADD_TASKS:
            return {
                ...state,
                tasks: action.tasks
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    (task.id === action.task.id)
                        ? action.task
                        : task
                )
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.task.id )
            };
        default:
            return state;
    }
}

export default tasksReducer;