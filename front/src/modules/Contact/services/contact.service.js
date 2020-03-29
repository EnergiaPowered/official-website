import axios from "axios";

export const sendMessage = (messageData) => {
    return axios.post("/message", messageData);
}