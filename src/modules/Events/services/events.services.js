import axios from "axios";
import configs from "globals/config";

export const getEvents = () => axios.get(`${configs.HOST}events`);

export const getSingleEvent = (id) => axios.get(`${configs.HOST}events/${id}`);