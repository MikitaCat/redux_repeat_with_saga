import React from 'react';

function Post({ postTitle }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title {postTitle}</h5>
      </div>
    </div>
  );
}

export default Post;
