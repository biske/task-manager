import {
    ADD_GROUPS,
    ADD_GROUP,
} from '../actions';

const defaultState = {
    groups: []
};

function groupsReducer(state = defaultState, action) {
    switch(action.type) {
        case ADD_GROUPS:
            return {
                ...state,
                groups: action.groups
            };
        case ADD_GROUP:
            return {
                ...state,
                groups: [...state.groups, action.group]
            };
        default:
            return state;
    }
}

export default groupsReducer;