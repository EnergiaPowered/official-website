import React, { useState, useEffect } from "react";
import { getBlogs } from "./../../sevices/blogs.services";
import blogBG from "../../../../assets/Group 67@2x.png";
import "./BlogList.css";
import "./SingleBlog.css";

function BlogList() {
  const [blogList, setBlogsList] = useState(null);
  const [clickedBlog, setClickedBlog] = useState(null);
  const [isBlogOpened, setIsBlogOpened] = useState(false);
  useEffect(() => {
    getBlogs().then((res) => setBlogsList(res.data));
  }, []);

  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") setIsBlogOpened(false);
  });

  return (
    <>
      <div className="cards row">
        {blogList
          ? blogList.map((blog) => {
              return (
                <article className="blogcard col-6 col-lg-4" key={blog._id}>
                  <img src={blogBG} alt="Blog Container" />
                  <div className="blogcard__content">
                    <h3 className="blogcard__heading">{blog.title}</h3>
                    <div className="blogcard__body">
                      <p
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Click to see full blog"
                        onClick={() => {
                          setIsBlogOpened(true);
                          setClickedBlog(blog);
                        }}
                      >
                        {blog.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })
          : null}
      </div>
      {isBlogOpened ? (
        <div className="singleBlog__container">
          <div
            className="singleBlog__background"
            onClick={() => setIsBlogOpened(false)}
          ></div>
          <article className="singleBlogcard">
            <img src={blogBG} alt="Single Blog Container" />
            <div className="singleBlogcard__content">
              <i
                class="fas fa-times-circle"
                onClick={() => setIsBlogOpened(false)}
              ></i>
              <h3 className="singleBlogcard__heading">{clickedBlog.title}</h3>
              <div className="singleBlogcard__body">
                <p>{clickedBlog.body}</p>
                <h4>Abdullah Adel</h4>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </>
  );
}
export default BlogList;
