import React from 'react'

const showPost = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Title here { post.title }
        </h5>
      </div>
    </div>
  )
}

export default showPost;
