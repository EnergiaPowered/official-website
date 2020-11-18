import React, { useState } from "react"
import HeaderForBlogs from './components/Header/HeaderForBlogs';
import Layout from './../../shared/Layout/index';
import bg_blogs from "assets/Blogs-header.png";
import BlogList from './components/BlogList/BlogList';
function BlogsPage() {
    const [Blur, setBlur] = useState(0);
    let style = {
        backgroundImage: `url(${bg_blogs})`,
        blur: Blur + 'px'
    };
    return (
        <div className="page-component" style={style}>
            <Layout>
                <HeaderForBlogs />
                <BlogList setBlur={setBlur} />
            </Layout>
        </div>
    )
}
export default BlogsPage