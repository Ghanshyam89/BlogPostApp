import React, { createContext, useContext, useState } from 'react';

const LikesContext = createContext();

export function useLikes() {
    return useContext(LikesContext);
}

export function LikesProvider({ children }) {
    const [likes, setLikes] = useState([]);

    const toggleLike = (postId) => {
        // Check if the postId is already in the likes array
        if (likes.includes(postId)) {
            setLikes(likes.filter((id) => id !== postId)); // Remove the postId if it exists
        } else {
            setLikes([...likes, postId]); // Add the postId if it doesn't exist
        }
    };

    return (
        <LikesContext.Provider value={{ likes, toggleLike }}>
            {children}
        </LikesContext.Provider>
    );
}
