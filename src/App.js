// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/navbar'
// import Posts from './pages/posts'
// function App() {
//   return (
//     <div className="App">
//       {/* <Router> */}
//         <Navbar />
//         <Posts />
//       {/* </Router> */}
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";
import Navbar from "./components/navbar";
import { LikesProvider } from "./actions/LikesContext";

function App() {
  return (
    <LikesProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<BlogList />} />
            <Route path="/add" element={<AddPost />} />

            <Route path="/post/:id" element={<PostDetail />} />

            <Route path="/post/edit/:id" element={<EditPost />} />
          </Routes>
        </div>
      </Router>
    </LikesProvider>
  );
}

export default App;
