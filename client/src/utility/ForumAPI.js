import axios from 'axios';

export default {
    getThreads: function () {
        return axios.get('/api/thread/get/all')
    },
    createThread: function (thread) {
        return axios.post('/api/thread/create', thread)
    },
    createPost: function (post) {
        const { _id } = post;
        return axios.post(`/api/post/create/${_id}`, post)
    }

}