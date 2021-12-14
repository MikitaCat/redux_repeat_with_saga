import React from 'react';
import FetchedPosts from './components/FetchedPosts';
import { PostForm } from './components/PostForm';
import Posts from './components/Posts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Posts List:</h2>
          <Posts posts={[1, 2, 3, 4, 5, 6]} />
        </div>
        <div className="col">
          <h2>Async Posts List:</h2>
          <FetchedPosts posts={[1, 2, 3, 4, 5, 6]} />
        </div>
      </div>
    </div>
  );
}

export default App;
