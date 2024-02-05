// src/reducers/blogReducer.js
const initialState = {
    posts: JSON.parse(localStorage.getItem("posts")) || [],
};

console.log(initialState.posts)
const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {
                id: Date.now(),
                title: action.payload.title,
                content: action.payload.content,
                category: action.payload.category,
            };
            const newState = { ...state, posts: [...state.posts, newPost] };

            // Update localStorage when adding a new post
            localStorage.setItem("posts", JSON.stringify(newState.posts));

            return newState;

        case "DELETE_POST":
            const userConfirmed = window.confirm("Are you sure you want to delete this post?");

            if (userConfirmed) {
                const filteredPosts = state.posts.filter((post) => post.id !== action.payload);

                // Update localStorage when deleting a post
                localStorage.setItem("posts", JSON.stringify(filteredPosts));

                alert("You deleted the blog successfully!")
                window.location.href = '/';
                return {
                    ...state,
                    posts: filteredPosts,
                };
            } else {
                return state;
            }

        case "EDIT_POST":
            const editedPostIndex = state.posts.findIndex(
                (post) => post.id === action.payload.id
            );

            if (editedPostIndex !== -1) {
                const updatedPosts = [...state.posts];
                updatedPosts[editedPostIndex] = action.payload;

                // Update localStorage when editing a post
                localStorage.setItem("posts", JSON.stringify(updatedPosts));

                return {
                    ...state,
                    posts: updatedPosts,
                };
            }
            break;

        case "LIKE_POST":
            const { postId } = action.payload;
            console.log("Inside Like Functionality")

            const likedPosts = state.posts.map((post) => {
                if (post.id === postId) {
                    console.log("in Like", post.likes)
                    return {
                        ...post,
                        likes: post.likes + 1,
                    };
                }
                return post;
            });

            // Update localStorage when liking a post
            localStorage.setItem("posts", JSON.stringify(likedPosts));

            return {
                ...state,
                posts: likedPosts,
            };

        default:
            return state;
    }
};

export default blogReducer;
