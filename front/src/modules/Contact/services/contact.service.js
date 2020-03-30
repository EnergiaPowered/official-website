import axios from "axios";

export const sendMessage = (messageData) => {
    return axios.post("/message", messageData);
}

export const getInfo = (messageData) => {
    return axios.get("/contactInfo", messageData);
}
