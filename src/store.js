import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './reducers/blogReducer';

// Create the Redux store using configureStore
const store = configureStore({
    reducer: {
        blog: blogReducer, // Replace 'blog' with your preferred slice name
    },
});

export default store;
