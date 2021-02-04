import axios from "axios";
import configs from "../../../globals/config";

export const getCrew = () => axios.get(`${configs.HOST}/crew`);