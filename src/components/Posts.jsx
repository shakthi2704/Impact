import React from "react";
import images from "../components/images";
import { posts } from "../constants/data";
const Posts = () => {
  return (
    <section id="recent-posts" class="recent-posts sections-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Recent Blog Posts</h2>
          <p>
            Consequatur libero assumenda est voluptatem est quidem illum et
            officia imilique qui vel architecto accusamus fugit aut qui
            distinctio
          </p>
        </div>
        <div className="row gy-4">
          {posts.map((post, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img src={post.imgSrc} alt="image" className="img-fluid" />
                </div>
                <p className="post-category">{post.category}</p>
                <h2 className="title">
                  <a href="blog-details.html">{post.title}</a>
                </h2>
                <div className="d-flex align-items-center">
                  <img
                    src={post.authorImgSrc}
                    alt="image"
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">{post.author}</p>
                    <p className="post-date">
                      <time dateTime={post.date}>{post.date}</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
