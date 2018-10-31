import { taskObjectMaker } from './taskObjectMaker';
import { formatNewTaskMessage, formatCompletedTaskMessage } from './slackMessageFormatter';

describe("Util Functions", () => {
    it("taskObjectMaker function", () => {
        let text = "text";
        let group = 'group';
        let result = taskObjectMaker(text, group);
        let mockedData = {
            "text": "text",
            "group": "group",
            "completed": false
        };
        expect(result).toEqual(mockedData)
    });

    it("formatNewTaskMessage function", () => {
        let text = 'text';
        let result = formatNewTaskMessage(text);
        let mockedData = JSON.stringify({
            "channel": "#new_tasks",
            "attachments": [{
                "title": "New Task",
                "text": "text",
                "color": "warning"
            }],
        });
        expect(result).toEqual(mockedData)
    });

    it("formatCompletedTaskMessage function", () => {
        let text = 'text';
        let result = formatCompletedTaskMessage(text);
        let mockedData = JSON.stringify({
            "channel": "#completed_tasks",
            "attachments": [{
                "title": "Task Completed",
                "text": "text",
                "color": "good"
            }],
        });
        expect(result).toEqual(mockedData)
    });
});
