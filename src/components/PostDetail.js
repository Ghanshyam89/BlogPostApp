import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../actions/blogActions";
import { Link, useParams } from "react-router-dom";
import { useLikes } from "../actions/LikesContext";

const PostDetail = () => {
    const { id } = useParams();
    const postId = parseInt(id);

    const post = useSelector((state) =>
        state.posts.find((p) => p.id === postId)
    );

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePost(postId));
    };

    const { likes, toggleLike } = useLikes();

    let isLiked = false;

    if (post) {
        isLiked = likes.includes(postId);
    } else {
        return <div>Post not found</div>;
    }

    const handleLikeClick = () => {
        toggleLike(postId);
    };

    return (
        <div>
            <div className="mt-3">
                <Link to="/" className="mx-3 text-dark card-link">&laquo; Back</Link>
            </div>
            <div className="container card my-3 ">

                <div className="row">
                    <h2 className="col-sm-8 my-2">{post.title}</h2>
                    <Link className="col-sm-1 btn" onClick={handleLikeClick}>
                        {isLiked ? 'Unlike' : 'Like'}
                    </Link>
                    <Link className="col-sm-1 btn" to={`/post/edit/${post.id}`}>Edit</Link>
                    <Link className="col-sm-2 btn" onClick={handleDelete}>Delete</Link>
                </div>
                <p>Category: {post.category}</p>
                <p>{post.content}</p>
            </div>
        </div>
    );
};

export default PostDetail;
