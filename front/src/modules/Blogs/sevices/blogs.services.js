import axios from "axios";

export const getBlogs =()=>axios.get("https://jsonplaceholder.typicode.com/posts")