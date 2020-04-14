import React ,{useState ,useEffect ,useRef} from "react"

import axios from "axios"
import "./BlogsSlider.css"
function BlogsSlider(){
    const [Blogs , setBlogs]= useState(null)
    const [height , setHeight] = useState(0)
    const cards =useRef()
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>setBlogs(res.data))
   },[])
   const handlingSlider =()=>{
        cards.current.style.bottom = `${height}vh`
        setHeight(height+40)
        console.log(cards.current.style.bottom)
   }
   return(
       <>
            <div className="blog-container">
           {Blogs ? Blogs.map(blog=>{return (
             <div className="cards" key={blog.id} ref={cards}>
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
            </div>
            <button onClick={handlingSlider}>down</button>
          
        </>
    )
}
export default BlogsSlider