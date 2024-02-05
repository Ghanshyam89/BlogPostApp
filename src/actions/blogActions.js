// src/actions/blogActions.js
export const addPost = (post) => ({
    type: "ADD_POST",
    payload: post,
});

export const deletePost = (postId) => ({
    type: "DELETE_POST",
    payload: postId,
});

export const likePost = (postId) => ({
    type: "LIKE_POST",
    payload: postId,
});

export const editPost = (editedPost) => ({
    type: "EDIT_POST",
    payload: editedPost,
});