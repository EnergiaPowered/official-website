import React, { useState, useEffect } from "react"
import { useRouteMatch } from "react-router-dom"
import { getBlogs } from './../../sevices/blogs.services';
import HeaderForBlogs from "../Header/HeaderForBlogs";
import Layout from "../../../../shared/Layout";
import bg_blogs from "assets/Blogs-header.png";

function SingleBlog() {
    const [singleBlogCard, setSingleBlog] = useState({})
    const match = useRouteMatch()
    useEffect(() => {
        getBlogs().then(res => {
            const blog = res.data.find(blog => blog._id === match.params.id)
            if (blog) {
                setSingleBlog({ blog })
            }
        })
    })
    let style = {
        backgroundImage: `url(${bg_blogs})`
    };
    return (
        <>
            {singleBlogCard.blog ?
                <Layout>
                    <div style={style} className="page-component">
                        <HeaderForBlogs />
                        <h1>{singleBlogCard.blog.title}</h1>
                        <p>{singleBlogCard.blog.body}</p>
                    </div>
                </Layout>
                : null}
        </>
    )
}
export default SingleBlog