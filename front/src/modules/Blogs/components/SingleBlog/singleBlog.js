import React ,{useState ,useEffect} from "react"
import {useHistory ,useRouteMatch} from "react-router-dom"
import { getBlogs } from './../../sevices/blogs.services';
import HeaderForBlogs from "../Header/HeaderForBlogs";
import bg_blogs from "assets/Blogs-header.png";

function SingleBlog(){
    const [singleBlogCard, setSingleBlog] =useState({})
    const match =useRouteMatch()
    console.log(match.params.id)
    useEffect(()=>{
        getBlogs().then(res=>{
            console.log(res.data)
           const blog = res.data[match.params.id]
           console.log(blog.title)
           if(blog){
               setSingleBlog({blog})
           }
            }
            )
    },[])    
let style = {
    backgroundImage: `url(${bg_blogs})`
  };
    return(
        <>
            {singleBlogCard.blog ? 

            <div style={style} className="page-component">
                <HeaderForBlogs />
                <h1>{singleBlogCard.blog.title}</h1>
                <p>{singleBlogCard.blog.body}</p>
            </div>
            :null})
           
        </>
    )
}
export default SingleBlog