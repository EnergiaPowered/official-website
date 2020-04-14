import React ,{useState ,useEffect} from "react"
import axios from "axios"
import "./BlogsSlider.css"
function BlogsSlider(){
    const [Blogs , setBlogs]= useState(null)
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>setBlogs(res.data))
   },[])
   return(
       <>
           {Blogs ? Blogs.map(blog=>{return (
             <div className="cards" id={blog.id}>
             <article className="blogcard">
                  <div className="blogcard__img">
  
                  </div>
                  <div className="blogcard__content">
                      <h1 className="blogcard__heading">{blog.title}</h1>
                      <div className="blogcard__body"><p>{blog.body}</p></div>
                       <button className="blogcard__btn">Read more</button>
                  </div>
             </article>
             </div>)
            }):null}
          
        </>
    )
}
export default BlogsSlider