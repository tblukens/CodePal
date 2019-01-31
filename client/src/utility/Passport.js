import axios from 'axios';


export default {

    register: function (user) {
return axios({
            url: '/api/accounts/register',
            method: 'post',
            data: user
        })

    }
}