import React from 'react';
import Post from './Post';

function Posts({ posts }) {
  if (!posts.length) {
    return <p>No Posts Yet</p>;
  }

  return posts.map((post) => {
    return <Post postTitle={post.title} key={post.id} />;
  });
}

export default Posts;
