import axios from "axios"

export const AllCards=(dataCard)=>{
    axios.get("https://jsonplaceholder.typicode.com/posts",dataCard)
}
