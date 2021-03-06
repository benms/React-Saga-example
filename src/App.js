
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async posts</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
