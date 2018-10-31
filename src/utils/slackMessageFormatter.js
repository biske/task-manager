const formatNewTaskMessage = (text) => {
    const data = JSON.stringify({
        "channel": "#new_tasks",
        "attachments": [{
            "title": "New Task",
            "text": text,
            "color": "warning"
        }],
    });
    return data;
};

const formatCompletedTaskMessage = (text) => {
    const data = JSON.stringify({
        "channel": "#completed_tasks",
        "attachments": [{
            "title": "Task Completed",
            "text": text,
            "color": "good"
        }],
    });
    return data;
};

export { formatNewTaskMessage, formatCompletedTaskMessage };