import React ,{useState ,useEffect} from "react"
import {useParams,useHistory ,useRouteMatch} from "react-router-dom"
import { getBlogs } from './../../sevices/blogs.services';
import HeaderForBlogs from "../Header/HeaderForBlogs";
function SingleBlog(){
    const [singleBlog, setSingleBlog] =useState({
    })
    const history =useHistory()
    const match =useRouteMatch()
    console.log(match.params.id)
    useEffect(()=>{
        getBlogs().then(res=>{
           const blog = res.data.find((blog)=>blog.id === match.params.id)
           if(blog){
               setSingleBlog({blog:blog})
           }else{
               history.push("/not-found")
           }
            }
            )
            console.log(singleBlog)
    },[])

    return(
        <>

            {singleBlog ? <HeaderForBlogs /> :null}
        </>
    )
}
export default SingleBlog