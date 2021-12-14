import React from 'react';
import Post from './Post';

function Posts({ posts }) {
  return posts.map((post) => {
    return <Post post={post} id={post} />;
  });
}

export default Posts;
