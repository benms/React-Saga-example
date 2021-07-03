import React from 'react'
import Post from './Post'

const showFetchedPosts = ({ posts }) => {
  if (!posts.length) {
    return (<button className="btn btn-primary">Load</button>)
  }

  return posts.map(post => <Post post={post} key={post} />)
}

export default showFetchedPosts
