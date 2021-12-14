import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

function Posts({ syncPosts }) {
  if (!syncPosts.length) {
    return <p>No Posts Yet</p>;
  }

  return syncPosts.map((post) => {
    return <Post postTitle={post.title} key={post.id} />;
  });
}

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
