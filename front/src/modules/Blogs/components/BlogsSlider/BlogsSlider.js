import React ,{useState ,useEffect ,useRef} from "react"
import axios from "axios"
import "./BlogsSlider.css"
function BlogsSlider(){
    const [Blogs , setBlogs]= useState(null)
    const [heightCards , setHeightCards] = useState(115)
    const cards =useRef()
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>setBlogs(res.data))
   },[])
   const handlingSliderdown =()=>{
       cards.current.style.height = `${heightCards}vh`
       setHeightCards(heightCards + 40)
   }
  
   return(
       <>
            <div className="blog-container" ref={cards}>
           {Blogs ? Blogs.map(blog=>{return (
             <div className="cards" key={blog.id} >
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
            <div className="container-btn">
            <button onClick={handlingSliderdown} className="container-btn__down">down</button>
            </div>
          
        </>
    )
}
export default BlogsSlider