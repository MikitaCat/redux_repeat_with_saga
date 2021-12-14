import React from 'react';
import Post from './Post';

function FetchedPosts({ posts }) {
  if (!posts.length) {
    return <button className="btn btn-primary">Download posts</button>;
  }

  return posts.map((post) => {
    return <Post post={post} key={post} />;
  });
}

export default FetchedPosts;
