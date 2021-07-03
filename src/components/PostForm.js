import React from 'react';
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    const { title } = this.state
    if (!title.trim()) {
      return
    }
    const newPost = { title, id: Date.now().toString() }
    this.props.createPost(newPost)

    console.log({ newPost })

    this.setState({ title: '' })
  }

  changeInputHandler = (e) => {
    // e.persist()
    this.setState(prev => ({
      ...prev,
      ...{ [ e.target.name ]: e.target.value }
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Post header</label>
          <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.changeInputHandler}
            />
        </div>
        <button className="btn btn-success" type="submit">
          Create post
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  createPost
};

export default connect(null, mapDispatchToProps)(PostForm)