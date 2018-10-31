// ***** TASKs ***** //
export const ADD_TASKS = 'ADD_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
// ***** GROUPs ***** //
export const ADD_GROUPS = 'ADD_GROUPS';
export const ADD_GROUP = 'ADD_GROUP';

// ----- Tasks ----- //
export function AddTasks(tasks) {
    const action = {
        type: ADD_TASKS,
        tasks
    };
    return action;
}

export function AddTask(task) {
    const action = {
        type: ADD_TASK,
        task
    };
    return action;
}

export function ToggleTask(task){
    const action = {
        type: TOGGLE_TASK,
        task
    };
    return action;
}

export function RemoveTask(task) {
    const action = {
        type: REMOVE_TASK,
        task
    };
    return action;
}

// ----- Groups ----- //
export function AddGroups(groups) {
    const action = {
        type: ADD_GROUPS,
        groups
    };
    return action;
}

export function AddGroup(group) {
    const action = {
        type: ADD_GROUP,
        group
    };
    return action;
}
