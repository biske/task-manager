import tasksReducer from './tasksReducer';
import {
    ADD_TASK,
    ADD_TASKS,
    TOGGLE_TASK,
    REMOVE_TASK
}  from '../actions';

const defaultState = {
    tasks: []
};

const defaultStateToggle = {
    tasks: [
        ...defaultState.tasks,
        {
            id: "1",
            createdAt: "2018-10-30T20:30:29.070Z",
            text: "Ponesi dorucak",
            group: "2",
            completed: true
        }
    ]
};

const mockedTasks = {
    tasks: [
        ...defaultState.tasks,
        {
            id: "1",
            createdAt: "2018-10-30T20:30:29.070Z",
            text: "Ponesi dorucak",
            group: "2",
            completed: false
        }
    ]
};


describe('tasks reducer', () => {
    it('should return the initial state', () => {
        expect(tasksReducer(defaultState, {})).toEqual(defaultState);
    });

    it('should handle ADD_TASKS', () => {
        const startAction = {
            type: ADD_TASKS
        };
        // it's empty on purpose because it's just starting to fetch posts
        expect(tasksReducer({}, startAction)).toEqual({});
    });

    it('should handle ADD_TASK', () => {
        const successAction = {
            type: ADD_TASK,
            task: {
                id: "1",
                createdAt: "2018-10-30T20:30:29.070Z",
                text: "Ponesi dorucak",
                group: "2",
                completed: false
            },
        };
        expect(tasksReducer(defaultState, successAction)).toEqual(mockedTasks);
    });

    it('should handle TOGGLE_TASK', () => {
        const successAction = {
            type: TOGGLE_TASK,
            task: {
                id: "2",
                createdAt: "2018-10-30T20:30:29.070Z",
                text: "Ponesi dorucak",
                group: "2",
                completed: false
            },
        };
        expect(tasksReducer(defaultStateToggle, successAction)).toEqual(defaultStateToggle);
    });

    it('should handle REMOVE_TASK', () => {
        const successAction = {
            type: REMOVE_TASK,
            task: {
                id: "1",
                createdAt: "2018-10-30T20:30:29.070Z",
                text: "Ponesi dorucak",
                group: "2",
                completed: true
            },
        };
        expect(tasksReducer(defaultStateToggle, successAction)).toEqual(defaultState);
    });
});
