import React ,{useState ,useEffect} from "react";
import {Link} from "react-router-dom"
import {getBlogs} from "./../../sevices/blogs.services"
import "./BlogList.css"
function BlogList(){
    const [blogList , setBlogsList ]= useState(null)
        useEffect(()=>{
        getBlogs()
        .then(res=>setBlogsList(res.data))
   },[])
   return(
       <>
            <div className="cards"  >
             {
                 blogList ? blogList.map(blog =>{
                     return(
                                <article className="blogcard" key={blog.id}>
                             <div className="blogcard__img">
                             </div>
                                <div className="blogcard__content">
                                    <h1 className="blogcard__heading">{blog.title}</h1>
                                <div className="blogcard__body">
                                        <p>{blog.body}</p>
                                </div>
                                    <Link to={`./Blogs/${blog.id}`}>
                                        <button className="blogcard__btn">Read more about this article</button>
                                    </Link>
                             </div>
                </article>
                     )
                    }):null
                }
                </div>
          
        </>
    )
}
export default BlogList