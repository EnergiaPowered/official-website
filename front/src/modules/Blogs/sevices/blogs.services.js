import axios from "axios";

export const getBlogs = () => axios.get("http://localhost:4000/blogs");