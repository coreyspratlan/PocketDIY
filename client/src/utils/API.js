import axios from 'axios';

export default {
    // This function is to check if the user is logged in, and to return their info if they are not
    checkUserInfo: () => {
        return axios.get("/api/user_data");
    },
    signup: (signupData) => {
        return axios.post("/api/signup", signupData)
    },
    login: (loginData) => {
        return axios.post("/api/login", loginData)
    },
    logout: () => {
        return axios.get("/logout");
    },
    createProject: (data) => {
        return axios.post("/api/projects", data);
    },
    getProjects: () => {
        return axios.get("/api/projects");
    },
    deleteProjects: () => {
        return axios.get("/api/projects/:id");
    }
}