import axios from 'axios';

const url = 'http://5bd3182cc8f9e400130cb870.mockapi.io/task';

class taskService {
    getAllTasks() {
        return axios({
            method: 'get',
            url
        });
    }
    addTask(data) {
        return axios({
            method: 'post',
            url,
            data
        })
    }
    updateTask(data){
        return axios({
            method: 'put',
            url: `${url}/${data.id}`,
            data
        })
    }
    removeTask(data){
        return axios({
            method: 'delete',
            url: `${url}/${data.id}`,
            data
        })
    }
}

export default new taskService();