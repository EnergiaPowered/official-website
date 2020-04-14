import React from "react"
import HeaderForBlogs from './components/Header/HeaderForBlogs';
import Layout from './../../shared/Layout/index';
import bg_blogs from "assets/Blogs-header.png";
import BlogsSlider from './components/BlogsSlider/BlogsSlider';
function BlogsPage(){
    let style = {
        backgroundImage: `url(${bg_blogs})`
      };
    return(
        <div className="page-component" style={style}>
           <Layout >
            <HeaderForBlogs />
            <BlogsSlider />
            </Layout>
        </div>
    )
}
export default BlogsPage