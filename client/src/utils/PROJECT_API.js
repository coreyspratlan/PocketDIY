import axios from 'axios';

export default {
    createProject: (data) => {
        return axios.post("/api/projects", data);
    },
    getProjects: () => {
        return axios.get("/api/projects");
    },
    deleteProjects: (uuid) => {
        return axios.delete("/api/projects/" + uuid);
    }
}