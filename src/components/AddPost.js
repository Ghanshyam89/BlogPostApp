// src/components/AddPost.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/blogActions";
import { Link } from "react-router-dom";

const AddPost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState(""); // Add category state

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content || !category) {
            alert("Any of the field can't be empty!")
            return;
        }
        const newPost = {
            title,
            content,
            category,
        };
        dispatch(addPost(newPost));
        setTitle("");
        setContent("");
        setCategory("");
    };

    const handleReset = () => {
        setTitle("");
        setContent("");
        setCategory("");
    }


    return (
        <div>
            <div className="mt-3">
                <Link to="/BlogPostApp" className="mx-3 text-dark card-link">&laquo; Back</Link>
            </div>

            <div className="container">
                <h2 className="text-center">Add Post</h2>
                <form onSubmit={handleSubmit} className="border mt-4 shadow-lg p-4 mb-4 bg-transparent">

                    <div className="row my-3">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" value={title}
                                onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row my-3">
                        <label htmlFor="category" className="col-sm-2 col-form-label ">Category:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="category" value={category}
                                onChange={(e) => setCategory(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row my-3">
                        <label htmlFor="content" className="col-sm-2 col-form-label ">Content:</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" placeholder="Write the blog content here ..." id="content" value={content}
                                onChange={(e) => setContent(e.target.value)} required></textarea>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-light mx-2">Add Post</button>
                        <button type="reset" className="btn btn-light mx-2" onClick={handleReset}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
