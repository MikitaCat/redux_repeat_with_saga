import React from 'react';
import Post from './Post';

function Posts({ posts }) {
  if (!posts.length) {
    return <p>No Posts Yet</p>;
  }

  return posts.map((post) => {
    return <Post post={post} id={post} />;
  });
}

export default Posts;
