import axios from 'axios';

const url = 'http://5bd3182cc8f9e400130cb870.mockapi.io/group';

class groupService {
    getAllGroups() {
        return axios({
            method: 'get',
            url
        });
    }
    addGroup(data) {
        return axios({
            method: 'post',
            url,
            data
        })
    }
}

export default new groupService();