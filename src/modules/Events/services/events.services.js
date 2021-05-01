import axios from "axios";
import authHeader from "globals/auth-header";
import configs from "globals/config";

const token = authHeader()['x-auth-token'];

export const getEvents = () => axios.get(`${configs.HOST}events`);

export const getSingleEvent = (id) => axios.get(`${configs.HOST}events/${id}`);

export const getEventChat = (id) => axios.get(`${configs.HOST}events/${id}/chat`, { headers: { 'x-auth-token': token } });