import groupsReducer from './groupsReducer';
import { ADD_GROUPS, ADD_GROUP }  from '../actions';

const defaultState = {
    groups: []
};

const mockedGroups = {
    groups: [
        ...defaultState.groups,
        {
        id: "5",
        createdAt: "2018-10-31T09:27:42.679Z",
        name: "Nova za test"
        }
    ]
};

describe('groups reducer', () => {
    it('should return the initial state', () => {
        expect(groupsReducer(defaultState, {})).toEqual(defaultState);
    });

    it('should handle ADD_GROUPS', () => {
        const startAction = {
            type: ADD_GROUPS
        };
        // it's empty on purpose because it's just starting to fetch posts
        expect(groupsReducer({}, startAction)).toEqual({});
    });

    it('should handle ADD_GROUP', () => {
        const successAction = {
            type: ADD_GROUP,
            group: {
                id: "5",
                createdAt: "2018-10-31T09:27:42.679Z",
                name: "Nova za test"
            },
        };
        expect(groupsReducer(defaultState, successAction)).toEqual(mockedGroups);
    });
});