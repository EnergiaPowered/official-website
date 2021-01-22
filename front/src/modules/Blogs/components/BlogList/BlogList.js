import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"
import { getBlogs } from "./../../sevices/blogs.services"
import blogBG from "../../../../assets/Group 3@2x.png";
import "./BlogList.css"
function BlogList() {
    const [blogList, setBlogsList] = useState(null)
    useEffect(() => {
        getBlogs()
            .then(res => setBlogsList(res.data))
    }, [])
    return (
        <>
            <div className="cards row">
                {
                    blogList ? blogList.map(blog => {
                        return (
                            <article className="blogcard col-12 col-md-6 col-lg-4" key={blog._id}>
                                <img src={blogBG} alt="Blog Container" />
                                <div className="blogcard__content">
                                    <h3 className="blogcard__heading">{blog.title}</h3>
                                    <div className="blogcard__body">
                                        <p>{blog.body}</p>
                                    </div>
                                    {/* <Link to={`./Blogs/${blog._id}`}>
                                        <button className="blogcard__btn">Read more about this article</button>
                                    </Link> */}
                                </div>
                            </article>
                        )
                    }) : null
                }
            </div>
        </>
    )
}
export default BlogList