import axios from 'axios';

const url = "https://hooks.slack.com/services/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";

class slackService {
    addTaskToSlack(data) {
        return axios({
            method: 'post',
            url,
            data
        })
    }

    setTaskToCompleteSlack(data) {
        return axios({
            method: 'post',
            url,
            data
        })
    }
}

export default new slackService();