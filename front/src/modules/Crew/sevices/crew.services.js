import axios from "axios";

export const getEvents = () => axios.get("http://localhost:4000/events");