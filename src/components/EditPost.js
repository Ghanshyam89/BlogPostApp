import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom"; // Import useParams
import { editPost } from "../actions/blogActions";

const EditPost = () => {
    const { id } = useParams(); // Extract the 'id' parameter from the URL
    const postId = parseInt(id); // Parse it to an integer
    const post = useSelector((state) =>
        state.posts.find((p) => p.id === postId)
    );
    const dispatch = useDispatch();
    const [editedPost, setEditedPost] = useState({ title: "", content: "", category: "" });

    useEffect(() => {
        if (post) {
            setEditedPost({ title: post.title, content: post.content, category: post.category });
        }
    }, [post]);

    const handleEdit = () => {
        if (!editedPost.title || !editedPost.content || !editedPost.category) {
            // You can add validation here
            return;
        }

        dispatch(editPost({
            id: postId,
            title: editedPost.title,
            content: editedPost.content,
            category: editedPost.category,
        })
        );
        alert("Blog Edited Successfully!")
    };

    return (
        <div>
            <div className="mt-3">
                <Link to={`/post/${post.id}`} className="mx-3 text-dark card-link">&laquo; Back</Link>
            </div>
            
            <h2 className="text-center">Edit Post</h2>
            
            <div className="container border mt-4 shadow-lg p-4 mb-4 bg-transparent">

                <div className="row my-3">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title"
                            value={editedPost.title}
                            onChange={(e) =>
                                setEditedPost({ ...editedPost, title: e.target.value })
                            } required />
                    </div>
                </div>
                <div className="row my-3">
                    <label htmlFor="category" className="col-sm-2 col-form-label ">Category:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="category"
                            value={editedPost.category}
                            onChange={(e) =>
                                setEditedPost({ ...editedPost, category: e.target.value })
                            } required />
                    </div>
                </div>
                <div className="row my-3">
                    <label htmlFor="content" className="col-sm-2 col-form-label ">Content:</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" placeholder="Write the blog content here ..." id="content"
                            value={editedPost.content}
                            onChange={(e) =>
                                setEditedPost({ ...editedPost, content: e.target.value })
                            } required></textarea>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button onClick={handleEdit} className="btn btn-light mx-2">Save Changes</button>
                </div>
            </div>

        </div>
    );
};

export default EditPost;
