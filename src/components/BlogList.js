// src/components/BlogList.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogList = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    return (
        <div className="container my-4">
            <h2 className="text-center">BLOGS</h2>

            {posts.length === 0 ? (
                <div className="card p-3">
                    <p className="text-center">Currently, there are no blogs to display. You can contribute by adding one. <a href="/add">Click here</a> to get started.</p>
                </div>
            ) : (
                posts && posts.map((post) => (
                    <div key={post.id}>
                        <Link to={`/post/${post.id}`} className="card text-left text-dark p-3 my-3 card-link">
                            <h4>{post.title}</h4>
                            <p className="text-justify">{post.content}</p>
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogList;
