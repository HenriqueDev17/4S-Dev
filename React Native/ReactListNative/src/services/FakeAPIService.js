import axios from "axios";
const apiPort = "3000";
const apiUrl = "172.16.1.138";
const localApi = `http://${apiUrl}:${apiPort}`
const externalApi = null;
const api = axios.create({
    baseURL : localApi
});
export default api