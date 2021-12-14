import React, { useState } from 'react';
import FetchedPosts from './components/FetchedPosts';
import { PostForm } from './components/PostForm';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([{ title: 'post one', id: '83248923y4879' }]);

  const createPosts = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm addPost={createPosts} />
        </div>
        <hr style={{ marginTop: '15px' }} />
      </div>
      <div className="row">
        <div className="col">
          <h2>Posts List:</h2>
          <Posts posts={posts} />
        </div>
        <div className="col">
          <h2>Async Posts List:</h2>
          <FetchedPosts posts={[1, 2, 3, 4, 5]} />
        </div>
      </div>
    </div>
  );
}

export default App;
