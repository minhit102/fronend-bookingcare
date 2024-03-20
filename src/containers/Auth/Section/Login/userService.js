// userService.js

import axios from 'axios';

const handleLoginAPI = async (email, password) => {

    const dt =  await axios.post("http://localhost:8002/api/login", { email : email, password : password})
    return dt
};

export {handleLoginAPI}
