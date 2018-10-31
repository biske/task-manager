const taskObjectMaker = (text, group) => {
    const data = {
        "text": text,
        "group": group || "default",
        "completed": false
    };
    return data;
};

export { taskObjectMaker };